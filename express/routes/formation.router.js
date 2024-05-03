const formationRouter = require("express").Router()
const {
 findAll,
  findOne,
  // search,
  // deleteCard,
} = require("../controller/Course.controller");

let Cards=require('../data.json')
formationRouter.get('/',findAll)
 formationRouter.get('/:id',findOne)
// formationRouter.delete("/:id", deleteCard);
// // formationRouter.put('/:id')
// formationRouter.post('/search', search)


module.exports = formationRouter;