import './App.css';

import React, { useState } from 'react';


function App() {
  // Hooks : 1. should exist on the top of function
  // 2. should exist on the function not a class component
  // 3. should not exist on loop, conditions, etc.
  
  const [count, setCount] = useState(() => 0);
  function increment() {
    setCount(prevCount => prevCount+1);
  }
  function decrement() {
    setCount(prevCount => prevCount-1);
  }
  return (
    <div className="App">
     <header className="App-header">
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
      </header>
    </div>
  );
}

export default App;
