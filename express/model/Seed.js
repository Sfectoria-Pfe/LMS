const data = require("../data.json")
const { Course } = require("./models")
const { Form } = require("./models")
const formdata = require("../form.json")

const insertMany = async (request, response) => {
    try {
        await Form.create(formdata)
        console.log("seeded")
    }
    catch (error) {
        console.log(error)
    }
}
insertMany()