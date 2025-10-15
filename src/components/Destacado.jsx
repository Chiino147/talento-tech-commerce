import React from 'react'
import "../css/Destacado.css"

import  knitwear from "../../public/img/knitwear.jpg"
import  pants from  "../../public/img/pants.jpg"


function Destacado({tipo,foto}) {

    const url="../../public/img/"+ foto +".jpg"

  return (
    <>
        <img src={url} className={tipo==="chico" ? "destacado-img-a": "destacado-img-b"} alt="" />    
    </>
  )
}

export default Destacado