import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import "../css/Carrito.css"
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/UserContext";
import { Helmet } from "react-helmet";
function Carrito() {
  const { carrito, total, agregarProducto, quitarProducto, eliminarProducto } =
    useContext(CarritoContext);
  const { usuario } = useAuthContext();
  const navigate = useNavigate();

  const handleComprar = () => {
    if (!usuario) {
      navigate("/login");
      alert("Necesitamos que inicies sesión");
      return;
    }
    navigate("/pagar");
  };

  return (
    <div className="carrito-container">
      <Helmet>
      <title>Carrito | Mejiwoo</title>
      <meta name="description" content="Es tu momento de comprar" />
        <meta />
      </Helmet>
      <h2>Ver carrito</h2>
      <ul>
        {carrito.map((producto) => {
          const cantidad = producto.cantidad || 1;
          const precioOriginal = producto.precio;
          const descuento = producto.descuento || 0;
          const precioConDescuento = precioOriginal - (precioOriginal * descuento) / 100;

          return (
            <li key={producto.id} className="carrito-item">
              <img src={producto.imagen} alt={producto.nombre} />
              <div className="carrito-info">
                <span>
                  {producto.nombre} × {cantidad}
                  <br />

                  {descuento > 0 ? (
                    <>
                      <span className="precio-original">
                        Precio original: ${precioOriginal.toFixed(2)}
                      </span>
                      <br />
                      <span className="precio-descuento">
                        {descuento}% OFF → ${ (precioConDescuento * cantidad).toFixed(2) }
                      </span>
                    </>
                  ) : (
                    <>— ${(precioOriginal * cantidad).toFixed(2)}</>
                  )}
                </span>

                <div className="carrito-botones">
                  <button onClick={() => quitarProducto(producto.id)}>-</button>
                  <button onClick={() => agregarProducto(producto)}>+</button>
                  <button onClick={() => eliminarProducto(producto.id)}>🗑️ Eliminar</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="carrito-total">
        Total: ${total.toFixed(2)}
      </div>

      <button onClick={handleComprar}>Comprar todo</button>
    </div>
  );
}

export default Carrito;
