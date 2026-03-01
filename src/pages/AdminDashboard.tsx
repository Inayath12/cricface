// // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // // // // import { Plus, Trash2, Edit2, LogOut, Package, Image as ImageIcon } from 'lucide-react';
// // // // // // // // // // import { Product } from '../types';

// // // // // // // // // // const AdminDashboard = () => {
// // // // // // // // // //   const [products, setProducts] = useState<Product[]>([]);
// // // // // // // // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // // // // // // // //   const [editingProduct, setEditingProduct] = useState<Partial<Product> | null>(null);
// // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // //   const token = localStorage.getItem('cricface_admin_token');

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (!token) {
// // // // // // // // // //       navigate('/admin/login');
// // // // // // // // // //       return;
// // // // // // // // // //     }
// // // // // // // // // //     fetchProducts();
// // // // // // // // // //   }, [token]);

// // // // // // // // // //   const fetchProducts = async () => {
// // // // // // // // // //     const res = await fetch('/api/products');
// // // // // // // // // //     const data = await res.json();
// // // // // // // // // //     setProducts(data);
// // // // // // // // // //   };

// // // // // // // // // //   const handleLogout = () => {
// // // // // // // // // //     localStorage.removeItem('cricface_admin_token');
// // // // // // // // // //     navigate('/admin/login');
// // // // // // // // // //   };

// // // // // // // // // //   const handleDelete = async (id: number) => {
// // // // // // // // // //     if (!confirm('Are you sure you want to delete this product?')) return;
// // // // // // // // // //     await fetch(`/api/products/${id}`, {
// // // // // // // // // //       method: 'DELETE',
// // // // // // // // // //       headers: { 'Authorization': `Bearer ${token}` }
// // // // // // // // // //     });
// // // // // // // // // //     fetchProducts();
// // // // // // // // // //   };

// // // // // // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // // // // // //     e.preventDefault();
// // // // // // // // // //     const url = editingProduct?.id ? `/api/products/${editingProduct.id}` : '/api/products';
// // // // // // // // // //     const method = editingProduct?.id ? 'PUT' : 'POST';

// // // // // // // // // //     await fetch(url, {
// // // // // // // // // //       method,
// // // // // // // // // //       headers: {
// // // // // // // // // //         'Content-Type': 'application/json',
// // // // // // // // // //         'Authorization': `Bearer ${token}`
// // // // // // // // // //       },
// // // // // // // // // //       body: JSON.stringify(editingProduct)
// // // // // // // // // //     });

// // // // // // // // // //     setIsModalOpen(false);
// // // // // // // // // //     setEditingProduct(null);
// // // // // // // // // //     fetchProducts();
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="pt-32 pb-24 bg-zinc-50 min-h-screen">
// // // // // // // // // //       <div className="max-w-7xl mx-auto px-4">
// // // // // // // // // //         <div className="flex justify-between items-center mb-12">
// // // // // // // // // //           <div>
// // // // // // // // // //             <h1 className="text-4xl font-display font-black text-zinc-900">DASHBOARD</h1>
// // // // // // // // // //             <p className="text-zinc-500">Manage your premium catalog</p>
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="flex gap-4">
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={() => { setEditingProduct({ images: [], specifications: {} }); setIsModalOpen(true); }}
// // // // // // // // // //               className="bg-gold text-black font-bold px-6 py-3 rounded-xl flex items-center space-x-2 hover:bg-[#c4a030] transition-all"
// // // // // // // // // //             >
// // // // // // // // // //               <Plus size={20} />
// // // // // // // // // //               <span>Add New Bat</span>
// // // // // // // // // //             </button>
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={handleLogout}
// // // // // // // // // //               className="bg-white text-zinc-500 font-bold px-6 py-3 rounded-xl border border-zinc-200 flex items-center space-x-2 hover:bg-zinc-50 transition-all"
// // // // // // // // // //             >
// // // // // // // // // //               <LogOut size={20} />
// // // // // // // // // //               <span>Logout</span>
// // // // // // // // // //             </button>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         <div className="bg-white rounded-[2.5rem] shadow-sm border border-zinc-100 overflow-hidden">
// // // // // // // // // //           <table className="w-full text-left">
// // // // // // // // // //             <thead>
// // // // // // // // // //               <tr className="bg-zinc-50 border-b border-zinc-100">
// // // // // // // // // //                 <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-zinc-400">Product</th>
// // // // // // // // // //                 <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-zinc-400">Willow / Grade</th>
// // // // // // // // // //                 <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-zinc-400">Price (INR)</th>
// // // // // // // // // //                 <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-zinc-400">Actions</th>
// // // // // // // // // //               </tr>
// // // // // // // // // //             </thead>
// // // // // // // // // //             <tbody className="divide-y divide-zinc-100">
// // // // // // // // // //               {products.map((product) => (
// // // // // // // // // //                 <tr key={product.id} className="hover:bg-zinc-50/50 transition-colors">
// // // // // // // // // //                   <td className="px-8 py-6">
// // // // // // // // // //                     <div className="flex items-center space-x-4">
// // // // // // // // // //                       <div className="w-12 h-12 rounded-lg overflow-hidden bg-zinc-100">
// // // // // // // // // //                         <img src={product.images[0]} alt="" className="w-full h-full object-cover" />
// // // // // // // // // //                       </div>
// // // // // // // // // //                       <span className="font-bold text-zinc-900">{product.name}</span>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </td>
// // // // // // // // // //                   <td className="px-8 py-6">
// // // // // // // // // //                     <div className="text-sm">
// // // // // // // // // //                       <p className="text-zinc-900 font-medium">{product.willow_type}</p>
// // // // // // // // // //                       <p className="text-zinc-400">{product.grade}</p>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </td>
// // // // // // // // // //                   <td className="px-8 py-6">
// // // // // // // // // //                     <span className="font-bold text-cricket-green">₹{product.price_inr.toLocaleString()}</span>
// // // // // // // // // //                   </td>
// // // // // // // // // //                   <td className="px-8 py-6">
// // // // // // // // // //                     <div className="flex space-x-3">
// // // // // // // // // //                       <button
// // // // // // // // // //                         onClick={() => { setEditingProduct(product); setIsModalOpen(true); }}
// // // // // // // // // //                         className="p-2 text-zinc-400 hover:text-gold transition-colors"
// // // // // // // // // //                       >
// // // // // // // // // //                         <Edit2 size={18} />
// // // // // // // // // //                       </button>
// // // // // // // // // //                       <button
// // // // // // // // // //                         onClick={() => handleDelete(product.id)}
// // // // // // // // // //                         className="p-2 text-zinc-400 hover:text-red-500 transition-colors"
// // // // // // // // // //                       >
// // // // // // // // // //                         <Trash2 size={18} />
// // // // // // // // // //                       </button>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </td>
// // // // // // // // // //                 </tr>
// // // // // // // // // //               ))}
// // // // // // // // // //             </tbody>
// // // // // // // // // //           </table>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Modal */}
// // // // // // // // // //       {isModalOpen && (
// // // // // // // // // //         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
// // // // // // // // // //           <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
// // // // // // // // // //             <div className="p-8 border-b border-zinc-100 flex justify-between items-center">
// // // // // // // // // //               <h2 className="text-2xl font-display font-black">
// // // // // // // // // //                 {editingProduct?.id ? 'EDIT PRODUCT' : 'ADD NEW PRODUCT'}
// // // // // // // // // //               </h2>
// // // // // // // // // //               <button onClick={() => setIsModalOpen(false)} className="text-zinc-400 hover:text-zinc-900">
// // // // // // // // // //                 <Plus size={24} className="rotate-45" />
// // // // // // // // // //               </button>
// // // // // // // // // //             </div>
            
// // // // // // // // // //             <form onSubmit={handleSubmit} className="p-8 overflow-y-auto space-y-6">
// // // // // // // // // //               <div className="grid grid-cols-2 gap-6">
// // // // // // // // // //                 <div className="col-span-2">
// // // // // // // // // //                   <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Product Name</label>
// // // // // // // // // //                   <input
// // // // // // // // // //                     required
// // // // // // // // // //                     type="text"
// // // // // // // // // //                     value={editingProduct?.name || ''}
// // // // // // // // // //                     onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
// // // // // // // // // //                     className="w-full px-4 py-3 bg-zinc-50 rounded-xl focus:outline-none"
// // // // // // // // // //                   />
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <div>
// // // // // // // // // //                   <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Price (INR)</label>
// // // // // // // // // //                   <input
// // // // // // // // // //                     required
// // // // // // // // // //                     type="number"
// // // // // // // // // //                     value={editingProduct?.price_inr || ''}
// // // // // // // // // //                     onChange={(e) => setEditingProduct({ ...editingProduct, price_inr: Number(e.target.value) })}
// // // // // // // // // //                     className="w-full px-4 py-3 bg-zinc-50 rounded-xl focus:outline-none"
// // // // // // // // // //                   />
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <div>
// // // // // // // // // //                   <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Price (USD)</label>
// // // // // // // // // //                   <input
// // // // // // // // // //                     required
// // // // // // // // // //                     type="number"
// // // // // // // // // //                     value={editingProduct?.price_usd || ''}
// // // // // // // // // //                     onChange={(e) => setEditingProduct({ ...editingProduct, price_usd: Number(e.target.value) })}
// // // // // // // // // //                     className="w-full px-4 py-3 bg-zinc-50 rounded-xl focus:outline-none"
// // // // // // // // // //                   />
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <div>
// // // // // // // // // //                   <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Willow Type</label>
// // // // // // // // // //                   <select
// // // // // // // // // //                     value={editingProduct?.willow_type || ''}
// // // // // // // // // //                     onChange={(e) => setEditingProduct({ ...editingProduct, willow_type: e.target.value })}
// // // // // // // // // //                     className="w-full px-4 py-3 bg-zinc-50 rounded-xl focus:outline-none"
// // // // // // // // // //                   >
// // // // // // // // // //                     <option value="English Willow">English Willow</option>
// // // // // // // // // //                     <option value="Kashmir Willow">Kashmir Willow</option>
// // // // // // // // // //                   </select>
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <div>
// // // // // // // // // //                   <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Grade</label>
// // // // // // // // // //                   <input
// // // // // // // // // //                     type="text"
// // // // // // // // // //                     value={editingProduct?.grade || ''}
// // // // // // // // // //                     onChange={(e) => setEditingProduct({ ...editingProduct, grade: e.target.value })}
// // // // // // // // // //                     className="w-full px-4 py-3 bg-zinc-50 rounded-xl focus:outline-none"
// // // // // // // // // //                     placeholder="e.g. Grade 1+"
// // // // // // // // // //                   />
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <div className="col-span-2">
// // // // // // // // // //                   <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Image URLs (one per line)</label>
// // // // // // // // // //                   <textarea
// // // // // // // // // //                     rows={3}
// // // // // // // // // //                     value={editingProduct?.images?.join('\n') || ''}
// // // // // // // // // //                     onChange={(e) => setEditingProduct({ ...editingProduct, images: e.target.value.split('\n').filter(i => i.trim()) })}
// // // // // // // // // //                     className="w-full px-4 py-3 bg-zinc-50 rounded-xl focus:outline-none resize-none"
// // // // // // // // // //                   />
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <div className="col-span-2">
// // // // // // // // // //                   <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Description</label>
// // // // // // // // // //                   <textarea
// // // // // // // // // //                     rows={3}
// // // // // // // // // //                     value={editingProduct?.description || ''}
// // // // // // // // // //                     onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
// // // // // // // // // //                     className="w-full px-4 py-3 bg-zinc-50 rounded-xl focus:outline-none resize-none"
// // // // // // // // // //                   />
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>

// // // // // // // // // //               <button
// // // // // // // // // //                 type="submit"
// // // // // // // // // //                 className="w-full bg-zinc-900 text-white font-bold py-4 rounded-xl hover:bg-black transition-all"
// // // // // // // // // //               >
// // // // // // // // // //                 Save Product
// // // // // // // // // //               </button>
// // // // // // // // // //             </form>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default AdminDashboard;


// // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // // // import { Plus, Trash2, Edit2, LogOut } from 'lucide-react';
// // // // // // // // // import { Product } from '../types';

// // // // // // // // // const AdminDashboard = () => {
// // // // // // // // //   const [products, setProducts] = useState<Product[]>([]);
// // // // // // // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // // // // // // //   const [editingProduct, setEditingProduct] = useState<Partial<Product> | null>(null);
// // // // // // // // //   const navigate = useNavigate();
// // // // // // // // //   const token = localStorage.getItem('cricface_admin_token');

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (!token) {
// // // // // // // // //       navigate('/admin/login');
// // // // // // // // //       return;
// // // // // // // // //     }
// // // // // // // // //     fetchProducts();
// // // // // // // // //   }, [token]);

// // // // // // // // //   const fetchProducts = async () => {
// // // // // // // // //     const res = await fetch('/api/products');
// // // // // // // // //     const data = await res.json();
// // // // // // // // //     setProducts(data);
// // // // // // // // //   };

// // // // // // // // //   const handleLogout = () => {
// // // // // // // // //     localStorage.removeItem('cricface_admin_token');
// // // // // // // // //     navigate('/admin/login');
// // // // // // // // //   };

// // // // // // // // //   const handleDelete = async (id: number) => {
// // // // // // // // //     if (!confirm('Are you sure you want to delete this product?')) return;

// // // // // // // // //     await fetch(`/api/products/${id}`, {
// // // // // // // // //       method: 'DELETE',
// // // // // // // // //       headers: { Authorization: `Bearer ${token}` }
// // // // // // // // //     });

// // // // // // // // //     fetchProducts();
// // // // // // // // //   };

// // // // // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // // // // //     e.preventDefault();

// // // // // // // // //     const url = editingProduct?.id
// // // // // // // // //       ? `/api/products/${editingProduct.id}`
// // // // // // // // //       : '/api/products';

// // // // // // // // //     const method = editingProduct?.id ? 'PUT' : 'POST';

// // // // // // // // //     await fetch(url, {
// // // // // // // // //       method,
// // // // // // // // //       headers: {
// // // // // // // // //         'Content-Type': 'application/json',
// // // // // // // // //         Authorization: `Bearer ${token}`
// // // // // // // // //       },
// // // // // // // // //       body: JSON.stringify(editingProduct)
// // // // // // // // //     });

// // // // // // // // //     setIsModalOpen(false);
// // // // // // // // //     setEditingProduct(null);
// // // // // // // // //     fetchProducts();
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="pt-32 pb-24 bg-zinc-50 min-h-screen">
// // // // // // // // //       <div className="max-w-7xl mx-auto px-4">

// // // // // // // // //         {/* Header */}
// // // // // // // // //         <div className="flex justify-between items-center mb-12">
// // // // // // // // //           <div>
// // // // // // // // //             <h1 className="text-4xl font-display font-black text-zinc-900">
// // // // // // // // //               DASHBOARD
// // // // // // // // //             </h1>
// // // // // // // // //             <p className="text-zinc-500">Manage your premium catalog</p>
// // // // // // // // //           </div>

// // // // // // // // //           <div className="flex gap-4">
// // // // // // // // //             <button
// // // // // // // // //               onClick={() => {
// // // // // // // // //                 setEditingProduct({
// // // // // // // // //                   images: [],
// // // // // // // // //                   specifications: {}
// // // // // // // // //                 });
// // // // // // // // //                 setIsModalOpen(true);
// // // // // // // // //               }}
// // // // // // // // //               className="bg-gold text-black font-bold px-6 py-3 rounded-xl flex items-center space-x-2 hover:bg-[#c4a030]"
// // // // // // // // //             >
// // // // // // // // //               <Plus size={20} />
// // // // // // // // //               <span>Add New Bat</span>
// // // // // // // // //             </button>

// // // // // // // // //             <button
// // // // // // // // //               onClick={handleLogout}
// // // // // // // // //               className="bg-white text-zinc-500 font-bold px-6 py-3 rounded-xl border border-zinc-200 flex items-center space-x-2 hover:bg-zinc-50"
// // // // // // // // //             >
// // // // // // // // //               <LogOut size={20} />
// // // // // // // // //               <span>Logout</span>
// // // // // // // // //             </button>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Table */}
// // // // // // // // //         <div className="bg-white rounded-[2.5rem] shadow-sm border border-zinc-100 overflow-hidden">
// // // // // // // // //           <table className="w-full text-left">
// // // // // // // // //             <thead>
// // // // // // // // //               <tr className="bg-zinc-50 border-b border-zinc-100">
// // // // // // // // //                 <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-zinc-400">Product</th>
// // // // // // // // //                 <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-zinc-400">Willow / Grade</th>
// // // // // // // // //                 <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-zinc-400">Price (INR)</th>
// // // // // // // // //                 <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-zinc-400">Actions</th>
// // // // // // // // //               </tr>
// // // // // // // // //             </thead>
// // // // // // // // //             <tbody className="divide-y divide-zinc-100">
// // // // // // // // //               {products.map(product => (
// // // // // // // // //                 <tr key={product.id}>
// // // // // // // // //                   <td className="px-8 py-6 flex items-center space-x-4">
// // // // // // // // //                     <div className="w-12 h-12 rounded-lg overflow-hidden bg-zinc-100">
// // // // // // // // //                       {product.images?.[0] && (
// // // // // // // // //                         <img
// // // // // // // // //                           src={product.images[0]}
// // // // // // // // //                           alt=""
// // // // // // // // //                           className="w-full h-full object-cover"
// // // // // // // // //                         />
// // // // // // // // //                       )}
// // // // // // // // //                     </div>
// // // // // // // // //                     <span className="font-bold text-zinc-900">{product.name}</span>
// // // // // // // // //                   </td>

// // // // // // // // //                   <td className="px-8 py-6 text-sm">
// // // // // // // // //                     <p className="text-zinc-900 font-medium">{product.willow_type}</p>
// // // // // // // // //                     <p className="text-zinc-400">{product.grade}</p>
// // // // // // // // //                   </td>

// // // // // // // // //                   <td className="px-8 py-6 font-bold text-cricket-green">
// // // // // // // // //                     ₹{product.price_inr?.toLocaleString()}
// // // // // // // // //                   </td>

// // // // // // // // //                   <td className="px-8 py-6">
// // // // // // // // //                     <div className="flex space-x-3">
// // // // // // // // //                       <button
// // // // // // // // //                         onClick={() => {
// // // // // // // // //                           setEditingProduct(product);
// // // // // // // // //                           setIsModalOpen(true);
// // // // // // // // //                         }}
// // // // // // // // //                         className="p-2 text-zinc-400 hover:text-gold"
// // // // // // // // //                       >
// // // // // // // // //                         <Edit2 size={18} />
// // // // // // // // //                       </button>

// // // // // // // // //                       <button
// // // // // // // // //                         onClick={() => handleDelete(product.id)}
// // // // // // // // //                         className="p-2 text-zinc-400 hover:text-red-500"
// // // // // // // // //                       >
// // // // // // // // //                         <Trash2 size={18} />
// // // // // // // // //                       </button>
// // // // // // // // //                     </div>
// // // // // // // // //                   </td>
// // // // // // // // //                 </tr>
// // // // // // // // //               ))}
// // // // // // // // //             </tbody>
// // // // // // // // //           </table>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Modal */}
// // // // // // // // //       {isModalOpen && (
// // // // // // // // //         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
// // // // // // // // //           <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">

// // // // // // // // //             <div className="p-8 border-b border-zinc-100 flex justify-between items-center">
// // // // // // // // //               <h2 className="text-2xl font-display font-black">
// // // // // // // // //                 {editingProduct?.id ? 'EDIT PRODUCT' : 'ADD NEW PRODUCT'}
// // // // // // // // //               </h2>
// // // // // // // // //               <button onClick={() => setIsModalOpen(false)}>
// // // // // // // // //                 <Plus size={24} className="rotate-45" />
// // // // // // // // //               </button>
// // // // // // // // //             </div>

// // // // // // // // //             <form onSubmit={handleSubmit} className="p-8 overflow-y-auto space-y-6">

// // // // // // // // //               {/* Name */}
// // // // // // // // //               <div>
// // // // // // // // //                 <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
// // // // // // // // //                   Product Name
// // // // // // // // //                 </label>
// // // // // // // // //                 <input
// // // // // // // // //                   required
// // // // // // // // //                   type="text"
// // // // // // // // //                   value={editingProduct?.name || ''}
// // // // // // // // //                   onChange={(e) =>
// // // // // // // // //                     setEditingProduct({ ...editingProduct, name: e.target.value })
// // // // // // // // //                   }
// // // // // // // // //                   className="w-full px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // // // // //                 />
// // // // // // // // //               </div>

// // // // // // // // //               {/* Prices */}
// // // // // // // // //               <div className="grid grid-cols-2 gap-6">
// // // // // // // // //                 <div>
// // // // // // // // //                   <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
// // // // // // // // //                     Price (INR)
// // // // // // // // //                   </label>
// // // // // // // // //                   <input
// // // // // // // // //                     required
// // // // // // // // //                     type="number"
// // // // // // // // //                     value={editingProduct?.price_inr || ''}
// // // // // // // // //                     onChange={(e) =>
// // // // // // // // //                       setEditingProduct({ ...editingProduct, price_inr: Number(e.target.value) })
// // // // // // // // //                     }
// // // // // // // // //                     className="w-full px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // // // // //                   />
// // // // // // // // //                 </div>

// // // // // // // // //                 <div>
// // // // // // // // //                   <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
// // // // // // // // //                     Price (USD)
// // // // // // // // //                   </label>
// // // // // // // // //                   <input
// // // // // // // // //                     required
// // // // // // // // //                     type="number"
// // // // // // // // //                     value={editingProduct?.price_usd || ''}
// // // // // // // // //                     onChange={(e) =>
// // // // // // // // //                       setEditingProduct({ ...editingProduct, price_usd: Number(e.target.value) })
// // // // // // // // //                     }
// // // // // // // // //                     className="w-full px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // // // // //                   />
// // // // // // // // //                 </div>
// // // // // // // // //               </div>

// // // // // // // // //               {/* Willow Type */}
// // // // // // // // //               <div>
// // // // // // // // //                 <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
// // // // // // // // //                   Willow Type
// // // // // // // // //                 </label>
// // // // // // // // //                 <select
// // // // // // // // //                   value={editingProduct?.willow_type || ''}
// // // // // // // // //                   onChange={(e) =>
// // // // // // // // //                     setEditingProduct({ ...editingProduct, willow_type: e.target.value })
// // // // // // // // //                   }
// // // // // // // // //                   className="w-full px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // // // // //                 >
// // // // // // // // //                   <option value="">Select</option>
// // // // // // // // //                   <option value="English Willow">English Willow</option>
// // // // // // // // //                   <option value="Kashmir Willow">Kashmir Willow</option>
// // // // // // // // //                 </select>
// // // // // // // // //               </div>

// // // // // // // // //               {/* Grade */}
// // // // // // // // //               <div>
// // // // // // // // //                 <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
// // // // // // // // //                   Grade
// // // // // // // // //                 </label>
// // // // // // // // //                 <input
// // // // // // // // //                   type="text"
// // // // // // // // //                   value={editingProduct?.grade || ''}
// // // // // // // // //                   onChange={(e) =>
// // // // // // // // //                     setEditingProduct({ ...editingProduct, grade: e.target.value })
// // // // // // // // //                   }
// // // // // // // // //                   className="w-full px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // // // // //                   placeholder="e.g. Grade 1+"
// // // // // // // // //                 />
// // // // // // // // //               </div>

// // // // // // // // //               {/* Description */}
// // // // // // // // //               <div>
// // // // // // // // //                 <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
// // // // // // // // //                   Description
// // // // // // // // //                 </label>
// // // // // // // // //                 <textarea
// // // // // // // // //                   rows={3}
// // // // // // // // //                   value={editingProduct?.description || ''}
// // // // // // // // //                   onChange={(e) =>
// // // // // // // // //                     setEditingProduct({ ...editingProduct, description: e.target.value })
// // // // // // // // //                   }
// // // // // // // // //                   className="w-full px-4 py-3 bg-zinc-50 rounded-xl resize-none"
// // // // // // // // //                 />
// // // // // // // // //               </div>

// // // // // // // // //               {/* Image Upload */}
// // // // // // // // //               <div>
// // // // // // // // //                 <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
// // // // // // // // //                   Upload Images
// // // // // // // // //                 </label>

// // // // // // // // //                 <input
// // // // // // // // //                   type="file"
// // // // // // // // //                   multiple
// // // // // // // // //                   accept="image/*"
// // // // // // // // //                   onChange={async (e) => {
// // // // // // // // //                     const files = e.target.files;
// // // // // // // // //                     if (!files) return;

// // // // // // // // //                     const base64Images = await Promise.all(
// // // // // // // // //                       Array.from(files).map(file =>
// // // // // // // // //                         new Promise<string>((resolve) => {
// // // // // // // // //                           const reader = new FileReader();
// // // // // // // // //                           reader.readAsDataURL(file);
// // // // // // // // //                           reader.onload = () => resolve(reader.result as string);
// // // // // // // // //                         })
// // // // // // // // //                       )
// // // // // // // // //                     );

// // // // // // // // //                     setEditingProduct({
// // // // // // // // //                       ...editingProduct,
// // // // // // // // //                       images: base64Images
// // // // // // // // //                     });
// // // // // // // // //                   }}
// // // // // // // // //                 />

// // // // // // // // //                 {editingProduct?.images?.length ? (
// // // // // // // // //                   <div className="flex gap-4 mt-4 flex-wrap">
// // // // // // // // //                     {editingProduct.images.map((img, index) => (
// // // // // // // // //                       <div key={index} className="relative w-20 h-20 rounded-lg overflow-hidden border">
// // // // // // // // //                         <img src={img} alt="" className="w-full h-full object-cover" />
// // // // // // // // //                         <button
// // // // // // // // //                           type="button"
// // // // // // // // //                           onClick={() => {
// // // // // // // // //                             const updated = editingProduct.images?.filter((_, i) => i !== index);
// // // // // // // // //                             setEditingProduct({ ...editingProduct, images: updated });
// // // // // // // // //                           }}
// // // // // // // // //                           className="absolute top-1 right-1 bg-black/60 text-white text-xs px-1 rounded"
// // // // // // // // //                         >
// // // // // // // // //                           ✕
// // // // // // // // //                         </button>
// // // // // // // // //                       </div>
// // // // // // // // //                     ))}
// // // // // // // // //                   </div>
// // // // // // // // //                 ) : null}
// // // // // // // // //               </div>

// // // // // // // // //               <button
// // // // // // // // //                 type="submit"
// // // // // // // // //                 className="w-full bg-zinc-900 text-white font-bold py-4 rounded-xl hover:bg-black"
// // // // // // // // //               >
// // // // // // // // //                 Save Product
// // // // // // // // //               </button>

// // // // // // // // //             </form>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default AdminDashboard;


// // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // // import { Plus, Trash2, Edit2, LogOut } from "lucide-react";
// // // // // // // // import { Product } from "../types";

// // // // // // // // interface ExtendedProduct extends Partial<Product> {
// // // // // // // //   imagesFiles?: File[];
// // // // // // // //   featured?: boolean;
// // // // // // // // }

// // // // // // // // const AdminDashboard = () => {
// // // // // // // //   const [products, setProducts] = useState<Product[]>([]);
// // // // // // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // // // // // //   const [editingProduct, setEditingProduct] = useState<ExtendedProduct | null>(null);
// // // // // // // //   const navigate = useNavigate();
// // // // // // // //   const token = localStorage.getItem("cricface_admin_token");

// // // // // // // //   useEffect(() => {
// // // // // // // //     if (!token) {
// // // // // // // //       navigate("/admin/login");
// // // // // // // //       return;
// // // // // // // //     }
// // // // // // // //     fetchProducts();
// // // // // // // //   }, []);

// // // // // // // //   const fetchProducts = async () => {
// // // // // // // //     const res = await fetch("/api/products");
// // // // // // // //     const data = await res.json();
// // // // // // // //     setProducts(data);
// // // // // // // //   };

// // // // // // // //   const handleLogout = () => {
// // // // // // // //     localStorage.removeItem("cricface_admin_token");
// // // // // // // //     navigate("/admin/login");
// // // // // // // //   };

// // // // // // // //   const handleDelete = async (id: number) => {
// // // // // // // //     if (!confirm("Are you sure you want to delete this product?")) return;

// // // // // // // //     await fetch(`/api/products/${id}`, {
// // // // // // // //       method: "DELETE",
// // // // // // // //       headers: { Authorization: `Bearer ${token}` }
// // // // // // // //     });

// // // // // // // //     fetchProducts();
// // // // // // // //   };

// // // // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // // // //     e.preventDefault();

// // // // // // // //     const formData = new FormData();

// // // // // // // //     formData.append("name", editingProduct?.name || "");
// // // // // // // //     formData.append("price_inr", String(editingProduct?.price_inr || 0));
// // // // // // // //     formData.append("price_usd", String(editingProduct?.price_usd || 0));
// // // // // // // //     formData.append("price_eur", String(editingProduct?.price_eur || 0));
// // // // // // // //     formData.append("grade", editingProduct?.grade || "");
// // // // // // // //     formData.append("willow_type", editingProduct?.willow_type || "");
// // // // // // // //     formData.append("weight", editingProduct?.weight || "");
// // // // // // // //     formData.append("style", editingProduct?.style || "");
// // // // // // // //     formData.append("description", editingProduct?.description || "");
// // // // // // // //     formData.append("featured", editingProduct?.featured ? "1" : "0");

// // // // // // // //     if (editingProduct?.imagesFiles) {
// // // // // // // //       editingProduct.imagesFiles.forEach((file) => {
// // // // // // // //         formData.append("images", file);
// // // // // // // //       });
// // // // // // // //     }

// // // // // // // //     const url = editingProduct?.id
// // // // // // // //       ? `/api/products/${editingProduct.id}`
// // // // // // // //       : "/api/products";

// // // // // // // //     const method = editingProduct?.id ? "PUT" : "POST";

// // // // // // // //     const res = await fetch(url, {
// // // // // // // //       method,
// // // // // // // //       headers: {
// // // // // // // //         Authorization: `Bearer ${token}`
// // // // // // // //       },
// // // // // // // //       body: formData
// // // // // // // //     });

// // // // // // // //     if (!res.ok) {
// // // // // // // //       alert("Error saving product");
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     setIsModalOpen(false);
// // // // // // // //     setEditingProduct(null);
// // // // // // // //     fetchProducts();
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="pt-32 pb-24 bg-zinc-50 min-h-screen">
// // // // // // // //       <div className="max-w-7xl mx-auto px-4">

// // // // // // // //         {/* Header */}
// // // // // // // //         <div className="flex justify-between items-center mb-12">
// // // // // // // //           <div>
// // // // // // // //             <h1 className="text-4xl font-display font-black text-zinc-900">
// // // // // // // //               DASHBOARD
// // // // // // // //             </h1>
// // // // // // // //             <p className="text-zinc-500">Manage your premium catalog</p>
// // // // // // // //           </div>

// // // // // // // //           <div className="flex gap-4">
// // // // // // // //             <button
// // // // // // // //               onClick={() => {
// // // // // // // //                 setEditingProduct({
// // // // // // // //                   imagesFiles: [],
// // // // // // // //                   featured: false
// // // // // // // //                 });
// // // // // // // //                 setIsModalOpen(true);
// // // // // // // //               }}
// // // // // // // //               className="bg-gold text-black font-bold px-6 py-3 rounded-xl flex items-center space-x-2 hover:bg-[#c4a030]"
// // // // // // // //             >
// // // // // // // //               <Plus size={20} />
// // // // // // // //               <span>Add New Bat</span>
// // // // // // // //             </button>

// // // // // // // //             <button
// // // // // // // //               onClick={handleLogout}
// // // // // // // //               className="bg-white text-zinc-500 font-bold px-6 py-3 rounded-xl border border-zinc-200 flex items-center space-x-2 hover:bg-zinc-50"
// // // // // // // //             >
// // // // // // // //               <LogOut size={20} />
// // // // // // // //               <span>Logout</span>
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Product Table */}
// // // // // // // //         <div className="bg-white rounded-[2.5rem] shadow-sm border border-zinc-100 overflow-hidden">
// // // // // // // //           <table className="w-full text-left">
// // // // // // // //             <thead>
// // // // // // // //               <tr className="bg-zinc-50 border-b border-zinc-100">
// // // // // // // //                 <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-zinc-400">Product</th>
// // // // // // // //                 <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-zinc-400">Willow / Grade</th>
// // // // // // // //                 <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-zinc-400">Featured</th>
// // // // // // // //                 <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-zinc-400">Price (INR)</th>
// // // // // // // //                 <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-zinc-400">Actions</th>
// // // // // // // //               </tr>
// // // // // // // //             </thead>

// // // // // // // //             <tbody className="divide-y divide-zinc-100">
// // // // // // // //               {products.map((product) => (
// // // // // // // //                 <tr key={product.id}>
// // // // // // // //                   <td className="px-8 py-6 flex items-center space-x-4">
// // // // // // // //                     <div className="w-12 h-12 rounded-lg overflow-hidden bg-zinc-100">
// // // // // // // //                       {product.images?.[0] && (
// // // // // // // //                         <img
// // // // // // // //                           src={product.images[0]}
// // // // // // // //                           alt=""
// // // // // // // //                           className="w-full h-full object-cover"
// // // // // // // //                         />
// // // // // // // //                       )}
// // // // // // // //                     </div>
// // // // // // // //                     <span className="font-bold text-zinc-900">{product.name}</span>
// // // // // // // //                   </td>

// // // // // // // //                   <td className="px-8 py-6 text-sm">
// // // // // // // //                     <p>{product.willow_type}</p>
// // // // // // // //                     <p className="text-zinc-400">{product.grade}</p>
// // // // // // // //                   </td>

// // // // // // // //                   <td className="px-8 py-6">
// // // // // // // //                     {product.featured ? "⭐ Yes" : "No"}
// // // // // // // //                   </td>

// // // // // // // //                   <td className="px-8 py-6 font-bold text-cricket-green">
// // // // // // // //                     ₹{product.price_inr?.toLocaleString()}
// // // // // // // //                   </td>

// // // // // // // //                   <td className="px-8 py-6 flex gap-3">
// // // // // // // //                     <button
// // // // // // // //                       onClick={() => {
// // // // // // // //                         setEditingProduct({ ...product });
// // // // // // // //                         setIsModalOpen(true);
// // // // // // // //                       }}
// // // // // // // //                       className="p-2 text-zinc-400 hover:text-gold"
// // // // // // // //                     >
// // // // // // // //                       <Edit2 size={18} />
// // // // // // // //                     </button>

// // // // // // // //                     <button
// // // // // // // //                       onClick={() => handleDelete(product.id)}
// // // // // // // //                       className="p-2 text-zinc-400 hover:text-red-500"
// // // // // // // //                     >
// // // // // // // //                       <Trash2 size={18} />
// // // // // // // //                     </button>
// // // // // // // //                   </td>
// // // // // // // //                 </tr>
// // // // // // // //               ))}
// // // // // // // //             </tbody>
// // // // // // // //           </table>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Modal */}
// // // // // // // //       {isModalOpen && (
// // // // // // // //         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
// // // // // // // //           <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden">
// // // // // // // //             <div className="p-8 border-b flex justify-between items-center">
// // // // // // // //               <h2 className="text-2xl font-black">
// // // // // // // //                 {editingProduct?.id ? "EDIT PRODUCT" : "ADD NEW PRODUCT"}
// // // // // // // //               </h2>
// // // // // // // //               <button onClick={() => setIsModalOpen(false)}>
// // // // // // // //                 <Plus size={24} className="rotate-45" />
// // // // // // // //               </button>
// // // // // // // //             </div>

// // // // // // // //             <form onSubmit={handleSubmit} className="p-8 space-y-6">

// // // // // // // //               {/* Name */}
// // // // // // // //               <input
// // // // // // // //                 type="text"
// // // // // // // //                 placeholder="Product Name"
// // // // // // // //                 value={editingProduct?.name || ""}
// // // // // // // //                 onChange={(e) =>
// // // // // // // //                   setEditingProduct({ ...editingProduct, name: e.target.value })
// // // // // // // //                 }
// // // // // // // //                 className="w-full px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // // // //               />

// // // // // // // //               {/* Prices */}
// // // // // // // //               <div className="grid grid-cols-2 gap-4">
// // // // // // // //                 <input
// // // // // // // //                   type="number"
// // // // // // // //                   placeholder="Price INR"
// // // // // // // //                   value={editingProduct?.price_inr || ""}
// // // // // // // //                   onChange={(e) =>
// // // // // // // //                     setEditingProduct({ ...editingProduct, price_inr: Number(e.target.value) })
// // // // // // // //                   }
// // // // // // // //                   className="px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // // // //                 />

// // // // // // // //                 <input
// // // // // // // //                   type="number"
// // // // // // // //                   placeholder="Price USD"
// // // // // // // //                   value={editingProduct?.price_usd || ""}
// // // // // // // //                   onChange={(e) =>
// // // // // // // //                     setEditingProduct({ ...editingProduct, price_usd: Number(e.target.value) })
// // // // // // // //                   }
// // // // // // // //                   className="px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // // // //                 />
// // // // // // // //               </div>

// // // // // // // //               {/* Featured */}
// // // // // // // //               <div className="flex items-center gap-3">
// // // // // // // //                 <input
// // // // // // // //                   type="checkbox"
// // // // // // // //                   checked={editingProduct?.featured || false}
// // // // // // // //                   onChange={(e) =>
// // // // // // // //                     setEditingProduct({
// // // // // // // //                       ...editingProduct,
// // // // // // // //                       featured: e.target.checked
// // // // // // // //                     })
// // // // // // // //                   }
// // // // // // // //                 />
// // // // // // // //                 <label>Mark as Featured</label>
// // // // // // // //               </div>

// // // // // // // //               {/* Image Upload */}
// // // // // // // //               <div>
// // // // // // // //                 <input
// // // // // // // //                   type="file"
// // // // // // // //                   multiple
// // // // // // // //                   accept="image/*"
// // // // // // // //                   onChange={(e) => {
// // // // // // // //                     const files = e.target.files;
// // // // // // // //                     if (!files) return;

// // // // // // // //                     setEditingProduct({
// // // // // // // //                       ...editingProduct,
// // // // // // // //                       imagesFiles: Array.from(files)
// // // // // // // //                     });
// // // // // // // //                   }}
// // // // // // // //                 />

// // // // // // // //                 {editingProduct?.imagesFiles?.length ? (
// // // // // // // //                   <div className="mt-3 text-sm text-zinc-600">
// // // // // // // //                     {editingProduct.imagesFiles.length} image(s) selected
// // // // // // // //                     <button
// // // // // // // //                       type="button"
// // // // // // // //                       onClick={() =>
// // // // // // // //                         setEditingProduct({ ...editingProduct, imagesFiles: [] })
// // // // // // // //                       }
// // // // // // // //                       className="ml-4 text-red-500"
// // // // // // // //                     >
// // // // // // // //                       Clear
// // // // // // // //                     </button>
// // // // // // // //                   </div>
// // // // // // // //                 ) : null}
// // // // // // // //               </div>

// // // // // // // //               <button
// // // // // // // //                 type="submit"
// // // // // // // //                 className="w-full bg-black text-white py-4 rounded-xl"
// // // // // // // //               >
// // // // // // // //                 Save Product
// // // // // // // //               </button>

// // // // // // // //             </form>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default AdminDashboard;

// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // import { Plus, Trash2, Edit2, LogOut } from "lucide-react";
// // // // // // // import { Product } from "../types";

// // // // // // // interface ExtendedProduct extends Partial<Product> {
// // // // // // //   imagesFiles?: File[];
// // // // // // //   featured?: boolean;
// // // // // // // }

// // // // // // // const AdminDashboard = () => {
// // // // // // //   const [products, setProducts] = useState<Product[]>([]);
// // // // // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // // // // //   const [editingProduct, setEditingProduct] = useState<ExtendedProduct | null>(null);

// // // // // // //   const navigate = useNavigate();
// // // // // // //   const token = localStorage.getItem("cricface_admin_token");

// // // // // // //   useEffect(() => {
// // // // // // //     if (!token) {
// // // // // // //       navigate("/admin/login");
// // // // // // //       return;
// // // // // // //     }
// // // // // // //     fetchProducts();
// // // // // // //   }, []);

// // // // // // //   const fetchProducts = async () => {
// // // // // // //     const res = await fetch("/api/products");
// // // // // // //     const data = await res.json();
// // // // // // //     setProducts(data);
// // // // // // //   };

// // // // // // //   const handleLogout = () => {
// // // // // // //     localStorage.removeItem("cricface_admin_token");
// // // // // // //     navigate("/admin/login");
// // // // // // //   };

// // // // // // //   const handleDelete = async (id: number) => {
// // // // // // //     if (!confirm("Are you sure you want to delete this product?")) return;

// // // // // // //     await fetch(`/api/products/${id}`, {
// // // // // // //       method: "DELETE",
// // // // // // //       headers: { Authorization: `Bearer ${token}` }
// // // // // // //     });

// // // // // // //     fetchProducts();
// // // // // // //   };

// // // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // // //     e.preventDefault();

// // // // // // //     const formData = new FormData();

// // // // // // //     formData.append("name", editingProduct?.name || "");
// // // // // // //     formData.append("price_inr", String(editingProduct?.price_inr || 0));
// // // // // // //     formData.append("price_usd", String(editingProduct?.price_usd || 0));
// // // // // // //     formData.append("price_eur", String(editingProduct?.price_eur || 0));
// // // // // // //     formData.append("grade", editingProduct?.grade || "");
// // // // // // //     formData.append("willow_type", editingProduct?.willow_type || "");
// // // // // // //     formData.append("weight", editingProduct?.weight || "");
// // // // // // //     formData.append("style", editingProduct?.style || "");
// // // // // // //     formData.append("description", editingProduct?.description || "");
// // // // // // //     formData.append("featured", editingProduct?.featured ? "1" : "0");

// // // // // // //     if (editingProduct?.imagesFiles) {
// // // // // // //       editingProduct.imagesFiles.forEach((file) => {
// // // // // // //         formData.append("images", file);
// // // // // // //       });
// // // // // // //     }

// // // // // // //     const url = editingProduct?.id
// // // // // // //       ? `/api/products/${editingProduct.id}`
// // // // // // //       : "/api/products";

// // // // // // //     const method = editingProduct?.id ? "PUT" : "POST";

// // // // // // //     const res = await fetch(url, {
// // // // // // //       method,
// // // // // // //       headers: {
// // // // // // //         Authorization: `Bearer ${token}`
// // // // // // //       },
// // // // // // //       body: formData
// // // // // // //     });

// // // // // // //     if (!res.ok) {
// // // // // // //       const errorText = await res.text();
// // // // // // //       alert("Error saving product:\n" + errorText);
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     setIsModalOpen(false);
// // // // // // //     setEditingProduct(null);
// // // // // // //     fetchProducts();
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="pt-32 pb-24 bg-zinc-50 min-h-screen">
// // // // // // //       <div className="max-w-7xl mx-auto px-4">

// // // // // // //         {/* Header */}
// // // // // // //         <div className="flex justify-between items-center mb-12">
// // // // // // //           <div>
// // // // // // //             <h1 className="text-4xl font-black">DASHBOARD</h1>
// // // // // // //             <p className="text-zinc-500">Manage your premium catalog</p>
// // // // // // //           </div>

// // // // // // //           <div className="flex gap-4">
// // // // // // //             <button
// // // // // // //               onClick={() => {
// // // // // // //                 setEditingProduct({
// // // // // // //                   imagesFiles: [],
// // // // // // //                   featured: false
// // // // // // //                 });
// // // // // // //                 setIsModalOpen(true);
// // // // // // //               }}
// // // // // // //               className="bg-gold text-black font-bold px-6 py-3 rounded-xl flex items-center gap-2"
// // // // // // //             >
// // // // // // //               <Plus size={20} />
// // // // // // //               Add New Bat
// // // // // // //             </button>

// // // // // // //             <button
// // // // // // //               onClick={handleLogout}
// // // // // // //               className="bg-white border px-6 py-3 rounded-xl flex items-center gap-2"
// // // // // // //             >
// // // // // // //               <LogOut size={20} />
// // // // // // //               Logout
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Table */}
// // // // // // //         <div className="bg-white rounded-3xl shadow border overflow-hidden">
// // // // // // //           <table className="w-full text-left">
// // // // // // //             <thead className="bg-zinc-50 border-b">
// // // // // // //               <tr>
// // // // // // //                 <th className="px-6 py-4">Product</th>
// // // // // // //                 <th className="px-6 py-4">Willow / Grade</th>
// // // // // // //                 <th className="px-6 py-4">Featured</th>
// // // // // // //                 <th className="px-6 py-4">Price (INR)</th>
// // // // // // //                 <th className="px-6 py-4">Actions</th>
// // // // // // //               </tr>
// // // // // // //             </thead>

