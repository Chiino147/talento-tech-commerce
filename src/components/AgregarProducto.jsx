import React,{useEffect,useState,useContext} from 'react'
import '../css/FormProductos.css'
function AgregarProducto() {
  const [categorias, setCategorias] = useState([]);

  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    imagen: "",
    descuento: "",
    tipoId: "",  // guarda el ID del tipo
  });

  // Cargar categorías desde MockAPI
  useEffect(() => {
    fetch("https://68e443538e116898997b6778.mockapi.io/tipos")
      .then(res => res.json())
      .then(data => setCategorias(data))
      .catch(err => console.log("Error al traer tipos:", err));
  }, []);

  // Manejo de inputs
  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  // Crear producto en MockAPI
  const crearProducto = async () => {
    try {
      const res = await fetch(
        "https://68e443538e116898997b6778.mockapi.io/productos",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(producto),
        }
      );

      if (!res.ok) throw new Error("Error al crear producto");

      alert("Producto creado correctamente ✔️");

      // Limpia el formulario
      setProducto({
        nombre: "",
        precio: "",
        imagen: "",
        descuento: "",
        tipoId: "",
      });

    } catch (error) {
      console.log(error);
      alert("Hubo un error al crear el producto ❌");
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="form">
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
      <select
        name="tipoId"
        value={producto.tipoId}
        onChange={handleChange}
      >
      <option value="">Seleccionar tipo...</option>
        {categorias.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.categoria}
          </option>
        ))}
      </select>

      <button
        type="button"
        style={{ marginTop: "15px" }}
        onClick={crearProducto}
      >
        Crear producto
      </button>
    </form>
  );
}

export default AgregarProducto