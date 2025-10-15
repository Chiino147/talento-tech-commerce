import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Carrusel_Cards() {
    const [items, setItems] = useState([]);

    useEffect(() => {
      // 🔹 Reemplazá con tu URL real de MockAPI
      fetch("https://68e443538e116898997b6778.mockapi.io/productos")
        .then((res) => res.json())
        .then((data) => setItems(data))
        .catch((err) => console.error(err));
    }, []);
  
    return (
      <div className="max-w-4xl mx-auto p-4">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={3} // 🔸 Muestra 3 a la vez
          slidesPerGroup={3} // 🔸 Avanza de a 3
          loop={true}
        >
          {items.slice(0, 6).map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-full h-56 object-cover"
                />
                <div className="p-3 text-center">
                  <h4 className="text-sm font-semibold">{item.nombre}</h4>
                  <p>${item.precio}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

export default Carrusel_Cards