import React,{useEffect,useState,useContext} from 'react'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import "./Producto.css"

function Producto() {
  const { producto } = useParams();
  const [data, setData] = useState(null);
  const {agregarProducto} = useContext(CarritoContext)
  
  useEffect(() => {
    if (!producto) return;
    fetch(`https://68e443538e116898997b6778.mockapi.io/productos/${producto}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("❌ Error:", error));
  }, [producto]);

  if (!data) return <p>Cargando producto...</p>;

  return (
    <div className="producto-detalle">
      <img src={data.imagen} alt={data.nombre} />
      <div className="producto-info">
        <h1>{data.nombre}</h1>
        <p className="precio">Precio: ${data.precio}</p>
        <p className="descripcion">
          {data.descripcion || 'Producto de alta calidad disponible en diferentes talles.'}
        </p>
        <p className="talles">Talles: L a XL</p>
        <p>Tela premiun</p>
        <button onClick={() => agregarProducto(data)}>Comprar!</button>
      </div>
    </div>
  );
}

export default Producto