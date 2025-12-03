import React, { useEffect, useState,useContext } from "react";
import { useLocation } from "react-router-dom";
import "../css/Catalogo.css"
import CardCatalogo from "../components/CardCatalogo/CardCatalogo";
import CarritoProvider from "../context/CarritoContext";
function Buscar() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";
  const [resultados, setResultados] = useState([]);
  const [cargando, setCargando] = useState(false);
  const { agregarProducto } = CarritoProvider;

  useEffect(() => {
    const buscarProductos = async () => {
      setCargando(true);
      try {
        const res = await fetch(
          "https://68e443538e116898997b6778.mockapi.io/productos/"
        );
        const data = await res.json();

        // Filtramos según el query
        const filtrados = data.filter((p) =>
          p.nombre.toLowerCase().includes(query.toLowerCase())
        );
        setResultados(filtrados);
      } catch (error) {
        console.error("Error al buscar productos:", error);
      } finally {
        setCargando(false);
      }
    };

    if (query) buscarProductos();
  }, [query]);

  return (
    <div className='catalogo'>
      <h2>Resultados de búsqueda: "{query}"</h2>
      {cargando ? (
        <p>Cargando...</p>
      ) : resultados.length > 0 ? (
        resultados.map((producto) => (
          <CardCatalogo
            key={producto.id}
            agregar={agregarProducto}
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
            descuento={producto.descuento}
            id={producto.id}
            categoria={producto.tipoId}
          />
        ))
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
}

export default Buscar;
