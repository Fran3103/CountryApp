

import { Route, Routes } from "react-router-dom"
import CountrySeach from "./Components/CountrySeach"

import { Principal } from "./Components/Principal"

import Header from './Components/Header.jsx'
function App() {



 

  return (
    <div className="dark:bg-bgVeryDarkBlue dark:duration-500 duration-500 bg-bgLightGray  pb-20 w-full ">
    
        <Header/>
      <Routes>
        <Route path="/" element={<Principal/>} />
        <Route path="/resultado" element={<CountrySeach/>} />
        
      </Routes>

    
    </div>
  )
}

export default App
