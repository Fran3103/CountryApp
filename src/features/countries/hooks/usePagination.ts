import {  useEffect, useMemo, useState } from "react";



export function usePagination<T>(items: T[], pageSize = 20, initalPage = 0) {


      const [page, setPage] = useState(initalPage);
   

    // Cuando cambia la lista, reseteamos la página a la primera
    useEffect(() => {
      setPage(0);
    }, [items]);

    const totalPages = Math.ceil(items.length / pageSize);

    const pageItems = useMemo(() => {
        const start = page * pageSize;
        return items.slice(start, start + pageSize);
    }, [items, page, pageSize]);


    const canPrev = page > 0;
    const canNext = page < totalPages - 1;

    const prev = () => setPage((p) => (p > 0 ? p - 1 : p));
  const next = () => setPage((p) => (p < totalPages - 1 ? p + 1 : p));
  const goTo = (n: number) =>
    setPage((p) => (Number.isFinite(n) ? Math.min(Math.max(n, 0), totalPages - 1) : p));



  return { pageItems, page, totalPages, canPrev, canNext, prev, next, goTo };

}