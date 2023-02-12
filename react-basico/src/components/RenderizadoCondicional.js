import React from 'react';

class RenderizadoCondicional extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: true,
    };
  }

  render() {
    return (
      <div>
        <p>Renderizado condicional</p>
        {this.state.session ? <Login /> : <Logout />}
      </div>
    );
  }
}

function Login() {
  return (
    <h3>Login</h3>
  );
}

function Logout() {
  return (
    <h3>Logout</h3>
  );
}

export default RenderizadoCondicional;