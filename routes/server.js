
const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const routes = require('caminho');
const app = express();
const port = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost:27017/blogapp',{
useUnifiedToology: true,
useNewUrlParse: true,
useFindAndModify: false
},function(err){
  if(err){
console.log(err)
  }else{
    console.log("Mongo DB Conectado ")
  }
});





app.use(express.json());
app.use(cookieParser());
app.use(express.json());
app.use(routes);








app.get("/api/mensagem", (req, res) => {
  req.send({ express: "Hello From Express" });
});



app.listen(port, () => console.log(`Listening on port ${port}`));



