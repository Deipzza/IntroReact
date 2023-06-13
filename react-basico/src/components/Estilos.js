import React from 'react';
import "./Estilos.css";
import moduleStyles from "./Estilos.module.css";
import "./Estilos.scss";

const Estilos = () => {
  let myStyles = {
    borderRadius: "0.5rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };

  return (
    <section className="estilos">
      <h3>Estilos CSS en React</h3>
      <h4 className="bg-react">Estilos en hoja CSS externa</h4>
      <h4
        className="bg-react"
        style={{borderRadius: "0.25rem", margin: "1rem"}}
      >
        Estilos en línea
      </h4>
      <h4 className="bg-react" style={myStyles}>Estilos en línea</h4>
      <p>Agregando Normalize</p>
      <h4 className={moduleStyles.error}>Estilos con módulos (error)</h4>
      <h4 className={moduleStyles.success}>Estilos con módulos (success)</h4>
      <h4 className="bg-sass">Estilos con SASS</h4>
    </section>
  );
}

export default Estilos;