const formationRouter = require("express").Router()
const {
  allformation,
  findOne,
  // search,
  // deleteCard,
} = require("../controller/Course.controller");

let Cards=require('../data.json')

formationRouter.get('/',allformation)
 formationRouter.get('/:id',findOne)
// formationRouter.delete("/:id", deleteCard);
// // formationRouter.put('/:id')
// formationRouter.post('/search', search)


module.exports = formationRouter;