import { getClientes } from "../utils/apiFake";
import { Cliente } from "../model/Cliente";

export default function ListaClientes() {
  const clientes: Cliente[] = getClientes();
  return (
    <div>
      <h2>Clientes ({clientes.length})</h2>
    </div>
  );
}
