import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-400 p-6 bg-gray-100 ">
      <div className="flex justify-between">
        {/* Columna izquierda */}
        <div className="w-1/2">
          <div className="mb-6">
            <h3 className="text-blue text-2xl font-normal">Tres Aes</h3>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              vel? Incidunt deleniti corporis, labore molestias nesciunt ducimus
              illum, atque ipsum amet maxime debitis, ipsam fugiat ratione sit
              beatae animi provident?
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <i className="bi bi-envelope-paper"></i>

              <a href="mailto:aozdm@hotmail.com"> aozdm@hotmail.com</a>
            </div>

            <div className="flex items-center">
              <i className="bi bi-geo mr-2"></i>
              <p>Cl. 19b #21-100, Cali, Valle del Cauca</p>
            </div>

            <div className="flex items-center">
              <i className="bi bi-telephone mr-2"></i>
              <a href="tel:+573006599558">(+57) 300 659 9558</a>
            </div>
          </div>
        </div>

        {/* Columna derecha - Métodos de pago */}
        <div className="w-1/2 pl-8">
          <h3 className="text-blue text-2xl font-normal mb-4">
            Métodos de pago
          </h3>
          <ul className="space-y-2 ">
            <li className="flex items-center">
              <span className="w-8"></span>
              Efectivo <i className="bi bi-cash-coin px-2"></i>
            </li>
            <li className="flex items-center">
              <span className="w-8"></span>
              Transferencia <i className="bi bi-bank px-2"></i>
            </li>
            <li className="flex items-center ">
              <span className="w-8 "></span>
              Débito / Credito <i className="bi bi-credit-card px-2"> </i>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>© Tres Aes. 2025 Todos los derechos reservados.</p>
        <p>Desarrollado con ❤️ por Sbolanos</p>
      </div>
    </footer>
  );
};

export default Footer;
