import "./App.css";
import { useState } from "react";
import cat from "./assets/cat.png";

function App() {
  const [catName, setCatName] = useState();
  const [catBreed, setCatbreed] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch("/api");
      const json = await response.json();
      setCatName(json.name);
      setCatbreed(json.breed);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="App">
      <div className="main">
        <h1>Random cat generator</h1>

        <img src={cat} alt="A black sitting cat" />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Breed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{catName}</td>
              <td>{catBreed}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={fetchData} className="glow-on-hover">
          Get cat
        </button>
      </div>
    </div>
  );
}

export default App;
