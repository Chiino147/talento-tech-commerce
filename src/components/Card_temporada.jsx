import React from 'react'
import '../css/Card_temporada.css'

function Card_temporada({temporada,foto}) {
  return (
    <div className='q'>
      <div className="card-temporada-div-img">
        <img src={foto} alt="" className='card-temporada-img'/>
      </div>
        <p>{temporada}</p>
    </div>
  )
}

export default Card_temporada