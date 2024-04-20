import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Navbar = () => {
  return (
    <nav className="navbar p-8 bg-gray-900">
      <div className="container flex justify-between">
        <Link to="/" className="navbar-brand">My Blog</Link>
        <div className="navbar-nav flex gap-5">
          <h2 className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </h2>
          <h2 className="nav-item">
            <Link to="/blogs" className="nav-link">Blogs</Link>
          </h2>
          <h2 className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </h2>
          <h2 className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
