// eslint-disable-next-line react/prop-types

import { useEffect, useState } from "react"
import PaisDetalle from "./PaisDetalle"
import { v4 as uuidv4 } from 'uuid'
import { useParams } from "react-router-dom"
import NoFound from "./NoFound"


const CountrySeach = () => {
  const [paisResultado, setPaisResultado] = useState()
  let { resultado} = useParams();
  uuidv4()
  const [actvivo, setActivo] = useState(false)
  setTimeout(() => {
    setActivo(true)
  }, 1000);
  // let query = new URLSearchParams(window.location.search)
  // let resultado = query.get('search')
console.log(resultado)
  
  useEffect(() => {
    // const apiCountry = `https://restcountries.com/v3.1/name/${resultado}`
  
    fetch(`https://restcountries.com/v3.1/name/${resultado}`)
    .then(resp => { 
      if (!resp.ok ){
        
        return  }
        return resp.json() })
    .then(data =>  setPaisResultado(data))
    
     
  }, [resultado])

  // if(paisResultado === undefined){
  //   Navigate('/')
  //   return
  // }
console.log(paisResultado)

  return (
    
    
    <div className="bg-bgLightGray dark:bg-bgVeryDarkBlue duration-500 dark:duration-500">
      
      {!paisResultado && <h3 className={actvivo ? 'hidden' : 'text-3xl m-auto h-[600px]'}>Loanding...</h3>}
      {paisResultado=== undefined && <NoFound/>}
      { paisResultado && paisResultado?.map(country => {
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