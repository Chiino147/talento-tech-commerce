import {React,useEffect, useState} from 'react'
import inicioimg from '../../public/img/inicioimg.png'
import Card_temporada from './Card_temporada'
import fotoP from '../../public/img/temporadaP.png'
import fotoV from '../../public/img/temporadaV.png'
import fotoI from '../../public/img/temporadaI.png'
import Carrusel_Cards from './Carrusel_Cards'
import Destacado from './Destacado'
import "../css/section-destacado.css"
import "../css/inicio.css"
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
      <section>
        <img src={inicioimg} alt="" />
      </section>
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

        <h2>Nuestras colecciones destacadas</h2>
      <section className='section-descatado'>
        <div>
        <Destacado
          tipo="chico"
          foto="knitwear"
          />
          <Destacado
          tipo="chico"
          foto="pants"
          />
        </div>
        <div>
        <Destacado
          tipo="grande"
          foto="special"
          />
        </div>
        <div>
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