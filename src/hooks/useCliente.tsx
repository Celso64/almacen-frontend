import { useEffect, useState } from "react";
import { findCliente } from "../services/apiCliente";
import { Cliente } from "../model/Cliente";

export const useCliente = () => {
  const [cliente, setCliente] = useState<Cliente | undefined>(undefined);
  const [idCliente, setIdCliente] = useState<number>(0);

  useEffect(() => {
    async function buscarCliente(id: number) {
      const client = await findCliente(id);
      setCliente(client);
    }
    buscarCliente(idCliente);
  }, [idCliente]);

  return { cliente, setIdCliente };
};