// // // // // // //             <tbody>
// // // // // // //               {products.map((product) => (
// // // // // // //                 <tr key={product.id} className="border-b">
// // // // // // //                   <td className="px-6 py-4 flex items-center gap-4">
// // // // // // //                     {product.images?.[0] && (
// // // // // // //                       <img
// // // // // // //                         src={product.images[0]}
// // // // // // //                         className="w-12 h-12 object-cover rounded"
// // // // // // //                       />
// // // // // // //                     )}
// // // // // // //                     {product.name}
// // // // // // //                   </td>

// // // // // // //                   <td className="px-6 py-4">
// // // // // // //                     {product.willow_type}
// // // // // // //                     <div className="text-sm text-zinc-400">
// // // // // // //                       {product.grade}
// // // // // // //                     </div>
// // // // // // //                   </td>

// // // // // // //                   <td className="px-6 py-4">
// // // // // // //                     {product.featured ? "⭐ Yes" : "No"}
// // // // // // //                   </td>

// // // // // // //                   <td className="px-6 py-4">
// // // // // // //                     ₹{product.price_inr?.toLocaleString()}
// // // // // // //                   </td>

// // // // // // //                   <td className="px-6 py-4 flex gap-3">
// // // // // // //                     <button
// // // // // // //                       onClick={() => {
// // // // // // //                         setEditingProduct({ ...product });
// // // // // // //                         setIsModalOpen(true);
// // // // // // //                       }}
// // // // // // //                     >
// // // // // // //                       <Edit2 size={18} />
// // // // // // //                     </button>

