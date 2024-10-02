import { Tarjeta } from "./Tarjeta";

export interface Cliente{
    id: number,
    nombre: string,
    tarjetas: Tarjeta[],
} 