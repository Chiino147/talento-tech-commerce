import React from 'react'
import CardOpiniones from './CardOpiniones'
import "./SectionOpiniones.css"
function SectionOpiniones() {
  return (
    <div className='div-opiniones'>
        <CardOpiniones
        imagen="https://d1flfk77wl2xk4.cloudfront.net/Assets/30/870/XXL_p0154387030.jpg"
        producto="Spaghetti Strap Plain Mini A-line Dress"
        cliente="Tracy Sohn"
        reseña="love this dress, the fit is so cute and flowy, very flattering. also, this dress is special to me now since i wore it to the enhypen concert😭love this dress, the fit is so cute and flowy, very flattering. also, this dress is special to me now since i wore it to the enhypen concert😭"
        />
        <CardOpiniones
        imagen="https://d1flfk77wl2xk4.cloudfront.net/Assets/34/568/XXL_p0194356834.jpg"
        producto="Elastic Waist Tiered Maxi Skirt"
        cliente="Insa"
        reseña="i wanted a long white skirt for so long and this is so perfect!! i was worried it was gonna be too long since I’m only 5’2 and it was one size but the waist is stretchy so you can wear it high waisted and low waisted, and it stops right at my feet and doesn’t drag! it’s not see through either and the material is nice quality and not thin and wrinkly. i def recommend!!        "
        />
        <CardOpiniones
        imagen="https://d1flfk77wl2xk4.cloudfront.net/Assets/52/903/XXL_p0218490352.jpg"
        producto="Long-Sleeve V-Neck Collared Lace Trim Buttoned"
        cliente="Wonnyy"
        reseña="obsessed with this blouse!! the yellow color is so soft and bright, and the lace trim with the V-neck collar makes it look elegant and girly. perfect for a cute outfit"
        />
    </div>
  )
}

export default SectionOpiniones