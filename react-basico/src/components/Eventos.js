import React from "react";

export class EventosES6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar() {
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  
  restar() {
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h3>Eventos en componentes de clase ES6</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h4>{this.state.contador}</h4>
      </div>
    );
  }
}

export class EventosES7 extends React.Component {
    state = {
      contador: 0,
    };

  sumar = (e) => {
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  
  restar = (e) =>  {
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h3>Eventos en componentes de clase ES7</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h4>{this.state.contador}</h4>
      </div>
    );
  }
}

export class MasSobreEventos extends React.Component {
  handleClick = (e, msg) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(msg);
  }

  render() {
    return (
      <div>
        <h3>Más sobre eventos</h3>
        <button onClick={(e) => this.handleClick(e, "Pasando parámetro")}>Saludar</button>
        {/* <Boton onClick={(e) => this.handleClick(e, "Pasando parámetro")}></Boton> */}
        <Boton myOnClick={(e) => this.handleClick(e, "Pasando parámetro")}></Boton>
      </div>
    );
  }
}

// function Boton(props) {
//   return (
//     <button onClick={props.myOnClick}>Botón componente</button>
//   );
// }
  
// La función Boton puede optimizarse:
const Boton = (props) => {
  <button onClick={props.myOnClick}>Botón componente</button>
};

// A su vez, si en vez de pasar como parámetro props, se desestructuran
// las props deseadas, se evita el llamado a props:
// const Boton = ({myOnClick}) => {
//   <button onClick={myOnClick}>Botón componente</button>
// };