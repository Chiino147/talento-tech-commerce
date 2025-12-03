import React,{useEffect,useState} from 'react'
import manejarCarrito from './Carrito'
import {useParams} from 'react-router-dom'
import CardCatalogo from '../components/CardCatalogo/CardCatalogo'
import "../css/Catalogo.css"
import { Helmet } from "react-helmet";
function Productos({agregar}) {
  //https://68e443538e116898997b6778.mockapi.io/tipos
  ////https://68e443538e116898997b6778.mockapi.io/productos
  const [Id, setId] = useState()
  const [productos, setProductos] = useState([])
  const { categoria} = useParams(); //Obtenemos el parametro de la url
  const [cargo, setCargo] = useState(false)
  
  useEffect(() => {
    setCargo(true)
    fetch("https://68e443538e116898997b6778.mockapi.io/tipos")
    .then((response) => (response.json()))
    .then((response)=>{
      const obtenerId = response.find((tipoCategoria)=>( tipoCategoria.categoria===categoria))
      setId(obtenerId.id)
    })
  }, [categoria])
  useEffect(() => {
    if (!Id) return; // evita filtrado antes de tener Id
  
    fetch("https://68e443538e116898997b6778.mockapi.io/productos")
      .then(res => res.json())
      .then(productosData => {
        const productosFiltrados = productosData.filter(p => p.tipoId === Id);
        setProductos(productosFiltrados)
        console.log("Productos filtrados:", productosFiltrados);
      });
  }, [Id]);
  

  return (
    <div className="catalogo-grid">
        <Helmet>
            <title>Productos | Mejiwoo</title>
        <meta name="description" content="Descubrí todos nuestros productos: ropa, accesorios y más." />
      </Helmet>
        {productos.map((producto)=>{
          return(
            <CardCatalogo
            agregar={agregar}
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
            descuento={producto.descuento}
            id={producto.id}
            categoria={producto.tipoId}
            />
            
            )
            
          })}
    </div>
  )
}

export default Productos