import React, { useState, useEffect } from 'react';

function Reloj({hora}) {
  return <h2>{hora}</h2>
}

export default function RelojHooks() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;

    if (visible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }
    
    return (() => {
      console.log("Desmontaje");
      clearInterval(temporizador);
    });
  }, [visible]);

  return (
    <>
      <h3>Reloj con Hooks</h3>
      {visible && <Reloj hora={hora}/>}
      <button onClick={() => setVisible(true)}>Iniciar</button>
      <button onClick={() => setVisible(false)}>Detener</button>
    </>
  );
}