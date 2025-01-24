import React from "react";
import Slider from "react-slick"; // Importa el Slider de react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Rutas de las imágenes
import BudweiserLogo from "../assets/budweiser.svg";
import ThreeMLogo from "../assets/3m.svg";
import BarstoolLogo from "../assets/barstool-store.svg";

const logoImages = [BudweiserLogo, ThreeMLogo, BarstoolLogo];

const CarruselNosotros = () => {
  // Configuración del carrusel
  const settings = {
    infinite: true, // Carrusel infinito
    speed: 6000, // Velocidad de la transición (en milisegundos)
    slidesToShow: 1, // Número de logos visibles
    slidesToScroll: 1, // Número de logos que se desplazan por vez
    autoplay: false, // Carrusel con autoplay
    autoplaySpeed: 0, // Sin pausa, movimiento continuo
    pauseOnHover: true, // No pausa al pasar el mouse sobre el carrusel
    arrows: true, // Flechas activadas
    cssEase: "linear",

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
    <div className="container mx-auto max-w-sm px-4 py-24 h-[300px] ">
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

export default CarruselNosotros;
