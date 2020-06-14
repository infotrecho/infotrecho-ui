import React from 'react';
import './App.css'

import background from './resources/white-truck.png'
import logo from './resources/caminhao-infotrecho.png'

function App() {

  var fatherStyle = {
    position: "fixed",
    width: "100%",
    height: "100%",
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
  };

  var headerStyle = {
    marginLeft: "100px",
    marginTop: "20px",
    width: "100%",
  }

  var logoStyle = {
    marginTop: "10px"
  }

  var headerItem = { 
    display: "inline",
    position: "absolute",
    marginLeft: "10px",
    color: "white",
    fontFamily: "sans-serif"
  }

  var bodyStyle = {
    marginLeft: "100px",
    marginTop: "10%",
    width: "65%",
  }

  var bodyPStyle = {
    width: "50%",
  }

  var h1Style = {
    color: "white",
    fontFamily: "sans-serif",
    fontSize: "72px"
  }

  var pStyle = {
    color: "white",
    fontFamily: "sans-serif",
    fontSize: "21px"
  }

  return (
    <div className="App" style={fatherStyle}>
      <div style={headerStyle}>
          <img src={logo} alt="Logo" style={logoStyle}/>
          <h2 style={headerItem}>InfoTrecho</h2>
      </div>

      <div style={bodyStyle}>
        <h1 style={h1Style}>Movimentação de cargas tem alta de 13% em maio</h1>
        <div style={bodyPStyle}>
          <p style={pStyle}>A movimentação de cargas em maio no Brasil foi de R$ 482 bilhões, o que representa aumento de 13% em relação a abril, que contabilizou R$ 430 bilhões. Os dados são da AT&M Tecnologia, empresa que detém mais de 90% do mercado de seguros de transporte de cargas.</p>
        </div>
      </div>
    </div>
  );
}

export default App;