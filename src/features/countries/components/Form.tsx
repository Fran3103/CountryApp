import { useState } from "react";
import Filter from "./Filter";
import Search from "./Search";
import CountriesList from "./CountriesList";

const Form = () => {
  const [country, setCountry] = useState<string>("");

  const [region, setRegion] = useState<string>("");

  const reset = (): void => {
    setCountry("");
  };

  return (
    <>
      <div className="flex justify-between items-center p-4 py-6 md:p-8 max-w-7xl mx-auto    dark:text-blue-white text-blue-default">
        <Search value={country} onChange={setCountry} />
        <Filter value={region} onChange={setRegion} reset={reset} />
      </div>
      <CountriesList name={country} region={region} />
    </>
  );
};

export default Form;
