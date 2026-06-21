const express = require("express");

const router = express.Router();

const {

createPass,
getPasses

}=require("../controllers/passController");

const {protect}=require("../middleware/authMiddleware");

router.post("/",protect,createPass);

router.get("/",protect,getPasses);

module.exports = router;