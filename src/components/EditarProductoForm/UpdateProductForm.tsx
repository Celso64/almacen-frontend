import { Producto } from "../../model/Producto";
import "./style.css";

interface UpdateProductProps {
  producto: Producto | undefined;
  handleSelect: (id: number) => void;
  marcas: string[];
  categorias: string[];
  setError: (error: Error) => void;
}

export default function UpdateProductForm({
  producto,
  handleSelect,
  marcas,
  categorias,
  setError,
}: UpdateProductProps) {
  const handleBtn = () => {
    setError(new Error("Error de prueba."));
  };

  return (
    <div className="update_container">
      <h2>
        <div className="update_title">
          Formulario de {producto?.id} - {producto?.nombre}
          <button className="update_close_btn" onClick={() => handleSelect(-1)}>
            X
          </button>
        </div>
        <form className="update_form" action="">
          <div className="update_field">
            <label htmlFor="id">ID:</label>
            <input type="number" name="id" id="" value={producto?.id} />
          </div>
          <div className="update_field">
            <label htmlFor="nombre">Nombre:</label>
            <input type="nombre" name="" id="" value={producto?.nombre} />
          </div>
          <div className="update_field">
            <label htmlFor="descripcion">Descripcion:</label>
            <input type="text" value={producto?.descripcion} />
          </div>
          <div className="update_field">
            <label htmlFor="precio">Precio:</label>
            <input type="number" value={producto?.precio} />
          </div>
          <div className="update_field">
            <label htmlFor="marca">Marca:</label>
            <select name="marca" id="">
              {marcas.map((m: string) => (
                <option value={m} selected={producto?.marca === m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <div className="update_field">
            <label htmlFor="categoria">Categoria:</label>
            <select name="categoria" id="">
              {categorias.map((c: string) => (
                <option value={c} selected={producto?.categoria === c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <button onClick={() => handleBtn}>Update</button>
        </form>
      </h2>
    </div>
  );
}
