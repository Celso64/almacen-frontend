export function formatearNumero(numero: number): string {
  return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatearNombre(nombre: string): string {
  return nombre.charAt(0).toUpperCase() + nombre.substring(1).toLowerCase();
}

export function formatearFecha(fechaStr: string): string {
  // Convertir la cadena de fecha en un objeto Date
  const [year, month, day] = fechaStr.split("-").map(Number);
  const fecha = new Date(year, month - 1, day); // El mes se resta en 1 porque es 0-indexado

  // Configuración de opciones para formatear la fecha
  const opciones: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Formatear la fecha y devolverla como string
  return fecha.toLocaleDateString("es-ES", opciones);
}

export function formatearDiasRestantes(dias: number): string {
  if (dias > 1) {
    return `${dias} días restantes`;
  } else if (dias === 1) {
    return "1 día restante";
  } else if (dias === 0) {
    return "Vence hoy";
  } else if (dias === -1) {
    return "Vencido hace 1 día";
  } else {
    return `Vencido hace ${Math.abs(dias)} días`;
  }
}
