import { useEffect, useState } from "react";
import TopBar from "../../components/TopBar/TopBar";
import { Producto } from "../../model/Producto";
import Productos from "../../components/TablaProductos/Productos";
import UpdateProductForm from "../../components/EditarProductoForm/UpdateProductForm";
import Error from "../../components/errorUpdate/ErrorUpdate";

export default function SegundaPagina() {
  const [producto, setProducto] = useState<Producto | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [hayError, setHayError] = useState<boolean>(false);

  useEffect(() => {
    setHayError(true);
  }, [error]);

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
    setProducto(pr);
  };

  return (
    <>
      <TopBar />
      <div>
        <Productos productos={productos} handleSelect={handleSelect} />
      </div>

      <Error visible={hayError} setVisible={setHayError} error={error} />

      <div style={{ display: producto ? "block" : "none" }}>
        <UpdateProductForm
          producto={producto}
          handleSelect={handleSelect}
          marcas={marcas}
          categorias={categorias}
          setError={setError}
        />
      </div>
    </>
  );
}
