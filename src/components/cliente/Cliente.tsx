import SelectorCliente from "./SelectorCliente";
import "./cliente.css";
import { useCliente } from "../../hooks/useCliente";
import InformacionCliente from "./InformacionCliente";

export default function Cliente() {
  const { cliente, setIdCliente } = useCliente();

  return (
    <div className="info_container">
      <h2>Elige un Cliente</h2>
      <SelectorCliente setId={setIdCliente} />
      <InformacionCliente cliente={cliente} />
    </div>
  );
}