// // // // // // //                     <button onClick={() => handleDelete(product.id)}>
// // // // // // //                       <Trash2 size={18} />
// // // // // // //                     </button>
// // // // // // //                   </td>
// // // // // // //                 </tr>
// // // // // // //               ))}
// // // // // // //             </tbody>
// // // // // // //           </table>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Modal */}
// // // // // // //       {isModalOpen && (
// // // // // // //         <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
// // // // // // //           <div className="bg-white w-full max-w-2xl rounded-3xl p-8 space-y-6">
// // // // // // //             <h2 className="text-2xl font-black">
// // // // // // //               {editingProduct?.id ? "Edit Product" : "Add Product"}
// // // // // // //             </h2>

// // // // // // //             <form onSubmit={handleSubmit} className="space-y-4">

// // // // // // //               <input
// // // // // // //                 type="text"
// // // // // // //                 placeholder="Product Name"
// // // // // // //                 value={editingProduct?.name || ""}
// // // // // // //                 onChange={(e) =>
// // // // // // //                   setEditingProduct({ ...editingProduct, name: e.target.value })
// // // // // // //                 }
// // // // // // //                 className="w-full px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // // //               />

// // // // // // //               {/* Prices */}
// // // // // // //               <div className="grid grid-cols-3 gap-4">
// // // // // // //                 <input
// // // // // // //                   type="number"
// // // // // // //                   placeholder="Price INR"
// // // // // // //                   value={editingProduct?.price_inr || ""}
// // // // // // //                   onChange={(e) =>
// // // // // // //                     setEditingProduct({
// // // // // // //                       ...editingProduct,
// // // // // // //                       price_inr: Number(e.target.value)
// // // // // // //                     })
// // // // // // //                   }
// // // // // // //                   className="px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // // //                 />

// // // // // // //                 <input
// // // // // // //                   type="number"
// // // // // // //                   placeholder="Price USD"
// // // // // // //                   value={editingProduct?.price_usd || ""}
// // // // // // //                   onChange={(e) =>
// // // // // // //                     setEditingProduct({
// // // // // // //                       ...editingProduct,
// // // // // // //                       price_usd: Number(e.target.value)
// // // // // // //                     })
// // // // // // //                   }
// // // // // // //                   className="px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // // //                 />

// // // // // // //                 <input
// // // // // // //                   type="number"
// // // // // // //                   placeholder="Price EUR"
// // // // // // //                   value={editingProduct?.price_eur || ""}
// // // // // // //                   onChange={(e) =>
// // // // // // //                     setEditingProduct({
// // // // // // //                       ...editingProduct,
// // // // // // //                       price_eur: Number(e.target.value)
// // // // // // //                     })
// // // // // // //                   }
// // // // // // //                   className="px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // // //                 />
// // // // // // //               </div>

// // // // // // //               {/* Willow */}
// // // // // // //               <select
// // // // // // //                 value={editingProduct?.willow_type || ""}
// // // // // // //                 onChange={(e) =>
// // // // // // //                   setEditingProduct({
// // // // // // //                     ...editingProduct,
// // // // // // //                     willow_type: e.target.value
// // // // // // //                   })
// // // // // // //                 }
// // // // // // //                 className="w-full px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // // //               >
// // // // // // //                 <option value="">Select Willow Type</option>
// // // // // // //                 <option value="English Willow">English Willow</option>
// // // // // // //                 <option value="Kashmir Willow">Kashmir Willow</option>
// // // // // // //               </select>

// // // // // // //               <input
// // // // // // //                 type="text"
// // // // // // //                 placeholder="Grade"
// // // // // // //                 value={editingProduct?.grade || ""}
// // // // // // //                 onChange={(e) =>
// // // // // // //                   setEditingProduct({
// // // // // // //                     ...editingProduct,
// // // // // // //                     grade: e.target.value
// // // // // // //                   })
// // // // // // //                 }
// // // // // // //                 className="w-full px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // // //               />

// // // // // // //               <textarea
// // // // // // //                 rows={3}
// // // // // // //                 placeholder="Description"
// // // // // // //                 value={editingProduct?.description || ""}
// // // // // // //                 onChange={(e) =>
// // // // // // //                   setEditingProduct({
// // // // // // //                     ...editingProduct,
// // // // // // //                     description: e.target.value
// // // // // // //                   })
// // // // // // //                 }
// // // // // // //                 className="w-full px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // // //               />

// // // // // // //               {/* Featured */}
// // // // // // //               <div className="flex items-center gap-3">
// // // // // // //                 <input
// // // // // // //                   type="checkbox"
// // // // // // //                   checked={editingProduct?.featured || false}
// // // // // // //                   onChange={(e) =>
// // // // // // //                     setEditingProduct({
// // // // // // //                       ...editingProduct,
// // // // // // //                       featured: e.target.checked
// // // // // // //                     })
// // // // // // //                   }
// // // // // // //                 />
// // // // // // //                 <label>Mark as Featured</label>
// // // // // // //               </div>

// // // // // // //               {/* Images */}
// // // // // // //               <div>
// // // // // // //                 <input
// // // // // // //                   type="file"
// // // // // // //                   multiple
// // // // // // //                   accept="image/*"
// // // // // // //                   onChange={(e) => {
// // // // // // //                     const files = e.target.files;
// // // // // // //                     if (!files) return;

// // // // // // //                     setEditingProduct({
// // // // // // //                       ...editingProduct,
// // // // // // //                       imagesFiles: Array.from(files)
// // // // // // //                     });
// // // // // // //                   }}
// // // // // // //                 />

// // // // // // //                 {editingProduct?.imagesFiles?.length ? (
// // // // // // //                   <div className="flex items-center gap-4 mt-2">
// // // // // // //                     <span>
// // // // // // //                       {editingProduct.imagesFiles.length} image(s) selected
// // // // // // //                     </span>
// // // // // // //                     <button
// // // // // // //                       type="button"
// // // // // // //                       onClick={() =>
// // // // // // //                         setEditingProduct({
// // // // // // //                           ...editingProduct,
// // // // // // //                           imagesFiles: []
// // // // // // //                         })
// // // // // // //                       }
// // // // // // //                       className="bg-red-500 text-white px-3 py-1 rounded"
// // // // // // //                     >
// // // // // // //                       Clear
// // // // // // //                     </button>
// // // // // // //                   </div>
// // // // // // //                 ) : null}
// // // // // // //               </div>

// // // // // // //               <button
// // // // // // //                 type="submit"
// // // // // // //                 className="w-full bg-black text-white py-3 rounded-xl"
// // // // // // //               >
// // // // // // //                 Save Product
// // // // // // //               </button>
// // // // // // //             </form>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default AdminDashboard;


// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { useNavigate } from "react-router-dom";
// // // // // // import { Plus, Trash2, Edit2, LogOut } from "lucide-react";
// // // // // // import { Product } from "../types";

// // // // // // interface ExtendedProduct extends Partial<Product> {
// // // // // //   imagesFiles?: File[];
// // // // // //   featured?: boolean;
// // // // // // }

// // // // // // const AdminDashboard = () => {
// // // // // //   const [products, setProducts] = useState<Product[]>([]);
// // // // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // // // //   const [editingProduct, setEditingProduct] = useState<ExtendedProduct | null>(null);

// // // // // //   const navigate = useNavigate();
// // // // // //   const token = localStorage.getItem("cricface_admin_token");

// // // // // //   useEffect(() => {
// // // // // //     if (!token) {
// // // // // //       navigate("/admin/login");
// // // // // //       return;
// // // // // //     }
// // // // // //     fetchProducts();
// // // // // //   }, []);

// // // // // //   const fetchProducts = async () => {
// // // // // //     const res = await fetch("/api/products");
// // // // // //     const data = await res.json();
// // // // // //     setProducts(data);
// // // // // //   };

// // // // // //   const handleLogout = () => {
// // // // // //     localStorage.removeItem("cricface_admin_token");
// // // // // //     navigate("/admin/login");
// // // // // //   };

// // // // // //   const handleDelete = async (id: number) => {
// // // // // //     if (!confirm("Are you sure you want to delete this product?")) return;

// // // // // //     await fetch(`/api/products/${id}`, {
// // // // // //       method: "DELETE",
// // // // // //       headers: { Authorization: `Bearer ${token}` }
// // // // // //     });

// // // // // //     fetchProducts();
// // // // // //   };

// // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // //     e.preventDefault();

// // // // // //     const formData = new FormData();

// // // // // //     formData.append("name", editingProduct?.name || "");
// // // // // //     formData.append("price_inr", String(editingProduct?.price_inr || 0));
// // // // // //     formData.append("price_usd", String(editingProduct?.price_usd || 0));
// // // // // //     formData.append("price_eur", String(editingProduct?.price_eur || 0));
// // // // // //     formData.append("grade", editingProduct?.grade || "");
// // // // // //     formData.append("willow_type", editingProduct?.willow_type || "");
// // // // // //     formData.append("weight", editingProduct?.weight || "");
// // // // // //     formData.append("style", editingProduct?.style || "");
// // // // // //     formData.append("description", editingProduct?.description || "");
// // // // // //     formData.append(
// // // // // //       "specifications",
// // // // // //       JSON.stringify(editingProduct?.specifications || {})
// // // // // //     );
// // // // // //     formData.append("featured", editingProduct?.featured ? "1" : "0");

// // // // // //     if (editingProduct?.imagesFiles) {
// // // // // //       editingProduct.imagesFiles.forEach((file) => {
// // // // // //         formData.append("images", file);
// // // // // //       });
// // // // // //     }

// // // // // //     const url = editingProduct?.id
// // // // // //       ? `/api/products/${editingProduct.id}`
// // // // // //       : "/api/products";

// // // // // //     const method = editingProduct?.id ? "PUT" : "POST";

// // // // // //     const res = await fetch(url, {
// // // // // //       method,
// // // // // //       headers: { Authorization: `Bearer ${token}` },
// // // // // //       body: formData
// // // // // //     });

// // // // // //     if (!res.ok) {
// // // // // //       const err = await res.text();
// // // // // //       alert("Error saving product:\n" + err);
// // // // // //       return;
// // // // // //     }

// // // // // //     setIsModalOpen(false);
// // // // // //     setEditingProduct(null);
// // // // // //     fetchProducts();
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="pt-32 pb-24 bg-zinc-50 min-h-screen">
// // // // // //       <div className="max-w-7xl mx-auto px-4">

// // // // // //         {/* Header */}
// // // // // //         <div className="flex justify-between items-center mb-12">
// // // // // //           <div>
// // // // // //             <h1 className="text-4xl font-black">DASHBOARD</h1>
// // // // // //             <p className="text-zinc-500">Manage your premium catalog</p>
// // // // // //           </div>

// // // // // //           <div className="flex gap-4">
// // // // // //             <button
// // // // // //               onClick={() => {
// // // // // //                 setEditingProduct({
// // // // // //                   imagesFiles: [],
// // // // // //                   specifications: {},
// // // // // //                   featured: false
// // // // // //                 });
// // // // // //                 setIsModalOpen(true);
// // // // // //               }}
// // // // // //               className="bg-gold text-black font-bold px-6 py-3 rounded-xl flex items-center gap-2"
// // // // // //             >
// // // // // //               <Plus size={20} />
// // // // // //               Add New Bat
// // // // // //             </button>

