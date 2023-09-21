import { useState } from "react";
import { Link } from "react-router-dom"


const NoFound = () => {
    const [actvivo, setActivo] = useState(false)
  setTimeout(() => {
    setActivo(true)
  }, 1000);
  return (
    <div className={actvivo ? "flex flex-col h-[700px] justify-start items-center w-screen" : "hidden flex-col h-[700px] justify-start items-center w-screen"}> 
    
    <h2 className="text-center  text-3xl mt-56">El Pais solicitado no existe o no se encuentra en nuestra base de datos</h2>
    
    <Link to='/'><button className=" m-auto  mt-32 bg-bgLightGray px-9 py-2 dark:text-DarkGray shadow-xl dark:bg-DarkBlue text-DarkBlue rounded-md">Back</button></Link>
    
    </div>
  )
}

export default NoFound