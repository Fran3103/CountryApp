import { useEffect, useState } from "react"
import Country from "./Country"
import { v4 as uuidv4 } from 'uuid'


const GetCountry = () => {
    uuidv4()
    const [countrys, setcountrys] = useState([])


    const ApiCountry = 'https://restcountries.com/v3.1/all'
    useEffect(() => {
        fetch(ApiCountry)
            .then(resp => resp.json())
            .then((data) => {
                setcountrys( data)
                
            })
            .catch(console.error())

    }, [])
    

 

  return (
    <div className=" flex flex-wrap xl:grid xl:grid-cols-4 place-items-center w-full justify-center items-center gap-16 max-w-[1440px] m-auto duration-500">
        {countrys && 
            countrys?.map((country)=>{
                return (
                    <Country
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

export default GetCountry