// // // // // //             <button
// // // // // //               onClick={handleLogout}
// // // // // //               className="bg-white border px-6 py-3 rounded-xl flex items-center gap-2"
// // // // // //             >
// // // // // //               <LogOut size={20} />
// // // // // //               Logout
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Products Table */}
// // // // // //         <div className="bg-white rounded-3xl shadow border overflow-hidden">
// // // // // //           <table className="w-full text-left">
// // // // // //             <thead className="bg-zinc-50 border-b">
// // // // // //               <tr>
// // // // // //                 <th className="px-6 py-4">Product</th>
// // // // // //                 <th className="px-6 py-4">Willow / Grade</th>
// // // // // //                 <th className="px-6 py-4">Featured</th>
// // // // // //                 <th className="px-6 py-4">Price (INR)</th>
// // // // // //                 <th className="px-6 py-4">Actions</th>
// // // // // //               </tr>
// // // // // //             </thead>
// // // // // //             <tbody>
// // // // // //               {products.map((product) => (
// // // // // //                 <tr key={product.id} className="border-b">
// // // // // //                   <td className="px-6 py-4 flex items-center gap-4">
// // // // // //                     {product.images?.[0] && (
// // // // // //                       <img
// // // // // //                         src={product.images[0]}
// // // // // //                         className="w-12 h-12 object-cover rounded"
// // // // // //                       />
// // // // // //                     )}
// // // // // //                     {product.name}
// // // // // //                   </td>

// // // // // //                   <td className="px-6 py-4">
// // // // // //                     {product.willow_type}
// // // // // //                     <div className="text-sm text-zinc-400">
// // // // // //                       {product.grade}
// // // // // //                     </div>
// // // // // //                   </td>

// // // // // //                   <td className="px-6 py-4">
// // // // // //                     {product.featured ? "⭐ Yes" : "No"}
// // // // // //                   </td>

// // // // // //                   <td className="px-6 py-4">
// // // // // //                     ₹{product.price_inr?.toLocaleString()}
// // // // // //                   </td>

// // // // // //                   <td className="px-6 py-4 flex gap-3">
// // // // // //                     <button
// // // // // //                       onClick={() => {
// // // // // //                         setEditingProduct({ ...product });
// // // // // //                         setIsModalOpen(true);
// // // // // //                       }}
// // // // // //                     >
// // // // // //                       <Edit2 size={18} />
// // // // // //                     </button>

// // // // // //                     <button onClick={() => handleDelete(product.id)}>
// // // // // //                       <Trash2 size={18} />
// // // // // //                     </button>
// // // // // //                   </td>
// // // // // //                 </tr>
// // // // // //               ))}
// // // // // //             </tbody>
// // // // // //           </table>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Modal */}
// // // // // //       {isModalOpen && (
// // // // // //         <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
// // // // // //           <div className="bg-white w-full max-w-2xl rounded-3xl p-8 space-y-4 max-h-[90vh] overflow-y-auto">
// // // // // //             <h2 className="text-2xl font-black">
// // // // // //               {editingProduct?.id ? "Edit Product" : "Add Product"}
// // // // // //             </h2>

// // // // // //             <form onSubmit={handleSubmit} className="space-y-4">

// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Product Name"
// // // // // //                 value={editingProduct?.name || ""}
// // // // // //                 onChange={(e) =>
// // // // // //                   setEditingProduct({ ...editingProduct, name: e.target.value })
// // // // // //                 }
// // // // // //                 className="w-full px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // //               />

// // // // // //               <div className="grid grid-cols-3 gap-4">
// // // // // //                 <input
// // // // // //                   type="number"
// // // // // //                   placeholder="Price INR"
// // // // // //                   value={editingProduct?.price_inr || ""}
// // // // // //                   onChange={(e) =>
// // // // // //                     setEditingProduct({
// // // // // //                       ...editingProduct,
// // // // // //                       price_inr: Number(e.target.value)
// // // // // //                     })
// // // // // //                   }
// // // // // //                   className="px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // //                 />
// // // // // //                 <input
// // // // // //                   type="number"
// // // // // //                   placeholder="Price USD"
// // // // // //                   value={editingProduct?.price_usd || ""}
// // // // // //                   onChange={(e) =>
// // // // // //                     setEditingProduct({
// // // // // //                       ...editingProduct,
// // // // // //                       price_usd: Number(e.target.value)
// // // // // //                     })
// // // // // //                   }
// // // // // //                   className="px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // //                 />
// // // // // //                 <input
// // // // // //                   type="number"
// // // // // //                   placeholder="Price EUR"
// // // // // //                   value={editingProduct?.price_eur || ""}
// // // // // //                   onChange={(e) =>
// // // // // //                     setEditingProduct({
// // // // // //                       ...editingProduct,
// // // // // //                       price_eur: Number(e.target.value)
// // // // // //                     })
// // // // // //                   }
// // // // // //                   className="px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // //                 />
// // // // // //               </div>

// // // // // //               <select
// // // // // //                 value={editingProduct?.willow_type || ""}
// // // // // //                 onChange={(e) =>
// // // // // //                   setEditingProduct({
// // // // // //                     ...editingProduct,
// // // // // //                     willow_type: e.target.value
// // // // // //                   })
// // // // // //                 }
// // // // // //                 className="w-full px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // //               >
// // // // // //                 <option value="">Select Willow Type</option>
// // // // // //                 <option value="English Willow">English Willow</option>
// // // // // //                 <option value="Kashmir Willow">Kashmir Willow</option>
// // // // // //               </select>

// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Grade"
// // // // // //                 value={editingProduct?.grade || ""}
// // // // // //                 onChange={(e) =>
// // // // // //                   setEditingProduct({
// // // // // //                     ...editingProduct,
// // // // // //                     grade: e.target.value
// // // // // //                   })
// // // // // //                 }
// // // // // //                 className="w-full px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // //               />

// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Weight"
// // // // // //                 value={editingProduct?.weight || ""}
// // // // // //                 onChange={(e) =>
// // // // // //                   setEditingProduct({
// // // // // //                     ...editingProduct,
// // // // // //                     weight: e.target.value
// // // // // //                   })
// // // // // //                 }
// // // // // //                 className="w-full px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // //               />

// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Style"
// // // // // //                 value={editingProduct?.style || ""}
// // // // // //                 onChange={(e) =>
// // // // // //                   setEditingProduct({
// // // // // //                     ...editingProduct,
// // // // // //                     style: e.target.value
// // // // // //                   })
// // // // // //                 }
// // // // // //                 className="w-full px-4 py-3 bg-zinc-50 rounded-xl"
// // // // // //               />

// // // // // //               <textarea
// // // // // //                 rows={3}
// // // // // //                 placeholder="Description"
// // // // // //                 value={editingProduct?.description || ""}
// // // // // //                 onChange={(e) =>
// // // // // //                   setEditingProduct({
// // // // // //                     ...editingProduct,
// // // // // //                     description: e.target.value
// // // // // //                   })
// // // // // //                 }
// // // // // //                 className="w-full px-4 py-3 bg-zinc-50 rounded-xl resize-none"
// // // // // //               />

// // // // // //               {/* Technical Specs */}
// // // // // //               <textarea
// // // // // //                 rows={4}
// // // // // //                 placeholder={`Enter specs like:
// // // // // // Edge: 40mm
// // // // // // Spine: 65mm
// // // // // // Toe: 25mm`}
// // // // // //                 value={
// // // // // //                   editingProduct?.specifications
// // // // // //                     ? Object.entries(editingProduct.specifications)
// // // // // //                         .map(([k, v]) => `${k}: ${v}`)
// // // // // //                         .join("\n")
// // // // // //                     : ""
// // // // // //                 }
// // // // // //                 onChange={(e) => {
// // // // // //                   const lines = e.target.value.split("\n");
// // // // // //                   const specs: Record<string, string> = {};
// // // // // //                   lines.forEach((line) => {
// // // // // //                     const [key, value] = line.split(":");
// // // // // //                     if (key && value) {
// // // // // //                       specs[key.trim()] = value.trim();
// // // // // //                     }
// // // // // //                   });
// // // // // //                   setEditingProduct({
// // // // // //                     ...editingProduct,
// // // // // //                     specifications: specs
// // // // // //                   });
// // // // // //                 }}
// // // // // //                 className="w-full px-4 py-3 bg-zinc-50 rounded-xl resize-none"
// // // // // //               />

// // // // // //               <div className="flex items-center gap-3">
// // // // // //                 <input
// // // // // //                   type="checkbox"
// // // // // //                   checked={editingProduct?.featured || false}
// // // // // //                   onChange={(e) =>
// // // // // //                     setEditingProduct({
// // // // // //                       ...editingProduct,
// // // // // //                       featured: e.target.checked
// // // // // //                     })
// // // // // //                   }
// // // // // //                 />
// // // // // //                 <label>Mark as Featured</label>
// // // // // //               </div>

// // // // // //               <div>
// // // // // //                 <input
// // // // // //                   type="file"
// // // // // //                   multiple
// // // // // //                   accept="image/*"
// // // // // //                   onChange={(e) => {
// // // // // //                     if (!e.target.files) return;
// // // // // //                     setEditingProduct({
// // // // // //                       ...editingProduct,
// // // // // //                       imagesFiles: Array.from(e.target.files)
// // // // // //                     });
// // // // // //                   }}
// // // // // //                 />

// // // // // //                 {editingProduct?.imagesFiles?.length ? (
// // // // // //                   <div className="flex items-center gap-4 mt-2">
// // // // // //                     <span>
// // // // // //                       {editingProduct.imagesFiles.length} image(s) selected
// // // // // //                     </span>
// // // // // //                     <button
// // // // // //                       type="button"
// // // // // //                       onClick={() =>
// // // // // //                         setEditingProduct({
// // // // // //                           ...editingProduct,
// // // // // //                           imagesFiles: []
// // // // // //                         })
// // // // // //                       }
// // // // // //                       className="bg-red-500 text-white px-3 py-1 rounded"
// // // // // //                     >
// // // // // //                       Clear
// // // // // //                     </button>
// // // // // //                   </div>
// // // // // //                 ) : null}
// // // // // //               </div>

// // // // // //               <button
// // // // // //                 type="submit"
// // // // // //                 className="w-full bg-black text-white py-3 rounded-xl"
// // // // // //               >
// // // // // //                 Save Product
// // // // // //               </button>

// // // // // //             </form>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default AdminDashboard;


// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { useNavigate } from "react-router-dom";
// // // // // // import { Plus, Trash2, Edit2, LogOut } from "lucide-react";
// // // // // // import { Product } from "../types";

// // // // // // interface ExtendedProduct extends Partial<Product> {
// // // // // //   imagesFiles?: File[];
// // // // // //   featured?: boolean;
// // // // // // }

// // // // // // const AdminDashboard = () => {
// // // // // //   const [products, setProducts] = useState<Product[]>([]);
// // // // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // // // //   const [editingProduct, setEditingProduct] = useState<ExtendedProduct | null>(null);
// // // // // //   const [specText, setSpecText] = useState("");

// // // // // //   const navigate = useNavigate();
// // // // // //   const token = localStorage.getItem("cricface_admin_token");

// // // // // //   useEffect(() => {
// // // // // //     if (!token) {
// // // // // //       navigate("/admin/login");
// // // // // //       return;
// // // // // //     }
// // // // // //     fetchProducts();
// // // // // //   }, []);

// // // // // //   const fetchProducts = async () => {
// // // // // //     const res = await fetch("/api/products");
// // // // // //     const data = await res.json();
// // // // // //     setProducts(data);
// // // // // //   };

// // // // // //   const handleLogout = () => {
// // // // // //     localStorage.removeItem("cricface_admin_token");
// // // // // //     navigate("/admin/login");
// // // // // //   };

// // // // // //   const handleDelete = async (id: number) => {
// // // // // //     if (!confirm("Are you sure you want to delete this product?")) return;

// // // // // //     await fetch(`/api/products/${id}`, {
// // // // // //       method: "DELETE",
// // // // // //       headers: { Authorization: `Bearer ${token}` }
// // // // // //     });

// // // // // //     fetchProducts();
// // // // // //   };

// // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // //     e.preventDefault();

// // // // // //     const formData = new FormData();

// // // // // //     // Convert specs text to JSON
// // // // // //     const specs: Record<string, string> = {};
// // // // // //     specText.split("\n").forEach((line) => {
// // // // // //       const [key, value] = line.split(":");
// // // // // //       if (key && value) {
// // // // // //         specs[key.trim()] = value.trim();
// // // // // //       }
// // // // // //     });

// // // // // //     formData.append("name", editingProduct?.name || "");
// // // // // //     formData.append("price_inr", String(editingProduct?.price_inr || 0));
// // // // // //     formData.append("price_usd", String(editingProduct?.price_usd || 0));
// // // // // //     formData.append("price_eur", String(editingProduct?.price_eur || 0));
// // // // // //     formData.append("grade", editingProduct?.grade || "");
// // // // // //     formData.append("willow_type", editingProduct?.willow_type || "");
// // // // // //     formData.append("weight", editingProduct?.weight || "");
// // // // // //     formData.append("style", editingProduct?.style || "");
// // // // // //     formData.append("description", editingProduct?.description || "");
// // // // // //     formData.append("specifications", JSON.stringify(specs));
// // // // // //     formData.append("featured", editingProduct?.featured ? "1" : "0");

// // // // // //     if (editingProduct?.imagesFiles) {
// // // // // //       editingProduct.imagesFiles.forEach((file) => {
// // // // // //         formData.append("images", file);
// // // // // //       });
// // // // // //     }

// // // // // //     const url = editingProduct?.id
// // // // // //       ? `/api/products/${editingProduct.id}`
// // // // // //       : "/api/products";

// // // // // //     const method = editingProduct?.id ? "PUT" : "POST";

// // // // // //     const res = await fetch(url, {
// // // // // //       method,
// // // // // //       headers: { Authorization: `Bearer ${token}` },
// // // // // //       body: formData
// // // // // //     });

// // // // // //     if (!res.ok) {
// // // // // //       const err = await res.text();
// // // // // //       alert("Error saving product:\n" + err);
// // // // // //       return;
// // // // // //     }

// // // // // //     setIsModalOpen(false);
// // // // // //     setEditingProduct(null);
// // // // // //     setSpecText("");
// // // // // //     fetchProducts();
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="pt-32 pb-24 bg-zinc-50 min-h-screen">
// // // // // //       <div className="max-w-7xl mx-auto px-4">

// // // // // //         {/* Header */}
// // // // // //         <div className="flex justify-between items-center mb-10">
// // // // // //           <div>
// // // // // //             <h1 className="text-3xl font-black">DASHBOARD</h1>
// // // // // //             <p className="text-zinc-500 text-sm">Manage your premium catalog</p>
// // // // // //           </div>

// // // // // //           <div className="flex gap-4">
// // // // // //             <button
// // // // // //               onClick={() => {
// // // // // //                 setEditingProduct({
// // // // // //                   imagesFiles: [],
// // // // // //                   featured: false
// // // // // //                 });
// // // // // //                 setSpecText("");
// // // // // //                 setIsModalOpen(true);
// // // // // //               }}
// // // // // //               className="bg-gold text-black font-bold px-5 py-2 rounded-lg flex items-center gap-2"
// // // // // //             >
// // // // // //               <Plus size={18} />
// // // // // //               Add Bat
// // // // // //             </button>

// // // // // //             <button
// // // // // //               onClick={handleLogout}
// // // // // //               className="bg-white border px-5 py-2 rounded-lg flex items-center gap-2"
// // // // // //             >
// // // // // //               <LogOut size={18} />
// // // // // //               Logout
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Table */}
// // // // // //         <div className="bg-white rounded-2xl shadow border overflow-hidden">
// // // // // //           <table className="w-full text-left">
// // // // // //             <thead className="bg-zinc-50 border-b">
// // // // // //               <tr>
// // // // // //                 <th className="px-6 py-4 text-sm">Product</th>
// // // // // //                 <th className="px-6 py-4 text-sm">Willow / Grade</th>
// // // // // //                 <th className="px-6 py-4 text-sm">Featured</th>
// // // // // //                 <th className="px-6 py-4 text-sm">Price (INR)</th>
// // // // // //                 <th className="px-6 py-4 text-sm">Actions</th>
// // // // // //               </tr>
// // // // // //             </thead>
// // // // // //             <tbody>
// // // // // //               {products.map((product) => (
// // // // // //                 <tr key={product.id} className="border-b">
// // // // // //                   <td className="px-6 py-4 flex items-center gap-4">
// // // // // //                     {product.images?.[0] && (
// // // // // //                       <img
// // // // // //                         src={product.images[0]}
// // // // // //                         className="w-10 h-10 object-cover rounded"
// // // // // //                       />
// // // // // //                     )}
// // // // // //                     {product.name}
// // // // // //                   </td>
// // // // // //                   <td className="px-6 py-4 text-sm">
// // // // // //                     {product.willow_type}
// // // // // //                     <div className="text-xs text-zinc-400">
// // // // // //                       {product.grade}
// // // // // //                     </div>
// // // // // //                   </td>
// // // // // //                   <td className="px-6 py-4 text-sm">
// // // // // //                     {product.featured ? "⭐ Yes" : "No"}
// // // // // //                   </td>
// // // // // //                   <td className="px-6 py-4 text-sm">
// // // // // //                     ₹{product.price_inr?.toLocaleString()}
// // // // // //                   </td>
// // // // // //                   <td className="px-6 py-4 flex gap-3">
// // // // // //                     <button
// // // // // //                       onClick={() => {
// // // // // //                         setEditingProduct(product);
// // // // // //                         setSpecText(
// // // // // //                           product.specifications
// // // // // //                             ? Object.entries(product.specifications)
// // // // // //                                 .map(([k, v]) => `${k}: ${v}`)
// // // // // //                                 .join("\n")
// // // // // //                             : ""
// // // // // //                         );
// // // // // //                         setIsModalOpen(true);
// // // // // //                       }}
// // // // // //                     >
// // // // // //                       <Edit2 size={16} />
// // // // // //                     </button>
// // // // // //                     <button onClick={() => handleDelete(product.id)}>
// // // // // //                       <Trash2 size={16} />
// // // // // //                     </button>
// // // // // //                   </td>
// // // // // //                 </tr>
// // // // // //               ))}
// // // // // //             </tbody>
// // // // // //           </table>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* MODAL */}
// // // // // //       {isModalOpen && (
// // // // // //         <div className="fixed inset-0 bg-black/60 flex items-start justify-center pt-28 px-4 overflow-y-auto z-50">
// // // // // //           <div className="bg-white w-full max-w-xl rounded-2xl p-6 space-y-4 shadow-2xl">
// // // // // //             <h2 className="text-xl font-black">
// // // // // //               {editingProduct?.id ? "Edit Product" : "Add Product"}
// // // // // //             </h2>

// // // // // //             <form onSubmit={handleSubmit} className="space-y-3">

// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Product Name"
// // // // // //                 value={editingProduct?.name || ""}
// // // // // //                 onChange={(e) =>
// // // // // //                   setEditingProduct({ ...editingProduct, name: e.target.value })
// // // // // //                 }
// // // // // //                 className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// // // // // //               />

