

import { Route, Routes } from "react-router-dom"
import CountrySeach from "./Components/CountrySeach"
import Form from './Components/Form'
import { Principal } from "./Components/Principal"

import Header from './Components/Header.jsx'
import Region from "./Components/Region"
function App() {



 

  return (
    <div className="dark:bg-bgVeryDarkBlue dark:duration-500 duration-500 bg-bgLightGray  pb-20 w-full ">
    
        <Header/>
        <Form/>
      <Routes>
        <Route path="/" element={<Principal/>} />
        <Route path="/resultado" element={<CountrySeach/>} />
        <Route path="/region" element={<Region/>}/>
      </Routes>

    
    </div>
  )
}

export default App
