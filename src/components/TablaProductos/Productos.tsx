import { Producto } from "../../model/Producto";
import "./style.css";

interface ProductosProps {
  productos: Producto[];
  handleSelect: (id: number) => void;
}

export default function Productos({ productos, handleSelect }: ProductosProps) {
  return (
    <div>
      <table className="update_productos_table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Marca</th>
            <th>Categoria</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p: Producto) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>{p.descripcion || ""}</td>
              <td>{p.precio}</td>
              <td>{p.marca}</td>
              <td>{p.categoria}</td>
              <td>
                <button onClick={() => handleSelect(p.id)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
