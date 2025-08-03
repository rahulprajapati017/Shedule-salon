import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/about';
// import Contact from '../pages/Contact';
import {BarbarCategory} from '../index.js';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      <Route path="/salon" element={<BarberCategory />} />
    </Routes>
  );
};

export default AppRoutes;
