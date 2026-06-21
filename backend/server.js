const express = require("express");
const dashboardRoutes = require("./routes/dashboardRoutes");

const dotenv = require("dotenv");
const cors = require("cors");
const visitorRoutes=require("./routes/visitorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const passRoutes = require("./routes/passRoutes");
const checkLogRoutes = require("./routes/checkLogRoutes");

const reportRoutes = require("./routes/reportRoutes");




const authRoutes = require("./routes/authRoutes")

const connectDB = require("./config/db")
dotenv.config()
connectDB()
const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/auth",authRoutes)
app.use("/api/visitors",visitorRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/checklogs",checkLogRoutes);
app.use("/api/passes",passRoutes);
app.use("/api/reports", reportRoutes);


app.use("/api/dashboard", dashboardRoutes);
app.get("/",(req,res)=>{
  res.json({
    message:"vistor pass management system running"
  })
})
const PORT= process.env.PORT||4000
app.listen(PORT,()=>{
  console.log(`web app is running on port ${PORT}`)
})