import React,{ useState, useEffect } from 'react'

function Time({sendtime}) {
const [counttime, setcounttime] = useState("0 : 0")

let t = 0
var m = 0
var s = 0

useEffect(
    ()=>{
setInterval(() => {
    s += 1
    
    // const x = document.getElementById("time").innerHTML =` ${m} : ${s} `
    setcounttime(` ${m} : ${s} `)
    if(s === 60){
   
        m += 1
        s = 0
    }
}, 1000);
    },[s]

)
sendtime(counttime)
  return (
    <div className='border rounded-4xl h-9 w-20 items-center bg-[#383737b2] flex justify-center p-1'>
        <div className='text-white font-sans font-semibold ' id='time'>{counttime}</div>
    </div>
  )
}

export default Time