let mongoose = require("mongoose")
let express = require("express")
let bodyParser = require("body-parser")
let cors = require("cors")
const rt = require("./Routes/user_rt")
mongoose.connect("mongodb://127.0.0.1:27017/v24db").then(()=>{
    console.log("connection established successfully")
})
let app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({"extended":true}))
app.use("/pic",express.static("./photos"))
// app.get("/get",async(req,res)=>{
//     res.send("Hello")
// })
app.use("/",rt)
app.listen(5000,()=>{
    console.log("App running on http://localhost:5000");
    
})