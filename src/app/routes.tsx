import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Form from "../features/countries/components/Form";
import {
  CountriesGridSkeleton,
  DetailSkeleton,
} from "../features/shared/components/Skeletor";

const CountryDetailsPage = lazy(
  () => import("../features/countries/pages/CountryDetailsPage")
);
export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<CountriesGridSkeleton count={20} />}>
            <Form />
          </Suspense>
        }
      />
      <Route
        path="/:country"
        element={
          <Suspense fallback={<DetailSkeleton />}>
            <CountryDetailsPage />
          </Suspense>
        }
      />
    </Routes>
  );
}
