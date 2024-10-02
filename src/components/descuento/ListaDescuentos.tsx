import { useDescuentos } from "../../hooks/useDescuentos";
import TablaDescuentos from "./TablaDescuentos";

export default function ListaDescuentos() {
  const descuentos = useDescuentos();

  return (
    <div>
      <h2>Descuentos({descuentos.length})</h2>
      <TablaDescuentos descuentos={descuentos} />
    </div>
  );
}
