import React, { Component } from 'react';

class Buscador extends Component {
  render(){
    return (
      <form action="">
        <div className="row">
          <div className="form-group col-md-8">
            <input 
              type="text" 
              className="form-control form-control-lg" 
              placeholder="Busca tu imagen. Ejemplo: Futbol"
            />
          </div>
          <div className="form-group col-md-4">
            <input 
              type="submit" 
              className="btn btn-lg btn-secondary btn-block" 
              placeholder="Busca tu imagen. Ejemplo: Futbol"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Buscador;