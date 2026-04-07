import { useState } from 'react'
import './App.css'
import Q_add from './Features/Q_add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Q_add />
    </>
  )
}

export default App
