import { Producto } from "../model/Producto";
import { PRODUCTO_SERVICE, VENTA_SERVICE } from "./constanst";

export async function getProductos(): Promise<Producto[]> {
  try {
    const response = await fetch(PRODUCTO_SERVICE, {
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

    const data: Producto[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error en el fetch:", error);
    return [];
  }
}

export async function updateProducto(
  productoUpdate: Producto
): Promise<"ok" | "concurrenciaError" | "otroError" | undefined> {
  try {
    const response = await fetch(PRODUCTO_SERVICE + "/" + productoUpdate.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(productoUpdate),
    });

    switch (response.status) {
      case 200: {
        return "ok";
      }
      case 400: {
        return "concurrenciaError";
      }
      default: {
        return "otroError";
      }
    }
  } catch (error) {
    console.error("Error en el fetch:", error);
  }
}

export async function calcularVenta(
  ids: number[],
  tarjeta: number
): Promise<number> {
  const url = new URL(VENTA_SERVICE + "/calcular");
  const params = ids.join(",");
  url.searchParams.append("ids", params);
  url.searchParams.append("idTarjeta", tarjeta.toString());

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Error en la solicitud: ${response.statusText}`);
  }

  const data = await response.json();
  return data as number;
}

export async function vender(ids: number[], tarjeta: number): Promise<void> {
  const url = new URL(VENTA_SERVICE + "/vender");

  const cuerpo = {
    ids: ids,
    idTarjeta: tarjeta,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cuerpo),
  });

  if (!response.ok) {
    throw new Error(`Error en la solicitud: ${response.statusText}`);
  }

  console.log("Salio bien");
}
