import React, { Component } from 'react';
import Buscador from './Components/Buscador'

class App extends Component {
  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imágenes</p>
          <Buscador />
        </div>
      </div>
    )
  }
}


export default App;



