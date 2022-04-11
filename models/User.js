const mongoose = require("mongoose");

const User = new mongoose.Schema({
    username: { type: String },
    email: { type: String },
    password: { type: Number },
    thumbnaill: { type: String },
    location: { type: String }
});

module.exports = mongoose.models.Car || mongoose.model("Car", Car);
