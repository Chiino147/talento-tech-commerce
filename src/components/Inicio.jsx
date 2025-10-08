import {React,useEffect, useState} from 'react'
import inicioimg from '../assets/img/inicioimg.png'
import Card_temporada from './Card_temporada'
import fotoP from '../assets/img/temporadaP.png'
import fotoV from '../assets/img/temporadaV.png'
import fotoI from '../assets/img/temporadaI.png'
import Carrusel_Cards from './Carrusel_Cards'

function Inicio() {

  const [vendidos, setvendidos] = useState()

  useEffect(() => {
    fetch("https://68e443538e116898997b6778.mockapi.io/tipos/1/productos")
      .then((response) => response.json())
      .then((data) => {
        // Tomar solo los primeros 6 elementos
        const jsonCarrusel = data.slice(0, 6);
        setvendidos(jsonCarrusel);
      })
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);
    console.log(vendidos)

  return (
    <div>
        <h2>Nuestra colección de temporada</h2>
      <section className='section-temporada'>
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
        </section>

        <h2>Lo mas vendido</h2>
      
      <section className='section-top'>
        <Carrusel_Cards/>
      </section>
      <section className='section-descatado'>
        <h2>Nuestras colecciones destacadas</h2>
      </section>
      <section className='section-opiniones'>
        <h2>Sus opinioes</h2>
      </section>
      <section className='section-contacto'>
        <h2>Sus opinioes</h2>
      </section>
    </div>
  )
}

export default Inicio