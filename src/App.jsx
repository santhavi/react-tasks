import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Live Character Counter</h2>

      <textarea
        rows="8"
        cols="40"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <h3>Characters : {text.length}</h3>
      <h3>Words : {text === "" ? 0 : text.split(" ").length}</h3>
    </div>
  );
}

export default App;