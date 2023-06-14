import React from 'react';
import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from "styled-components";

const ComponentesEstilizados = () => {
  let mainColor = "#db7090",
  mainAlphaColor = "#db709080";

  const setTransitionTime = (time) => `background-color ${time}s ease-in-out`;

  const fadeIn = keyframes`
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  `;

  const MyH4 = styled.h4`
    padding: 2rem;
    text-align: center;
    color: ${({color}) => color || "black"};
    background-color: ${mainColor};
    transition: ${setTransitionTime(".1")};
    animation: ${fadeIn} 5s ease-out;

    ${(props) => props.isButton && css`
      margin: auto;
      max-width: 50%;
      border-radius: .25rem;
      cursor: pointer;
    `}

    &:hover {
      background-color: ${mainAlphaColor};
    }
  `;

    // Para mayor organización y buenas prácticas, se recomienda que estas variables
    // CSS y propiedades estén en un archivo por separado y que se cargue el archivo
    // Dependiendo de las configuraciones del usuario.
    const light = {
      color: "#222",
      bgColor: "#ddd"
    };

    const dark = {
      color: "#ddd",
      bgColor: "#222"
    };

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({theme}) => theme.color};
    background-color: ${({theme}) => theme.bgColor};
  `;

  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;
  
  // Cambios o "reseteos" globales. Es recomendable hacer esta configuración en
  // el archivo principal de la app (sea App.js o index.js)
  const GlobalStyle = createGlobalStyle`
    h3 {
      padding: 2rem;
      background-color: #fff;
      color: #61dafb;
      text-transform: uppercase;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <h3>Styled-Components</h3>
      <MyH4>Hola soy un h4 estilizado con Styled-components</MyH4>
      <MyH4 color="#61dafb">Hola soy otro h4 estilizado con Styled-components</MyH4>
      <MyH4 isButton>Hola soy un h4 estilizado como botón</MyH4>
      <ThemeProvider theme={light}>
        <Box>Soy una caja light</Box>
        <BoxRounded>Soy una caja redondeada light</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Soy una caja dark</Box>
        <BoxRounded>Soy una caja redondeada dark</BoxRounded>
      </ThemeProvider>
    </>
  );
}

export default ComponentesEstilizados;