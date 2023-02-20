import React from 'react';

class Reloj extends React.Component {
  componentWillUnmount() {
    // console.log(3, "El componente ha sido eliminado del DOM");
  }

  render() {
    return (
      <h3>{this.props.hora}</h3>
    );
  }
}

export default class CicloVida extends React.Component {
  constructor(props) {
    super(props);
    // console.log(0, "El componente se inicializa (aún no está en el DOM)");

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.temporizador = null;
  }

  componentDidMount() {
    // console.log(1, "El componente ya se encuentra en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(2, "El estado o las props del componente han cambiado");
    console.log(prevProps, prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
        visible: true,
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
  };

  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    });
  };

  render() {
    // console.log(4, "El componente se dibuja (o redibuja) en el DOM");
    return (
      <div>
        <h3>Ciclo de vida de los componentes de clase</h3>
        {this.state.visible && <Reloj hora={this.state.hora}/>}
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </div>
    );
  }
}