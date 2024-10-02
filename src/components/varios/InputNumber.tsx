import "./inputNumber.css";

interface InputNumberProps {
  valor: number;
  setValor: (value: number) => void;
}

export default function InputNumber({ valor, setValor }: InputNumberProps) {
  const incrementar = () => setValor(valor + 1);
  const decrementar = () => {
    if (valor > 0) setValor(valor - 1);
  };

  return (
    <div className="simple_input_number">
      <p className="simple_text_number">{valor}</p>
      <div className="simple_button_container">
        <button className="simple_button" id="increment" onClick={incrementar}>
          <img src="./f_abajo.png" alt="chau" style={{ width: "24px" }} />
        </button>
        <button className="simple_button" id="decrement" onClick={decrementar}>
          <img src="./f_arriba.png" alt="chau" style={{ width: "15px" }} />
        </button>
      </div>
    </div>
  );
}