// // // // // //               <div className="grid grid-cols-3 gap-3">
// // // // // //                 <input
// // // // // //                   type="number"
// // // // // //                   placeholder="INR"
// // // // // //                   value={editingProduct?.price_inr || ""}
// // // // // //                   onChange={(e) =>
// // // // // //                     setEditingProduct({
// // // // // //                       ...editingProduct,
// // // // // //                       price_inr: Number(e.target.value)
// // // // // //                     })
// // // // // //                   }
// // // // // //                   className="px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// // // // // //                 />
// // // // // //                 <input
// // // // // //                   type="number"
// // // // // //                   placeholder="USD"
// // // // // //                   value={editingProduct?.price_usd || ""}
// // // // // //                   onChange={(e) =>
// // // // // //                     setEditingProduct({
// // // // // //                       ...editingProduct,
// // // // // //                       price_usd: Number(e.target.value)
// // // // // //                     })
// // // // // //                   }
// // // // // //                   className="px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// // // // // //                 />
// // // // // //                 <input
// // // // // //                   type="number"
// // // // // //                   placeholder="EUR"
// // // // // //                   value={editingProduct?.price_eur || ""}
// // // // // //                   onChange={(e) =>
// // // // // //                     setEditingProduct({
// // // // // //                       ...editingProduct,
// // // // // //                       price_eur: Number(e.target.value)
// // // // // //                     })
// // // // // //                   }
// // // // // //                   className="px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// // // // // //                 />
// // // // // //               </div>

// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Willow Type"
// // // // // //                 value={editingProduct?.willow_type || ""}
// // // // // //                 onChange={(e) =>
// // // // // //                   setEditingProduct({
// // // // // //                     ...editingProduct,
// // // // // //                     willow_type: e.target.value
// // // // // //                   })
// // // // // //                 }
// // // // // //                 className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// // // // // //               />

// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Grade"
// // // // // //                 value={editingProduct?.grade || ""}
// // // // // //                 onChange={(e) =>
// // // // // //                   setEditingProduct({
// // // // // //                     ...editingProduct,
// // // // // //                     grade: e.target.value
// // // // // //                   })
// // // // // //                 }
// // // // // //                 className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// // // // // //               />

// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Weight"
// // // // // //                 value={editingProduct?.weight || ""}
// // // // // //                 onChange={(e) =>
// // // // // //                   setEditingProduct({
// // // // // //                     ...editingProduct,
// // // // // //                     weight: e.target.value
// // // // // //                   })
// // // // // //                 }
// // // // // //                 className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// // // // // //               />

// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Style"
// // // // // //                 value={editingProduct?.style || ""}
// // // // // //                 onChange={(e) =>
// // // // // //                   setEditingProduct({
// // // // // //                     ...editingProduct,
// // // // // //                     style: e.target.value
// // // // // //                   })
// // // // // //                 }
// // // // // //                 className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// // // // // //               />

// // // // // //               <textarea
// // // // // //                 rows={3}
// // // // // //                 placeholder="Description"
// // // // // //                 value={editingProduct?.description || ""}
// // // // // //                 onChange={(e) =>
// // // // // //                   setEditingProduct({
// // // // // //                     ...editingProduct,
// // // // // //                     description: e.target.value
// // // // // //                   })
// // // // // //                 }
// // // // // //                 className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm resize-none"
// // // // // //               />

// // // // // //               <textarea
// // // // // //                 rows={4}
// // // // // //                 placeholder="Edge: 40mm
// // // // // // Spine: 65mm"
// // // // // //                 value={specText}
// // // // // //                 onChange={(e) => setSpecText(e.target.value)}
// // // // // //                 className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm resize-none"
// // // // // //               />

// // // // // //               <div className="flex items-center gap-2">
// // // // // //                 <input
// // // // // //                   type="checkbox"
// // // // // //                   checked={editingProduct?.featured || false}
// // // // // //                   onChange={(e) =>
// // // // // //                     setEditingProduct({
// // // // // //                       ...editingProduct,
// // // // // //                       featured: e.target.checked
// // // // // //                     })
// // // // // //                   }
// // // // // //                 />
// // // // // //                 <span className="text-sm">Featured</span>
// // // // // //               </div>

// // // // // //               <div>
// // // // // //                 <input
// // // // // //                   type="file"
// // // // // //                   multiple
// // // // // //                   accept="image/*"
// // // // // //                   onChange={(e) => {
// // // // // //                     if (!e.target.files) return;
// // // // // //                     setEditingProduct({
// // // // // //                       ...editingProduct,
// // // // // //                       imagesFiles: Array.from(e.target.files)
// // // // // //                     });
// // // // // //                   }}
// // // // // //                 />

// // // // // //                 {editingProduct?.imagesFiles?.length ? (
// // // // // //                   <button
// // // // // //                     type="button"
// // // // // //                     onClick={() =>
// // // // // //                       setEditingProduct({
// // // // // //                         ...editingProduct,
// // // // // //                         imagesFiles: []
// // // // // //                       })
// // // // // //                     }
// // // // // //                     className="mt-2 text-sm text-red-500"
// // // // // //                   >
// // // // // //                     Clear selected images
// // // // // //                   </button>
// // // // // //                 ) : null}
// // // // // //               </div>

// // // // // //               <button
// // // // // //                 type="submit"
// // // // // //                 className="w-full bg-black text-white py-2 rounded-lg text-sm"
// // // // // //               >
// // // // // //                 Save Product
// // // // // //               </button>

// // // // // //             </form>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default AdminDashboard;

// // // // // import React, { useState, useEffect, useRef } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import { Plus, Trash2, Edit2, LogOut, X, Upload } from "lucide-react";
// // // // // import { motion, AnimatePresence } from "motion/react";
// // // // // import { Product } from "../types";

// // // // // interface ExtendedProduct extends Partial<Product> {
// // // // //   imagesFiles?: File[];
// // // // //   featured?: boolean;
// // // // // }

// // // // // const AdminDashboard = () => {
// // // // //   const [products, setProducts] = useState<Product[]>([]);
// // // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // // //   const [editingProduct, setEditingProduct] =
// // // // //     useState<ExtendedProduct | null>(null);
// // // // //   const [specText, setSpecText] = useState("");

// // // // //   const fileInputRef = useRef<HTMLInputElement>(null);
// // // // //   const navigate = useNavigate();
// // // // //   const token = localStorage.getItem("cricface_admin_token");

// // // // //   useEffect(() => {
// // // // //     if (!token) {
// // // // //       navigate("/admin/login");
// // // // //       return;
// // // // //     }
// // // // //     fetchProducts();
// // // // //   }, []);

// // // // //   // ESC close
// // // // //   useEffect(() => {
// // // // //     const handleEsc = (e: KeyboardEvent) => {
// // // // //       if (e.key === "Escape") closeModal();
// // // // //     };

// // // // //     if (isModalOpen) window.addEventListener("keydown", handleEsc);
// // // // //     return () => window.removeEventListener("keydown", handleEsc);
// // // // //   }, [isModalOpen]);

// // // // //   const closeModal = () => {
// // // // //     setIsModalOpen(false);
// // // // //     setEditingProduct(null);
// // // // //     setSpecText("");
// // // // //   };

// // // // //   const fetchProducts = async () => {
// // // // //     const res = await fetch("/api/products");
// // // // //     const data = await res.json();
// // // // //     setProducts(data);
// // // // //   };

// // // // //   const handleLogout = () => {
// // // // //     localStorage.removeItem("cricface_admin_token");
// // // // //     navigate("/admin/login");
// // // // //   };

// // // // //   const handleDelete = async (id: number) => {
// // // // //     if (!confirm("Are you sure you want to delete this product?")) return;

// // // // //     await fetch(`/api/products/${id}`, {
// // // // //       method: "DELETE",
// // // // //       headers: { Authorization: `Bearer ${token}` },
// // // // //     });

// // // // //     fetchProducts();
// // // // //   };

// // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // //     e.preventDefault();

// // // // //     const formData = new FormData();

// // // // //     // Convert specs text to JSON
// // // // //     const specs: Record<string, string> = {};
// // // // //     specText.split("\n").forEach((line) => {
// // // // //       const [key, value] = line.split(":");
// // // // //       if (key && value) specs[key.trim()] = value.trim();
// // // // //     });

// // // // //     formData.append("name", editingProduct?.name || "");
// // // // //     formData.append("price_inr", String(editingProduct?.price_inr || 0));
// // // // //     formData.append("price_usd", String(editingProduct?.price_usd || 0));
// // // // //     formData.append("price_eur", String(editingProduct?.price_eur || 0));
// // // // //     formData.append("grade", editingProduct?.grade || "");
// // // // //     formData.append("willow_type", editingProduct?.willow_type || "");
// // // // //     formData.append("weight", editingProduct?.weight || "");
// // // // //     formData.append("style", editingProduct?.style || "");
// // // // //     formData.append("description", editingProduct?.description || "");
// // // // //     formData.append("specifications", JSON.stringify(specs));
// // // // //     formData.append("featured", editingProduct?.featured ? "1" : "0");

// // // // //     if (editingProduct?.imagesFiles) {
// // // // //       editingProduct.imagesFiles.forEach((file) => {
// // // // //         formData.append("images", file);
// // // // //       });
// // // // //     }

// // // // //     const url = editingProduct?.id
// // // // //       ? `/api/products/${editingProduct.id}`
// // // // //       : "/api/products";

// // // // //     const method = editingProduct?.id ? "PUT" : "POST";

// // // // //     const res = await fetch(url, {
// // // // //       method,
// // // // //       headers: { Authorization: `Bearer ${token}` },
// // // // //       body: formData,
// // // // //     });

// // // // //     if (!res.ok) {
// // // // //       const err = await res.text();
// // // // //       alert("Error saving product:\n" + err);
// // // // //       return;
// // // // //     }

// // // // //     closeModal();
// // // // //     fetchProducts();
// // // // //   };

// // // // //   return (
// // // // //     <div className="pt-32 pb-24 bg-zinc-50 min-h-screen">
// // // // //       <div className="max-w-7xl mx-auto px-4">

// // // // //         {/* Header */}
// // // // //         <div className="flex justify-between items-center mb-10">
// // // // //           <div>
// // // // //             <h1 className="text-3xl font-black">DASHBOARD</h1>
// // // // //             <p className="text-zinc-500 text-sm">
// // // // //               Manage your premium catalog
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="flex gap-4">
// // // // //             <button
// // // // //               onClick={() => {
// // // // //                 setEditingProduct({
// // // // //                   imagesFiles: [],
// // // // //                   featured: false,
// // // // //                 });
// // // // //                 setSpecText("");
// // // // //                 setIsModalOpen(true);
// // // // //               }}
// // // // //               className="bg-gold text-black font-bold px-5 py-2 rounded-lg flex items-center gap-2"
// // // // //             >
// // // // //               <Plus size={18} />
// // // // //               Add Bat
// // // // //             </button>

// // // // //             <button
// // // // //               onClick={handleLogout}
// // // // //               className="bg-white border px-5 py-2 rounded-lg flex items-center gap-2"
// // // // //             >
// // // // //               <LogOut size={18} />
// // // // //               Logout
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Table */}
// // // // //         <div className="bg-white rounded-2xl shadow border overflow-hidden">
// // // // //           <table className="w-full text-left">
// // // // //             <thead className="bg-zinc-50 border-b">
// // // // //               <tr>
// // // // //                 <th className="px-6 py-4 text-sm">Product</th>
// // // // //                 <th className="px-6 py-4 text-sm">Willow / Grade</th>
// // // // //                 <th className="px-6 py-4 text-sm">Featured</th>
// // // // //                 <th className="px-6 py-4 text-sm">Price (INR)</th>
// // // // //                 <th className="px-6 py-4 text-sm">Actions</th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody>
// // // // //               {products.map((product) => (
// // // // //                 <tr key={product.id} className="border-b">
// // // // //                   <td className="px-6 py-4 flex items-center gap-4">
// // // // //                     {product.images?.[0] && (
// // // // //                       <img
// // // // //                         src={product.images[0]}
// // // // //                         className="w-10 h-10 object-cover rounded"
// // // // //                       />
// // // // //                     )}
// // // // //                     {product.name}
// // // // //                   </td>
// // // // //                   <td className="px-6 py-4 text-sm">
// // // // //                     {product.willow_type}
// // // // //                     <div className="text-xs text-zinc-400">
// // // // //                       {product.grade}
// // // // //                     </div>
// // // // //                   </td>
// // // // //                   <td className="px-6 py-4 text-sm">
// // // // //                     {product.featured ? "⭐ Yes" : "No"}
// // // // //                   </td>
// // // // //                   <td className="px-6 py-4 text-sm">
// // // // //                     ₹{product.price_inr?.toLocaleString()}
// // // // //                   </td>
// // // // //                   <td className="px-6 py-4 flex gap-3">
// // // // //                     <button
// // // // //                       onClick={() => {
// // // // //                         setEditingProduct(product);
// // // // //                         setSpecText(
// // // // //                           product.specifications
// // // // //                             ? Object.entries(product.specifications)
// // // // //                                 .map(([k, v]) => `${k}: ${v}`)
// // // // //                                 .join("\n")
// // // // //                             : ""
// // // // //                         );
// // // // //                         setIsModalOpen(true);
// // // // //                       }}
// // // // //                     >
// // // // //                       <Edit2 size={16} />
// // // // //                     </button>
// // // // //                     <button onClick={() => handleDelete(product.id)}>
// // // // //                       <Trash2 size={16} />
// // // // //                     </button>
// // // // //                   </td>
// // // // //                 </tr>
// // // // //               ))}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* MODAL */}
// // // // //       <AnimatePresence>
// // // // //   {isModalOpen && (
// // // // //     <motion.div
// // // // //       className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-28 px-4 z-50 overflow-y-auto"
// // // // //       initial={{ opacity: 0 }}
// // // // //       animate={{ opacity: 1 }}
// // // // //       exit={{ opacity: 0 }}
// // // // //       onClick={closeModal}
// // // // //     >
// // // // //       <motion.div
// // // // //         className="bg-white w-full max-w-xl rounded-2xl p-6 shadow-2xl relative"
// // // // //         initial={{ scale: 0.9, opacity: 0, y: 40 }}
// // // // //         animate={{ scale: 1, opacity: 1, y: 0 }}
// // // // //         exit={{ scale: 0.9, opacity: 0, y: 40 }}
// // // // //         transition={{ duration: 0.25 }}
// // // // //         onClick={(e) => e.stopPropagation()}
// // // // //       >
// // // // //         {/* Close Button */}
// // // // //         <button
// // // // //           onClick={closeModal}
// // // // //           className="absolute top-4 right-4 text-zinc-400 hover:text-black"
// // // // //         >
// // // // //           <X size={20} />
// // // // //         </button>

// // // // //         <h2 className="text-xl font-black mb-4">
// // // // //           {editingProduct?.id ? "Edit Product" : "Add Product"}
// // // // //         </h2>

// // // // //         <form onSubmit={handleSubmit} className="space-y-3">

// // // // //           {/* Product Name */}
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Product Name"
// // // // //             value={editingProduct?.name || ""}
// // // // //             onChange={(e) =>
// // // // //               setEditingProduct({ ...editingProduct, name: e.target.value })
// // // // //             }
// // // // //             className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// // // // //           />

// // // // //           {/* Prices */}
// // // // //           <div className="grid grid-cols-3 gap-3">
// // // // //             <input
// // // // //               type="number"
// // // // //               placeholder="INR"
// // // // //               value={editingProduct?.price_inr || ""}
// // // // //               onChange={(e) =>
// // // // //                 setEditingProduct({
// // // // //                   ...editingProduct,
// // // // //                   price_inr: Number(e.target.value)
// // // // //                 })
// // // // //               }
// // // // //               className="px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// // // // //             />
// // // // //             <input
// // // // //               type="number"
// // // // //               placeholder="USD"
// // // // //               value={editingProduct?.price_usd || ""}
// // // // //               onChange={(e) =>
// // // // //                 setEditingProduct({
// // // // //                   ...editingProduct,
// // // // //                   price_usd: Number(e.target.value)
// // // // //                 })
// // // // //               }
// // // // //               className="px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// // // // //             />
// // // // //             <input
// // // // //               type="number"
// // // // //               placeholder="EUR"
// // // // //               value={editingProduct?.price_eur || ""}
// // // // //               onChange={(e) =>
// // // // //                 setEditingProduct({
// // // // //                   ...editingProduct,
// // // // //                   price_eur: Number(e.target.value)
// // // // //                 })
// // // // //               }
// // // // //               className="px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// // // // //             />
// // // // //           </div>

// // // // //           {/* Willow Type */}
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Willow Type"
// // // // //             value={editingProduct?.willow_type || ""}
// // // // //             onChange={(e) =>
// // // // //               setEditingProduct({
// // // // //                 ...editingProduct,
// // // // //                 willow_type: e.target.value
// // // // //               })
// // // // //             }
// // // // //             className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// // // // //           />

// // // // //           {/* Grade */}
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Grade"
// // // // //             value={editingProduct?.grade || ""}
// // // // //             onChange={(e) =>
// // // // //               setEditingProduct({
// // // // //                 ...editingProduct,
// // // // //                 grade: e.target.value
// // // // //               })
// // // // //             }
// // // // //             className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// // // // //           />

// // // // //           {/* Weight */}
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Weight"
// // // // //             value={editingProduct?.weight || ""}
// // // // //             onChange={(e) =>
// // // // //               setEditingProduct({
// // // // //                 ...editingProduct,
// // // // //                 weight: e.target.value
// // // // //               })
// // // // //             }
// // // // //             className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// // // // //           />

// // // // //           {/* Style */}
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Style"
// // // // //             value={editingProduct?.style || ""}
// // // // //             onChange={(e) =>
// // // // //               setEditingProduct({
// // // // //                 ...editingProduct,
// // // // //                 style: e.target.value
// // // // //               })
// // // // //             }
// // // // //             className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// // // // //           />

// // // // //           {/* Description */}
// // // // //           <textarea
// // // // //             rows={3}
// // // // //             placeholder="Description"
// // // // //             value={editingProduct?.description || ""}
// // // // //             onChange={(e) =>
// // // // //               setEditingProduct({
// // // // //                 ...editingProduct,
// // // // //                 description: e.target.value
// // // // //               })
// // // // //             }
// // // // //             className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm resize-none"
// // // // //           />

// // // // //           {/* Specs */}
// // // // //           <textarea
// // // // //             rows={4}
// // // // //             placeholder="Edge: 40mm
// // // // // Spine: 65mm"
// // // // //             value={specText}
// // // // //             onChange={(e) => setSpecText(e.target.value)}
// // // // //             className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm resize-none"
// // // // //           />

// // // // //           {/* Featured */}
// // // // //           <div className="flex items-center gap-2">
// // // // //             <input
// // // // //               type="checkbox"
// // // // //               checked={editingProduct?.featured || false}
// // // // //               onChange={(e) =>
// // // // //                 setEditingProduct({
// // // // //                   ...editingProduct,
// // // // //                   featured: e.target.checked
// // // // //                 })
// // // // //               }
// // // // //             />
// // // // //             <span className="text-sm">Featured</span>
// // // // //           </div>

// // // // //           {/* Upload Button */}
// // // // //           <input
// // // // //             type="file"
// // // // //             multiple
// // // // //             hidden
// // // // //             accept="image/*"
// // // // //             ref={fileInputRef}
// // // // //             onChange={(e) => {
// // // // //               if (!e.target.files) return;
// // // // //               setEditingProduct({
// // // // //                 ...editingProduct,
// // // // //                 imagesFiles: Array.from(e.target.files)
// // // // //               });
// // // // //             }}
// // // // //           />

