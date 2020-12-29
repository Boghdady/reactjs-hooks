import './App.css';

import React, { useEffect, useRef, useState } from 'react';


function App() {
  // Hooks : 1. should exist on the top of function
  // 2. should exist on the function not a class component
  // 3. should not exist on loop, conditions, etc.
  
  // 1. useState() hook
  // when path funcation as arguement in useState() this mean
  // the useState() will render only once not render everytime 
  // when state is changes. that is good for performance wise.
  const [count, setCount] = useState(() => 0);
  
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  })
  
  function increment() {
    setCount(prevCount => prevCount+1);
  }
  
  function decrement() {
    setCount(prevCount => prevCount-1);
  }

  // 2. useEffect(a,b)
  // first arg is a function that run when the second arg "b" change
  // b = [] mean run a only once
  // don't forget to cleanup "performace wise"
  useEffect(() => {
    console.log("useEffect")
    return () => console.log("Cleanup")
  },[count])

  return (
    <div className="App">
     <header className="App-header">
       <input ref={inputRef}/>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
      </header>
    </div>
  );
}

export default App;
