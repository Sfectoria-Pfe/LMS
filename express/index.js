const express = require('express');
require ('dotenv').config()
const app = express();
const port = 3100;
const cors = require("cors");
const bodyPorser = require("body-parser");
const formRouter = require("./routes/Form.router.js");
app.use(cors());
app.use("/api/v1", formRouter);
app.use(express.json());






app.listen(port, () => {
  console.log(`listing to http://localhost:${port}`);

});




















// app.get('/Cards')

// app.get("/formation/:id")
// app.post("/get-Cards", (request, response) => {
//   Cards.push(request.body);
//   response.status(201).send(Cards);
// });

// app.post("/search");

  
  // response.status(200).send(
  //   Cards.find((card) =>
  //     card.nom.includes(text)
      
  //   )
    
  // )
    // console.log(response);




