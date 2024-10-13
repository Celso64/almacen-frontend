import { useState } from "react";
import TopBar from "../../components/TopBar/TopBar";
import { Producto } from "../../model/Producto";
import Productos from "../../components/TablaProductos/Productos";
import UpdateProductForm from "../../components/EditarProductoForm/UpdateProductForm";
import "./style.css";

export default function SegundaPagina() {
  const productoDefault: Producto = {
    id: 0,
    nombre: "sin nombre",
    descripcion: "sin descripcion",
    categoria: "sin categoria",
    marca: "sin marca",
    precio: 0.0,
  };

  const [producto, setProducto] = useState<Producto>(productoDefault);
  const [verForm, setVerForm] = useState<boolean>(false);

  const productos: Producto[] = [
    {
      id: 1,
      nombre: "Taza",
      descripcion: "De porcela, color blanca",
      precio: 1563,
      marca: "CAROL",
      categoria: "COCINA",
    },
    {
      id: 2,
      nombre: "Gorra",
      descripcion: "Tamaño mediano",
      precio: 663,
      marca: "NIKE",
      categoria: "ROPA",
    },
  ];

  const marcas: string[] = ["CAROL", "NIKE", "ADIDAS", "ESSEN"];
  const categorias: string[] = [
    "ROPA",
    "COCINA",
    "INFORMATICA",
    "SUPERMERCADO",
  ];

  const handleSelect: (id: number) => void = function (id: number) {
    const pr: Producto | undefined = productos.find(
      (p: Producto) => p.id === id
    );
    if (pr === undefined) {
      setProducto(productoDefault);
      setVerForm(false);
    } else {
      setProducto(pr);
      setVerForm(true);
    }
  };

  return (
    <div>
      <TopBar />

      <div className="paginaContainer">
        <div style={{ gridArea: "1 / 1 / 2 / 2", placeSelf: "center" }}>
          <Productos productos={productos} handleSelect={handleSelect} />
        </div>

        <div
          style={{
            display: verForm ? "block" : "none",
            gridArea: "2 / 1 / 3 / 2",
            placeSelf: "center",
          }}
        >
          <UpdateProductForm
            producto={producto}
            handleSelect={handleSelect}
            marcas={marcas}
            categorias={categorias}
          />
        </div>
      </div>
    </div>
  );
}
