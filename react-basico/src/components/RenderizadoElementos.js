import React from 'react';
import data from "../helpers/data.json";

class RenderizadoElementos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["spring", "summer", "autumn", "winter"]
    };
  }

  render() {
    return (
      <div>
        <h2>Renderizado de elementos</h2>
        <ol>
          {this.state.seasons.map((e, i) => 
            <li key={i}>{e}</li>
          )}
        </ol>
        <h3>Frameworks FrontEnd JS</h3>
        <ul>
          {data.frameworks.map(e => <ElementoLista key={e.id} element={e}/>)}
        </ul>
      </div>
    );
  }
}

function ElementoLista(props) {
  return (
    <li>
      <a href={props.element.web} target="_blank" rel="noreferrer">{props.element.name}</a>
    </li>
  );
}

export default RenderizadoElementos;