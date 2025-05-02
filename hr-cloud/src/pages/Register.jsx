import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import React from "react";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "employee", // or 'admin'
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/register", formData);
      alert("Registration successful! You can now login.");
      navigate("/login");
    } catch (err) {
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Register</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
          required
        />
        <select
          name="role"
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
        >
          <option value="employee">Employee</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          Register
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
