//import './App.css'
// import Header from './components/Header'
// import Section from './components/Section'
// import Footer from './components/Footer'
// import Article from './components/article'

// function App() {
//   return (
//     <>
//       <h1>HELLO Santhavi</h1>

//       <Header />
//       <Section />
//       <Footer/>
//       <Article/>
//     </>
//   )
// }

// export default App

import './App.css'
import { useState } from 'react'

function App() {
  const [num, setNum] = useState(10);

  const handleClick = ()=>{
    // setNum(num+1)
    // setNum(num-1)
    setNum(0)
  }

  return (
    <>
      <h1>State oda value: {num}</h1>
      <p>{num}</p>
      <button onClick={handleClick}>Increase</button>

    </>
  );
}

export default App;