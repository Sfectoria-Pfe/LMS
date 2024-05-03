const { Form } = require("../model/models");

const findAll = async (request, response) => {
  try {
    const result = await Form.find();
    response.send(result);
  } catch (error) {
    response.status(400).send(error);
  }
};

const findOne = async (request, response) => {
  try {
    const found = await Form.findOne({ id: +request.params.id });
    response.send(found);
  } catch (error) {
    console.log(error);
  }
};

const create = async (req, res) => {
  try {
    let result = await Form.create(req.body);
    res.status(201).send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { findAll, findOne,create };
