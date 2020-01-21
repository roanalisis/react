import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//importar componentes
import MiComponente from './components/MiComponente'
import Peliculas from './components/Peliculas';

function HolaMundo(nombre, hobbie){
  var presentacion = (
    <div>
      <h2>Hola, soy {nombre}</h2>
      <h2>Hobbie {hobbie}</h2>
    </div>
  )
    
  return presentacion
}

function App() {
  var nombre = "Rodrigo Ramírez";
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        {HolaMundo(nombre, 'ver películas')}
        <section className="componentes">
          <MiComponente />
          <Peliculas />
        </section>
        
  
      </header>
    </div>
  );
}

export default App;
