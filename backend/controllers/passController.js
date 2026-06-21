const Pass = require("../models/Pass");
const Appointment = require("../models/Appointment");
const QRCode = require("qrcode");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const createPass = async (req, res) => {
    try {

        const { appointmentId, validTill } = req.body;

        const appointment = await Appointment.findById(appointmentId)
            .populate("visitorId")
            .populate("hostId");

        if (!appointment) {
            return res.status(404).json({
                message: "Appointment not found"
            });
        }

        if (appointment.status !== "Approved") {
            return res.status(400).json({
                message: "Appointment not approved"
            });
        }

        // Generate QR data
        const qrData = JSON.stringify({
            appointmentId: appointment._id,
            visitorId: appointment.visitorId._id
        });

        const qrCode = await QRCode.toDataURL(qrData);

        // Create pass
        const pass = await Pass.create({
            visitorId: appointment.visitorId._id,
            appointmentId,
            qrCode,
            validTill
        });

        // ===== PDF Generation =====

        const pdfDir = path.join(__dirname, "../pdfs");

        if (!fs.existsSync(pdfDir)) {
            fs.mkdirSync(pdfDir);
        }

        const pdfPath = path.join(
            pdfDir,
            `${pass._id}.pdf`
        );

        const doc = new PDFDocument();

        doc.pipe(fs.createWriteStream(pdfPath));

        doc.fontSize(20).text("VISITOR PASS", {
            align: "center"
        });

        doc.moveDown();

        doc.fontSize(14);

        doc.text(`Pass ID: ${pass._id}`);
        doc.text(`Visitor Name: ${appointment.visitorId.name}`);
        doc.text(`Email: ${appointment.visitorId.email}`);
        doc.text(`Company: ${appointment.visitorId.company}`);
        doc.text(`Purpose: ${appointment.purpose}`);
        doc.text(`Host Name: ${appointment.hostId.name}`);
        doc.text(`Status: ${pass.status}`);
        doc.text(
            `Valid Till: ${new Date(validTill).toDateString()}`
        );

        doc.end();

        // Save PDF path
        pass.pdfBadge = pdfPath;

        await pass.save();

        return res.status(201).json(pass);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};

const getPasses = async (req, res) => {
    try {

        const passes = await Pass.find()
            .populate("visitorId")
            .populate("appointmentId");

        return res.json(passes);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createPass,
    getPasses
};