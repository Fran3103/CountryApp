import { useCallback, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import CountryRegion from "./CountryRegion"
import { useParams } from "react-router-dom"

const Region = () => {

    uuidv4()
    
    
    // let query = new URLSearchParams(window.location.search)
    // let resultado = query.get('region')
    
    let { region} = useParams();

    const Api = `https://restcountries.com/v3.1/region/${region}`
    const [countrys, setcountrys] = useState([])
   
    
    const getRegion = useCallback(()=>{
      
      fetch(Api)
      .then((resp)=> resp.json())
      .then((data) =>{
         const datos = data
         setcountrys(datos)
        }
        )
        .catch(console.error())
    },[Api]);


    useEffect(() => {
      
      getRegion()
    }, [getRegion])
    

  return (
    <div className=" flex flex-wrap xl:grid xl:grid-cols-4 place-items-center w-full justify-center items-center gap-16 max-w-[1440px] m-auto duration-500">
    {countrys && 
        countrys.map((country)=>{
            return (
                <CountryRegion
                    key={uuidv4()}
                    name={country.name.common}
                    capital={country.capital}
                    region={country.region}
                    lenguages={country.lenguages}
                    population={country.population}
                    timezone={country.timezone}
                    coat={country.coatOfArms.png}
                    flag={country.flags.png}
                    flagAlt={country.flags.alt}
                />
            )
        })
     }
</div>
  )
}

export default Region