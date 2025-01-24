import React from "react";
import Sectores from "../assets/Sectores.png";
import Mapa from "../assets/Mapa.png";
import imagenprincipal from "../assets/imagenprincipal.png";
import { motion } from "motion/react";
import Carrusel from "../components/Carrusel";
const Home = () => {
  return (
    <>
      <div className="">
        <div className="p-8 max-w-7xl  mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-6">
              <h1 className="text-5xl font-bold titulos text-gray-900">
                Tres Aes SAS
              </h1>
              <p className="text-xl text-gray-700">
                Somos una empresa con 30 años de trayectoria cumpliéndole a los
                caleños.
              </p>
            </div>

            <img
              src={imagenprincipal}
              alt="Imagen principal"
              className="w-1/2 max-w-xl rounded-lg shadow-lg"
            />
          </div>

          {/* Grid alineado con la imagen */}
          <div className="flex items-center mt-6 space-x-12 text-left text-gray-600">
            <div className="flex flex-col items-center">
              <p className="text-3xl font-light">16K</p>
              <p className="text-sm">
                Proyectos{" "}
                <span className="font-bold text-blue-400">Exitosos</span>
              </p>
            </div>
            <div className="flex items-center justify-center text-3xl text-gray-400">
              <span>|</span>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-light">10K</p>
              <p className="text-sm">
                Clientes{" "}
                <span className="font-bold text-blue-400">Satisfechos</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-8  items-center">
          {/* Imagen */}
          <div className="w-1/2">
            <img src={Sectores} alt="Sectores" className="w-full" />
          </div>

          {/* Grid 2x2 */}
          <div className="w-1/2 grid grid-cols-2 gap-4 p-6">
            {/* Cuadrante 1 */}

            <motion.div
              className=" "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="p-6 border border-blue-100 rounded-lg ">
                <div className="mb-3 h-12 flex justify-center items-center">
                  {/* Espacio para icono */}
                  <i className="bi bi-megaphone azul-texto icon-tamano"></i>
                </div>
                <p className="text-sm">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt.
                </p>
              </div>
            </motion.div>

            <motion.div
              className=""
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="p-6 border border-blue-100 rounded-lg  ">
                <div className="mb-3 h-12 flex justify-center items-center">
                  {/* Espacio para icono */}
                  <i className="bi bi-gear azul-texto icon-tamano"></i>
                </div>
                <p className="text-sm">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt.
                </p>
              </div>
            </motion.div>
            <motion.div
              className=""
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="p-6 border border-blue-100 rounded-lg ">
                <div className="mb-3 h-12 flex justify-center items-center">
                  {/* Espacio para icono */}
                  <i className="bi bi-newspaper azul-texto icon-tamano"></i>
                </div>
                <p className="text-sm">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt.
                </p>
              </div>
            </motion.div>

            <motion.div
              className=" "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="p-6 border border-blue-100 rounded-lg ">
                <div className="mb-3 h-12 flex justify-center items-center">
                  {/* Espacio para icono */}
                  <i className="bi bi-buildings azul-texto icon-tamano"></i>
                </div>
                <p className="text-sm">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="w-full px-6 py-10 ">
          <h2 className="text-2xl titulos font-normal text-center">
            Nuestros Clientes
          </h2>
          <p className="text-center text-gray-600 text-sm mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            architecto qui temporibus praesentium aut dolorem, neque iusto
            possimus magni adipisci placeat voluptatem. Quia facere aspernatur
            optio, consequatur amet culpa ea. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quam, maiores. Modi recusandae qui
            quas similique! Consectetur facilis dolore doloribus libero pariatur
            id aut praesentium non nam, ducimus eius a assumenda. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Deserunt expedita,
            ullam magnam sequi adipisci unde exercitationem minima blanditiis,
            quas sint ipsa inventore deleniti non voluptas consectetur fugiat
            quidem explicabo quod!
          </p>

          <Carrusel />
        </div>

        <div>Conoce Nuestro equipo</div>

        <div className="flex flex-col items-center justify-center text-center py-10">
          <h2 className="text-2xl titulos font-normal text-center mb-6">
            Como encontrarnos
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-6 px-6 sm:px-20 py-10">
            {/* Texto a la izquierda */}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-xl font-light azul-texto">
                <i className="bi bi-geo"></i> Cl. 19b #21-100, Cali, Valle del
                Cauca
              </p>
            </div>

            {/* Imagen a la derecha */}
            <motion.a
              href="https://www.google.com/maps/place/Tres+Aes+SAS/@3.4359848,-76.5236468,17z/data=!3m1!4b1!4m6!3m5!1s0x8e30a6f23472b0f9:0x81b19d3a26ae6492!8m2!3d3.4359848!4d-76.5210719!16s%2Fg%2F11h9ctgd1m?hl=es&entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }} // Agranda la imagen al pasar el cursor
              whileTap={{ scale: 0.9 }} // Reduce la imagen al hacer clic
              className="flex-shrink-0 rounded-lg overflow-hidden"
            >
              <img
                src={Mapa}
                alt="Imagen de ejemplo"
                className="w-full h-auto max-w-[700px] object-cover rounded-lg"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
