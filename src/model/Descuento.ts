export interface Descuento {
  id: number;
  fechaInicio: string;
  fechaFin: string;
  porcentaje: string;
  marca: string;
  tipo: "TARJETA" | "MARCA";
  diasRestantes: number;
}
