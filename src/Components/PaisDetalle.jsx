import { Link } from "react-router-dom"


// eslint-disable-next-line react/prop-types
const PaisDetalle = ({name ,region ,languages, population ,official, capital, flag, flagAlt,tld,currencies,subregion,borders}) => {

// eslint-disable-next-line react/prop-types
const border = borders?.map((borde)=>{return(
   <Link key={borde} to={`/border?border=${borde}`}>
    <button  className=" bg-bgLightGray text-base rounded-md shadow-xl px-6 py-2 dark:bg-DarkBlue dark:text-bgLightGray" >
        {borde}
    </button>
   </Link>

    )})
    const valor = Object.values(currencies)
    const langua = Object.values(languages)

   const  current = valor.map(val => val.name)  

  return (

      <div className="bg-bgLightGray  dark:bg-bgVeryDarkBlue duration-500  dark:duration-500 h-screen w-full m-auto max-w-[1440px]">
      <Link to='/'><button className="mt-5 mb-6 lg:mt-24 lg:-mb-6 ml-12 bg-bgLightGray px-9 py-2 dark:text-DarkGray shadow-xl dark:bg-DarkBlue text-DarkBlue rounded-md">Back</button></Link>
      <div className="flex flex-col md:flex-row md:gap-6 lg:gap-24 justify-center items-center mt-2 w-full px-7 ">
      <img src={flag} alt={flagAlt} className="lg:w-[900px] ml-0"/>
      <div className="flex flex-col justify-start  items-start w-full gap-4 mt-12 lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:text-xl">
      <h2 className="text-DarkBlue dark:text-bgLightGray text-2xl font-bold lg:grid lg:col-start-1 lg:col-end-2 lg:mt-14 lg:text-5xl">{name}</h2>
      <div className="flex flex-col gap-2  lg:col-start-1 lg:col-end-2 ">
      <p className="text-VeryDarkGray font-semibold dark:text-DarkGray">Native Name: <span className="text-DarkGray font-normal dark:text-bgLightGray dark:font-light">{official}</span></p>
      <p className="text-VeryDarkGray font-semibold dark:text-DarkGray">Population: <span className="text-DarkGray font-normal dark:text-bgLightGray dark:font-light">{population}</span></p>
      <p className="text-VeryDarkGray font-semibold dark:text-DarkGray">Region: <span className="text-DarkGray font-normal dark:text-bgLightGray dark:font-light">{region}</span></p>
      <p className="text-VeryDarkGray font-semibold dark:text-DarkGray">Sub Region: <span className="text-DarkGray font-normal dark:text-bgLightGray dark:font-light">{subregion}</span></p>
      <p className="text-VeryDarkGray font-semibold dark:text-DarkGray"> Capital: <span className="text-DarkGray font-normal dark:text-bgLightGray dark:font-light">{capital}</span></p>
                  
      </div>
      <div className="flex flex-col gap-2">
      <p className="text-VeryDarkGray font-semibold dark:text-DarkGray">Top Level Domian: <span className="text-DarkGray font-normal dark:text-bgLightGray dark:font-light">{tld}</span></p>
      <p className="text-VeryDarkGray font-semibold dark:text-DarkGray">Currencies: <span className="text-DarkGray font-normal dark:text-bgLightGray dark:font-light">{current}</span></p>
      <p className="text-VeryDarkGray font-semibold dark:text-DarkGray">Lenguages: <span className="text-DarkGray font-normal dark:text-bgLightGray dark:font-light">{langua}</span></p>
      </div>
      <div className="mt-5 lg:col-start-1 lg:col-end-3 flex justify-start items-center">
      <p className="text-VeryDarkGray font-semibold lg:mr-3 dark:text-DarkGray">Border Countries:</p>
      <div className="flex flex-wrap gap-2 text-center  m-auto justify-center items-center  mr-12 mt-4 lg:flex-row lg:m-0">
      
      {border && border}
      
      
      </div>
      </div>
      </div>
      </div>
      
      
      
      </div>
    
      )
}

export default PaisDetalle