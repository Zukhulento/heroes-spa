import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

// Se crea una función para inicializar el estado
const init = () => {
  // Se obtiene el usuario del localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  // La doble negación convierte el objeto a un booleano
  return {
    logged: !!user,
    user,
  };
};
export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);
  // Aquí se pueden definir las acciones que se pueden ejecutar
  const onLogin = (name = "") => {
    const user = {
      id: "ABC",
      name,
    };
    const action = {
      type: types.login,
      payload: user,
    };
    // Agregando en localStorage el usuario
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };
  const onLogout = () => {
    const action = {
      type: types.logout,
    };
    localStorage.removeItem("user");
    dispatch(action);
  };
  return (
    <AuthContext.Provider value={{ ...authState, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
