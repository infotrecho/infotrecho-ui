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

  var headerItem = { 
    display: "inline",
    marginBottom: "30px",
    marginLeft: "10px"
  }

  return (
    <div className="App" style={fatherStyle}>
      <div id="header" style={headerStyle}>
          <img src={logo} alt="Logo" />
          <h2 style={headerItem}>InfoTrecho</h2>
      </div>
    </div>
  );
}

export default App;
