const data = require("../data.json")
const { Course } = require("./models")

const insertMany = async (request, response) => {
    try {
        await Course.create(data)
        console.log("seeded")
    }
    catch (error) {
        console.log(error)
    }
}
insertMany()