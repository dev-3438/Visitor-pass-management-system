const Visitor = require("../models/Visitor");
const Pass = require("../models/Pass");
const CheckLog = require("../models/CheckLog");
const Appointment = require("../models/Appointment");
const getDashboardStats = async (req, res) => {

    try {

        const totalVisitors = await Visitor.countDocuments();

        const totalAppointments = await Appointment.countDocuments();

        const activePasses = await Pass.countDocuments({
            status: "Active"
        });

        const usedPasses = await Pass.countDocuments({
            status: "Used"
        });

        const checkedInVisitors = await CheckLog.countDocuments({
            status: "Checked In"
        });

        res.json({

            totalVisitors,
            totalAppointments,
            activePasses,
            usedPasses,
            checkedInVisitors

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    getDashboardStats
};