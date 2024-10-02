import { Descuento } from "../model/Descuento";
import { DESCUENTO_SERVICE } from "./constanst";

export async function getDescuentos(): Promise<Descuento[]> {
  try {
    const response = await fetch(DESCUENTO_SERVICE, {
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

    const data: Descuento[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error en el fetch:", error);
    return [];
  }
}
