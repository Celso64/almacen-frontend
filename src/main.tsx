import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1 style={{ textAlign: "center" }}>Almacen de Peliculas</h1>
    <App />
  </StrictMode>
);
