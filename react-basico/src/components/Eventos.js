import React from "react";

class Eventos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar() {
    console.log("sumando");
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  
  restar() {
    console.log("restando");
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h3>Eventos en componentes de clase</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h4>{this.state.contador}</h4>
      </div>
    );
  }
}

export default Eventos;