import React from 'react';
import './App.css';

import Product from './demo/Product';

// import Name from './demo/Name';
// import Index from './demo/';


// function Person(props) {
//   let name = props.name;

//   return (
//     <div>
//       <h1>WELCOME!</h1>
//       <Name name = {name} />
//     </div>
//   );
// }


function App() {
  return (
    <div className="App">

      {/*      _
           .__(.)< (MEOW)
            \___)   
      ~~~~~~~~~~~~~~~~~~ */}

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}

        {/* <Index />
        <Person name = 'Sarah' /> */}

        <Product name="Apricots" price="3" description="Fresh apricots from Armenia!" />
        <Product name="Bananas" price="1" description="Fresh bananas from Ecuador!" />
        <Product name="Apples" price="2" description="The best apples in the World!" />


      </header>
    </div>
  );
}

export default App;
