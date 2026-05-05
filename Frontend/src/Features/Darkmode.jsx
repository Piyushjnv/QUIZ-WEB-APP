import { useState } from "react"




const Darkmode = () => {
  const [isdark, setisdark] = useState(true)

  const clicks = () => {
    const darks = document.getElementsByTagName("html")
    darks[0].classList.toggle("dark")
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