// // // // //           <button
// // // // //             type="button"
// // // // //             onClick={() => fileInputRef.current?.click()}
// // // // //             className="w-full flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 py-2 rounded-lg text-sm transition"
// // // // //           >
// // // // //             <Upload size={16} />
// // // // //             Upload Images
// // // // //           </button>

// // // // //           {editingProduct?.imagesFiles?.length ? (
// // // // //             <button
// // // // //               type="button"
// // // // //               onClick={() =>
// // // // //                 setEditingProduct({
// // // // //                   ...editingProduct,
// // // // //                   imagesFiles: []
// // // // //                 })
// // // // //               }
// // // // //               className="text-xs text-red-500"
// // // // //             >
// // // // //               Clear selected images
// // // // //             </button>
// // // // //           ) : null}

// // // // //           <button
// // // // //             type="submit"
// // // // //             className="w-full bg-black text-white py-2 rounded-lg text-sm"
// // // // //           >
// // // // //             Save Product
// // // // //           </button>

// // // // //         </form>
// // // // //       </motion.div>
// // // // //     </motion.div>
// // // // //   )}
// // // // // </AnimatePresence>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default AdminDashboard;

// // // // import React, { useState, useEffect, useRef } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import { Plus, Trash2, Edit2, LogOut, X, Upload, Video } from "lucide-react";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { Product } from "../types";

// // // // interface ExtendedProduct extends Partial<Product> {
// // // //   imagesFiles?: File[];
// // // //   videoFile?: File | null;
// // // //   featured?: boolean;
// // // // }

// // // // const AdminDashboard = () => {
// // // //   const [products, setProducts] = useState<Product[]>([]);
// // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // //   const [editingProduct, setEditingProduct] =
// // // //     useState<ExtendedProduct | null>(null);
// // // //   const [specText, setSpecText] = useState("");

// // // //   const fileInputRef = useRef<HTMLInputElement>(null);
// // // //   const videoInputRef = useRef<HTMLInputElement>(null);

// // // //   const navigate = useNavigate();
// // // //   const token = localStorage.getItem("cricface_admin_token");

// // // //   useEffect(() => {
// // // //     if (!token) {
// // // //       navigate("/admin/login");
// // // //       return;
// // // //     }
// // // //     fetchProducts();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const handleEsc = (e: KeyboardEvent) => {
// // // //       if (e.key === "Escape") closeModal();
// // // //     };
// // // //     if (isModalOpen) window.addEventListener("keydown", handleEsc);
// // // //     return () => window.removeEventListener("keydown", handleEsc);
// // // //   }, [isModalOpen]);

// // // //   const closeModal = () => {
// // // //     setIsModalOpen(false);
// // // //     setEditingProduct(null);
// // // //     setSpecText("");
// // // //   };

// // // //   const fetchProducts = async () => {
// // // //     const res = await fetch("/api/products");
// // // //     const data = await res.json();
// // // //     setProducts(data);
// // // //   };

// // // //   const handleLogout = () => {
// // // //     localStorage.removeItem("cricface_admin_token");
// // // //     navigate("/admin/login");
// // // //   };

// // // //   const handleDelete = async (id: number) => {
// // // //     if (!confirm("Are you sure you want to delete this product?")) return;

// // // //     await fetch(`/api/products/${id}`, {
// // // //       method: "DELETE",
// // // //       headers: { Authorization: `Bearer ${token}` }
// // // //     });

// // // //     fetchProducts();
// // // //   };

// // // //   const validateVideoDuration = (file: File) => {
// // // //     return new Promise<boolean>((resolve) => {
// // // //       const video = document.createElement("video");
// // // //       video.preload = "metadata";

// // // //       video.onloadedmetadata = () => {
// // // //         window.URL.revokeObjectURL(video.src);
// // // //         resolve(video.duration <= 60);
// // // //       };

// // // //       video.src = URL.createObjectURL(file);
// // // //     });
// // // //   };

// // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // //     e.preventDefault();

// // // //     const formData = new FormData();

// // // //     const specs: Record<string, string> = {};
// // // //     specText.split("\n").forEach((line) => {
// // // //       const [key, value] = line.split(":");
// // // //       if (key && value) specs[key.trim()] = value.trim();
// // // //     });

// // // //     formData.append("name", editingProduct?.name || "");
// // // //     formData.append("price_inr", String(editingProduct?.price_inr || 0));
// // // //     formData.append("price_usd", String(editingProduct?.price_usd || 0));
// // // //     formData.append("price_eur", String(editingProduct?.price_eur || 0));
// // // //     formData.append("grade", editingProduct?.grade || "");
// // // //     formData.append("willow_type", editingProduct?.willow_type || "");
// // // //     formData.append("weight", editingProduct?.weight || "");
// // // //     formData.append("style", editingProduct?.style || "");
// // // //     formData.append("description", editingProduct?.description || "");
// // // //     formData.append("specifications", JSON.stringify(specs));
// // // //     formData.append("featured", editingProduct?.featured ? "1" : "0");

// // // //     editingProduct?.imagesFiles?.forEach((file) =>
// // // //       formData.append("images", file)
// // // //     );

// // // //     if (editingProduct?.videoFile) {
// // // //       formData.append("video", editingProduct.videoFile);
// // // //     }

// // // //     const url = editingProduct?.id
// // // //       ? `/api/products/${editingProduct.id}`
// // // //       : "/api/products";

// // // //     const method = editingProduct?.id ? "PUT" : "POST";

// // // //     const res = await fetch(url, {
// // // //       method,
// // // //       headers: { Authorization: `Bearer ${token}` },
// // // //       body: formData
// // // //     });

// // // //     if (!res.ok) {
// // // //       const err = await res.text();
// // // //       alert("Error saving product:\n" + err);
// // // //       return;
// // // //     }

// // // //     closeModal();
// // // //     fetchProducts();
// // // //   };

// // // //   return (
// // // //     <div className="pt-32 pb-24 bg-zinc-50 min-h-screen">
// // // //       <div className="max-w-7xl mx-auto px-4">

// // // //         {/* Header */}
// // // //         <div className="flex justify-between items-center mb-10">
// // // //           <div>
// // // //             <h1 className="text-3xl font-black">DASHBOARD</h1>
// // // //             <p className="text-zinc-500 text-sm">
// // // //               Manage your premium catalog
// // // //             </p>
// // // //           </div>

// // // //           <div className="flex gap-4">
// // // //             <button
// // // //               onClick={() => {
// // // //                 setEditingProduct({
// // // //                   imagesFiles: [],
// // // //                   videoFile: null,
// // // //                   featured: false
// // // //                 });
// // // //                 setSpecText("");
// // // //                 setIsModalOpen(true);
// // // //               }}
// // // //               className="bg-gold text-black font-bold px-5 py-2 rounded-lg flex items-center gap-2"
// // // //             >
// // // //               <Plus size={18} />
// // // //               Add Bat
// // // //             </button>

// // // //             <button
// // // //               onClick={handleLogout}
// // // //               className="bg-white border px-5 py-2 rounded-lg flex items-center gap-2"
// // // //             >
// // // //               <LogOut size={18} />
// // // //               Logout
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Table */}
// // // //         <div className="bg-white rounded-2xl shadow border overflow-hidden">
// // // //           <table className="w-full text-left">
// // // //             <thead className="bg-zinc-50 border-b">
// // // //               <tr>
// // // //                 <th className="px-6 py-4 text-sm">Product</th>
// // // //                 <th className="px-6 py-4 text-sm">Featured</th>
// // // //                 <th className="px-6 py-4 text-sm">Price (INR)</th>
// // // //                 <th className="px-6 py-4 text-sm">Actions</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {products.map((product) => (
// // // //                 <tr key={product.id} className="border-b">
// // // //                   <td className="px-6 py-4 flex items-center gap-4">
// // // //                     {product.images?.[0] && (
// // // //                       <img
// // // //                         src={product.images[0]}
// // // //                         className="w-10 h-10 object-cover rounded"
// // // //                       />
// // // //                     )}
// // // //                     {product.name}
// // // //                   </td>
// // // //                   <td className="px-6 py-4">
// // // //                     {product.featured ? "⭐ Yes" : "No"}
// // // //                   </td>
// // // //                   <td className="px-6 py-4">
// // // //                     ₹{product.price_inr?.toLocaleString()}
// // // //                   </td>
// // // //                   <td className="px-6 py-4 flex gap-3">
// // // //                     <button
// // // //                       onClick={() => {
// // // //                         setEditingProduct(product);
// // // //                         setSpecText(
// // // //                           product.specifications
// // // //                             ? Object.entries(product.specifications)
// // // //                                 .map(([k, v]) => `${k}: ${v}`)
// // // //                                 .join("\n")
// // // //                             : ""
// // // //                         );
// // // //                         setIsModalOpen(true);
// // // //                       }}
// // // //                     >
// // // //                       <Edit2 size={16} />
// // // //                     </button>
// // // //                     <button onClick={() => handleDelete(product.id)}>
// // // //                       <Trash2 size={16} />
// // // //                     </button>
// // // //                   </td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
// // // //       </div>

// // // //       {/* MODAL */}
// // // //       <AnimatePresence>
// // // //         {isModalOpen && (
// // // //           <motion.div
// // // //             className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-28 px-4 z-50 overflow-y-auto"
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             onClick={closeModal}
// // // //           >
// // // //             <motion.div
// // // //               className="bg-white w-full max-w-xl rounded-2xl p-6 shadow-2xl relative"
// // // //               initial={{ scale: 0.9, opacity: 0, y: 40 }}
// // // //               animate={{ scale: 1, opacity: 1, y: 0 }}
// // // //               exit={{ scale: 0.9, opacity: 0, y: 40 }}
// // // //               transition={{ duration: 0.25 }}
// // // //               onClick={(e) => e.stopPropagation()}
// // // //             >
// // // //               <button
// // // //                 onClick={closeModal}
// // // //                 className="absolute top-4 right-4 text-zinc-400 hover:text-black"
// // // //               >
// // // //                 <X size={20} />
// // // //               </button>

// // // //               <h2 className="text-xl font-black mb-4">
// // // //                 {editingProduct?.id ? "Edit Product" : "Add Product"}
// // // //               </h2>

// // // //               <form onSubmit={handleSubmit} className="space-y-3">

// // // //                 <input
// // // //                   type="text"
// // // //                   placeholder="Product Name"
// // // //                   value={editingProduct?.name || ""}
// // // //                   onChange={(e) =>
// // // //                     setEditingProduct({ ...editingProduct, name: e.target.value })
// // // //                   }
// // // //                   className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// // // //                 />

// // // //                 <input
// // // //                   type="file"
// // // //                   multiple
// // // //                   hidden
// // // //                   accept="image/*"
// // // //                   ref={fileInputRef}
// // // //                   onChange={(e) => {
// // // //                     if (!e.target.files) return;
// // // //                     setEditingProduct({
// // // //                       ...editingProduct,
// // // //                       imagesFiles: Array.from(e.target.files)
// // // //                     });
// // // //                   }}
// // // //                 />

// // // //                 <button
// // // //                   type="button"
// // // //                   onClick={() => fileInputRef.current?.click()}
// // // //                   className="w-full flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 py-2 rounded-lg text-sm"
// // // //                 >
// // // //                   <Upload size={16} />
// // // //                   Upload Images
// // // //                 </button>

// // // //                 <input
// // // //                   type="file"
// // // //                   hidden
// // // //                   accept="video/*"
// // // //                   ref={videoInputRef}
// // // //                   onChange={async (e) => {
// // // //                     if (!e.target.files?.[0]) return;
// // // //                     const file = e.target.files[0];
// // // //                     const valid = await validateVideoDuration(file);
// // // //                     if (!valid) {
// // // //                       alert("Video must be less than 1 minute.");
// // // //                       return;
// // // //                     }
// // // //                     setEditingProduct({
// // // //                       ...editingProduct,
// // // //                       videoFile: file
// // // //                     });
// // // //                   }}
// // // //                 />

// // // //                 <button
// // // //                   type="button"
// // // //                   onClick={() => videoInputRef.current?.click()}
// // // //                   className="w-full flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 py-2 rounded-lg text-sm"
// // // //                 >
// // // //                   <Video size={16} />
// // // //                   Upload Product Video (Max 1 min)
// // // //                 </button>

// // // //                 <button
// // // //                   type="submit"
// // // //                   className="w-full bg-black text-white py-2 rounded-lg text-sm"
// // // //                 >
// // // //                   Save Product
// // // //                 </button>

// // // //               </form>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AdminDashboard;

// // // import React, { useState, useEffect, useRef } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { Plus, Trash2, Edit2, LogOut, X, Upload } from "lucide-react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { Product } from "../types";

// // // interface ExtendedProduct extends Partial<Product> {
// // //   imagesFiles?: File[];
// // //   videoFile?: File | null;
// // //   featured?: boolean;
// // // }

// // // const AdminDashboard = () => {
// // //   const [products, setProducts] = useState<Product[]>([]);
// // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // //   const [editingProduct, setEditingProduct] =
// // //     useState<ExtendedProduct | null>(null);
// // //   const [specText, setSpecText] = useState("");

// // //   const fileInputRef = useRef<HTMLInputElement>(null);
// // //   const videoInputRef = useRef<HTMLInputElement>(null);

// // //   const navigate = useNavigate();
// // //   const token = localStorage.getItem("cricface_admin_token");

// // //   useEffect(() => {
// // //     if (!token) navigate("/admin/login");
// // //     fetchProducts();
// // //   }, []);

// // //   const fetchProducts = async () => {
// // //     const res = await fetch("/api/products");
// // //     const data = await res.json();
// // //     setProducts(data);
// // //   };

// // //   const closeModal = () => {
// // //     setIsModalOpen(false);
// // //     setEditingProduct(null);
// // //     setSpecText("");
// // //   };

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     const formData = new FormData();

// // //     const specs: Record<string, string> = {};
// // //     specText.split("\n").forEach((line) => {
// // //       const [k, v] = line.split(":");
// // //       if (k && v) specs[k.trim()] = v.trim();
// // //     });

// // //     formData.append("name", editingProduct?.name || "");

// // //     formData.append("original_price_inr", String(editingProduct?.original_price_inr || ""));
// // //     formData.append("price_inr", String(editingProduct?.price_inr || ""));
// // //     formData.append("original_price_usd", String(editingProduct?.original_price_usd || ""));
// // //     formData.append("price_usd", String(editingProduct?.price_usd || ""));
// // //     formData.append("original_price_eur", String(editingProduct?.original_price_eur || ""));
// // //     formData.append("price_eur", String(editingProduct?.price_eur || ""));

// // //     formData.append("grade", editingProduct?.grade || "");
// // //     formData.append("willow_type", editingProduct?.willow_type || "");
// // //     formData.append("weight", editingProduct?.weight || "");
// // //     formData.append("style", editingProduct?.style || "");
// // //     formData.append("description", editingProduct?.description || "");
// // //     formData.append("specifications", JSON.stringify(specs));
// // //     formData.append("featured", editingProduct?.featured ? "1" : "0");

// // //     editingProduct?.imagesFiles?.forEach((file) =>
// // //       formData.append("images", file)
// // //     );

// // //     if (editingProduct?.videoFile)
// // //       formData.append("video", editingProduct.videoFile);

// // //     await fetch("/api/products", {
// // //       method: "POST",
// // //       headers: { Authorization: `Bearer ${token}` },
// // //       body: formData
// // //     });

// // //     closeModal();
// // //     fetchProducts();
// // //   };

// // //   return (
// // //     <div className="pt-28 pb-20 bg-zinc-50 min-h-screen">
// // //       <div className="max-w-6xl mx-auto px-4">

// // //         <div className="flex justify-between mb-8">
// // //           <h1 className="text-3xl font-black">DASHBOARD</h1>
// // //           <button
// // //             onClick={() => {
// // //               setEditingProduct({ featured: false });
// // //               setIsModalOpen(true);
// // //             }}
// // //             className="bg-gold px-4 py-2 rounded-lg flex items-center gap-2"
// // //           >
// // //             <Plus size={16}/> Add Bat
// // //           </button>
// // //         </div>

// // //         <table className="w-full bg-white rounded-xl overflow-hidden shadow">
// // //           <thead className="bg-zinc-100 text-left">
// // //             <tr>
// // //               <th className="p-4">Name</th>
// // //               <th>Price</th>
// // //               <th>Featured</th>
// // //               <th>Action</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {products.map((p) => (
// // //               <tr key={p.id} className="border-t">
// // //                 <td className="p-4">{p.name}</td>
// // //                 <td>₹{p.price_inr}</td>
// // //                 <td>{p.featured ? "Yes" : "No"}</td>
// // //                 <td>
// // //                   <button onClick={() => setEditingProduct(p)}>
// // //                     <Edit2 size={16}/>
// // //                   </button>
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>

// // //       {/* MODAL */}
// // //       <AnimatePresence>
// // //         {isModalOpen && (
// // //           <motion.div
// // //             className="fixed inset-0 bg-black/60 flex items-center justify-center"
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             onClick={closeModal}
// // //           >
// // //             <motion.div
// // //               className="bg-white w-full max-w-xl p-6 rounded-2xl"
// // //               initial={{ scale: .9 }}
// // //               animate={{ scale: 1 }}
// // //               exit={{ scale: .9 }}
// // //               onClick={(e)=>e.stopPropagation()}
// // //             >
// // //               <button onClick={closeModal} className="float-right">
// // //                 <X size={18}/>
// // //               </button>

// // //               <form onSubmit={handleSubmit} className="space-y-3 mt-6">

// // //                 <input
// // //                   placeholder="Product Name"
// // //                   className="w-full p-2 border rounded"
// // //                   onChange={(e)=>setEditingProduct({...editingProduct, name:e.target.value})}
// // //                 />

// // //                 <div className="grid grid-cols-2 gap-2">
// // //                   <input placeholder="Original INR"
// // //                     onChange={(e)=>setEditingProduct({...editingProduct, original_price_inr:Number(e.target.value)})}
// // //                     className="p-2 border rounded"/>
// // //                   <input placeholder="Selling INR"
// // //                     onChange={(e)=>setEditingProduct({...editingProduct, price_inr:Number(e.target.value)})}
// // //                     className="p-2 border rounded"/>
// // //                 </div>

// // //                 <textarea
// // //                   placeholder="Description"
// // //                   className="w-full p-2 border rounded"
// // //                   onChange={(e)=>setEditingProduct({...editingProduct, description:e.target.value})}
// // //                 />

// // //                 <button type="submit" className="w-full bg-black text-white py-2 rounded">
// // //                   Save Product
// // //                 </button>
// // //               </form>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </div>
// // //   );
// // // };

// // // export default AdminDashboard;

// // import React, { useState, useEffect, useRef } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { Plus, Trash2, Edit2, LogOut, X, Upload, Video } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Product } from "../types";

// // interface ExtendedProduct extends Partial<Product> {
// //   imagesFiles?: File[];
// //   videoFile?: File | null;
// //   featured?: boolean;
// //   original_price_inr?: number;
// //   original_price_usd?: number;
// //   original_price_eur?: number;
// // }

