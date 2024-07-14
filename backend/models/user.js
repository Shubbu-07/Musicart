const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    number: String,
    email: String,
    password: String
})

const userModel = mongoose.model("usersall", userSchema);
module.exports = userModel;