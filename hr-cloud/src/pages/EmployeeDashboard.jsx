import React from "react";

const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen bg-green-50 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Employee Dashboard</h1>
        <p className="text-gray-700 mb-4">Welcome! Here’s your attendance and payslip details.</p>

        <ul className="space-y-3">
          <li className="bg-green-100 px-4 py-2 rounded">🕒 View Attendance Logs</li>
          <li className="bg-green-100 px-4 py-2 rounded">📄 Download Payslip</li>
          <li className="bg-green-100 px-4 py-2 rounded">📬 Request Leave</li>
        </ul>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
