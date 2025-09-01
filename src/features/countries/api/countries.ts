import type { RestCountry, CCard, CountryDetail } from "../types/countries.types";


const BASE = "https://restcountries.com/v3.1"

const FIELDS = [
    "name",
  "flags",
  "cca2",
  "cca3",
  "capital",
  "region",
  "subregion",
  "population",

].join(",")

const DETAIL_FIELDS = [
  "name","flags","cca3","capital","region","population",
  "subregion","languages","currencies","tld","borders"
].join(",");


function toCard(c: RestCountry): CCard {
    return {
        id: c.cca3,
        name: c.name.common,
        capital: c.capital?.[0] ?? "—",
        region: c.region,
        population: c.population,
        flagPng: c.flags.png,
        flagAlt: c.flags.alt,
      
    }
}

function toDetail(c: RestCountry): CountryDetail {
  return {
    ...toCard(c),
    subregion: c.subregion,
    topLevelDomain: c.tld?.[0] ?? "—",
    currencies: c.currencies ? Object.values(c.currencies).map(x => x.name).join(", ") : "—",
    languages: c.languages ? Object.values(c.languages).join(", ") : "—",
    tld: c.tld ?? [],
    borders: c.borders ?? [],
  };
}
export async function getAllCountries(signal?: AbortSignal): Promise<CCard[]>{
    const res = await fetch(`${BASE}/all?fields=${FIELDS}`,{signal})
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data: RestCountry[] = await res.json()

    return data.map(toCard)
}


export async function getCountryByName(name: string, signal?: AbortSignal) {

    const res = await fetch(`${BASE}/name/${encodeURIComponent(name)}?fullText=true&fields=${FIELDS}`,{signal})
    if (res.status === 404) return [];
    if(!res.ok) throw new Error(`HTTP ${res.status}`)
    

    const data: RestCountry[]= await res.json()

    return data.map(toCard)

    
}

export async function getAllCountriesByRegion(region:string, signal?:AbortSignal): Promise<CCard[]>{
    const res = await fetch(`${BASE}/region/${region}`,{signal})
    if(!res.ok) throw new Error (`HTTP ${res.status}`)

    const data: RestCountry[] = await res.json()
    return data.map(toCard)
}

export async function searchCountriesByName (
    name:string, signal?: AbortSignal
): Promise<CCard[]>{

    if(!name.trim()) return getAllCountries(signal)

    const url = `${BASE}/name/${encodeURIComponent(name)}?fields=${FIELDS}`
    const res = await fetch(url, {signal})
    if(res.status === 404) return []
    if(!res.ok) throw new Error (`HTTP ${res.status}`)
    
    const data: RestCountry[]= await res.json()
    return data.map(toCard)
}


export async function getCountryDetailByName(name: string, signal?: AbortSignal): Promise<CountryDetail[]> {
  const res = await fetch(`${BASE}/name/${encodeURIComponent(name)}?fullText=true&fields=${DETAIL_FIELDS}`, { signal });
  if (res.status === 404) return [];
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = (await res.json()) as RestCountry[];
  return data.map(toDetail);
}


export async function getCountriesByCodes(
  codes: string[],
  signal?: AbortSignal
): Promise<Array<{ code: string; name: string }>> {
  if (!codes.length) return [];

  const url = `${BASE}/alpha?codes=${codes.map(encodeURIComponent).join(",")}&fields=name,cca3`;
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data: RestCountry[] = await res.json();
  
  return data.map((c) => ({ code: c.cca3, name: c.name.common }));
}


