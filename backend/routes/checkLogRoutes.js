const express = require("express");

const router = express.Router();

const {

checkInVisitor,
checkOutVisitor,
getLogs

}=require("../controllers/checkLogController");

const {protect}=require("../middleware/authMiddleware");
const authorizeRoles=require("../middleware/roleMiddleware");

router.post(
"/checkin",
protect,
authorizeRoles("Security"),
checkInVisitor
);

router.put(
"/checkout/:id",
protect,
authorizeRoles("Security"),
checkOutVisitor
);

router.get(
"/",
protect,
authorizeRoles("Admin","Security"),
getLogs
);

module.exports=router;