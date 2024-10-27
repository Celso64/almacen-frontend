import { VENTA_SERVICE } from "@utils/constanst";
import { Venta } from "@models/Venta";

export async function getVentaByClienteID(
  idCliente: number | undefined
): Promise<Venta[]> {
  if (!idCliente) {
    return [];
  }

  try {
    const url = new URL(VENTA_SERVICE + "/calcular");
    url.searchParams.append("idCliente", idCliente.toString());
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    if (!response.ok) {
      console.error("Error en la respuesta:", response.statusText);
      return [];
    }

    const data: Venta[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error en el fetch:", error);
    return [];
  }
}
