// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { backendUrl } from '../App';
// import { toast } from 'react-toastify';

// export default function AdminAddProduct(){
//   const [name,setName] = useState('');
//   const [description,setDescription] = useState('');
//   const [price,setPrice] = useState('');
//   const [bookingPrice,setBookingPrice] = useState('');
//   const [monthlyPrice,setMonthlyPrice] = useState('');
//   const [category,setCategory] = useState('');
//   const [subCategory,setSubCategory] = useState('');
//   const [size,setSize] = useState('');
//   const [phase,setPhase] = useState('');
//   const [bestseller,setBestseller] = useState(false);
//   const [image1,setImage1] = useState(null);
//   const [image2,setImage2] = useState(null);
//   const [loading,setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if(!name.trim()) return toast.error('Name is required');
//     if(!price) return toast.error('Price is required');
//     if(!category.trim()) return toast.error('Category is required');
//     if(!image1 || !image2) return toast.error('Two images are required');

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('description', description);
//     formData.append('price', price);
//     if (bookingPrice) formData.append('bookingPrice', bookingPrice);
//     if (monthlyPrice) formData.append('monthlyPrice', monthlyPrice);
//     formData.append('category', category);
//     formData.append('subCategory', subCategory);
//     formData.append('size', size);
//     formData.append('phase', phase);
//     formData.append('bestseller', bestseller ? 'true' : 'false');
//     formData.append('image1', image1);
//     formData.append('image2', image2);

//     try{
//       setLoading(true);
//       const token = localStorage.getItem('adminToken');
//       const res = await fetch(`${backendUrl || 'http://localhost:4000'}/api/product/add`, {
//         method: 'POST',
//         headers: token ? { token } : {},
//         body: formData
//       });
//       const data = await res.json();
//       if (!data.success) throw new Error(data.message || 'Failed to add product');
//       toast.success('Product added');
//       navigate('/admin/products');
//     }catch(err){
//       toast.error(err.message);
//     }finally{setLoading(false)}
//   }

//   return (
//     <div className="min-h-screen p-6 bg-gray-50">
//       <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
//         <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
//           <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="p-3 border rounded" />
//           <textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder="Description" className="p-3 border rounded h-24" />
//           <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
//             <input value={price} onChange={e=>setPrice(e.target.value)} placeholder="Price" className="p-3 border rounded" />
//             <input value={bookingPrice} onChange={e=>setBookingPrice(e.target.value)} placeholder="Booking Price" className="p-3 border rounded" />
//             <input value={monthlyPrice} onChange={e=>setMonthlyPrice(e.target.value)} placeholder="Monthly Price" className="p-3 border rounded" />
//           </div>
//           <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
//             <input value={category} onChange={e=>setCategory(e.target.value)} placeholder="Category" className="p-3 border rounded" />
//             <input value={subCategory} onChange={e=>setSubCategory(e.target.value)} placeholder="Sub Category" className="p-3 border rounded" />
//             <input value={size} onChange={e=>setSize(e.target.value)} placeholder="Size" className="p-3 border rounded" />
//           </div>
//           <div className="flex gap-4 items-center">
//             <input value={phase} onChange={e=>setPhase(e.target.value)} placeholder="Phase" className="p-3 border rounded" />
//             <label className="flex items-center gap-2"><input type="checkbox" checked={bestseller} onChange={e=>setBestseller(e.target.checked)} /> Bestseller</label>
//           </div>

//           <div className="grid md:grid-cols-2 gap-4">
//             <label className="p-3 border rounded text-sm flex flex-col">
//               Image 1 (required)
//               <input type="file" accept="image/*" onChange={e=>setImage1(e.target.files[0])} className="mt-2" />
//             </label>
//             <label className="p-3 border rounded text-sm flex flex-col">
//               Image 2 (required)
//               <input type="file" accept="image/*" onChange={e=>setImage2(e.target.files[0])} className="mt-2" />
//             </label>
//           </div>

//           <div className="flex justify-end">
//             <button type="submit" disabled={loading} className="px-6 py-2 bg-blue-700 text-white rounded">{loading? 'Adding...' : 'Add Product'}</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

export default function AdminAddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [bookingPrice, setBookingPrice] = useState("");
  const [monthlyPrice, setMonthlyPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [size, setSize] = useState("");
  const [phase, setPhase] = useState("");
  const [bestseller, setBestseller] = useState(false);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Convert file to base64
  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return toast.error("Name is required");
    if (!price) return toast.error("Price is required");
    if (!category.trim()) return toast.error("Category is required");
    if (!image1 || !image2) return toast.error("Two images are required");

    try {
      setLoading(true);

      // Convert images to base64
      const image1Base64 = await toBase64(image1);
      const image2Base64 = await toBase64(image2);

      const token = localStorage.getItem("adminToken");
      const res = await fetch(
        `${backendUrl || "http://localhost:4000"}/api/product/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { token } : {}),
          },
          body: JSON.stringify({
            name,
            description,
            price,
            bookingPrice,
            monthlyPrice,
            category,
            subCategory,
            size,
            phase,
            bestseller: bestseller ? "true" : "false",
            image1: image1Base64,
            image2: image2Base64,
          }),
        }
      );

      const data = await res.json();
      if (!data.success)
        throw new Error(data.message || "Failed to add product");
      toast.success("Product added");
      navigate("/admin/products");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="p-3 border rounded"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="p-3 border rounded h-24"
          />
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="p-3 border rounded"
            />
            <input
              value={bookingPrice}
              onChange={(e) => setBookingPrice(e.target.value)}
              placeholder="Booking Price"
              className="p-3 border rounded"
            />
            <input
              value={monthlyPrice}
              onChange={(e) => setMonthlyPrice(e.target.value)}
              placeholder="Monthly Price"
              className="p-3 border rounded"
            />
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
              className="p-3 border rounded"
            />
            <input
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              placeholder="Sub Category"
              className="p-3 border rounded"
            />
            <input
              value={size}
              onChange={(e) => setSize(e.target.value)}
              placeholder="Size"
              className="p-3 border rounded"
            />
          </div>
          <div className="flex gap-4 items-center">
            <input
              value={phase}
              onChange={(e) => setPhase(e.target.value)}
              placeholder="Phase"
              className="p-3 border rounded"
            />
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={bestseller}
                onChange={(e) => setBestseller(e.target.checked)}
              />{" "}
              Bestseller
            </label>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <label className="p-3 border rounded text-sm flex flex-col">
              Image 1 (required)
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage1(e.target.files[0])}
                className="mt-2"
              />
            </label>
            <label className="p-3 border rounded text-sm flex flex-col">
              Image 2 (required)
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage2(e.target.files[0])}
                className="mt-2"
              />
            </label>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-700 text-white rounded"
            >
              {loading ? "Adding..." : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
