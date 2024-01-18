import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  // ! Este es un custom hook "useNavigate"
  const navigate = useNavigate();
  const onLogOut = () => {
    // Se le pasa como parametro la ruta a donde se redirije y el replace para que no pueda volver con flecha
    navigate("/login", { replace: true });
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? " active " : ""}`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? " active " : ""}`
            }
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? " active " : ""}`
            }
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">Luis Matus</span>
          <button
            className=" nav-item nav-link btn btn-outline-secondary"
            onClick={onLogOut}
          >
            Salir
          </button>
        </ul>
      </div>
    </nav>
  );
};
