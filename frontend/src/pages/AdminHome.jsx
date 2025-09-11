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

      <div className="grid gap-4 md:grid-cols-2 mb-6">
        <a href="/admin/add-product" className="block bg-white p-6 rounded shadow hover:shadow-md">Add Product</a>
        <a href="/admin/products" className="block bg-white p-6 rounded shadow hover:shadow-md">List Products</a>
      </div>

      <div className="bg-white rounded shadow p-6">
        <p>Welcome to the admin homepage. Use the links above to manage products.</p>
      </div>
    </div>
  );
}
