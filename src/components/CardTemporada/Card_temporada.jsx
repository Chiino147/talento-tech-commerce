import React from 'react'
import './Card_temporada.css'

function Card_temporada({temporada,foto}) {
  return (
    <div className='card-temporada'>
      <div className="card-temporada-div-img">
        <img src={foto} alt="" className='card-temporada-img'/>
      </div>
        <h3>{temporada}</h3>
        <button>Mas!</button>
    </div>
  )
}

export default Card_temporada