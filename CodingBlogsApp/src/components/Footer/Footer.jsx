import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container p-7 mx-auto flex justify-between underline space-x-6">
        <Link to="/" className="hover:text-gray-400 transition duration-300">Home</Link>
        <Link to="/about" className="hover:text-gray-400 transition duration-300">About</Link>
        <Link to="/contact" className="hover:text-gray-400 transition duration-300">Contact Us</Link>
        <Link to="/blogs" className="hover:text-gray-400 transition duration-300">Blogs</Link>
      </div>
    </footer>
  );
}

export default Footer;
