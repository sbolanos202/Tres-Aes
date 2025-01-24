import React from "react";
import { motion } from "framer-motion";
import Target from "../assets/Target.png";
import Lupa from "../assets/Lupa.png";

import CarruselNosotros from "../components/CarruselNosotros";
//import Timeline from "../assets/Timeline.png";

const Nosotros = () => {
  return (
    <div>
      <div>
        <CarruselNosotros />
      </div>
      <div>
        <h1 className="text-5xl font-normal titulos text-gray-900"> Misión</h1>
        <motion.div
          className=" "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="p-6 border border-blue-100 rounded-lg ">
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipiscing elit etiam,
              lacinia pretium eleifend diam molestie eros fermentum, consequat
              rutrum a tortor egestas dignissim himenaeos. Duis volutpat posuere
              nulla ac litora, netus pulvinar pellentesque maecenas a quis,
              rutrum libero magna justo. Suscipit duis non praesent consequat
              platea aenean senectus vivamus pharetra, lacus maecenas aptent mi
              ultrices nec himenaeos facilisi, sollicitudin mattis quis at est
              accumsan ridiculus tempus. Sed sociis odio mollis proin ac at
              venenatis nec, quis feugiat diam lacinia potenti penatibus cras
              interdum, felis hac est tristique vel conubia eget. Lacinia
              inceptos condimentum proin nunc nostra lacus nisl, eleifend non et
              morbi placerat eget, volutpat torquent mauris vitae porttitor
              netus. Pellentesque erat eu dapibus proin magnis vulputate
              dictumst egestas convallis, urna class at molestie nibh gravida
              nec auctor, mauris in eget non iaculis vivamus turpis nisi.
            </p>
            <div className="mb-3 h-12 flex justify-center items-center">
              {/* Espacio para icono */}
              <img src={Target} alt="icono-target" className="w-20 p-2" />
            </div>
          </div>
        </motion.div>
      </div>

      <div>
        <h1 className="text-5xl font-normal titulos text-gray-900"> Visión</h1>
        <motion.div
          className=" "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="p-6 border border-blue-100 rounded-lg ">
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipiscing elit etiam,
              lacinia pretium eleifend diam molestie eros fermentum, consequat
              rutrum a tortor egestas dignissim himenaeos. Duis volutpat posuere
              nulla ac litora, netus pulvinar pellentesque maecenas a quis,
              rutrum libero magna justo. Suscipit duis non praesent consequat
              platea aenean senectus vivamus pharetra, lacus maecenas aptent mi
              ultrices nec himenaeos facilisi, sollicitudin mattis quis at est
              accumsan ridiculus tempus. Sed sociis odio mollis proin ac at
              venenatis nec, quis feugiat diam lacinia potenti penatibus cras
              interdum, felis hac est tristique vel conubia eget. Lacinia
              inceptos condimentum proin nunc nostra lacus nisl, eleifend non et
              morbi placerat eget, volutpat torquent mauris vitae porttitor
              netus. Pellentesque erat eu dapibus proin magnis vulputate
              dictumst egestas convallis, urna class at molestie nibh gravida
              nec auctor, mauris in eget non iaculis vivamus turpis nisi.
            </p>
            <div className="mb-3 h-12 flex justify-center items-center">
              {/* Espacio para icono */}
              <img src={Lupa} alt="icono-lupa" className="w-20 p-2" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Nosotros;
