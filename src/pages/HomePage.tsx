import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Listado de Enlaces</h1>
      <ul>
        <li>
          <Link to={"primera"}>TP 1,2,3 y 4</Link>
        </li>
        <li>
          <Link to={"segunda"}>TP 5 - CONCURRENCIA</Link>
        </li>
        <li>
          <Link to={"tercera"}>TP 6 - REDIS</Link>
        </li>
      </ul>
    </div>
  );
}
