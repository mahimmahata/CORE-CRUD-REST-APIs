const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
    stdName: String,
    id: Number,
    roll: Number,
    dept: String
})

const data = mongoose.model("info",dataSchema);

module.exports = data;