import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6} from './components/Eventos';
import {EventosES7} from './components/Eventos';
import {MasSobreEventos} from './components/Eventos';
import Padre from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
// import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
// import AjaxHooks from './components/AjaxHooks';
// import HooksPersonalizados from './components/HooksPersonalizados';
import Referencias from './components/Referencias';
import Formularios from './components/Formularios';
import Estilos from './components/Estilos';
import ComponentesEstilizados from './components/ComponentesEstilizados';

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
          <hr/>
          <Estado />
          <hr/>
          <RenderizadoCondicional />
          <hr/>
          <RenderizadoElementos />
          <hr/>
          <EventosES6 />
          <hr/>
          <EventosES7 />
          <hr/>
          <MasSobreEventos />
          <hr/>
          <Padre />
          <hr/>
          <CicloVida />
          {/* <hr/>
          <AjaxApis/> */}
          <hr/>
          <ContadorHooks titulo="seguidores"/>
          <hr/>
          <ScrollHooks />
          <hr/>
          <RelojHooks />
          {/* <hr/>
          <AjaxHooks/> */}
          {/* <hr/>
          <HooksPersonalizados/> */}
          <hr/>
          <Referencias />
          <hr/>
          <Formularios />
          <hr/>
          <Estilos />
          <hr/>
          <ComponentesEstilizados />
        </section>
      </header>
    </div>
  );
}

export default App;