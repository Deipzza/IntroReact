import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';

const seasons = ["spring", "autumn", "winter", "summer"];
const auth = true;

// function sonidito() {
//   console.log("audio");
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <section>
        <Componente msg="Hola desde una prop" />
      </section>
    </div>
  );
}



export default App;
