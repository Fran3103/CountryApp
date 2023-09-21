import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const CountryRegion = ({name ,region , population , capital, flag, flagAlt}) => {
    return (
     
  
      
  
  
        <Link to={`/resultado/${name}`} >
      <div className="w-72  bg-gray-900 shadow-xl rounded-md mt-16 duration-500 hover:scale-110">

          <div className="w-full h-[144px] ">
      
              <img className="w-full h-full rounded-t-md " src={flag} alt={flagAlt}/>
              
  
          </div>
          <div className="p-5 bg-bgLightGray h-56 dark:bg-DarkBlue duration-500">
          <p className="text-2xl mb-5 dark:text-white  text-DarkBlue font-bold ">{name}</p>
              <p className="text-lg dark:text-white/70 text-DarkBlue font-semibold">Capital: <span className="text-lg dark:text-white/50 text-DarkGray font-normal">{capital}</span></p>
              <p className="text-lg dark:text-white/70 text-DarkBlue font-semibold">Region: <span className="text-lg text-DarkGray dark:text-white/50 font-normal">{region}</span></p>
           
              <p className="text-lg text-DarkBlue font-semibold dark:text-white/70">Population: <span className="text-lg text-DarkGray dark:text-white/50 font-normal">{population}</span></p>
          </div>
  
      </div>
        </Link>
    
    )
  }
  
  export default CountryRegion