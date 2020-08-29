import React from 'react';
import logo from './logo.svg';
import './App.css';


import Name from './demo/Name';
import Index from './demo/';


function Person(props) {
  let name = props.name;

  return (
    <div>
      <h1>WELCOME!</h1>
      <Name name = {name} />
    </div>
  );
}


function App() {
  return (
    <div className="App">

      {/*      _
           .__(.)< (MEOW)
            \___)   
      ~~~~~~~~~~~~~~~~~~ */}
      {/* Isk vonc karam anem, vor cuyc ta comment-y browserum? */}

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

        <Index />

        <Person name = 'Sarah' />


      </header>
    </div>
  );
}

export default App;
