import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-4 mb-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400 transition">
            <FaTwitter size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition">
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition">
            <FaInstagram size={20} />
          </a>
        </div>
        <p className="text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} HR Cloud. Designed with 💙 for seamless HR.
        </p>
      </div>
    </footer>
  );
}
