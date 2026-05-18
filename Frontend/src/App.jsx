import {RouterProvider} from "react-router-dom"
import './App.css'
import { useEffect } from 'react';
import Routes from './Routes'
import ReactGA from 'react-ga4';


function App() {
ReactGA.initialize('G-JM3Z9CLVYP'); // Replace with your GA4 measurement ID
// console.log("first appjsx");
 useEffect(() => {
     ReactGA.send({ hitType: "pageview", page: window.location.pathname });
   }, []);
   

  return (
    <div className='w-full h-full'>
      <RouterProvider router={Routes}/>
    </div>
  )
}

export default App
