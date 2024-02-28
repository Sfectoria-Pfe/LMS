let Cards = require('../data.json')
const{Course}=require('../model/models')

const allformation = async (request, response) => {
  try {
    const result = await Course.find()
    response.send(result);
  
  }
  catch (error) {
    response.status(400).send(error);
  }
    
}




const findOne = async (request, response) => {
  try {
    const found = await Course.findOne({ id: +request.params.id });
    response.send(found);
  } catch (error) {
    console.log(error);
  }
};










// const oneformation =(request,response)=>{
//   const {id}=request.params;
//   let myCard = Cards.find((elem)=>elem.id===+id)
//   if (myCard) response.send(myCard);
//   else response.status(400).send("formation not found");
// }


const search = (request, response) => {
    const { text } = request.body;
    console.log(text, "this is a search")
  
    const filtred = Cards.filter((elem) =>
    
        elem.name.toUpperCase().includes(text.toUpperCase()) ||
        elem.description.toUpperCase().includes(text.toUpperCase()))

        console.log(filtred)
  response.status(200).send(filtred);
};
    
const deleteCard = (req, res) => {
  let id = +req.params.id;
  console.log(id, "my id sent from params");
  let newCard = Cards.filter((e) => +e.id !== id);
console.log(newCard)
  if (JSON.stringify(newCard) !== JSON.stringify(Cards)) {
    Cards = newCard;
    console.log(Cards);
    res.status(202).send(Cards);
  } else {
    res.status(400).send("id not found");
  }
};



module.exports = { allformation ,findOne};