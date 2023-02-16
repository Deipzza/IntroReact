import React from 'react';

export default class Padre extends React.Component {
  state = {
    contador: 0,
  };

  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <div>
        <h3>Comunicación entre componentes</h3>
        <p>Contador: {this.state.contador}</p>
        <Hijo incrementarContador={this.incrementarContador} mensaje="Msg para el hijo 1"></Hijo>
        <Hijo incrementarContador={this.incrementarContador} mensaje="Msg para el hijo 2"></Hijo>
      </div>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h4>{props.mensaje}</h4>
      <button onClick={props.incrementarContador}>+</button>
    </>
  );
}