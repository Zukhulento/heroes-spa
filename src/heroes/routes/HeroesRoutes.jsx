import { Navigate, Route, Routes } from "react-router-dom";
import { DCPage, HeroePage, MarvelPage, SearchPage } from "../pages";
import { Navbar } from "../../ui";
// ? Estas rutas ya son dentro de la app y sólo se puede acceder
// ? una vez iniciada la sesión
export const HeroesRoutes = () => {
  return (
    <>
    {/* Aquí ya tenemos sesión por lo que podemos agregar un navbar */}
      <Navbar />
      {/* Container para estilos y centrar */}
      <div className="container">
        <Routes>
          {/* Rutas privadas según sesión */}
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/dc" element={<DCPage />} />
          <Route path="/search" element={<SearchPage />} />
          {/* Este tipo de path es para cuando se hagan las busquedas */}
          {/* utiliza un hook para acceder al valor de la URL */}
          <Route path="/hero/:id" element={<HeroePage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
