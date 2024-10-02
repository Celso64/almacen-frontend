import "./listaProducto.css";
import { useProductos } from "../../hooks/useProductos";
import { useCarrito } from "../../hooks/useCarrito";
import TablaProductos from "./TablaProductos";
import Botonera from "./Botonera";

export default function ListaProductos() {
  const {
    ids,
    total,
    calculoValido,
    handleCheckboxChange,
    handleCalcular,
    handleVender,
  } = useCarrito();

  const productos = useProductos();

  return (
    <div>
      <h2>Productos ({productos.length})</h2>
      <div className="products_container">
        <TablaProductos
          productos={productos}
          handleCheckBox={handleCheckboxChange}
        />
        <Botonera
          ids={ids}
          calculoValido={calculoValido}
          handleCalcular={handleCalcular}
          total={total}
          handleVender={handleVender}
        />
      </div>
    </div>
  );
}
