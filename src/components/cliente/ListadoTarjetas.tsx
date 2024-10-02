import { useContext } from "react";
import { Tarjeta } from "../../model/Tarjeta";
import { formatearNombre, formatearNumero } from "../../utils/Formateador";
import { ContextoID } from "../../App";

interface ListadoTarjetasProps {
  tarjetas: Tarjeta[];
}

export default function ListadoTarjetas({ tarjetas }: ListadoTarjetasProps) {
  const { idTarjeta, setIdTarjeta } = useContext(ContextoID);

  return (
    <table className="product_table">
      <thead>
        <tr>
          <th></th>
          <th>Marca</th>
          <th>Fondos</th>
          <th>Numero</th>
        </tr>
      </thead>
      <tbody>
        {tarjetas.map((t) => (
          <tr key={t.id}>
            <td>
              <input
                type="radio"
                name="select_id_tarjeta"
                checked={idTarjeta === t.id}
                onChange={() => setIdTarjeta(t.id)}
                value={t.id}
              />
            </td>
            <td>{formatearNombre(t.marca)}</td>
            <td>${formatearNumero(t.fondos)}</td>
            <td>{t.numero}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
