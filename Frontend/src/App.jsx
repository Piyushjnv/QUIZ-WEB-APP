import {RouterProvider} from "react-router-dom"
import './App.css'
import Routes from './Routes'


function App() {
console.log("first appjsx");


  return (
    <div className='w-full h-full'>
      <RouterProvider router={Routes}/>
    </div>
  )
}

export default App
