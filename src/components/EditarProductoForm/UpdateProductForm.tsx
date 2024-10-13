import { useForm, SubmitHandler } from "react-hook-form";
import { Producto } from "../../model/Producto";
import "./style.css";
import { updateProducto } from "../../utils/api";
import { toast, ToastContainer } from "react-toastify";

interface UpdateProductProps {
  producto: Producto;
  handleSelect: (id: number) => void;
  marcas: string[];
  categorias: string[];
}

type fields = {
  nombre: string;
  descripcion: string;
  precio: number;
  marca: string;
  categoria: string;
};

export default function UpdateProductForm({
  producto,
  handleSelect,
  marcas,
  categorias,
}: UpdateProductProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<fields>({
    values: {
      nombre: producto.nombre,
      descripcion: producto.descripcion || "",
      precio: producto.precio,
      marca: producto.marca,
      categoria: producto.categoria,
    },
  });

  const onSubmit: SubmitHandler<fields> = async (data) => {
    if (!errors) {
      const productoNuevo: Producto = {
        id: producto.id,
        nombre: data.nombre,
        descripcion: data.descripcion,
        precio: data.precio,
        marca: data.marca,
        categoria: data.categoria,
      };

      const StatusServer: "ok" | "concurrenciaError" | "otroError" | undefined =
        await updateProducto(productoNuevo);

      switch (StatusServer) {
        case "ok": {
          avisar("Se actualizo correctamente.");
          break;
        }
        case "concurrenciaError": {
          avisar("Error de acceso concurrente.");
          break;
        }
        default: {
          avisar("Otro error.");
        }
      }

      console.log(productoNuevo);
    } else {
      console.log(errors?.nombre);
    }
  };

  const avisar = (mensaje: string) => {
    toast(mensaje, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="update_container">
      <h2>
        <div className="update_title">
          Actualizacion de {producto.id} - {producto.nombre}
          <button className="update_close_btn" onClick={() => handleSelect(-1)}>
            X
          </button>
        </div>
        <form className="update_form" onSubmit={handleSubmit(onSubmit)}>
          <div className="update_field">
            <label>Nombre: </label>
            <input {...register("nombre", { required: true })} />
            {errors.nombre && (
              <p className="error_box">El nombre es obligatorio.</p>
            )}
          </div>
          <div className="update_field">
            <label>Descripcion:</label>
            <input {...(register("descripcion"), { maxLength: 255 })} />
            {errors.descripcion && (
              <p className="error_box">
                La descripcion no debe superar los 255 caracteres.
              </p>
            )}
          </div>
          <div className="update_field">
            <label>Precio:</label>
            <input
              type="number"
              {...register("precio", { required: true, min: 0 })}
            />
            {errors.precio && (
              <p className="error_box">
                {errors.precio.type === "min"
                  ? "El precio debe ser mayor o igual a 0."
                  : "El precio es obligatorio."}
              </p>
            )}
          </div>
          <div className="update_field">
            <label>Marca:</label>
            <select {...register("marca")}>
              {marcas.map((m: string) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <div className="update_field">
            <label>Categoria:</label>
            <select {...register("categoria")}>
              {categorias.map((c: string) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <input type="submit" />
        </form>
      </h2>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  );
}
