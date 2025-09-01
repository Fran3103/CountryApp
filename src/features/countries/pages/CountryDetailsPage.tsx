import React, { useEffect, useState } from "react";
import type { CountryDetail } from "../types/index";
import { getCountriesByCodes, getCountryDetailByName } from "../api/index";
import { Link, useParams } from "react-router-dom";
import { DetailSkeleton } from "../../shared/components/Skeletor";

const CountryDetailsPage: React.FC = () => {
  const [detail, setDetail] = useState<CountryDetail | null>();

  const { country } = useParams<{ country?: string }>();
  const decoded = decodeURIComponent(country ?? "");
  const [borders, setBorders] = useState<Array<{ code: string; name: string }>>(
    []
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ctrl = new AbortController();
    let alive = true;

    (async () => {
      try {
        const data = await getCountryDetailByName(decoded.trim(), ctrl.signal);

        if (!alive) return;
        const countryDetail = data ? data[0] : null;
        setDetail(countryDetail);

        const bordersCodes = data[0]?.borders ?? [];

        if (bordersCodes.length > 0) {
          const borderCountries = await getCountriesByCodes(
            bordersCodes,
            ctrl.signal
          );
          if (!alive) return;
          setBorders(borderCountries);
        } else {
          setBorders([]);
        }
      } catch (e: unknown) {
        if (e instanceof DOMException && e.name === "AbortError") return;
        if (!alive) return;
        setError(e instanceof Error ? e.message : "Error desconocido");
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
      ctrl.abort();
    };
  }, [decoded]);

  console.log(loading);

  if (error) return <p className="text-red-600">{error}</p>;

  if (loading) return <DetailSkeleton />;

  if (!detail) {
    return (
      <main className="p-8 max-w-6xl mx-auto">
        <nav>
          <Link
            to="/"
            className="px-6 py-2 shadow-md rounded-md bg-bgBlue-default dark:bg-bgBlue-dark"
          >
            Back
          </Link>
        </nav>
        <p className="mt-8">País no encontrado.</p>
      </main>
    );
  }

  return (
    <main className="p-8 flex flex-col gap-8 max-w-6xl mx-auto dark:text-blue-white text-blue-default">
      <nav>
        <Link
          to="/"
          className="px-6 py-2 shadow-md rounded-md bg-bgBlue-default dark:bg-bgBlue-dark"
        >
          Back
        </Link>
      </nav>

      <article className="flex flex-col gap-8 md:flex-row md:justify-between">
        <figure>
          <img
            src={detail?.flagPng}
            alt={detail?.flagAlt ?? `Bandera de ${detail?.name ?? ""}`}
            className="shadow-lg"
          />
        </figure>

        <div className="flex flex-col gap-4">
          <h1 className="font-bold mt-6">{detail?.name}</h1>

          <section aria-labelledby="info-general">
            <h2 id="info-general" className="sr-only">
              General Information
            </h2>

            <dl className="grid gap-3 md:grid-cols-3">
              <div>
                <dt className="font-semibold">Native name</dt>
                <dd className="opacity-80">{detail?.name}</dd>
              </div>
              <div>
                <dt className="font-semibold">Population</dt>
                <dd className="opacity-80">{detail?.population}</dd>
              </div>
              <div>
                <dt className="font-semibold">Región</dt>
                <dd className="opacity-80">{detail?.region}</dd>
              </div>
              <div>
                <dt className="font-semibold">Subregión</dt>
                <dd className="opacity-80">{detail?.subregion ?? "—"}</dd>
              </div>
              <div>
                <dt className="font-semibold">Capital</dt>
                <dd className="opacity-80">{detail?.capital}</dd>
              </div>
              <div>
                <dt className="font-semibold">Top Level Domain</dt>
                <dd className="opacity-80">{detail?.topLevelDomain}</dd>
              </div>
              <div>
                <dt className="font-semibold">Currencies</dt>
                <dd className="opacity-80">{detail?.currencies}</dd>
              </div>
              <div>
                <dt className="font-semibold">Languages</dt>
                <dd className="opacity-80">{detail?.languages}</dd>
              </div>
            </dl>
          </section>

          <section className="mt-8">
            <h2 className="font-semibold">Border Countries</h2>

            {borders.length === 0 ? (
              <span>—</span>
            ) : (
              <ul className="mt-4 flex flex-wrap gap-4">
                {borders.map((b) => (
                  <li
                    key={b.code}
                    className="px-6 py-2 shadow-md rounded-md bg-bgBlue-default dark:bg-bgBlue-dark"
                  >
                    <Link to={`/${encodeURIComponent(b.name)}`}>{b.code}</Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </article>
    </main>
  );
};

export default CountryDetailsPage;
