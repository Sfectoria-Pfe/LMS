const mongoose = require('mongoose');
const db = require("./index")


const CourseSchema = new mongoose.Schema({
    id: Number,
    name: String,
    src: String,
    description: String,
    price: String
    // Date: Date,
    // modules:[{name:String,src:String}]
})


const Course = mongoose.model("Course", CourseSchema)

module.exports = { Course }; 