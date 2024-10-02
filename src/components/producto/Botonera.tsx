import { useContext } from "react";
import { ContextoID } from "../../App";
import "./botones.css";

interface BotoneraProps {
  total: number;
  ids: number[];
  handleCalcular: (tarjeta: number) => void;
  calculoValido: boolean;
  handleVender: (tarjeta: number) => void;
}

export default function Botonera({
  total,
  calculoValido,
  handleCalcular,
  ids,
  handleVender,
}: BotoneraProps) {
  const { idTarjeta } = useContext(ContextoID);

  return (
    <div className="botones_container">
      <div>{total !== 0 && calculoValido ? <h3>Total: ${total}</h3> : ""}</div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => handleCalcular(idTarjeta)}
          disabled={ids.length === 0}
          className="simple_button_sub"
        >
          Calcular Total
        </button>
        <button
          onClick={() => handleVender(idTarjeta)}
          disabled={ids.length === 0}
          className="simple_button_sub"
        >
          Comprar
        </button>
      </div>
    </div>
  );
}
