import { Venta } from "@models/Venta";

interface VentasProps {
  ventas: Venta[];
}

export default function ListadoVentas({ ventas }: VentasProps) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((v: Venta) => (
            <tr key={v.id}>
              <td>{v.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
