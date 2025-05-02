import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaBullseye,
  FaEye,
  FaQuestionCircle,
  FaLightbulb
} from 'react-icons/fa';

const aboutItems = [
  {
    title: 'Our Mission',
    icon: <FaBullseye className="text-blue-600 text-4xl mb-4" />,
    text: 'To empower HR teams with smart tools that simplify tasks, improve communication, and create a happier workplace.',
    aos: 'fade-right'
  },
  {
    title: 'Our Vision',
    icon: <FaEye className="text-blue-600 text-4xl mb-4" />,
    text: 'To become the go-to digital HRMS platform for organizations of all sizes across the globe.',
    aos: 'fade-left'
  },
  {
    title: 'Why We Exist',
    icon: <FaQuestionCircle className="text-blue-600 text-4xl mb-4" />,
    text: 'We believe managing people should be as easy as managing projects. That’s why we created HR Cloud.',
    aos: 'fade-right'
  },
  {
    title: 'Core Values',
    icon: <FaLightbulb className="text-blue-600 text-4xl mb-4" />,
    textItems: ['Transparency', 'Efficiency', 'User-Centric Design', 'Innovation'],
    aos: 'fade-left'
  }
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="container mx-auto px-6 md:px-20 py-16">
      {/* Page Title */}
      <h1
        className="text-4xl font-bold text-center text-blue-600 mb-8"
        data-aos="fade-down"
      >
        About HR Cloud
      </h1>

      {/* Intro Text */}
      <p
        className="text-gray-700 text-lg text-center mb-12"
        data-aos="fade-up"
      >
        HR Cloud is designed to simplify and enhance the way companies manage their workforce.
      </p>

      {/* Cards Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {aboutItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition"
            data-aos={item.aos}
            data-aos-delay={idx * 100}
          >
            {item.icon}
            <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>

            {item.text && (
              <p className="text-gray-600">
                {item.text}
              </p>
            )}

            {item.textItems && (
              <ul className="list-disc list-inside text-gray-600">
                {item.textItems.map((val, i) => (
                  <li key={i}>{val}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
