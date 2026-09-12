const mongoose = require("mongoose")

const dns = require("dns")
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

async function DB() {
    await mongoose.connect(process.env.DB_URI)
    console.log("DB connected")
}

module.exports = DB;