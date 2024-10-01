import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  // console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://xcountries-backend.azurewebsites.net/all1"
        );

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(`Error fetching data: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {data.map((ele, index) => (
        <div key={index} className="card">
          <img height="120px" width="150px" alt={ele.name} src={ele.flag} />
          <h1>{ele.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default App;
