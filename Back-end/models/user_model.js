let mongoose = require("mongoose")
let user_schema = new mongoose.Schema({
    "_id":String,
    "name":String,
    "dob":Date,
    "gen":String,
    "email":String,
    "phone":String,
    "photo":String,
    "tel":Number,
    "hindi":Number,
    "eng":Number,
    "Maths":Number,
    "science":Number,
    "social":Number
})
let User_model = mongoose.model("user",user_schema)

module.exports = User_model