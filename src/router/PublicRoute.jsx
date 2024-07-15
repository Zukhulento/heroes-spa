import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate } from "react-router-dom";

// En estas rutas se valida si el usuario está o no autenticado para que pueda acceder a las rutas
export const PublicRoute = ({ children }) => {
  // Aquí se valida si el usuario está autenticado o no
  const { logged } = useContext(AuthContext);
  //   Aquí también se podrían validar permisos
  return !logged ? children : <Navigate to="/marvel" />;
};