// // const AdminDashboard = () => {
// //   const [products, setProducts] = useState<Product[]>([]);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [editingProduct, setEditingProduct] =
// //     useState<ExtendedProduct | null>(null);
// //   const [specText, setSpecText] = useState("");

// //   const fileInputRef = useRef<HTMLInputElement>(null);
// //   const videoInputRef = useRef<HTMLInputElement>(null);

// //   const navigate = useNavigate();
// //   const token = localStorage.getItem("cricface_admin_token");

// //   useEffect(() => {
// //     if (!token) {
// //       navigate("/admin/login");
// //       return;
// //     }
// //     fetchProducts();
// //   }, []);

// //   useEffect(() => {
// //     const handleEsc = (e: KeyboardEvent) => {
// //       if (e.key === "Escape") closeModal();
// //     };
// //     if (isModalOpen) window.addEventListener("keydown", handleEsc);
// //     return () => window.removeEventListener("keydown", handleEsc);
// //   }, [isModalOpen]);

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //     setEditingProduct(null);
// //     setSpecText("");
// //   };

// //   const fetchProducts = async () => {
// //     const res = await fetch("/api/products");
// //     const data = await res.json();
// //     setProducts(data);
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     const formData = new FormData();

// //     const specs: Record<string, string> = {};
// //     specText.split("\n").forEach((line) => {
// //       const [key, value] = line.split(":");
// //       if (key && value) specs[key.trim()] = value.trim();
// //     });

// //     formData.append("name", editingProduct?.name || "");

// //     formData.append("original_price_inr", String(editingProduct?.original_price_inr || ""));
// //     formData.append("price_inr", String(editingProduct?.price_inr || 0));
// //     formData.append("original_price_usd", String(editingProduct?.original_price_usd || ""));
// //     formData.append("price_usd", String(editingProduct?.price_usd || 0));
// //     formData.append("original_price_eur", String(editingProduct?.original_price_eur || ""));
// //     formData.append("price_eur", String(editingProduct?.price_eur || 0));

// //     formData.append("grade", editingProduct?.grade || "");
// //     formData.append("willow_type", editingProduct?.willow_type || "");
// //     formData.append("weight", editingProduct?.weight || "");
// //     formData.append("style", editingProduct?.style || "");
// //     formData.append("description", editingProduct?.description || "");
// //     formData.append("specifications", JSON.stringify(specs));
// //     formData.append("featured", editingProduct?.featured ? "1" : "0");

// //     if (editingProduct?.imagesFiles) {
// //       editingProduct.imagesFiles.forEach((file) => {
// //         formData.append("images", file);
// //       });
// //     }

// //     if (editingProduct?.videoFile) {
// //       formData.append("video", editingProduct.videoFile);
// //     }

// //     const res = await fetch("/api/products", {
// //       method: "POST",
// //       headers: { Authorization: `Bearer ${token}` },
// //       body: formData,
// //     });

// //     if (!res.ok) {
// //       const err = await res.text();
// //       alert("Error saving product:\n" + err);
// //       return;
// //     }

// //     closeModal();
// //     fetchProducts();
// //   };

// //   return (
// //     <div className="pt-32 pb-24 bg-zinc-50 min-h-screen">
// //       <div className="max-w-7xl mx-auto px-4">

// //         {/* Header */}
// //         <div className="flex justify-between items-center mb-10">
// //           <div>
// //             <h1 className="text-3xl font-black">DASHBOARD</h1>
// //             <p className="text-zinc-500 text-sm">
// //               Manage your premium catalog
// //             </p>
// //           </div>

// //           <button
// //             onClick={() => {
// //               setEditingProduct({
// //                 imagesFiles: [],
// //                 videoFile: null,
// //                 featured: false,
// //               });
// //               setSpecText("");
// //               setIsModalOpen(true);
// //             }}
// //             className="bg-gold text-black font-bold px-5 py-2 rounded-lg flex items-center gap-2"
// //           >
// //             <Plus size={18} />
// //             Add Bat
// //           </button>
// //         </div>
// //       </div>

// //       {/* MODAL */}
// //       <AnimatePresence>
// //         {isModalOpen && (
// //           <motion.div
// //             className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-28 px-4 z-50 overflow-y-auto"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             onClick={closeModal}
// //           >
// //             <motion.div
// //               className="bg-white w-full max-w-xl rounded-2xl p-6 shadow-2xl relative"
// //               initial={{ scale: 0.9, opacity: 0, y: 40 }}
// //               animate={{ scale: 1, opacity: 1, y: 0 }}
// //               exit={{ scale: 0.9, opacity: 0, y: 40 }}
// //               transition={{ duration: 0.25 }}
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <button
// //                 onClick={closeModal}
// //                 className="absolute top-4 right-4 text-zinc-400 hover:text-black"
// //               >
// //                 <X size={20} />
// //               </button>

// //               <h2 className="text-xl font-black mb-4">
// //                 Add Product
// //               </h2>

// //               <form onSubmit={handleSubmit} className="space-y-3">

// //                 <input
// //                   type="text"
// //                   placeholder="Product Name"
// //                   value={editingProduct?.name || ""}
// //                   onChange={(e) =>
// //                     setEditingProduct({ ...editingProduct, name: e.target.value })
// //                   }
// //                   className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// //                 />

// //                 {/* ORIGINAL + SELLING PRICE */}
// //                 <div className="grid grid-cols-3 gap-3">
// //                   <input
// //                     type="number"
// //                     placeholder="Original INR"
// //                     onChange={(e) =>
// //                       setEditingProduct({
// //                         ...editingProduct,
// //                         original_price_inr: Number(e.target.value)
// //                       })
// //                     }
// //                     className="px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// //                   />
// //                   <input
// //                     type="number"
// //                     placeholder="INR"
// //                     onChange={(e) =>
// //                       setEditingProduct({
// //                         ...editingProduct,
// //                         price_inr: Number(e.target.value)
// //                       })
// //                     }
// //                     className="px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// //                   />
// //                 </div>

// //                 {/* Image Upload */}
// //                 <input
// //                   type="file"
// //                   multiple
// //                   hidden
// //                   accept="image/*"
// //                   ref={fileInputRef}
// //                   onChange={(e) => {
// //                     if (!e.target.files) return;
// //                     setEditingProduct({
// //                       ...editingProduct,
// //                       imagesFiles: Array.from(e.target.files)
// //                     });
// //                   }}
// //                 />

// //                 <button
// //                   type="button"
// //                   onClick={() => fileInputRef.current?.click()}
// //                   className="w-full flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 py-2 rounded-lg text-sm transition"
// //                 >
// //                   <Upload size={16} />
// //                   Upload Images
// //                 </button>

// //                 {/* Video Upload */}
// //                 <input
// //                   type="file"
// //                   hidden
// //                   accept="video/*"
// //                   ref={videoInputRef}
// //                   onChange={(e) => {
// //                     if (!e.target.files) return;
// //                     setEditingProduct({
// //                       ...editingProduct,
// //                       videoFile: e.target.files[0]
// //                     });
// //                   }}
// //                 />

// //                 <button
// //                   type="button"
// //                   onClick={() => videoInputRef.current?.click()}
// //                   className="w-full flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 py-2 rounded-lg text-sm transition"
// //                 >
// //                   <Video size={16} />
// //                   Upload Video
// //                 </button>

// //                 <button
// //                   type="submit"
// //                   className="w-full bg-black text-white py-2 rounded-lg text-sm"
// //                 >
// //                   Save Product
// //                 </button>

// //               </form>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;

// // import React, { useState, useEffect, useRef } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { Plus, Trash2, Edit2, LogOut, X, Upload } from "lucide-react";
// // import { motion, AnimatePresence } from "motion/react";
// // import { Product } from "../types";

// // interface ExtendedProduct extends Partial<Product> {
// //   imagesFiles?: File[];
// //   featured?: boolean;
// // }

// // const AdminDashboard = () => {
// //   const [products, setProducts] = useState<Product[]>([]);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [editingProduct, setEditingProduct] =
// //     useState<ExtendedProduct | null>(null);
// //   const [specText, setSpecText] = useState("");

// //   const fileInputRef = useRef<HTMLInputElement>(null);
// //   const navigate = useNavigate();
// //   const token = localStorage.getItem("cricface_admin_token");

// //   useEffect(() => {
// //     if (!token) {
// //       navigate("/admin/login");
// //       return;
// //     }
// //     fetchProducts();
// //   }, []);

// //   // ESC close
// //   useEffect(() => {
// //     const handleEsc = (e: KeyboardEvent) => {
// //       if (e.key === "Escape") closeModal();
// //     };

// //     if (isModalOpen) window.addEventListener("keydown", handleEsc);
// //     return () => window.removeEventListener("keydown", handleEsc);
// //   }, [isModalOpen]);

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //     setEditingProduct(null);
// //     setSpecText("");
// //   };

// //   const fetchProducts = async () => {
// //     const res = await fetch("/api/products");
// //     const data = await res.json();
// //     setProducts(data);
// //   };

// //   const handleLogout = () => {
// //     localStorage.removeItem("cricface_admin_token");
// //     navigate("/admin/login");
// //   };

// //   const handleDelete = async (id: number) => {
// //     if (!confirm("Are you sure you want to delete this product?")) return;

// //     await fetch(`/api/products/${id}`, {
// //       method: "DELETE",
// //       headers: { Authorization: `Bearer ${token}` },
// //     });

// //     fetchProducts();
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     const formData = new FormData();

// //     // Convert specs text to JSON
// //     const specs: Record<string, string> = {};
// //     specText.split("\n").forEach((line) => {
// //       const [key, value] = line.split(":");
// //       if (key && value) specs[key.trim()] = value.trim();
// //     });

// //     formData.append("name", editingProduct?.name || "");
// //     formData.append("price_inr", String(editingProduct?.price_inr || 0));
// //     formData.append("price_usd", String(editingProduct?.price_usd || 0));
// //     formData.append("price_eur", String(editingProduct?.price_eur || 0));
// //     formData.append("grade", editingProduct?.grade || "");
// //     formData.append("willow_type", editingProduct?.willow_type || "");
// //     formData.append("weight", editingProduct?.weight || "");
// //     formData.append("style", editingProduct?.style || "");
// //     formData.append("description", editingProduct?.description || "");
// //     formData.append("specifications", JSON.stringify(specs));
// //     formData.append("featured", editingProduct?.featured ? "1" : "0");

// //     if (editingProduct?.imagesFiles) {
// //       editingProduct.imagesFiles.forEach((file) => {
// //         formData.append("images", file);
// //       });
// //     }

// //     const url = editingProduct?.id
// //       ? `/api/products/${editingProduct.id}`
// //       : "/api/products";

// //     const method = editingProduct?.id ? "PUT" : "POST";

// //     const res = await fetch(url, {
// //       method,
// //       headers: { Authorization: `Bearer ${token}` },
// //       body: formData,
// //     });

// //     if (!res.ok) {
// //       const err = await res.text();
// //       alert("Error saving product:\n" + err);
// //       return;
// //     }

// //     closeModal();
// //     fetchProducts();
// //   };

// //   return (
// //     <div className="pt-32 pb-24 bg-zinc-50 min-h-screen">
// //       <div className="max-w-7xl mx-auto px-4">

// //         {/* Header */}
// //         <div className="flex justify-between items-center mb-10">
// //           <div>
// //             <h1 className="text-3xl font-black">DASHBOARD</h1>
// //             <p className="text-zinc-500 text-sm">
// //               Manage your premium catalog
// //             </p>
// //           </div>

// //           <div className="flex gap-4">
// //             <button
// //               onClick={() => {
// //                 setEditingProduct({
// //                   imagesFiles: [],
// //                   featured: false,
// //                 });
// //                 setSpecText("");
// //                 setIsModalOpen(true);
// //               }}
// //               className="bg-gold text-black font-bold px-5 py-2 rounded-lg flex items-center gap-2"
// //             >
// //               <Plus size={18} />
// //               Add Bat
// //             </button>

// //             <button
// //               onClick={handleLogout}
// //               className="bg-white border px-5 py-2 rounded-lg flex items-center gap-2"
// //             >
// //               <LogOut size={18} />
// //               Logout
// //             </button>
// //           </div>
// //         </div>

// //         {/* Table */}
// //         <div className="bg-white rounded-2xl shadow border overflow-hidden">
// //           <table className="w-full text-left">
// //             <thead className="bg-zinc-50 border-b">
// //               <tr>
// //                 <th className="px-6 py-4 text-sm">Product</th>
// //                 <th className="px-6 py-4 text-sm">Willow / Grade</th>
// //                 <th className="px-6 py-4 text-sm">Featured</th>
// //                 <th className="px-6 py-4 text-sm">Price (INR)</th>
// //                 <th className="px-6 py-4 text-sm">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {products.map((product) => (
// //                 <tr key={product.id} className="border-b">
// //                   <td className="px-6 py-4 flex items-center gap-4">
// //                     {product.images?.[0] && (
// //                       <img
// //                         src={product.images[0]}
// //                         className="w-10 h-10 object-cover rounded"
// //                       />
// //                     )}
// //                     {product.name}
// //                   </td>
// //                   <td className="px-6 py-4 text-sm">
// //                     {product.willow_type}
// //                     <div className="text-xs text-zinc-400">
// //                       {product.grade}
// //                     </div>
// //                   </td>
// //                   <td className="px-6 py-4 text-sm">
// //                     {product.featured ? "⭐ Yes" : "No"}
// //                   </td>
// //                   <td className="px-6 py-4 text-sm">
// //                     ₹{product.price_inr?.toLocaleString()}
// //                   </td>
// //                   <td className="px-6 py-4 flex gap-3">
// //                     <button
// //                       onClick={() => {
// //                         setEditingProduct(product);
// //                         setSpecText(
// //                           product.specifications
// //                             ? Object.entries(product.specifications)
// //                                 .map(([k, v]) => `${k}: ${v}`)
// //                                 .join("\n")
// //                             : ""
// //                         );
// //                         setIsModalOpen(true);
// //                       }}
// //                     >
// //                       <Edit2 size={16} />
// //                     </button>
// //                     <button onClick={() => handleDelete(product.id)}>
// //                       <Trash2 size={16} />
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>

// //       {/* MODAL */}
// //       <AnimatePresence>
// //   {isModalOpen && (
// //     <motion.div
// //       className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-28 px-4 z-50 overflow-y-auto"
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       exit={{ opacity: 0 }}
// //       onClick={closeModal}
// //     >
// //       <motion.div
// //         className="bg-white w-full max-w-xl rounded-2xl p-6 shadow-2xl relative"
// //         initial={{ scale: 0.9, opacity: 0, y: 40 }}
// //         animate={{ scale: 1, opacity: 1, y: 0 }}
// //         exit={{ scale: 0.9, opacity: 0, y: 40 }}
// //         transition={{ duration: 0.25 }}
// //         onClick={(e) => e.stopPropagation()}
// //       >
// //         {/* Close Button */}
// //         <button
// //           onClick={closeModal}
// //           className="absolute top-4 right-4 text-zinc-400 hover:text-black"
// //         >
// //           <X size={20} />
// //         </button>

// //         <h2 className="text-xl font-black mb-4">
// //           {editingProduct?.id ? "Edit Product" : "Add Product"}
// //         </h2>

// //         <form onSubmit={handleSubmit} className="space-y-3">

// //           {/* Product Name */}
// //           <input
// //             type="text"
// //             placeholder="Product Name"
// //             value={editingProduct?.name || ""}
// //             onChange={(e) =>
// //               setEditingProduct({ ...editingProduct, name: e.target.value })
// //             }
// //             className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// //           />

// //           {/* Prices */}
// //           <div className="grid grid-cols-3 gap-3">
// //             <input
// //               type="number"
// //               placeholder="INR"
// //               value={editingProduct?.price_inr || ""}
// //               onChange={(e) =>
// //                 setEditingProduct({
// //                   ...editingProduct,
// //                   price_inr: Number(e.target.value)
// //                 })
// //               }
// //               className="px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// //             />
// //             <input
// //               type="number"
// //               placeholder="USD"
// //               value={editingProduct?.price_usd || ""}
// //               onChange={(e) =>
// //                 setEditingProduct({
// //                   ...editingProduct,
// //                   price_usd: Number(e.target.value)
// //                 })
// //               }
// //               className="px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// //             />
// //             <input
// //               type="number"
// //               placeholder="EUR"
// //               value={editingProduct?.price_eur || ""}
// //               onChange={(e) =>
// //                 setEditingProduct({
// //                   ...editingProduct,
// //                   price_eur: Number(e.target.value)
// //                 })
// //               }
// //               className="px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// //             />
// //           </div>

// //           {/* Willow Type */}
// //           <input
// //             type="text"
// //             placeholder="Willow Type"
// //             value={editingProduct?.willow_type || ""}
// //             onChange={(e) =>
// //               setEditingProduct({
// //                 ...editingProduct,
// //                 willow_type: e.target.value
// //               })
// //             }
// //             className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// //           />

// //           {/* Grade */}
// //           <input
// //             type="text"
// //             placeholder="Grade"
// //             value={editingProduct?.grade || ""}
// //             onChange={(e) =>
// //               setEditingProduct({
// //                 ...editingProduct,
// //                 grade: e.target.value
// //               })
// //             }
// //             className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// //           />

// //           {/* Weight */}
// //           <input
// //             type="text"
// //             placeholder="Weight"
// //             value={editingProduct?.weight || ""}
// //             onChange={(e) =>
// //               setEditingProduct({
// //                 ...editingProduct,
// //                 weight: e.target.value
// //               })
// //             }
// //             className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// //           />

// //           {/* Style */}
// //           <input
// //             type="text"
// //             placeholder="Style"
// //             value={editingProduct?.style || ""}
// //             onChange={(e) =>
// //               setEditingProduct({
// //                 ...editingProduct,
// //                 style: e.target.value
// //               })
// //             }
// //             className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
// //           />

// //           {/* Description */}
// //           <textarea
// //             rows={3}
// //             placeholder="Description"
// //             value={editingProduct?.description || ""}
// //             onChange={(e) =>
// //               setEditingProduct({
// //                 ...editingProduct,
// //                 description: e.target.value
// //               })
// //             }
// //             className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm resize-none"
// //           />

// //           {/* Specs */}
// //           <textarea
// //             rows={4}
// //             placeholder="Edge: 40mm
// // Spine: 65mm"
// //             value={specText}
// //             onChange={(e) => setSpecText(e.target.value)}
// //             className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm resize-none"
// //           />

// //           {/* Featured */}
// //           <div className="flex items-center gap-2">
// //             <input
// //               type="checkbox"
// //               checked={editingProduct?.featured || false}
// //               onChange={(e) =>
// //                 setEditingProduct({
// //                   ...editingProduct,
// //                   featured: e.target.checked
// //                 })
// //               }
// //             />
// //             <span className="text-sm">Featured</span>
// //           </div>

// //           {/* Upload Button */}
// //           <input
// //             type="file"
// //             multiple
// //             hidden
// //             accept="image/*"
// //             ref={fileInputRef}
// //             onChange={(e) => {
// //               if (!e.target.files) return;
// //               setEditingProduct({
// //                 ...editingProduct,
// //                 imagesFiles: Array.from(e.target.files)
// //               });
// //             }}
// //           />

