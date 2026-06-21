const express = require("express");

const router = express.Router();

const {
    exportVisitors,
    exportAppointments,
    exportLogs
} = require("../controllers/reportController");

const { protect } = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

router.get(
    "/visitors",
    protect,
    authorizeRoles("Admin"),
    exportVisitors
);

router.get(
    "/appointments",
    protect,
    authorizeRoles("Admin"),
    exportAppointments
);

router.get(
    "/checklogs",
    protect,
    authorizeRoles("Admin"),
    exportLogs
);

module.exports = router;