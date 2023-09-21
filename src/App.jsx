

import { Route, Routes } from "react-router-dom"
import CountrySeach from "./Components/CountrySeach"
import Form from './Components/Form'


import Header from './Components/Header.jsx'
import Region from "./Components/Region"
import GetCountry from "./Components/GetCountry"
import PaisDetalle from "./Components/PaisDetalle"
import BorderCountry from "./Components/BorderCountry"
function App() {



 

  return (
    <div className="dark:bg-bgVeryDarkBlue dark:duration-500 duration-500 bg-bgLightGray  pb-20 w-full ">
    
        <Header/>
        <Form/>
      <Routes>
        <Route path="/" element={<GetCountry/>} />
        <Route path="/resultado/:resultado" element={<CountrySeach/>} />
        <Route path="/region/:region" element={<Region/>}/>
        <Route path='/resultado/:resultado'element={<PaisDetalle/>}/>
        <Route path="/border/:borde" element={<BorderCountry/>}/>
      </Routes>

    
    </div>
  )
}

export default App
