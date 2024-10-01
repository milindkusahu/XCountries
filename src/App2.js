import React from "react";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  console.log(items);
  console.log(inputValue);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddItem}>+</button>
      <div>
        {items.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </div>
    </div>
  );
};

export default App;
