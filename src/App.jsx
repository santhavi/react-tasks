import './App.css'
import { useState } from 'react'

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h1>Hello {name}</h1>
    </>
  );
}

export default App;