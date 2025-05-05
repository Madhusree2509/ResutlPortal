const User_model = require("../models/user_model")
let multer = require("multer")

let add_details = async(req,res)=>{
    try{
        let rn = Math.floor(Math.random()*99999+10000)
        let data = new User_model({...req.body,"_id":rn,"photo":req.file.filename})
        await data.save()
        res.json({"msg":"User Created Successfully"})
    }
    catch(err){
        console.log(err)
        res.json({"err":err.message})
    }
}

let upd_details = async(req,res) =>{
    try{
        await User_model.findByIdAndUpdate({"_id":req.body._id},req.body)
        res.json({"msg":"Data Updation Done"})
    }
    catch(err){
        console.log(err)
        res.json({"err":"Error in Updating the details"})
    }
}

let get_details = async(req,res) =>{
    try{
        let data = await User_model.findById({"_id":req.params.hn})
        res.json(data)
    }
    catch(err){
        console.log(err.message)
        res.json({"err":"Error in Getting the details"})
    }
}

let gethal = async(req,res) =>{
    try{
        let data = await User_model.find({[req.params.opt]:req.params.val})
        res.json(data)
    }
    catch(err){
        res.json({"err":"Error in Getting the details"})
    }
}

let all = async(req,res) =>{
    try{
        let data = await User_model.find()
        res.json(data)
    }
    catch(err){
        res.json({"err":"Error in Getting the details"})
    }
}

let del = async(req,res)=>{
    try{
        await User_model.findByIdAndDelete({"_id":req.params.hno})
        res.json({"msg":"Deletion Done"})
    }
    catch(err){
        res.json({"err":"Error in Deletion"})
    }
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './photos')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+"."+file.mimetype.split("/")[1])
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports = {add_details,upd_details,upload,get_details,gethal,all,del}