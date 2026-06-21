const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true
    },

    email:{
        type:String
    },

    phone:{
        type:String,
        required:true
    },

    company:{
        type:String
    },

    purpose:{
        type:String,
        required:true
    },

    photo:{
        type:String
    }

},
{
    timestamps:true
});

module.exports = mongoose.model("Visitor",visitorSchema);