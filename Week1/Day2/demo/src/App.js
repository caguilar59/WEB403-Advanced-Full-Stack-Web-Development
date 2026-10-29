import React from 'react';
import './App.css';
import  Car  from './components/car';
import myelement from './components/demo3';

//Change imports for demo 4 and 5
//import Football from './components/demo4';
import Football from './components/demo5';

function App() {
  return (
    <div className="App">
        <Car/>
        {myelement}
        <Football/>

    </div>

  );
}

export default App;
