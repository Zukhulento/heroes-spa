import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { onLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const Login = () => {
    onLogin("Luis Matus");
    // Obteniendo la última página visitada
    const lastPath = localStorage.getItem("lastPath") || "/";
    navigate(lastPath, { replace: true });
  };
  return (
    <div className="container mt-5">
      <h1>Welcome to heroes search</h1>
      <hr />
      <button className="btn btn-primary" onClick={Login}>
        Entrar
      </button>
    </div>
  );
};
