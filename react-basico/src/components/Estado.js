import React from 'react';

class Estado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    // setInterval(() => {
    //     this.setState({
    //         contador: this.state.contador + 1,
    //     });
    // }, 1000);
  }

  render() {
    return (
      <div>
        <h2>Estado</h2>
        <p>{this.state.contador}</p>
        <EstadoAHijo contadorHijo={this.state.contador} />
      </div>
    );
  }
}

function EstadoAHijo(props) {
  return (
    <div>
      <h3>{props.contadorHijo}</h3>
    </div>
  );
}

export default Estado;