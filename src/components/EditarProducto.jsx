import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditarProducto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [categorias, setCategorias] = useState([]);
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    imagen: "",
    descuento: "",
    tipoId: "",
    id:""
  });
  const [loading, setLoading] = useState(true);

  // Traer categorías
  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const res = await axios.get(
          "https://68e443538e116898997b6778.mockapi.io/tipos"
        );
        setCategorias(res.data);
      } catch (error) {
        console.error("Error al obtener categorías:", error);
        alert("No se pudieron cargar las categorías ❌");
      }
    };
    fetchCategorias();
  }, []);

  // Traer producto
  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const res = await axios.get(
          `https://68e443538e116898997b6778.mockapi.io/productos/${id}`
        );
        setProducto({
          nombre: res.data.nombre || "",
          precio: res.data.precio || "",
          imagen: res.data.imagen || "",
          descuento: res.data.descuento || "",
          tipoId: res.data.tipoId || "",
          id: res.data.id || "",
        });
      } catch (error) {
        if (error.response && error.response.status === 404) {
          alert("El producto no existe ❌");
          navigate("/productos");
        } else {
          console.error("Error al traer el producto:", error);
          alert("Hubo un error al cargar el producto ❌");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProducto();
  }, [id, navigate]);

  // Manejar cambios en inputs
  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  // Actualizar producto (PUT)
  const actualizarProducto = async () => {
    try {
      const res = await axios.put(
        `https://68e443538e116898997b6778.mockapi.io/productos/${id}`,
        producto
      );
      alert("Producto actualizado correctamente ✔️");
      console.log("Producto actualizado:", res.data);
    } catch (error) {
      console.error("Error al actualizar:", error);
      alert("Hubo un error al actualizar ❌");
    }
  };

  // Eliminar producto (DELETE)
  const eliminarProducto = async () => {
    if (!window.confirm("¿Seguro que querés eliminar este producto?")) return;

    try {
      const res = await axios.delete(
        `https://68e443538e116898997b6778.mockapi.io/productos/${producto.id}`
      );
      alert("Producto eliminado correctamente ✔️");
      console.log("Producto eliminado:", res.data);
      navigate("/productos");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("El producto no existe o ya fue eliminado ❌");
        console.log(`El producto ${id} se intentó eliminar`);
        navigate("/productos");
      } else {
        console.error("Error al eliminar:", error);
        alert("Hubo un error al eliminar ❌");
      }
    }
  };

  if (loading) return <p>Cargando producto...</p>;

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <button
        onClick={eliminarProducto}
        style={{
          background: "red",
          color: "white",
          padding: "10px",
          border: "none",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        ❌ Eliminar producto
      </button>

      <form onSubmit={(e) => e.preventDefault()}>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={producto.nombre}
          onChange={handleChange}
        />

        <label>Precio</label>
        <input
          type="text"
          name="precio"
          value={producto.precio}
          onChange={handleChange}
        />

        <label>Imagen</label>
        <input
          type="text"
          name="imagen"
          value={producto.imagen}
          onChange={handleChange}
        />

        <label>Descuento</label>
        <input
          type="text"
          name="descuento"
          value={producto.descuento}
          onChange={handleChange}
        />

        <label>Tipo</label>
        <select name="tipoId" value={producto.tipoId} onChange={handleChange}>
          <option value="">Seleccionar tipo...</option>
          {categorias.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.categoria}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={actualizarProducto}
          style={{ marginTop: "15px" }}
        >
          Actualizar producto
        </button>
      </form>
    </div>
  );
}

export default EditarProducto;