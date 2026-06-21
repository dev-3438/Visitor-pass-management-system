const Visitor = require("../models/Visitor");
const createVisitor = async(req,res)=>{

try{

const visitor = await Visitor.create(req.body);

res.status(201).json(visitor);

}
catch(error){

res.status(500).json({
message:error.message
})

}

}
const getVisitors = async (req, res) => {

    try {

        const keyword = req.query.keyword
            ? {
                name: {
                    $regex: req.query.keyword,
                    $options: "i"
                }
            }
            : {};

        const company = req.query.company
            ? {
                company: req.query.company
            }
            : {};

        const visitors = await Visitor.find({
            ...keyword,
            ...company
        });

        res.json(visitors);

    }
    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

}
const getVisitorById = async(req,res)=>{

try{

const visitor = await Visitor.findById(req.params.id);

if(!visitor){

return res.status(404).json({
message:"Visitor not found"
})

}

res.json(visitor);

}
catch(error){

res.status(500).json({
message:error.message
})

}

}
const updateVisitor = async(req,res)=>{

try{

const visitor = await Visitor.findByIdAndUpdate(

req.params.id,
req.body,
{
new:true
}

);

res.json(visitor);

}
catch(error){

res.status(500).json({
message:error.message
})

}

}
const deleteVisitor = async(req,res)=>{

try{

await Visitor.findByIdAndDelete(req.params.id);

res.json({
message:"Visitor deleted"
})

}
catch(error){

res.status(500).json({
message:error.message
})

}

}
module.exports={

createVisitor,
getVisitors,
getVisitorById,
updateVisitor,
deleteVisitor

}