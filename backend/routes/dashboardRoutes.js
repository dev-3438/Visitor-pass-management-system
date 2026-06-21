const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
    getDashboardStats
} = require("../controllers/dashboardController");

router.get(
    "/",
    protect,
    authorizeRoles("Admin"),
    getDashboardStats
);

module.exports = router;