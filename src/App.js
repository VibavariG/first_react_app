import './App.css';
import { useState } from 'react'

const App = () => {

  const [counter, setCounter] = useState(0);  //array destructuring, calling something as a function and it starts with 'use', we call that a hook
  //name of that state, setter function [second var same as first var, with 'set' in front of it]
  //inside the useState(), give initial value, here, 0.


  return (
    <div className="App"> 
      <button onClick={() => setCounter(-5)}>-</button>
      <h1>{counter}</h1>
      <button>+</button>
    </div>
  );
}

export default App;
