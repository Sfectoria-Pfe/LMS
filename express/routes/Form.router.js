const formRouter = require("express").Router();
const {
  findAll,
  findOne,
  create,
} = require("../controller/Form.controller");


formRouter.get("/", findAll);
formRouter.get("/:id", findOne);
formRouter.post("/", create);
// formationRouter.delete("/:id", deleteCard);
// // formationRouter.put('/:id')
// formationRouter.post('/search', search)

module.exports = formRouter;
