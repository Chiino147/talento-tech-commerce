import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import Carrito from './components/Carrito'
import Header from './components/Header'
import Inicio from './components/Inicio'
import Catalogo from './components/Catalogo'
import Producto from './components/Producto'

function App() {
  const [count, setCount] = useState(0)
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  function agregarCarrito(producto){

    setCarrito(prev => {
      const nuevoCarrito = [...prev, producto];

      // Calcular total sumando los precios del nuevo carrito
      const nuevoTotal = nuevoCarrito.reduce((acum, item) => {
        const precio = parseFloat(item.precio);
        const descuento = parseFloat(item.descuento) || 0; // por si viene null
        const precioConDescuento = precio - (precio * (descuento / 100));
        return acum + precioConDescuento;
      }, 0);
      
      setTotal(parseFloat(nuevoTotal.toFixed(2)));;


      console.log("Carrito actualizado:", nuevoCarrito);
      console.log("Total actualizado:", nuevoTotal.toFixed(2));

      return nuevoCarrito;

  });



} 
  return (
    <div className='APP'>
      <Header/>
      <Routes>
        <Route path='/' element={<Inicio></Inicio>}></Route>
        <Route path='/:categoria' element={<Catalogo agregar={agregarCarrito}></Catalogo>}></Route>
        <Route path='/:categoria/:producto' element={<Producto agregar={agregarCarrito}></Producto>}></Route>
      </Routes>

    </div>
  )
}

export default App
