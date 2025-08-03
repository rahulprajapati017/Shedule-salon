import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from '../index.js';
import Footer from './Footer.jsx';

function Layout() {
  return (
    <div className="relative">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50  shadow-md">
        <Nav />
      </div>

      {/* Page Content */}
      <main className="">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
