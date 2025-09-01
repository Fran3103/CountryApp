import Pagination from "./Pagination";
import { usePagination, useCountries } from "../hooks/index";
import CountryCard from "./CountryCard";
import { CountriesGridSkeleton } from "../../shared/components/Skeletor";

import { Link } from "react-router-dom";

type Props = { name?: string; region?: string };

const CountriesList: React.FC<Props> = ({ name = "", region = "" }) => {
  const { list, loading, error } = useCountries({ name, region });
  const { page, totalPages, canPrev, canNext, pageItems, prev, next } =
    usePagination(list, 20);

  if (error) return <p className="text-center text-red-500">Error: {error}</p>;


  return (
    <div className="flex flex-col w-full">
      {loading ? (
        <>
           <CountriesGridSkeleton count={20} />
    
        <Pagination
          page={page}
          totalPages={totalPages || 1}
          canPrev={false}
          canNext={false}
          onPrev={() => {}}
          onNext={() => {}}
        />
        </>
      ) : (
        <>
          <div className="flex flex-wrap p-4 gap-6 justify-center items-center max-w-7xl mx-auto dark:text-blue-white text-blue-default ">
            {pageItems.length === 0 ? (
              <p>No se encontraron datos</p>
            ) : (
              pageItems.map((c) => (
                <Link to={`/${encodeURIComponent(c.name)}`} key={c.id}>
                  <CountryCard country={c} />
                </Link>
              ))
            )}
          </div>

          <Pagination
            page={page}
            totalPages={totalPages}
            canPrev={canPrev}
            canNext={canNext}
            onPrev={prev}
            onNext={next}
          />
        </>
      )}
    </div>
  );
};

export default CountriesList;
