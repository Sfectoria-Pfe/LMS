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
const FormSchema = new mongoose.Schema({
    id: Number,
    FirstName: String,
    LastName: String,
    email: String,
    adress: String,
    Phone: Number,
    occupation: String,
    dateOfBirth: String,
    studies: String,
    college: String,
    degree: String
})

const Course = mongoose.model("Course", CourseSchema)
const Form = mongoose.model("Form", FormSchema)
module.exports = { Course,Form }; 