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
    marginTop: "15%",
    width: "65%",
    color: "white",
    fontFamily: "sans-serif",
    fontSize: "32px"
  }

  return (
    <div className="App" style={fatherStyle}>
      <div style={headerStyle}>
          <img src={logo} alt="Logo" style={logoStyle}/>
          <h2 style={headerItem}>InfoTrecho</h2>
      </div>

      <div style={bodyStyle}>
        <h1>Movimentação de cargas tem alta de 13% em maio</h1>
      </div>
    </div>
  );
}

export default App;
