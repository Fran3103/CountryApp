
// import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

import { v4 as uuidv4 } from 'uuid'

import { useNavigate } from "react-router-dom";

const Form = () => {
    uuidv4()
//   const [search, setSearch] = useState('')
//   const [region, setregion] = useState('')


const history = useNavigate()
    const onSubmit = e =>{
        e.preventDefault()
        const busqueda = e.target.busqueda.value.trim()
        if(busqueda.length === 0){
            console.log('ingrese pais')
            return
        }else{
            e.target.busqueda.value=''
            history(`/resultado?search=${busqueda}`)
            
        }
        // setSearch(e.target.busqueda.value)
        
    }
    console.log(history)
    // const regionCountry = `https://restcountries.com/v3.1/region/${region}`
    
    // const onChange = e => {
    //     setregion(e.target.value)
    // }
    
    // const nameCountry = `https://restcountries.com/v3.1/name/${search}`
    // useEffect(() => {
        
    //   fetch(nameCountry)
    //     .then(resp => resp.json())
    //     .then((data) => {
           
    //         setPais(data)
    //     })
    // }, [nameCountry])


    // useEffect(() => {
       
    //         fetch(regionCountry)
    //         .then(resp => resp.json())
    //         .then(data => {
    //             setregion(data)
    //          })
    // }, [regionCountry])
   


    return (
    <div className="max-w-[1440px] mt-12 m-auto px-2">
        <form  onSubmit={onSubmit} className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center justify-center items-start  gap-12 ml-4 sm:ml-0">
            <div className="relative bg-DarkBlue w-auto duration-500">
                <button type="submit" className="absolute top-4 left-2"><BsSearch/></button>
                <input type="text" name="busqueda" placeholder="Seach for a country" className="pl-9 p-3 shadow-lg dark:bg-DarkBlue dark:text-bgLightGray duration-500 " />
            </div>
            <div >
                <select name="region" className=" p-3 shadow-lg dark:bg-DarkBlue dark:text-bgLightGray duration-500" >
                   
                    <option value="All"  className="hidden">Filter by Region </option>
                    <option value="Africa" className="mt-3">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europa">Europa</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </form>

        
        


    </div>
  )
}

export default Form