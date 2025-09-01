export interface RestCountry {
    name: { common: string; official: string; nativeName?: Record<string, { official: string; common: string }> };
  flags: { png: string; svg: string; alt?: string };
  cca2: string;
  cca3: string;
  capital?: string[];
  region: string;
  subregion?: string;
  population: number;
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol: string }>;
  tld?: string[];
  borders?: string[];
   
}


export type CCard = {
  id: string;
  name: string;
  capital: string;
  region: string;
  population: number;
  flagPng: string;
  flagAlt?: string;
};

export type CountryDetail = CCard & {
  subregion?: string;
  topLevelDomain: string;   // derivado de tld[0]
  currencies: string;       // “Euro, Dólar…”
  languages: string;        // “Español, Inglés…”
  tld?: string[];
  borders?: string[];       // CCA3 codes
};

