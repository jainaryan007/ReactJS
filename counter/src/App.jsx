import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setcounter] = useState(10)

  const increase = () => {
    setcounter(counter + 1)
  }
  const decrease = () => {
    setcounter(counter - 1)
  }

  return (
    <>
      <h1>chai</h1>
      <p>counter value : {counter}</p>

      <button onClick={increase}>add count</button>
      <br />
      <button onClick={decrease}>remove count</button>
    </>
  )
}

export default App
