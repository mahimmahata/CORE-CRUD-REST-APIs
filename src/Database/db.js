const mongoose = require("mongoose")

const dns = require("dns")
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

async function connectDB() {
    await mongoose.connect(process.env.DB_URI)
    console.log("DB connected")
}

module.exports = connectDB;

/*const mongoose = require("mongoose")

const dns = require("dns")
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

async function connectDB() {
    await mongoose.connect(process.env.DB_url)
    console.log("DB connected");
}

module.exports = connectDB;*/