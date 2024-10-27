import { useEffect, useState } from "react";
import { getProductos } from "../services/api";
import { Producto } from "../model/Producto";

export const useProductos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    async function cargarProductos() {
      const productos = await getProductos();
      setProductos(productos);
    }
    cargarProductos();
  }, []);

  return productos;
};
