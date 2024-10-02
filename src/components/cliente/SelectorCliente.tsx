import { useEffect, useState } from "react";
import InputNumber from "../varios/InputNumber";

interface SelectorClienteProps {
  setId: (id: number) => void;
}

export default function SelectorCliente({ setId }: SelectorClienteProps) {
  const [valor, setValor] = useState<number>(0);

  useEffect(() => {
    setId(valor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valor]);

  return (
    <div className="cliente_input_container">
      <InputNumber valor={valor} setValor={setValor} />
    </div>
  );
}
