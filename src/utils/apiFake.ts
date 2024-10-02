import { Cliente } from "../model/Cliente";
import { Producto } from "../model/Producto";

const productos: Producto[] = [
  {
    id: 1,
    nombre: "Pelota de Voley",
    descripcion: "Color blanca",
    precio: 150_000.0,
    marca: "Nike",
    categoria: "Insumos Deportivos",
  },
  {
    id: 2,
    nombre: "Zapatillas",
    precio: 325_900.0,
    marca: "Adidas",
    categoria: "Indumentaria",
  },
  {
    id: 3,
    nombre: "RTX 3050",
    precio: 575_000.0,
    marca: "Nvidia",
    categoria: "Componentes de PC",
  },
];

const clientes: Cliente[] = [
  {
    id: 1,
    nombre: "Juan",
    tarjetas: [{ id: 1, marca: "Naranja", fondos: 1_250_000.0 }],
  },
];

export function getProductos(): Producto[] {
  return productos;
}

export function getClientes(): Cliente[] {
  return clientes;
}

export function findCliente(id: number): Cliente | undefined {
  return clientes.find((c) => c.id === id);
}

export function calcularProductos(ids: number[]): number {
  return productos
    .filter((p) => ids.includes(p.id))
    .reduce((suma, producto) => suma + producto.precio, 0);
}
