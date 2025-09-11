import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminHome() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded"
            onClick={() => {
              localStorage.removeItem('adminToken');
              navigate('/admin-login');
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="bg-white rounded shadow p-6">
        <p>Welcome to the admin homepage. Add admin widgets here (stats, user management, etc.).</p>
      </div>
    </div>
  );
}
