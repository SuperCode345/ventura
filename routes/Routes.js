const express = require('express');
const PostagemController = require('./PostagemController')
const routes =  express.Router();

routes.get("/cursos", (req, res) => {
  res.json({ message: "Bem vindo" });
});


routes.get("/postagem", UsuarioController.index)
routes.post("/postagem", UsuarioController.store);



module.exports = routes;