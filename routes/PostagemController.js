const Postagem = require('./Postagem');

module.exports = {
  async index(req, res) {
    const postagem = await Postagem.find();
    res.json(postagem);
  },
  async store(req, res) {
    const{titulo,descricao,urlthumbnail,url} = req.body;
    
    let dataCreate = {}
      dataCreate = {
      titulo,
      descricao,
      urlthumbnail,
      url
    };
    const postagem = await Postagem.create(dataCreate);
    res.json(postagem);
  },
};