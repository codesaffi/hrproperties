import React, { useEffect, useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

export default function AdminProducts(){
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(false);

  const fetchProducts = async ()=>{
    try{
      setLoading(true);
      const res = await fetch(`${backendUrl || 'http://localhost:4000'}/api/product/list`);
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'Failed to load');
      setProducts(data.products || []);
    }catch(err){
      toast.error(err.message);
    }finally{setLoading(false)}
  }

  useEffect(()=>{fetchProducts()},[])

  const handleRemove = async (id)=>{
    if(!confirm('Remove this product?')) return;
    try{
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`${backendUrl || 'http://localhost:4000'}/api/product/remove`,{
        method:'POST',
        headers: { 'Content-Type':'application/json', ...(token?{token}:{}) },
        body: JSON.stringify({ id })
      })
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'Remove failed');
      toast.success('Product removed');
      setProducts(p=>p.filter(x=>x._id !== id));
    }catch(err){toast.error(err.message)}
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Products</h2>
        </div>

        {loading ? <div>Loading...</div> : (
          <div className="grid gap-4 md:grid-cols-3">
            {products.map(prod=> (
              <div key={prod._id} className="border rounded p-3 bg-white">
                <img src={prod.image && prod.image[0]} alt={prod.name} className="h-40 w-full object-cover mb-2 rounded" />
                <h3 className="font-semibold">{prod.name}</h3>
                <div className="text-sm text-gray-600">{prod.category}</div>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-lg font-bold">${prod.price}</div>
                  <button onClick={()=>handleRemove(prod._id)} className="px-3 py-1 text-sm bg-red-600 text-white rounded">Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
