import { Producto } from "../../model/Producto";
import { formatearNombre, formatearNumero } from "../../utils/Formateador";

interface TablaProductosProps {
  productos: Producto[];
  handleCheckBox: (id: number) => void;
}

export default function TablaProductos({
  productos,
  handleCheckBox,
}: TablaProductosProps) {
  return (
    <div>
      <table className="product_table">
        <thead>
          <tr>
            <th></th>
            <th>Producto</th>
            <th>Categoria</th>
            <th>Marca</th>
            <th>Descripcion</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td>
                <input
                  type="checkbox"
                  name={"s_" + p.id}
                  id={"s_" + p.id}
                  onChange={() => handleCheckBox(p.id)}
                />
              </td>
              <td>{p.nombre}</td>
              <td>{formatearNombre(p.marca)}</td>
              <td>{p.categoria}</td>
              <td>{p.descripcion ? p.descripcion : "-"}</td>
              <td>${formatearNumero(p.precio)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
