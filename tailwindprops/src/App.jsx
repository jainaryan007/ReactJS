import { useState } from 'react'
import Cards from './components/Cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='text-blue-200'>dblciubcea</h1> */}
      <Cards username="hi" />
      <Cards username="bye" />
    </>
  )
}

export default App
