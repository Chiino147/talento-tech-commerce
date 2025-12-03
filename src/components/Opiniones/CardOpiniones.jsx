import React from 'react'
import { FaStar } from "react-icons/fa";

function CardOpiniones({imagen,producto,cliente,reseña}) {
  return (
    <div className='card-opinion'>
        <div className="opinion-img">
            <img src={imagen} alt="" />
        </div>
        <div className="opininion-producto">
            <h3>{producto}</h3>
            <div className="estrellas" style={{ display: "flex", gap: "0px" }}>
                <FaStar color="gold" size={20} />
                <FaStar color="gold" size={20} />
                <FaStar color="gold" size={20} />
                <FaStar color="gold" size={20} />
                <FaStar color="gold" size={20} />
            </div>
        </div>
        <div className="opinion-cliente">
            <p>-{cliente}-</p>
            <p>"{reseña}"</p>
        </div>
    </div>
  )
}

export default CardOpiniones