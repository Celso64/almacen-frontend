import { useState } from "react";
import { calcularVenta, vender } from "../services/api";

export const useCarrito = () => {
  const [ids, setIds] = useState<number[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [calculoValido, setCalculoValido] = useState<boolean>(false);

  const handleCheckboxChange = (id: number) => {
    setIds((prevIds) => {
      setCalculoValido(false); // Cambié el nombre del setter
      if (prevIds.includes(id)) {
        return prevIds.filter((prevId) => prevId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };

  const handleCalcular = async (idTarjeta: number) => {
    setTotal(await calcularVenta(ids, idTarjeta));
    setCalculoValido(true);
  };

  const handleVender = async (idTarjeta: number) => {
    await vender(ids, idTarjeta);
  };

  return {
    ids,
    total,
    calculoValido,
    handleCheckboxChange,
    handleCalcular,
    handleVender,
  };
};
