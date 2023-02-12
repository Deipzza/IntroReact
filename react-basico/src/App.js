import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';

const seasons = ["spring", "autumn", "winter", "summer"];
const auth = true;

// function sonidito() {
//   console.log("audio");
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>
            {auth ? "The user is authenticated" : "The user is not authenticated"}
          </p>
          <ul>
            {seasons.map((e, index) => (<li key={index}>{e}</li>))}
          </ul>
          {/* <audio src="uwu.mp3"></audio> */}
          {/* <button onClick={document.querySelector("audio")}>Sorpresa</button> */}
        </section>
        <section>
          <Componente msg="Hola desde una prop" />
          <hr/>
          <Propiedades 
            cadena="cadena de texto" 
            numero={5} 
            booleano={true} 
            arreglo={[1, 2, 3]}
            objeto={{
              nombre: "John",
              correo: "john@correo.com",
            }}
            elementoReact={<p>Elemento React</p>}
            funcion={num => num * num}
            componenteReact={<Componente msg="Soy un componente"/>}
          />
        </section>
      </header>
    </div>
  );
}



export default App;
