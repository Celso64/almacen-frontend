import { useEffect, useState } from "react";
import { Venta } from "@models/Venta";
import { getVentaByClienteID } from "@services/apiVenta";
import ListadoVentas from "@components/ventas/verVentas/ListadoVentas";
import SelectorCliente from "@components/cliente/SelectorCliente";
import { useCliente } from "hooks/useCliente";

export default function TerceraPagina() {
  const { cliente, setIdCliente } = useCliente();
  const [ventas, setVentas] = useState<Venta[]>([]);

  useEffect(() => {
    getVentaByClienteID(cliente?.id).then((v) => setVentas(v));
  }, [cliente]);

  return (
    <div>
      <h1>Ventas de {cliente?.nombre}</h1>
      <SelectorCliente setId={setIdCliente} />
      <ListadoVentas ventas={ventas} />
    </div>
  );
}
