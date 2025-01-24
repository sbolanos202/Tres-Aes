import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Users, Wrench } from "lucide-react";

const navbarLinks = [
  {
    id: 1,
    title: "Nosotros",
    link: "/nosotros",
    icon: Users,
  },
  {
    id: 2,
    title: "Servicios",
    link: "/servicios",
    icon: Wrench,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-white text-xl font-bold flex items-center gap-2"
        >
          <Home className="w-6 h-6" />
          <span>Tres Aes</span>
        </Link>

        {/* Botón de menú móvil */}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden hover:text-gray-200 transition-colors"
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navegación Escritorio */}
        <div className="hidden md:block">
          <ul className="flex sm:space-x-8 space-x-4">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.link}
                  className="text-white sm:text-lg text-sm hover:text-gray-200 transition-all duration-300 flex items-center gap-2 hover:scale-105"
                >
                  <link.icon className="w-5 h-5" />
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navegación Móvil */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-blue-700`}
      >
        <ul className="flex flex-col px-4 py-2">
          {navbarLinks.map((link) => (
            <li key={link.id} className="py-2">
              <Link
                to={link.link}
                className="text-white block text-center hover:text-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <link.icon className="w-5 h-5" />
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
