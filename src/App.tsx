import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto mt-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Servicios" element={<Servicios />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
