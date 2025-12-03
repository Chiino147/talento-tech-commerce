import { useEffect, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Carrousel.css";
import CardCatalogo from "../CardCatalogo/CardCatalogo";
import { Navigation } from "swiper/modules";
import { CarritoContext } from "../../context/CarritoContext";

function Carrusel_Cards() {
  const [items, setItems] = useState([]);
  const { agregarProducto } = useContext(CarritoContext);

  useEffect(() => {
    fetch("https://68e443538e116898997b6778.mockapi.io/productos")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Carrousel">
  <Swiper
    modules={[Navigation]}
    navigation
    spaceBetween={20}
    loop={true}
    breakpoints={{
      0: {           // desde 0px (móviles)
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      768: {         // tablets pequeñas
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1024: {        // desktop
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    }}
  >
    {items.slice(0, 6).map((item) => (
      <SwiperSlide key={item.id}>
        <CardCatalogo
          agregar={agregarProducto}
          nombre={item.nombre}
          precio={item.precio}
          imagen={item.imagen}
          descuento={item.descuento}
          id={item.id}
          categoria={item.tipoId}
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>
  );
}

export default Carrusel_Cards;
