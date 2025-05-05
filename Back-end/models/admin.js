let mongoose = require("mongoose")
let adminSchema = new mongoose.Schema({
    "_id":String,
    "name":String,
    "password":String
})
let admin_model = mongoose.model("admin",adminSchema)

module.exports = admin_model