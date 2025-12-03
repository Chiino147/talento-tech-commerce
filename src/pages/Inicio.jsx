import {React,useEffect, useState} from 'react'
import inicioimg from '../img/inicioimg.png'
import Card_temporada from '../components/CardTemporada/Card_temporada'
import fotoP from '../img/temporadaP.png'
import fotoV from '../img/../img/temporadaV.png'
import fotoI from '../img/temporadaI.png'
import Carrusel_Cards from '../components/SectionVentas/Carrusel_Cards'
import Destacado from '../components/Section Destacado/Destacado'
import "../components/Section Destacado/Destacado"
import "../css/inicio.css"
import descuento from '../img/descuento.svg'
import SectionOpiniones from '../components/Opiniones/SectionOpiniones'
function Inicio() {

  const [vendidos, setvendidos] = useState()

  useEffect(() => {
    fetch("https://68e443538e116898997b6778.mockapi.io/productos")
      .then((response) => response.json())
      .then((data) => {
        // Tomar solo los primeros 6 elementos
        const jsonCarrusel = data.slice(0, 6);
        setvendidos(jsonCarrusel);
      })
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);


  return (
    <div className='inicio'>

      <section className='section-img'>
        <img src={inicioimg} alt="" />
      </section>
      {/*Temporada*/}
      <section className="section-temporada">
        <div className="section-top">
          <h2>Nuestra colección de temporada</h2>
        </div>
        <div className="cards-container">
          <Card_temporada
          temporada="Primavera"
          foto={fotoP}
          />
          <Card_temporada
          temporada="Verano"
          foto={fotoV}
          />
          <Card_temporada
          temporada="Invierno"
          foto={fotoI}
          />
        </div>
      </section>
      {/*Top Ventas*/}
      <section className='section-ventas'>
        <div className='section-top'>
          <h2>Lo mas vendido</h2> 
        </div>
        <Carrusel_Cards/>

      </section>
      {/*Descuento*/}
      <section className="section-descuento">
        <img src={descuento} alt="descuento" className="img-descuento" />
        <div className="descuento-contenido">
          <h3>Te regalamos un 50% Off</h3>
          <p>para la compra minima!</p>
          <button>Compra!</button>
        </div>
      </section>
      {/*Coleccion*/}
      <section className='section-descatado'>
        <div className='section-top'>
          <h2>Nuestras colecciones destacadas</h2>
        </div>
        <div className='divs-destacados'>
        <Destacado
          tipo="chico"
          foto="knitwear"
          />
          <Destacado
          tipo="chico"
          foto="pants"
          />
        </div>
        <div className='divs-destacados'>
        <Destacado
          tipo="grande"
          foto="special"
          />
        </div>
        <div className='divs-destacados'>
        <Destacado
          tipo="chico"
          foto="top"
          />
          <Destacado
          tipo="chico"
          foto="dress"
          />
        </div>
      </section>
         {/*Opiniones*/}
      <section className='section-opiniones'>
        <div className='section-top'>
          <h2>Sus opiniones</h2>
        </div>
        <SectionOpiniones/>
      </section>
      {/*Footer*/}
      <section className=''>
        <div className='section-top'>
          
        </div>

      </section>
    </div>
  )
}

export default Inicio