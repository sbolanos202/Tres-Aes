import React from "react";
import Slider from "react-slick"; // Importa el Slider de react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Rutas de las imágenes
import BudweiserLogo from "../assets/budweiser.svg";
import ThreeMLogo from "../assets/3m.svg";
import BarstoolLogo from "../assets/barstool-store.svg";
import BuzzfeedLogo from "../assets/buzzfeed.svg";

const logoImages = [BudweiserLogo, ThreeMLogo, BarstoolLogo, BuzzfeedLogo];

const Carrusel = () => {
  // Configuración del carrusel
  const settings = {
    infinite: true, // Carrusel infinito
    speed: 8000, // Velocidad de la transición (en milisegundos)
    slidesToShow: 2, // Número de logos visibles
    slidesToScroll: 1, // Número de logos que se desplazan por vez
    autoplay: true, // Carrusel con autoplay
    autoplaySpeed: 1, // Sin pausa, movimiento continuo
    pauseOnHover: false, // No pausa al pasar el mouse sobre el carrusel
    arrows: false, // Desactivar flechas (opcional)
    cssEase: "linear",
    rtl: false, // Para movimiento suave (continuo)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // En pantallas medianas (tabletas) mostramos 3 logos
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // En pantallas pequeñas (móviles) mostramos 2 logos
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // En pantallas muy pequeñas mostramos 1 logo
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Slider {...settings}>
        {logoImages.map((src, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={src}
              alt={`Logo ${index + 1}`}
              className="h-20 object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrusel;
