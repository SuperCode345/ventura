import logo from "../img/logo.svg";
import logo_educa from "../img/logo_educa.svg";
import logo_cachorro from "../img/cachorro.svg";
import "../style/landingPage.css";
import React, { Component } from "react";

import {   Link } from "react-router-dom";





class LandingPage extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo_educa} className="App-educacao" alt="educacao" />
        <img src={logo_cachorro} className="App-cachorro" alt="cachorro" />
        <p className="App-text">
          Alunos de todo o mundo estão iniciando novas carreiras e avançando em
          suas áreas.
        </p>
        <Link to="/treinamento">
          <div className="App-button">Iniciar treinamento</div>
        </Link>
      </header>
    </div>
  );
  }
};

export default LandingPage;
