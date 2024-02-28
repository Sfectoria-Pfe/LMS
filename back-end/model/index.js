const mongoose = require('mongoose')
require("dotenv").config()
const mongoUri = process.env.mongoDB
console.log(mongoUri)
mongoose.connect(mongoUri).then(() => { console.log("db connection established"); }).catch(() => console.log("error"))

const db = mongoose.connection

module.exports = db