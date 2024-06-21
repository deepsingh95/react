import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(15





  )
  // setCounetr is a reference holder

  // let counter = 15;

  const addValue = () => {
    // setCounter(pervCounter = pervCounter + 1)
    // setCounter(pervCounter = pervCounter + 1)
    // setCounter(pervCounter = pervCounter + 1)
    // setCounter(pervCounter = pervCounter + 1)

    // counter = counter + 1;
    if (counter === 20) {
      setCounter(counter)
    } else {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter === 0) {
      setCounter(counter = 1)
    }
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App;

// for ui updation we can use react and use different type of hook to solve differet porblen and for every hook perform specific task
