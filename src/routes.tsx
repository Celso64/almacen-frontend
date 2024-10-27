import HomePage from "./pages/HomePage";
import { createBrowserRouter } from "react-router-dom";
import PrimerPagina from "./pages/primer/PrimerPagina";
import SegundaPagina from "./pages/segunda/SegundaPagina";
import TerceraPagina from "pages/tercera/TerceraPagina";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/primera",
    element: <PrimerPagina />,
  },
  {
    path: "/segunda",
    element: <SegundaPagina />,
  },
  {
    path: "/tercera",
    element: <TerceraPagina />,
  },
]);
