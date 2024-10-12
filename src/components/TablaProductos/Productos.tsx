import { Producto } from "../../model/Producto";

interface ProductosProps {
  productos: Producto[];
  handleSelect: (id: number) => void;
}

export default function Productos({ productos, handleSelect }: ProductosProps) {
  return (
    <div>
      <table>
        <thead>
          <td>ID</td>
          <td>Nombre</td>
          <td>Descripcion</td>
          <td>Precio</td>
          <td>Marca</td>
          <td>Categoria</td>
          <td>Editar</td>
        </thead>
        <tbody>
          {productos.map((p: Producto) => (
            <tr>
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
