import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <h2>Background Color Changer</h2>

      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("yellow")}>Yellow</button>
    </div>
  );
}

export default App;