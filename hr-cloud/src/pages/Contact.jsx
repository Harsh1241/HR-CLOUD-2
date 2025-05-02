import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="container mx-auto px-6 md:px-20 py-16">
      {/* Page Title */}
      <h1
        className="text-4xl font-bold text-center text-blue-600 mb-10"
        data-aos="fade-down"
      >
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form
          className="space-y-6"
          data-aos="fade-right"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 transition"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 transition"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 transition"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div
          className="text-gray-700"
          data-aos="fade-left"
        >
          <h2 className="text-2xl font-semibold mb-4">Company Info</h2>
          <p className="mb-2"><strong>Address:</strong> 123 HR Street, Cloud City, CA</p>
          <p className="mb-2"><strong>Phone:</strong> +1 234 567 8900</p>
          <p className="mb-2"><strong>Email:</strong> contact@hrcloud.com</p>
          <div className="mt-4">
            <p className="font-semibold mb-1">Follow us:</p>
            <div className="flex gap-4">
              <a href="#" className="text-blue-500 hover:text-blue-700 transition-transform duration-300 hover:scale-110">
                Facebook
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 transition-transform duration-300 hover:scale-110">
                Twitter
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 transition-transform duration-300 hover:scale-110">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
