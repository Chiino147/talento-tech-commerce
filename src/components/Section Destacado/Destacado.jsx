import React from 'react'
import "./Destacado.css"
import  knitwear from "../../img/knitwear.jpg"
import  pants from  "../../img/pants.jpg"

function Destacado({tipo,foto}) {

    const url="../../public/img/"+ foto +".jpg"

  return (
    <>
        <img src={url} className={tipo==="chico" ? "destacado-img-a": "destacado-img-b"} alt="" />    
    </>
  )
}

export default Destacado