import react,{useState} from "react-dom";
import "../style/cadastroVideo.css";
import logo from "../img/logo.svg";
import icon_sair from "../img/icon_sair.svg";
import logo_cachorro from "../img/cachorro.svg";
import { Link } from "react-router-dom";
import React, { Component } from "react";

class CadastroVideo extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ response: res.express }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/mensagem");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo_cachorro} className="App-cachorro" alt="cachorro" />

          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <Link to="/">
            <img src={icon_sair} className="App-sair-icon" alt="logo" />
          </Link>
          <Link to="/treinamento">
            <p className="App-cadastro-text">Treinamento</p>
          </Link>
          <p className="App-sair-text"> Sair do app </p>
        </header>

        <section>
          <form action="/admin/postagem/nova" method="POST">
            <div className="App-conteiner-cadastro-videos">
              {this.state.response}
              <h1 className="App-h1-video">Cadastro de videos</h1>
              <input
                className="App-input"
                id="titulo"
                name="titulo"
                placeholder="Titulo"
              ></input>
              <input
                className="App-input2"
                id="descricao"
                name="descricao"
                placeholder="Descrição"
              ></input>
              <input
                className="App-input3"
                id="urlthumbnail"
                name="urlthumbnail"
                placeholder="Url da Thumbnail"
              ></input>
              <input
                className="App-input4"
                id="url"
                name="url"
                placeholder="Url do vídeo"
              ></input>
            </div>

            <button type="submit" className="App-button-cadastro">
              Iniciar treinamento
            </button>
          </form>
        </section>
      </div>
    );
  }
}
  export default CadastroVideo;