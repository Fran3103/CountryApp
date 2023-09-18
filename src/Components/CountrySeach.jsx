// eslint-disable-next-line react/prop-types

import { useEffect, useState } from "react"
import PaisDetalle from "./PaisDetalle"
import { v4 as uuidv4 } from 'uuid'

const CountrySeach = () => {
  uuidv4()
  const [paisResultado, setPaisResultado] = useState([])

  let query = new URLSearchParams(window.location.search)
  let resultado = query.get('search')
 
  const apiCountry = `https://restcountries.com/v3.1/name/${resultado}`

  useEffect(() => {
    fetch(apiCountry)
      .then(resp => resp.json())
      .then(data => {
        const pais = data
        setPaisResultado(pais)
        
      })
  }, [apiCountry])



  return (
    <div className="bg-bgLightGray dark:bg-bgVeryDarkBlue duration-500 dark:duration-500">
      
      
        
       {paisResultado.map(country => {
        return(
          <PaisDetalle
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

export default CountrySeach