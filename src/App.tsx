
import "./App.css";
import AppRoutes from "./app/routes";
import Header from "./features/countries/components/Header";

function App() {
  return (
    <div className="w-full">
        <Header />
        <AppRoutes />
    </div>
  );
}

export default App;
