import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let Increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  let Decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="container">
      <h1>Counter: {count}</h1>
      <button className="btn" onClick={Increment}>
        Increment (+)
      </button>
      <button className="btn" onClick={Decrement}>
        Decrement (-)
      </button>
    </div>
  );
}

export default App;
