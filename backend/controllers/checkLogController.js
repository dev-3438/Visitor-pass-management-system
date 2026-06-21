const CheckLog = require("../models/CheckLog");
const Pass = require("../models/Pass");
const checkInVisitor = async(req,res)=>{

try{

const {passId}=req.body;

const pass = await Pass.findById(passId);

if(!pass){

return res.status(404).json({
message:"Pass not found"
});

}

if(pass.status!=="Active"){

return res.status(400).json({
message:"Pass already used or expired"
});

}

const log = await CheckLog.create({

passId,
checkInTime:new Date(),
checkedBy:req.user._id

});

return res.status(201).json(log);

}
catch(error){

return res.status(500).json({
message:error.message
});

}

};
const checkOutVisitor = async(req,res)=>{

try{

const log = await CheckLog.findById(req.params.id);

if(!log){

return res.status(404).json({
message:"Log not found"
});

}

log.checkOutTime = new Date();

log.status = "Checked Out";

await log.save();

await Pass.findByIdAndUpdate(

log.passId,
{
status:"Used"
}

);

return res.json(log);

}
catch(error){

return res.status(500).json({
message:error.message
});

}

};
const getLogs = async(req,res)=>{

try{

const logs = await CheckLog.find()
.populate("passId")
.populate("checkedBy","-password");

return res.json(logs);

}
catch(error){

return res.status(500).json({
message:error.message
});

}

};
module.exports = {

checkInVisitor,
checkOutVisitor,
getLogs

};