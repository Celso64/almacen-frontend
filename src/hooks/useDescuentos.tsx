import { useEffect, useState } from "react";
import { Descuento } from "../model/Descuento";
import { getDescuentos } from "../services/apiDescuento";

export const useDescuentos = () => {
  const [descuentos, setDescuentos] = useState<Descuento[]>([]);

  useEffect(() => {
    async function cargarDescuentos() {
      const d = await getDescuentos();
      setDescuentos(d);
    }
    cargarDescuentos();
  }, []);

  return descuentos;
};
