import ListaProductos from "./components/producto/ListaProductos";
import ListaDescuentos from "./components/descuento/ListaDescuentos";
import Cliente from "./components/cliente/Cliente";
import "./App.css";
import React, { createContext, useState } from "react";

type tarjetaID = {
  idTarjeta: number;
  setIdTarjeta: React.Dispatch<React.SetStateAction<number>>;
};

const defaultTarjetaID: tarjetaID = {
  idTarjeta: 0,
  setIdTarjeta: () => "",
};

export const ContextoID = createContext<tarjetaID>(defaultTarjetaID);

function App() {
  const [idTarjeta, setIdTarjeta] = useState<number>(0);

  return (
    <div className="main_container">
      <ContextoID.Provider value={{ idTarjeta, setIdTarjeta }}>
        <div className="panel1">
          <Cliente />
        </div>
        <div className="panel2">
          <ListaProductos />
        </div>
        <div className="panel3">
          <ListaDescuentos />
        </div>
      </ContextoID.Provider>
    </div>
  );
}

export default App;
