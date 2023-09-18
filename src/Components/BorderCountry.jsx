import { useEffect, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'
import BordeCountry from "./BordeCountry"
const BorderCountry = () => {


    uuidv4()
   
    
    let query = new URLSearchParams(window.location.search)
    let resultado = query.get('border')
    
    const Api = `https://restcountries.com/v3.1/alpha/${resultado}`
    const [countrys, setcountrys] = useState([])
   

    useEffect(() => {
        fetch(Api)
          .then(resp => resp.json())
          .then(data => {
            const pais = data
            setcountrys(pais)
            console.log(data)
          })
      }, [Api])


      console.log(countrys)
  return (
    <div className="bg-bgLightGray dark:bg-bgVeryDarkBlue duration-500 dark:duration-500">

    {countrys.map(country => {
        return(
            <BordeCountry
            key={country.name.common}
            name={country.name.common}
            capital={country.capital}
            region={country.region}
            languages={country.languages}
            population={country.population}
            official={country.name.official}
            
            flag={country.flags.png}
            flagAlt={country.flags.alt}
            subregion={country.subregion}
            tld={country.tld}
            currencies={country.currencies}
            borders={country.borders}
            />
            )
        })}
        </div>
  )
}

export default BorderCountry