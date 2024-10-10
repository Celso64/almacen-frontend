import React from "react";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="top-bar_container">
      <div className="top-bar_flecha">
        <Link to={".."}>
          <img src="./flecha-izquierda.png" width={"48px"}></img>
        </Link>
      </div>
      <h1 className="top-bar_title">Almacen de Peliculas</h1>
    </div>
  );
}
