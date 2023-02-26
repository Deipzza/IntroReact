import React, { useState, useEffect } from 'react';

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);
  // const [name, setName] = useState("John");

  useEffect(() => {
    // console.log("Scrolleando");
    
    const detectarScroll = () => setScrollY(window.pageYOffset);
    
    window.addEventListener("scroll", detectarScroll);
    
    return () => {
      // console.log("Fase de desmontaje");
      window.removeEventListener("scroll", detectarScroll)
    };
    
  }, [scrollY]);
  
  useEffect(() => {
    // console.log("Fase de montaje");
  }, []);

  useEffect(() => {
    // console.log("Fase de actualización");
  });

  return (
    <>
      <h3>Hooks - useEffect y el ciclo de vida</h3>
      <p>Scroll Y del navegador: {scrollY}px</p>
    </>
  );
}