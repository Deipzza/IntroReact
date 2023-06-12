import React, { useState } from 'react';

// const Formularios = () => {
//   const [nombre, setNombre] = useState("");
//   const [sabor, setSabor] = useState("");
//   const [lenguaje, setLenguaje] = useState("");
//   const [terminos, setTerminos] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("El formulario se ha enviado.")
//   }

//   return (
//     <>
//       <h3>Formularios</h3>
//       <form onSubmit = {handleSubmit}>
//         <label htmlFor="nombre">Nombre:</label>
//         <input
//           type="text"
//           id="nombre"
//           name="nombre"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//         />
//         <p>Elige tu sabor JS favorito</p>
//         <input
//           type="radio"
//           id="vanilla"
//           name="sabor"
//           value="vanilla"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="vanilla">Vanilla</label>
//         <input
//           type="radio"
//           id="react"
//           name="sabor"
//           value="react"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="react">React</label>
//         <input
//           type="radio"
//           id="vue"
//           name="sabor"
//           value="vue"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="vue">Vue</label>
//         <input
//           type="radio"
//           id="angular"
//           name="sabor"
//           value="angular"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="angular">Angular</label>
//         <p>Elige tu lenguaje de programación favorito</p>
//         <select name="lenguaje" onChange={(e) => setLenguaje(e.target.value)} defaultValue="">
//           <option value="">---</option>
//           <option value="python">Python</option>
//           <option value="java">Java</option>
//           <option value="js">JS</option>
//           <option value="csharp">C#</option>
//           <option value="assembly">Assembly</option>
//         </select>
//         <br/>
//         <input
//           type="checkbox"
//           id="terminos"
//           name="terminos"
//           onChange={(e) => setTerminos(e.target.checked)}
//         />
//         <label for="terminos">Acepto términos y condiciones</label>
//         <br />
//         <input type="submit" />
//       </form>
//     </>
//   );
// }

const Formularios = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  
  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado.")
  }

  return (
    <>
      <h3>Formularios</h3>
      <form onSubmit = {handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <p>Elige tu sabor JS favorito</p>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={handleChange}
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <p>Elige tu lenguaje de programación favorito</p>
        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="">---</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="js">JS</option>
          <option value="csharp">C#</option>
          <option value="assembly">Assembly</option>
        </select>
        <br/>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChecked}
        />
        <label for="terminos">Acepto términos y condiciones</label>
        <br />
        <input type="submit" />
      </form>
    </>
  );
}

export default Formularios;