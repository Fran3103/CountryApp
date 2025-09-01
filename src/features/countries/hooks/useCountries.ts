import type { CCard } from "../types/index";
import {
  getAllCountries,
  getAllCountriesByRegion,
  searchCountriesByName,
} from "../api/index";
import { useEffect, useState } from "react";

type Args = { name?: string; region?: string };

export function useCountries  ({name= "", region = ""} : Args)  {
   const [list, setList] = useState<CCard[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ctrl = new AbortController();
    let alive = true;

    setLoading(true);
    setError(null);

    // inmediatamente Invoked Function Expression (IIFE)
    // esta función se define y se ejecuta inmediatamente
    // para poder usar async/await dentro de useEffect
    // y evitar problemas con la función async directa
    // que retorna una promesa
    // 
    (async () => {
      try {
        const q = name.trim();
        const r = region.trim().toLowerCase();

        let data: CCard[];

        if (q) {
            data = await searchCountriesByName(q, ctrl.signal)
        } else if (r) {  data = await getAllCountriesByRegion(r, ctrl.signal)
        } else {
          data = await getAllCountries(ctrl.signal);
        }

        if (!alive) return;
        setList(data);
      } catch (e: unknown) {
        if (e instanceof DOMException && e.name === "AbortError") return;
        if (!alive) return;
        setError(e instanceof Error ? e.message : "Error desconocido");
      } finally {
        if (alive) setLoading(false);
      }
    })();

   
    

    return () => {
        // alive se usa para evitar setState en un componente desmontado
        // si la petición tarda más que el tiempo de vida del componente
        // y el controlador de abortos para cancelar la petición fetch
        // si el componente se desmonta antes de que la petición termine
        // evitando así posibles fugas de memoria

      alive = false;
      ctrl.abort();
    };
  }, [name, region]);

  return { list, loading, error };
}

export default useCountries