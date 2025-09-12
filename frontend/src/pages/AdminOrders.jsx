import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch orders
  const fetchOrders = async () => {
    try {
      const res = await fetch(`${backendUrl}/api/order/list`);
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setOrders(data.orders);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // update order status
  const updateStatus = async (orderId, newStatus) => {
    try {
      const res = await fetch(`${backendUrl}/api/order/update/${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      toast.success("Order updated!");
      fetchOrders(); // refresh list
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">All Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Product</th>
                <th className="border px-4 py-2">Customer</th>
                <th className="border px-4 py-2">Phone</th>
                <th className="border px-4 py-2">Address</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="text-center">
                  <td className="border px-4 py-2">
                    <div className="flex items-center gap-2">
                      <img
                        src={order.product?.image[0]}
                        alt={order.product?.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <span>{order.product?.name}</span>
                    </div>
                  </td>
                  <td className="border px-4 py-2">{order.name}</td>
                  <td className="border px-4 py-2">{order.phone}</td>
                  <td className="border px-4 py-2">{order.address}</td>
                  <td className="border px-4 py-2 font-semibold">
                    {order.status}
                  </td>
                  <td className="border px-4 py-2">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                  <td className="border px-4 py-2">
                    <select
                      value={order.status}
                      onChange={(e) => updateStatus(order._id, e.target.value)}
                      className="border px-2 py-1 rounded"
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
