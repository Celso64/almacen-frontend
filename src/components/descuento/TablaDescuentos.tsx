import { Descuento } from "../../model/Descuento";
import {
  formatearDiasRestantes,
  formatearFecha,
  formatearNombre,
} from "../../utils/Formateador";

interface TablaDescuentosProps {
  descuentos: Descuento[];
}

export default function TablaDescuentos({ descuentos }: TablaDescuentosProps) {
  return (
    <table className="product_table">
      <thead>
        <tr>
          <td>Descuento</td>
          <td>Marca</td>
          <td>Tipo</td>
          <td>Desde</td>
          <td>Hasta</td>
          <td>Dias restantes</td>
        </tr>
      </thead>
      <tbody>
        {descuentos.map((d) => (
          <tr key={d.id}>
            <td>{d.porcentaje}</td>
            <td>{formatearNombre(d.marca)}</td>
            <td>{formatearNombre(d.tipo)}</td>
            <td>{formatearFecha(d.fechaInicio)}</td>
            <td>{formatearFecha(d.fechaFin)}</td>
            <td>{formatearDiasRestantes(d.diasRestantes)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
