import "./App.css";
import { useState } from "react";

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
        <h2>
          {catName} {catBreed}
        </h2>
        <button onClick={fetchData}>Generate cat</button>
      </div>
    </div>
  );
}

export default App;
