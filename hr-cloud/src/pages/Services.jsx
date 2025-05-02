import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaUsers,
  FaRegCalendarCheck,
  FaMoneyCheckAlt,
  FaPlaneDeparture
} from 'react-icons/fa';

const services = [
  {
    title: 'Employee Tracking',
    description: 'Monitor employee activities, profiles, and performance from one place.',
    icon: <FaUsers className="text-4xl text-blue-600 mb-4" />,
  },
  {
    title: 'Attendance Management',
    description: 'Track employee check-ins, absences, and generate reports.',
    icon: <FaRegCalendarCheck className="text-4xl text-blue-600 mb-4" />,
  },
  {
    title: 'Payroll Insights',
    description: 'Generate payslips, manage salaries, and handle tax calculations.',
    icon: <FaMoneyCheckAlt className="text-4xl text-blue-600 mb-4" />,
  },
  {
    title: 'Leave Approvals',
    description: 'Handle leave requests, balance tracking, and approval workflows.',
    icon: <FaPlaneDeparture className="text-4xl text-blue-600 mb-4" />,
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      className="container mx-auto px-6 md:px-20 py-16"
      data-aos="fade-up"
    >
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Our Services
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="text-center">
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
