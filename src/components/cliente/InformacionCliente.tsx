import { Cliente } from "../../model/Cliente";
import ListadoTarjetas from "./ListadoTarjetas";

interface InformacionClienteProps {
  cliente?: Cliente;
}

export default function InformacionCliente({
  cliente,
}: InformacionClienteProps) {
  return (
    <div>
      {cliente ? (
        <div>
          <h3>Datos:</h3>
          <p>
            <strong>Nombre: </strong> {cliente.nombre}
          </p>
          <h4>
            <strong>Tarjetas({cliente.tarjetas.length}):</strong>
          </h4>
          <ListadoTarjetas tarjetas={cliente.tarjetas} />
        </div>
      ) : (
        <p>No hay cliente seleccionado</p>
      )}
    </div>
  );
}
