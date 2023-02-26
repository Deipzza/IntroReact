import React, { useState } from "react";

export default function ContadorHooks(props) {
  const [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  return (
    <>
      <h3>Hooks - useState</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <p>Contador de {props.titulo}</p>
      <h4>{contador}</h4>
    </>
  );
}

ContadorHooks.defaultProps = {
  titulo: "clicks",
}