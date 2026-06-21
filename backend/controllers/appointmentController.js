const Appointment = require("../models/Appointment");
const createAppointment = async (req, res) => {

    try {

        const appointment = await Appointment.create(req.body);

        res.status(201).json(appointment);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
const getAppointments = async (req, res) => {

    try {

        const appointments = await Appointment.find()
            .populate("visitorId")
            .populate("hostId", "-password");

        res.json(appointments);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
const getAppointmentById = async (req, res) => {

    try {

        const appointment = await Appointment.findById(req.params.id)
            .populate("visitorId")
            .populate("hostId", "-password");

        if (!appointment) {

            return res.status(404).json({
                message: "Appointment not found"
            });

        }

        res.json(appointment);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
const updateAppointment = async (req, res) => {

    try {

        const appointment = await Appointment.findById(req.params.id);

        if (!appointment) {
            return res.status(404).json({
                message: "Appointment not found"
            });
        }

        appointment.status = req.body.status || appointment.status;

        await appointment.save();

        res.json(appointment);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
const deleteAppointment = async (req, res) => {

    try {

        await Appointment.findByIdAndDelete(req.params.id);

        res.json({
            message: "Appointment deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
module.exports = {
    createAppointment,
    getAppointments,
    getAppointmentById,
    updateAppointment,
    deleteAppointment
};