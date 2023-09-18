import { useEffect, useState } from "react"
import { RxMoon, RxSun } from "react-icons/rx";


const Header = () => {
    
  const[theme, setTheme] =useState('ligth')
    const [modo, setModo]= useState(RxMoon)
    const [textTheme, setTextTheme]= useState('Dark Mode')
  useEffect(() => {
  
  if(theme === 'dark'){
    document.querySelector('html').classList.add('dark')}
    else{
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])
  


  const changetheme = () =>{
  setTheme(theme === 'dark' ? 'ligth' : 'dark')
        if(theme==='ligth'){
            setModo(
                RxSun()
            )
            setTextTheme('Ligth Mode')
        }else{
            setModo(
                RxMoon()
            )
            setTextTheme('Dark Mode')
        }
  }


  return (
    <div className="w-full  shadow-lg p-8 flex justify-between items-center m-auto bg-bgLightGray dark:bg-DarkBlue duration-500 relative z-40">
       <div className="max-w-[1440px] w-full flex justify-between items-center m-auto duration-500">
            <p className="dark:text-bgLightGray text-DarkBlue font-bold lg:text-2xl text-sm">Where in the world?</p>
                <button onClick={changetheme} className="dark:text-bgLightGray text-DarkBlue font-semibold lg:text-2xl text-sm flex gap-2 items-center duration-500">{modo}{textTheme}</button>
       </div>
    </div>
  )
}

export default Header