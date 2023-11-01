const mongoose = require("mongoose")
const User = new mongoose.Schema({
    title: {
        type: String,
        min: 5,
        max: 30,
        required: true
    },
    description: {
        type: String,
        min: 30,
        max: 200,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model("user", User)