// //           <button
// //             type="button"
// //             onClick={() => fileInputRef.current?.click()}
// //             className="w-full flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 py-2 rounded-lg text-sm transition"
// //           >
// //             <Upload size={16} />
// //             Upload Images
// //           </button>

// //           {editingProduct?.imagesFiles?.length ? (
// //             <button
// //               type="button"
// //               onClick={() =>
// //                 setEditingProduct({
// //                   ...editingProduct,
// //                   imagesFiles: []
// //                 })
// //               }
// //               className="text-xs text-red-500"
// //             >
// //               Clear selected images
// //             </button>
// //           ) : null}

// //           <button
// //             type="submit"
// //             className="w-full bg-black text-white py-2 rounded-lg text-sm"
// //           >
// //             Save Product
// //           </button>

// //         </form>
// //       </motion.div>
// //     </motion.div>
// //   )}
// // </AnimatePresence>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;


// // ------------------------------------------------

// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { Plus, Trash2, Edit2, LogOut, X, Upload, Video } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Product } from "../types";

// interface ExtendedProduct extends Partial<Product> {
//   imagesFiles?: File[];
//   videoFile?: File | null;
//   featured?: boolean;
//   original_price_inr?: number;
//   original_price_usd?: number;
//   original_price_eur?: number;
// }

// const AdminDashboard = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingProduct, setEditingProduct] =
//     useState<ExtendedProduct | null>(null);
//   const [specText, setSpecText] = useState("");

//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const videoInputRef = useRef<HTMLInputElement>(null);

//   const navigate = useNavigate();
//   const token = localStorage.getItem("cricface_admin_token");

//   useEffect(() => {
//     if (!token) {
//       navigate("/admin/login");
//       return;
//     }
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") closeModal();
//     };
//     if (isModalOpen) window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [isModalOpen]);

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setEditingProduct(null);
//     setSpecText("");
//   };

//   const fetchProducts = async () => {
//     const res = await fetch("/api/products");
//     const data = await res.json();
//     setProducts(data);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   const formData = new FormData();

//   const specs: Record<string, string> = {};
//   specText.split("\n").forEach((line) => {
//     const [key, value] = line.split(":");
//     if (key && value) specs[key.trim()] = value.trim();
//   });

//   formData.append("name", editingProduct?.name || "");

//   formData.append("original_price_inr", String(editingProduct?.original_price_inr || ""));
//   formData.append("price_inr", String(editingProduct?.price_inr || 0));
//   formData.append("original_price_usd", String(editingProduct?.original_price_usd || ""));
//   formData.append("price_usd", String(editingProduct?.price_usd || 0));
//   formData.append("original_price_eur", String(editingProduct?.original_price_eur || ""));
//   formData.append("price_eur", String(editingProduct?.price_eur || 0));

//   formData.append("grade", editingProduct?.grade || "");
//   formData.append("willow_type", editingProduct?.willow_type || "");
//   formData.append("weight", editingProduct?.weight || "");
//   formData.append("style", editingProduct?.style || "");
//   formData.append("description", editingProduct?.description || "");
//   formData.append("specifications", JSON.stringify(specs));
//   formData.append("featured", editingProduct?.featured ? "1" : "0");

//   if (editingProduct?.imagesFiles) {
//     editingProduct.imagesFiles.forEach((file) => {
//       formData.append("images", file);
//     });
//   }

//   if (editingProduct?.videoFile) {
//     formData.append("video", editingProduct.videoFile);
//   }

//   const isEditing = !!editingProduct?.id;

//   const res = await fetch(
//     isEditing ? `/api/products/${editingProduct?.id}` : "/api/products",
//     {
//       method: isEditing ? "PUT" : "POST",
//       headers: { Authorization: `Bearer ${token}` },
//       body: formData,
//     }
//   );

//   if (!res.ok) {
//     const err = await res.text();
//     alert("Error saving product:\n" + err);
//     return;
//   }

//   closeModal();
//   fetchProducts();
// };

//   return (
//     <div className="pt-32 pb-24 bg-zinc-50 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Header */}
//         <div className="flex justify-between items-center mb-10">
//           <div>
//             <h1 className="text-3xl font-black">DASHBOARD</h1>
//             <p className="text-zinc-500 text-sm">
//               Manage your premium catalog
//             </p>
//           </div>

//           <button
//             onClick={() => {
//               setEditingProduct({
//                 imagesFiles: [],
//                 videoFile: null,
//                 featured: false,
//               });
//               setSpecText("");
//               setIsModalOpen(true);
//             }}
//             className="bg-gold text-black font-bold px-5 py-2 rounded-lg flex items-center gap-2"
//           >
//             <Plus size={18} />
//             Add Bat
//           </button>
//         </div>
//       </div>

//       {/* Product Table */}
// <div className="max-w-7xl mx-auto px-4 mt-8">
//   <div className="bg-white rounded-2xl shadow border overflow-hidden">
//     <table className="w-full text-left">
//       <thead className="bg-zinc-50 border-b">
//         <tr>
//           <th className="px-6 py-4 text-sm">Product</th>
//           <th className="px-6 py-4 text-sm">Willow / Grade</th>
//           <th className="px-6 py-4 text-sm">Featured</th>
//           <th className="px-6 py-4 text-sm">Price (INR)</th>
//           <th className="px-6 py-4 text-sm">Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {products.map((product) => (
//           <tr key={product.id} className="border-b">
//             <td className="px-6 py-4 flex items-center gap-4">
//               {product.images?.[0] && (
//                 <img
//                   src={product.images[0]}
//                   className="w-10 h-10 object-cover rounded"
//                 />
//               )}
//               {product.name}
//             </td>

//             <td className="px-6 py-4 text-sm">
//               {product.willow_type}
//               <div className="text-xs text-zinc-400">
//                 {product.grade}
//               </div>
//             </td>

//             <td className="px-6 py-4 text-sm">
//               {product.featured ? "⭐ Yes" : "No"}
//             </td>

//             <td className="px-6 py-4 text-sm">
//               ₹{product.price_inr?.toLocaleString()}
//             </td>

//             <td className="px-6 py-4 flex gap-3">

//               {/* EDIT */}
//               <button
//                 onClick={() => {
//                   setEditingProduct(product);

//                   setSpecText(
//                     product.specifications
//                       ? Object.entries(product.specifications)
//                           .map(([k, v]) => `${k}: ${v}`)
//                           .join("\n")
//                       : ""
//                   );

//                   setIsModalOpen(true);
//                 }}
//                 className="text-blue-600 hover:text-blue-800"
//               >
//                 <Edit2 size={16} />
//               </button>

//               {/* DELETE */}
//               <button
//                 onClick={async () => {
//                   if (!confirm("Delete this product?")) return;

//                   await fetch(`/api/products/${product.id}`, {
//                     method: "DELETE",
//                     headers: {
//                       Authorization: `Bearer ${token}`,
//                     },
//                   });

//                   fetchProducts();
//                 }}
//                 className="text-red-600 hover:text-red-800"
//               >
//                 <Trash2 size={16} />
//               </button>

//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// </div>

//       {/* MODAL */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-28 px-4 z-50 overflow-y-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={closeModal}
//           >
//             <motion.div
//               className="bg-white w-full max-w-xl rounded-2xl p-6 shadow-2xl relative"
//               initial={{ scale: 0.9, opacity: 0, y: 40 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 40 }}
//               transition={{ duration: 0.25 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={closeModal}
//                 className="absolute top-4 right-4 text-zinc-400 hover:text-black"
//               >
//                 <X size={20} />
//               </button>

//               <h2 className="text-xl font-black mb-4">
//                 Add Product
//               </h2>

//               <form onSubmit={handleSubmit} className="space-y-3">

//                 <input
//                   type="text"
//                   placeholder="Product Name"
//                   value={editingProduct?.name || ""}
//                   onChange={(e) =>
//                     setEditingProduct({ ...editingProduct, name: e.target.value })
//                   }
//                   className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
//                 />

//                 <div className="grid grid-cols-2 gap-3">
//                   <input
//                     type="number"
//                     placeholder="Original INR"
//                     onChange={(e) =>
//                       setEditingProduct({
//                         ...editingProduct,
//                         original_price_inr: Number(e.target.value)
//                       })
//                     }
//                     className="px-3 py-2 bg-zinc-50 rounded-lg text-sm"
//                   />
//                   <input
//                     type="number"
//                     placeholder="Selling INR"
//                     onChange={(e) =>
//                       setEditingProduct({
//                         ...editingProduct,
//                         price_inr: Number(e.target.value)
//                       })
//                     }
//                     className="px-3 py-2 bg-zinc-50 rounded-lg text-sm"
//                   />
//                 </div>

//                 <input
//                   type="text"
//                   placeholder="Willow Type"
//                   value={editingProduct?.willow_type || ""}
//                   onChange={(e) =>
//                     setEditingProduct({
//                       ...editingProduct,
//                       willow_type: e.target.value
//                     })
//                   }
//                   className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
//                 />

//                 <input
//                   type="text"
//                   placeholder="Grade"
//                   value={editingProduct?.grade || ""}
//                   onChange={(e) =>
//                     setEditingProduct({
//                       ...editingProduct,
//                       grade: e.target.value
//                     })
//                   }
//                   className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
//                 />

//                 <textarea
//                   rows={3}
//                   placeholder="Description"
//                   value={editingProduct?.description || ""}
//                   onChange={(e) =>
//                     setEditingProduct({
//                       ...editingProduct,
//                       description: e.target.value
//                     })
//                   }
//                   className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm resize-none"
//                 />

//                 <textarea
//                   rows={4}
//                   placeholder="Edge: 40mm
// Spine: 65mm"
//                   value={specText}
//                   onChange={(e) => setSpecText(e.target.value)}
//                   className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm resize-none"
//                 />

//                 <div className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     checked={editingProduct?.featured || false}
//                     onChange={(e) =>
//                       setEditingProduct({
//                         ...editingProduct,
//                         featured: e.target.checked
//                       })
//                     }
//                   />
//                   Featured
//                 </div>

//                 <input
//                   type="file"
//                   multiple
//                   hidden
//                   accept="image/*"
//                   ref={fileInputRef}
//                   onChange={(e) => {
//                     if (!e.target.files) return;
//                     setEditingProduct({
//                       ...editingProduct,
//                       imagesFiles: Array.from(e.target.files)
//                     });
//                   }}
//                 />

//                 <button
//                   type="button"
//                   onClick={() => fileInputRef.current?.click()}
//                   className="w-full flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 py-2 rounded-lg text-sm transition"
//                 >
//                   <Upload size={16} />
//                   Upload Images
//                 </button>

//                 <input
//                   type="file"
//                   hidden
//                   accept="video/*"
//                   ref={videoInputRef}
//                   onChange={(e) => {
//                     if (!e.target.files) return;
//                     setEditingProduct({
//                       ...editingProduct,
//                       videoFile: e.target.files[0]
//                     });
//                   }}
//                 />

//                 <button
//                   type="button"
//                   onClick={() => videoInputRef.current?.click()}
//                   className="w-full flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 py-2 rounded-lg text-sm transition"
//                 >
//                   <Video size={16} />
//                   Upload Video
//                 </button>

//                 <button
//                   type="submit"
//                   className="w-full bg-black text-white py-2 rounded-lg text-sm"
//                 >
//                   Save Product
//                 </button>

//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Trash2, Edit2, X, Upload, Video } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "../types";

interface ExtendedProduct extends Partial<Product> {
  imagesFiles?: File[];
  videoFile?: File | null;
  featured?: boolean;
  original_price_inr?: number;
  original_price_usd?: number;
  original_price_eur?: number;
}

const AdminDashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] =
    useState<ExtendedProduct | null>(null);
  const [specText, setSpecText] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const token = localStorage.getItem("cricface_admin_token");

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }
    fetchProducts();
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
    setSpecText("");
  };

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    const specs: Record<string, string> = {};
    specText.split("\n").forEach((line) => {
      const [key, value] = line.split(":");
      if (key && value) specs[key.trim()] = value.trim();
    });

    formData.append("name", editingProduct?.name || "");

    formData.append("original_price_inr", String(editingProduct?.original_price_inr || ""));
    formData.append("price_inr", String(editingProduct?.price_inr || 0));

    formData.append("original_price_usd", String(editingProduct?.original_price_usd || ""));
    formData.append("price_usd", String(editingProduct?.price_usd || 0));

    formData.append("original_price_eur", String(editingProduct?.original_price_eur || ""));
    formData.append("price_eur", String(editingProduct?.price_eur || 0));

    formData.append("grade", editingProduct?.grade || "");
    formData.append("willow_type", editingProduct?.willow_type || "");
    formData.append("weight", editingProduct?.weight || "");
    formData.append("style", editingProduct?.style || "");
    formData.append("description", editingProduct?.description || "");
    formData.append("specifications", JSON.stringify(specs));
    formData.append("featured", editingProduct?.featured ? "1" : "0");

    if (editingProduct?.imagesFiles) {
      editingProduct.imagesFiles.forEach((file) => {
        formData.append("images", file);
      });
    }

    if (editingProduct?.videoFile) {
      formData.append("video", editingProduct.videoFile);
    }

    const isEditing = !!editingProduct?.id;

    const res = await fetch(
      isEditing ? `/api/products/${editingProduct?.id}` : "/api/products",
      {
        method: isEditing ? "PUT" : "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      }
    );

    if (!res.ok) {
      const err = await res.text();
      alert("Error saving product:\n" + err);
      return;
    }

    closeModal();
    fetchProducts();
  };

  return (
    <div className="pt-32 pb-24 bg-zinc-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-black">DASHBOARD</h1>

          <button
            onClick={() => {
              setEditingProduct({
                imagesFiles: [],
                videoFile: null,
                featured: false,
              });
              setSpecText("");
              setIsModalOpen(true);
            }}
            className="bg-gold text-black font-bold px-5 py-2 rounded-lg flex items-center gap-2"
          >
            <Plus size={18} />
            Add Bat
          </button>
        </div>
      </div>

      {/* Product Table */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-2xl shadow border overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-zinc-50 border-b">
              <tr>
                <th className="px-6 py-4 text-sm">Product</th>
                <th className="px-6 py-4 text-sm">Willow / Grade</th>
                <th className="px-6 py-4 text-sm">Featured</th>
                <th className="px-6 py-4 text-sm">Price (INR)</th>
                <th className="px-6 py-4 text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="px-6 py-4 flex items-center gap-4">
                    {product.images?.[0] && (
                      <img
                        src={product.images[0]}
                        className="w-10 h-10 object-cover rounded"
                      />
                    )}
                    {product.name}
                  </td>

                  <td className="px-6 py-4 text-sm">
                    {product.willow_type}
                    <div className="text-xs text-zinc-400">
                      {product.grade}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm">
                    {product.featured ? "⭐ Yes" : "No"}
                  </td>

                  <td className="px-6 py-4 text-sm">
                    ₹{product.price_inr?.toLocaleString()}
                  </td>

                  <td className="px-6 py-4 flex gap-3">
                    <button
                      onClick={() => {
                        setEditingProduct(product);
                        setSpecText(
                          product.specifications
                            ? Object.entries(product.specifications)
                                .map(([k, v]) => `${k}: ${v}`)
                                .join("\n")
                            : ""
                        );
                        setIsModalOpen(true);
                      }}
                      className="text-blue-600"
                    >
                      <Edit2 size={16} />
                    </button>

                    <button
                      onClick={async () => {
                        if (!confirm("Delete this product?")) return;
                        await fetch(`/api/products/${product.id}`, {
                          method: "DELETE",
                          headers: { Authorization: `Bearer ${token}` },
                        });
                        fetchProducts();
                      }}
                      className="text-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-28 px-4 z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white w-full max-w-xl rounded-2xl p-6 shadow-2xl relative"
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-zinc-400"
              >
                <X size={20} />
              </button>

              <h2 className="text-xl font-black mb-4">
                {editingProduct?.id ? "Edit Product" : "Add Product"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  type="text"
                  placeholder="Product Name"
                  value={editingProduct?.name || ""}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, name: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
                />

                {/* INR */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    placeholder="Original INR"
                    value={editingProduct?.original_price_inr || ""}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        original_price_inr: Number(e.target.value)
                      })
                    }
                    className="px-3 py-2 bg-zinc-50 rounded-lg text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Selling INR"
                    value={editingProduct?.price_inr || ""}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        price_inr: Number(e.target.value)
                      })
                    }
                    className="px-3 py-2 bg-zinc-50 rounded-lg text-sm"
                  />
                </div>

                {/* USD */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    placeholder="Original USD"
                    value={editingProduct?.original_price_usd || ""}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        original_price_usd: Number(e.target.value)
                      })
                    }
                    className="px-3 py-2 bg-zinc-50 rounded-lg text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Selling USD"
                    value={editingProduct?.price_usd || ""}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        price_usd: Number(e.target.value)
                      })
                    }
                    className="px-3 py-2 bg-zinc-50 rounded-lg text-sm"
                  />
                </div>

                {/* EUR */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    placeholder="Original EUR"
                    value={editingProduct?.original_price_eur || ""}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        original_price_eur: Number(e.target.value)
                      })
                    }
                    className="px-3 py-2 bg-zinc-50 rounded-lg text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Selling EUR"
                    value={editingProduct?.price_eur || ""}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        price_eur: Number(e.target.value)
                      })
                    }
                    className="px-3 py-2 bg-zinc-50 rounded-lg text-sm"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Willow Type"
                  value={editingProduct?.willow_type || ""}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      willow_type: e.target.value
                    })
                  }
                  className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
                />

                <input
                  type="text"
                  placeholder="Grade"
                  value={editingProduct?.grade || ""}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      grade: e.target.value
                    })
                  }
                  className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm"
                />

                <textarea
                  rows={3}
                  placeholder="Description"
                  value={editingProduct?.description || ""}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      description: e.target.value
                    })
                  }
                  className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm resize-none"
                />

                <textarea
                  rows={4}
                  placeholder="Edge: 40mm
Spine: 65mm"
                  value={specText}
                  onChange={(e) => setSpecText(e.target.value)}
                  className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm resize-none"
                />

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={editingProduct?.featured || false}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        featured: e.target.checked
                      })
                    }
                  />
                  Featured
                </div>

                {/* IMAGE INPUT */}
<input
  type="file"
  multiple
  hidden
  accept="image/*"
  ref={fileInputRef}
  onChange={(e) => {
    if (!e.target.files || !editingProduct) return;
    setEditingProduct({
      ...editingProduct,
      imagesFiles: Array.from(e.target.files),
    });
  }}
/>

{/* VIDEO INPUT */}
<input
  type="file"
  hidden
  accept="video/*"
  ref={videoInputRef}
  onChange={(e) => {
    if (!e.target.files || !editingProduct) return;
    setEditingProduct({
      ...editingProduct,
      videoFile: e.target.files[0],
    });
  }}
/>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full flex items-center justify-center gap-2 bg-zinc-100 py-2 rounded-lg text-sm"
                >
                  <Upload size={16} />
                  Upload Images
                </button>

                <button
                  type="button"
                  onClick={() => videoInputRef.current?.click()}
                  className="w-full flex items-center justify-center gap-2 bg-zinc-100 py-2 rounded-lg text-sm"
                >
                  <Video size={16} />
                  Upload Video
                </button>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 rounded-lg text-sm"
                >
                  Save Product
                </button>

              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;