import { FaUserTie, FaClock, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20 text-center" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Manage HR Operations Effortlessly</h1>
        <p className="text-lg text-gray-700 mb-8 px-6 md:px-0">
          Streamline employee management, payroll, attendance, and performance reviews — all in one place.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300">
          Get Started
        </button>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-6 md:px-20" data-aos="fade-right">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">What is HR Cloud?</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          HR Cloud is a web-based Human Resource Management System (HRMS) designed to help companies 
          efficiently manage their employees and HR operations through a centralized, user-friendly digital platform.
          Focus on what matters while HR Cloud automates the rest.
        </p>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-6 md:px-20" data-aos="fade-left">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Key Features</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Feature Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition" data-aos="zoom-in">
            <FaUserTie className="text-blue-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Employee Onboarding</h3>
            <p className="text-gray-600 text-sm">Seamlessly onboard and manage new employees.</p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition" data-aos="zoom-in">
            <FaClock className="text-blue-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Attendance Tracking</h3>
            <p className="text-gray-600 text-sm">Monitor attendance and leaves with ease.</p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition" data-aos="zoom-in">
            <FaMoneyBillWave className="text-blue-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Payroll Management</h3>
            <p className="text-gray-600 text-sm">Automate and manage payroll efficiently.</p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition" data-aos="zoom-in">
            <FaChartLine className="text-blue-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Performance Reviews</h3>
            <p className="text-gray-600 text-sm">Evaluate and enhance employee performance.</p>
          </div>
        </div>
      </section>

      {/* Testimonials / Use Cases */}
      <section className="bg-gray-50 py-16" data-aos="fade-up">
        <div className="container mx-auto px-6 md:px-20 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10">What Our Users Say</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 italic">"HR Cloud made our HR tasks 5x faster and way more organized. Highly recommended!"</p>
            <p className="mt-4 text-blue-600 font-bold">- Harsh Meena, HR Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
