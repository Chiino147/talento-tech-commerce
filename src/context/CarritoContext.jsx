import React, { useState, createContext } from "react";

export const CarritoContext = createContext();

function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    const precioOriginal = parseFloat(producto.precio) || 0;
    const descuento = producto.descuento || 0;
    const precioConDescuento = precioOriginal * (1 - descuento / 100);

    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      const carritoActualizado = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCarrito(carritoActualizado);
    } else {
      setCarrito([
        ...carrito,
        {
          ...producto,
          cantidad: 1,
          precioOriginal,
          descuento,
          precioConDescuento,
        },
      ]);
    }
  };

  // RESTAR UN PRODUCTO
  const quitarProducto = (id) => {
    setCarrito((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0) // elimina si cantidad = 0
    );
  };

  // ELIMINAR PRODUCTO
  const eliminarProducto = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const total = carrito.reduce(
    (acum, item) => acum + item.precioConDescuento * item.cantidad,
    0
  );

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        total,
        agregarProducto,
        quitarProducto,
        eliminarProducto,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export default CarritoProvider;
