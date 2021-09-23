const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Postagem = new Schema({
  titulo: {
    type: String,
    required: true,
  },       
  descricao: {
    type: String,
    required: true,
  },
  urlthumbnail: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  
  date: {
    type: Date,
    default: Date.now(),
  },
});
 const postagem  = mongoose.model("postagens", Postagem);
module.exports =  postagem;