const mongoose = require("mongoose");

const checkLogSchema = new mongoose.Schema(
{
    passId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Pass",
        required:true
    },

    checkInTime:{
        type:Date
    },

    checkOutTime:{
        type:Date
    },

    checkedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    status:{
        type:String,
        enum:["Checked In","Checked Out"],
        default:"Checked In"
    }
},
{
    timestamps:true
});

module.exports = mongoose.model("CheckLog",checkLogSchema);