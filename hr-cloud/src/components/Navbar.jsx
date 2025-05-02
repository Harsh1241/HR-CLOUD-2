import { Link, useNavigate } from 'react-router-dom';
import React from "react";
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.png'; // Adjust path if your logo is stored elsewhere

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo linked to homepage */}
      <Link to="/">
        <img src={logo} alt="HR Cloud Logo" className="h-12 w-auto" />
      </Link>

      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>

        {user ? (
          <>
            {user.role === 'admin' && (
              <Link to="/admin" className="text-blue-600 font-medium">Admin</Link>
            )}
            {user.role === 'employee' && (
              <Link to="/employee" className="text-blue-600 font-medium">Employee</Link>
            )}
            <button
              onClick={handleLogout}
              className="ml-4 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
