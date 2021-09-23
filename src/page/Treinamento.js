import "../style/treinamento.css";
import logo from "../img/logo.svg";
import icon_sair from "../img/icon_sair.svg";
import icon_play from "../img/icon_play.svg";
import { Link } from "react-router-dom";

import React, { Component } from "react";



class Treinamento extends Component {
  state = {
    response: "java",
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
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <Link to="/">
            <img src={icon_sair} className="App-sair-icon" alt="logo" />
          </Link>

          <p className="App-sair-text"> Sair do app </p>
        </header>
        <section>
          <div className="App-apresentacao-video">
            <div className="App-button-play-video">
              <img src={icon_play} className="App-button-play" alt="logo" />
            </div>
          </div>
          s<h1 className="App-h1">{res.response.titulo}</h1>
          <p className="App-text">{res.response.descricao}</p>
          <div className="App-conteiner-videos">
            <p className="App-p-video">{res.response.descricao}</p>
            <img
              src={"{res.response.urlthumbnail}"}
              className="App-icon-video"
              alt="logo"
            />
            <h1 className="App-h1-video">{res.response.titulo}</h1>
        
            <p className="App-p-tempo">5:00</p>
            <h1 className="App-h1-video">{res.response.url}v</h1>
          </div>
        </section>
      </div>
    );
  }
}
export default Treinamento;