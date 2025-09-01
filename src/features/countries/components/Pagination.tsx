type Props = {

    page: number;
    totalPages: number;
    canPrev: boolean;
    canNext: boolean;
    onPrev: () => void;
    onNext: () => void;
    
}



const Pagination: React.FC<Props> = ({ page, totalPages, canPrev, canNext, onPrev, onNext}) => {

    if (totalPages <= 1) return null;


    return (
        <div className="flex justify-center items-center gap-4 w-full my-4">
            <button onClick={onPrev} disabled={!canPrev} className="px-4 py-2 dark:bg-bgBlue-default bg-blue-gray text-white rounded  hover:bg-DarkBlue cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-none">
                Anterior
            </button>
            <span>Página {page + 1} de {totalPages}</span>
            <button onClick={onNext} disabled={!canNext} className="px-4 py-2 text-white rounded   hover:bg-DarkBlue cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-none dark:bg-bgBlue-default bg-blue-gray">
                Siguiente
            </button>
        </div>
    );
}

export default Pagination;