const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", protect, (req, res) => {
    res.json(req.user);
});

router.get(
    "/admin",
    protect,
    authorizeRoles("Admin"),
    (req, res) => {
        res.json({
            message: "Welcome Admin"
        });
    }
);

router.get(
    "/security",
    protect,
    authorizeRoles("Security"),
    (req, res) => {
        res.json({
            message: "Welcome Security"
        });
    }
);

router.get(
    "/employee",
    protect,
    authorizeRoles("Employee"),
    (req, res) => {
        res.json({
            message: "Welcome Employee"
        });
    }
);

module.exports = router;