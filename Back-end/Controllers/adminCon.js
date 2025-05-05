let admin_model = require("../models/admin")
let bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken")

let adminreg = async(req,res)=>{
    try{
        let pass = await bcrypt.hash(req.body.password,8)
        let data = new admin_model({...req.body,"password":pass})
        await data.save()
        res.json({"msg":"Admin Registration Successful"})
    }
    catch(err){
        console.log(err.message)
        res.json({"err":"Error in Admin Registration"})
    }
}

let login = async(req,res) =>{
    try{
        let data = await admin_model.findById(req.body._id)
        if(data){
            if(await bcrypt.compare(req.body.password,data.password)){
                res.json({"token":jwt.sign(req.body._id,"abcd"),"name":data.name})
            }else{
                res.json({"msg":"Invalid Password"})
            }
        }else{
            res.json({"msg":"Invalid UserName"})
        }
    }
    catch(err){
        console.log(err.message)
        res.json({"err":"Error in Login"})
    }
}

let islogin = async(req,res,next)=>{
    try{
        jwt.verify(req.headers.authorization,"abcd")
        next()
    }
    catch(err){
        res.json({"err":"Error in middle ware"})
    }
}

module.exports = {adminreg,login,islogin}