const mongoose = require("mongoose");

const passSchema = new mongoose.Schema(
{
    visitorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Visitor",
        required:true
    },

    appointmentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Appointment",
        required:true
    },

    qrCode:{
        type:String
    },

    pdfBadge:{
        type:String
    },

    validTill:{
        type:Date,
        required:true
    },

    status:{
        type:String,
        enum:["Active","Expired","Used"],
        default:"Active"
    }

},
{
    timestamps:true
});

module.exports = mongoose.model("Pass",passSchema);