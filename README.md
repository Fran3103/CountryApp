Country Explorer (React + TypeScript + Vite)

Explorador de países usando la API de REST Countries v3.1. Permite buscar por nombre, filtrar por región, paginación en la lista, y ver detalle del país (bandera, datos clave y países limítrofes). Incluye dark mode persistente y skeleton loaders.

✨ Características

🔎 Búsqueda por nombre (client-side + abort de requests)

🌍 Filtro por región: Africa, Americas, Asia, Europe, Oceania, Antarctic

📄 Paginación client-side (20 por página)

🧭 Detalle del país con:

bandera, población, capital, región/subregión, dominios, monedas e idiomas

países limítrofes (muestra CCA3, navega por nombre)

🌓 Dark mode (persistencia en localStorage y respeta prefers-color-scheme)

🧱 Skeletons para lista y detalle

♿ Semántica accesible: main, article, section, dl/dt/dd

🧩 Arquitectura feature-first y tipos estrictos en TypeScript

🧰 Stack

React 18 + Vite

TypeScript

Tailwind CSS (dark mode class)

React Router DOM (rutas + lazy loading con Suspense)

MUI v6 (opcional; inputs como TextField)

REST Countries v3.1

🚀 Empezar
# Requisitos: Node 18+ (recomendado), npm 9+
npm i
npm run dev


Scripts útiles:

npm run dev        # desarrollo
npm run build      # build producción
npm run preview    # previsualizar build
npm run lint       # lint

🗂️ Estructura
src/
  app/
    routes.tsx                 # rutas (lazy + Suspense)
  features/
    countries/
      api/
        countries.ts           # llamadas REST Countries v3.1
      components/
        CountryCard.tsx
        CountriesList.tsx
        DetailsView.tsx
        Filter.tsx
        Search.tsx
      hooks/
        useCountries.ts
      pages/
        CountriesPage.tsx
        CountryDetailsPage.tsx
      types/
        countries.types.ts
        index.ts               # barrel de tipos
  shared/
    components/
      Pagination.tsx
      Skeletons.tsx            # CountriesGridSkeleton / CountryCardSkeleton
      DetailSkeleton.tsx
    hooks/
      usePagination.ts
      useTheme.ts              # toggle de tema (dark/light)
    lib/
      http.ts                  # helpers fetch/buildUrl/getJson (opcional)
  App.tsx
  main.tsx
  index.css


Sugerido: habilitar alias en tsconfig.json/vite.config.ts para @/….

🌐 API (REST Countries v3.1)

Lista (tarjetas): campos livianos
name,flags,cca3,capital,region,population

Detalle: campos completos
name,flags,cca3,capital,region,population,subregion,languages,currencies,tld,borders

Endpoints usados:

GET /v3.1/all?fields=<CARD_FIELDS>

GET /v3.1/name/{name}?fullText=true&fields=<DETAIL_FIELDS>

GET /v3.1/region/{region}?fields=<CARD_FIELDS>

GET /v3.1/alpha?codes=ARG,BRA&fields=name,cca3

Nota: en v3.1 no existe topLevelDomain; se usa tld y se deriva el primer valor para mostrar.

🌓 Dark mode

Configurado con darkMode: 'class' en tailwind.config.js

Script en index.html para evitar “flash” y respetar preferencia del sistema

Hook useTheme() para alternar y persistir

Si usás MUI, podés envolver con ThemeProvider y palette.mode para sincronizar colores

🦴 Skeletons

Lista: CountriesGridSkeleton (cantidad configurable; usar count=20 para matchear paginación)

Detalle: DetailSkeleton

Clases Tailwind con animate-pulse y soporte para dark:.

🔧 Calidad

ESLint + reglas para TS/React

Tipos: RestCountry, CountryCard (lista), CountryDetail (detalle)

Efectos con AbortController y guardas alive para evitar setState en unmounted

Semántica accesible y etiquetas correctas

🚢 Deploy

Vercel/Netlify: zero-config para Vite

GitHub Pages: si publicás en subruta, ajustá base en vite.config.ts

🗒️ Notas / Próximos pasos

Agregar debounce a la búsqueda (200–300 ms)

Cache de requests (TanStack Query) si el proyecto crece

ErrorBoundary global

Tests de hooks y componentes clave

📄 Licencia

MIT — usá/ adapta libremente.
