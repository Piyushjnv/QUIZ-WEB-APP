import { useState } from 'react'
import './App.css'
import Q_add from './Features/Q_add'
// import Login from './Features/User/Login'
import User from './Features/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen'>
    <User />
    {/* <Q_add /> */}
    </div>
  )
}

export default App
