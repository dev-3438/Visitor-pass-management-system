const express = require("express");
const router = express.Router();

const {
    createAppointment,
    getAppointments,
    getAppointmentById,
    updateAppointment,
    deleteAppointment
} = require("../controllers/appointmentController");

const { protect } = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// Employee creates appointment
router.post(
    "/",
    protect,
    authorizeRoles("Employee"),
    createAppointment
);

// Admin and Security can view all appointments
router.get(
    "/",
    protect,
    authorizeRoles("Admin", "Security"),
    getAppointments
);

// Any logged-in user can view one appointment
router.get(
    "/:id",
    protect,
    getAppointmentById
);

// Admin approves/rejects appointment
router.put(
    "/:id",
    protect,
    authorizeRoles("Admin"),
    updateAppointment
);

// Admin deletes appointment
router.delete(
    "/:id",
    protect,
    authorizeRoles("Admin"),
    deleteAppointment
);

module.exports = router;