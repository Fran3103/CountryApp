// src/shared/components/Skeletons.tsx
import React from "react";

const Block: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`animate-pulse rounded bg-gray-200 dark:bg-gray-700 ${className}`} />
);

export const CountryCardSkeleton: React.FC = () => (
  <article className="w-60 rounded-xs overflow-hidden shadow bg-blue-white dark:bg-bgBlue-dark dark:opacity-20">
    <Block className="w-full h-40" />
    <div className="p-4 space-y-2">
      <Block className="h-5 w-2/3" />
      <Block className="h-4 w-1/2" />
      <Block className="h-4 w-1/3" />
      <Block className="h-4 w-2/5" />
    </div>
  </article>
);

export const CountriesGridSkeleton: React.FC<{ count?: number }> = ({ count = 12 }) => (
  <div
    className="flex flex-wrap p-4 gap-6 justify-center items-center max-w-7xl mx-auto"
    aria-busy="true"
    aria-live="polite"
  >
    {Array.from({ length: count }).map((_, i) => (
      <CountryCardSkeleton key={i} />
    ))}
  </div>
);


export const DetailSkeleton: React.FC = () => (
  <div className="p-8 flex flex-col gap-8 max-w-6xl mx-auto dark:opacity-15">
    <Block className=" w-20 h-8  rounded-sm bg-blue-white dark:bg-blue-default" /> {/* botón Back */}
    <div className="flex flex-col gap-8 md:flex-row md:justify-between">
      <Block className="w-72  h-60  bg-blue-white dark:bg-blue-default" />
      <div className="flex flex-col gap-4 ">
        <Block className="h-7 w-2/3 " />
        <div className="grid gap-3 md:grid-cols-3 ">
          {Array.from({ length: 8 }).map((_, i) => (
            <Block key={i} className="bg-blue-white dark:bg-blue-default w-24 h-3" />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4  ">
          {Array.from({ length: 4 }).map((_, i) => (
            <Block key={i} className="inline-block h-8 w-24  bg-blue-white dark:bg-blue-default" />
          ))}
        </div>
      </div>
    </div>
  </div>
);
