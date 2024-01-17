import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { HeroesApp } from "./HeroesApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Se agrega BrowserRouter a toda la app */}
    <BrowserRouter>
      {/* Se renderiza la app principal */}
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>
);

// Ruta para bash
// Documents/Workspace/Courses/React/ejercicios/07-heroes-spa/
