import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://xcountries-backend.azurewebsites.net/all"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {data.map((ele, index) => (
        <div key={index} className="card">
          <img alt="" src={ele.flag}></img>
          <h1>{ele.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default App;
