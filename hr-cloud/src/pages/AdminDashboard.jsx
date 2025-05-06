import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Admin Dashboard</h1>
        <p className="text-gray-700 mb-4">Welcome, Admin! You can manage employees, payroll, and more here.</p>

        <ul className="space-y-3">
          <li className="bg-blue-100 px-4 py-2 rounded">📁 View All Employees</li>
          <li className="bg-blue-100 px-4 py-2 rounded">📊 Manage Attendance</li>
          <li className="bg-blue-100 px-4 py-2 rounded">💼 Generate Payslips</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
