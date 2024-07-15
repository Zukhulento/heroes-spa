import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

// ? Aquí ya van las primeras rutas, en este caso login y todas las libres
// ? también se hace referencia a que si no se encuentran una ruta específica
// ? se envía a HeroesRoutes

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Rutas públicas */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        {/* Ruta en caso de no especificar */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
        {/* <Route path="/*" element={<HeroesRoutes />} /> */}
      </Routes>
    </>
  );
};
