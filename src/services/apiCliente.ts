import { Cliente } from "../model/Cliente";
import { CLIENTE_SERVICE } from "../utils/constanst";

export async function findCliente(id: number): Promise<Cliente | undefined> {
  try {
    const response = await fetch(CLIENTE_SERVICE + "/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    if (!response.ok) {
      console.error("Error en la respuesta:", response.statusText);
      return undefined;
    }

    const data: Cliente = await response.json();
    return data;
  } catch (error) {
    console.error("Error en el fetch:", error);
    return undefined;
  }
}
