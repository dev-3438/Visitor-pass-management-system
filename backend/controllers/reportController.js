const Visitor = require("../models/Visitor");
const Appointment = require("../models/Appointment");
const CheckLog = require("../models/CheckLog");

const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const path = require("path");
const exportVisitors = async (req, res) => {

    try {

        const visitors = await Visitor.find();

        const csvWriter = createCsvWriter({

            path: path.join(
                __dirname,
                "../exports/visitors.csv"
            ),

            header: [

                { id: "name", title: "NAME" },
                { id: "email", title: "EMAIL" },
                { id: "phone", title: "PHONE" },
                { id: "company", title: "COMPANY" },
                { id: "purpose", title: "PURPOSE" }

            ]

        });

        await csvWriter.writeRecords(visitors);

        return res.json({
            message: "Visitors exported successfully"
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};
const exportAppointments = async (req, res) => {

    try {

        const appointments = await Appointment.find();

        const csvWriter = createCsvWriter({

            path: path.join(
                __dirname,
                "../exports/appointments.csv"
            ),

            header: [

                { id: "purpose", title: "PURPOSE" },
                { id: "status", title: "STATUS" },
                { id: "visitDate", title: "VISIT_DATE" }

            ]

        });

        await csvWriter.writeRecords(appointments);

        return res.json({
            message: "Appointments exported successfully"
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};
 const exportLogs = async (req, res) => {

    try {

        const logs = await CheckLog.find();

        const csvWriter = createCsvWriter({

            path: path.join(
                __dirname,
                "../exports/checklogs.csv"
            ),

            header: [

                { id: "status", title: "STATUS" },
                { id: "checkInTime", title: "CHECK_IN" },
                { id: "checkOutTime", title: "CHECK_OUT" }

            ]

        });

        await csvWriter.writeRecords(logs);

        return res.json({
            message: "Logs exported successfully"
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};
module.exports = {
    exportVisitors,
    exportAppointments,
    exportLogs
};