import { useState , useEffect } from "react"




const Darkmode = () => {
  const [isdark, setisdark] = useState(localStorage.getItem('darks') === 'true' ? true : false)

useEffect(
  () =>{
   const darks = document.querySelector("html")
   
    if (isdark){
      darks.classList.add('dark')
    }else{
       darks.classList.remove('dark')
    }
  },
  [isdark]
)
// dark mode button o click 

  const clicks = () => {
    localStorage.setItem('darks', !isdark) // store state 
    setisdark(!isdark)
  }


  return (
    <>
      <div className=" relative ">

        <div 
        onClick={clicks}
        className={`" relative w-13 h-6 border-2 border-double rounded-2xl overflow-hidden box-border " ${isdark? "bg-gray-300 border-white":"bg-gray-900"}`}>
          <div className={` absolute overflow-hidden w-5  h-5   rounded-lg p-1 ${isdark ? "right-0" : " left-0"} ${ isdark ? "bg-gray-900 " : "bg-gray-400 "} `}></div>
        </div>
      </div>
    </>
  )
}

export default Darkmode