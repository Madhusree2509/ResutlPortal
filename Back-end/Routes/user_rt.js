let express = require("express")
const { add_details, upd_details, get_details, upload, gethal, all, del } = require("../Controllers/user_con")
const { adminreg, login, islogin } = require("../Controllers/adminCon")
let rt = express.Router()

rt.post("/add",upload.single("photo"),add_details)
rt.put("/upd",islogin,upd_details)
rt.get("/get/:hn",get_details)
rt.get("/gethal/:opt/:val",gethal)
rt.get("/all",islogin,all)
rt.delete("/del/:hno",islogin,del)
rt.post("/reg",adminreg)
rt.post("/login",login)
module.exports = rt