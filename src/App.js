import './App.css';
import { useState, useEffect } from 'react'

const App = () => {

  const [counter, setCounter] = useState(0);  //array destructuring, calling something as a function and it starts with 'use', we call that a hook
  //name of that state, setter function [second var same as first var, with 'set' in front of it]
  //inside the useState(), give initial value, here, 0.

  useEffect(()=>{       //hapens as soon as the App component renders i.e every time I make a state change
    alert('Reload')
    //react state should only be changed using its own setter
    counter = 100;
  })

  return (
    <div className="App"> 
      <button onClick={() => setCounter((prevCount) => prevCount-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount+1)}>+</button>
    </div>
  );
}

export default App;
