import React from 'react'
import manejarCarrito from './Carrito'

function Productos() {
  //https://dummyjson.com/products/category/womens-jewellery
    const listaProductos=[
        {id:0, nombre:"auto",precio:120},
        {id:1, nombre:"moto",precio:90},
        {id:2, nombre:"avion",precio:1520},
        {id:3, nombre:"bici",precio:20}
    ]
  return (
    <div>
        <h2>Catalogo!</h2>
       { listaProductos.map(producto => (
        <div>
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <button onClick={()=>{
                console.log("comprando: "+ producto.nombre)
                manejarCarrito({producto})
            }}>AGREGAR</button>
        </div>

       ))}

    </div>
  )
}

export default Productos