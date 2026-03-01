// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { MessageSquare, ChevronLeft, ChevronRight, Ruler, Weight, Shield, Info } from 'lucide-react';
// import { Product } from '../types';
// import { useCurrency } from '../context/CurrencyContext';
// import { motion, AnimatePresence } from 'motion/react';
// import { getWhatsAppLink, generateProductInquiryMessage } from '../lib/utils';

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [activeImage, setActiveImage] = useState(0);
//   const { formatPrice } = useCurrency();

//   useEffect(() => {
//     fetch(`/api/products/${id}`)
//       .then(res => res.json())
//       .then(data => setProduct(data));
//   }, [id]);

//   if (!product) return <div className="pt-32 text-center">Loading...</div>;

//   const nextImage = () => setActiveImage((prev) => (prev + 1) % product.images.length);
//   const prevImage = () => setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length);

//   return (
//     <div className="pt-32 pb-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <Link to="/catalog" className="inline-flex items-center text-zinc-500 hover:text-gold mb-8 transition-colors">
//           <ChevronLeft size={20} />
//           <span className="text-sm font-bold uppercase tracking-widest">Back to Collection</span>
//         </Link>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           {/* Image Gallery */}
//           <div className="space-y-6">
//             <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-100 group">
//               <AnimatePresence mode="wait">
//                 <motion.img
//                   key={activeImage}
//                   src={product.images[activeImage]}
//                   alt={product.name}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="w-full h-full object-cover"
//                 />
//               </AnimatePresence>
              
//               {product.images.length > 1 && (
//                 <>
//                   <button
//                     onClick={prevImage}
//                     className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-md rounded-full text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity"
//                   >
//                     <ChevronLeft size={24} />
//                   </button>
//                   <button
//                     onClick={nextImage}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-md rounded-full text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity"
//                   >
//                     <ChevronRight size={24} />
//                   </button>
//                 </>
//               )}
//             </div>
            
//             <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
//               {product.images.map((img, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setActiveImage(idx)}
//                   className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
//                     activeImage === idx ? 'border-gold' : 'border-transparent opacity-60'
//                   }`}
//                 >
//                   <img src={img} alt="" className="w-full h-full object-cover" />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Details */}
//           <div className="flex flex-col">
//             <div className="mb-8">
//               <span className="text-gold font-bold tracking-widest text-xs uppercase mb-2 block">
//                 {product.willow_type} • {product.grade}
//               </span>
//               <h1 className="text-4xl md:text-5xl font-display font-black text-zinc-900 mb-4">
//                 {product.name}
//               </h1>
//               <p className="text-3xl font-bold text-cricket-green">
//                 {formatPrice({ price_inr: product.price_inr, price_usd: product.price_usd, price_eur: product.price_eur })}
//               </p>
//             </div>

//             <div className="prose prose-zinc mb-10">
//               <p className="text-zinc-600 leading-relaxed text-lg">
//                 {product.description}
//               </p>
//             </div>

//             {/* Specs Grid */}
//             <div className="grid grid-cols-2 gap-4 mb-10">
//               <div className="flex items-center p-4 bg-zinc-50 rounded-2xl">
//                 <Weight className="text-gold mr-3" size={20} />
//                 <div>
//                   <p className="text-[10px] uppercase font-bold text-zinc-400">Weight</p>
//                   <p className="font-bold text-zinc-900">{product.weight}</p>
//                 </div>
//               </div>
//               <div className="flex items-center p-4 bg-zinc-50 rounded-2xl">
//                 <Ruler className="text-gold mr-3" size={20} />
//                 <div>
//                   <p className="text-[10px] uppercase font-bold text-zinc-400">Style</p>
//                   <p className="font-bold text-zinc-900">{product.style}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Specifications Table */}
//             <div className="mb-10">
//               <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-4 flex items-center">
//                 <Info size={16} className="mr-2 text-gold" />
//                 Technical Specs
//               </h3>
//               <div className="border border-zinc-100 rounded-2xl overflow-hidden">
//                 {Object.entries(product.specifications).map(([key, value], idx) => (
//                   <div key={key} className={`flex justify-between p-4 ${idx % 2 === 0 ? 'bg-zinc-50' : 'bg-white'}`}>
//                     <span className="text-zinc-500 font-medium">{key}</span>
//                     <span className="text-zinc-900 font-bold">{value}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-auto">
//               <a
//                 href={getWhatsAppLink(generateProductInquiryMessage(product.name, formatPrice({ price_inr: product.price_inr, price_usd: product.price_usd, price_eur: product.price_eur })))}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-full bg-cricket-green hover:bg-cricket-green-dark text-white font-bold py-5 px-8 rounded-2xl transition-all flex items-center justify-center space-x-3 shadow-lg shadow-cricket-green/20"
//               >
//                 <MessageSquare size={20} />
//                 <span className="text-lg">Contact Dealer on WhatsApp</span>
//               </a>
//               <p className="text-center text-zinc-400 text-xs mt-4">
//                 Clicking will open WhatsApp to discuss this specific bat with our experts.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;


// ----------------------------------------------

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Product } from "../types";
// import { useCurrency } from "../context/CurrencyContext";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const { formatPrice } = useCurrency();

//   const [product, setProduct] = useState<Product | null>(null);
//   const [selectedImage, setSelectedImage] = useState<string>("");

//   useEffect(() => {
//     fetch(`/api/products/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data);
//         if (data.images?.length > 0) {
//           setSelectedImage(data.images[0]);
//         }
//       });
//   }, [id]);

//   if (!product) return <div className="pt-40 text-center">Loading...</div>;

//   const discount =
//     product.original_price_inr && product.price_inr
//       ? Math.round(
//           ((product.original_price_inr - product.price_inr) /
//             product.original_price_inr) *
//             100
//         )
//       : 0;

//   return (
//     <section className="pt-32 pb-24 bg-white min-h-screen">
//       <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">

//         {/* LEFT SIDE */}
//         <div>
//           {product.video && (
//             <video
//               src={product.video}
//               controls
//               className="w-full rounded-2xl mb-6"
//             />
//           )}

//           <div className="rounded-2xl overflow-hidden mb-4">
//             <img
//               src={selectedImage}
//               className="w-full h-[450px] object-cover"
//             />
//           </div>

//           <div className="flex gap-3">
//             {product.images?.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 onClick={() => setSelectedImage(img)}
//                 className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
//                   selectedImage === img
//                     ? "border-black"
//                     : "border-transparent"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div>
//           {product.featured && (
//             <div className="inline-block bg-gold text-black text-xs px-3 py-1 rounded-full mb-4">
//               Featured
//             </div>
//           )}

//           <h1 className="text-3xl font-black mb-4">
//             {product.name}
//           </h1>

//           {/* PRICE */}
//           <div className="mb-6">
//             <div className="flex items-center gap-4">
//               <span className="text-3xl font-bold text-gold">
//                 {formatPrice(product)}
//               </span>

//               {product.original_price_inr && (
//                 <span className="text-zinc-400 line-through text-lg">
//                   ₹{product.original_price_inr.toLocaleString()}
//                 </span>
//               )}

//               {discount > 0 && (
//                 <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
//                   {discount}% OFF
//                 </span>
//               )}
//             </div>
//           </div>

//           <p className="text-zinc-600 mb-6">
//             {product.description}
//           </p>

//           {/* DETAILS */}
//           <div className="space-y-2 text-sm text-zinc-700 mb-6">
//             <div><strong>Willow:</strong> {product.willow_type}</div>
//             <div><strong>Grade:</strong> {product.grade}</div>
//             <div><strong>Weight:</strong> {product.weight}</div>
//             <div><strong>Style:</strong> {product.style}</div>
//           </div>

//           {/* SPECS */}
//           {product.specifications && (
//             <div className="mb-8">
//               <h3 className="font-bold mb-2">Technical Specifications</h3>
//               <div className="space-y-1 text-sm text-zinc-600">
//                 {Object.entries(product.specifications).map(([k, v]) => (
//                   <div key={k}>
//                     <strong>{k}:</strong> {v}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* WHATSAPP BUTTON */}
//           <a
//             href={`https://wa.me/91XXXXXXXXXX?text=Hi, I want to order ${product.name}`}
//             target="_blank"
//             className="inline-block bg-black text-white px-6 py-3 rounded-xl font-semibold"
//           >
//             Order on WhatsApp
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetail;


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types";
import { useCurrency } from "../context/CurrencyContext";
import { getWhatsAppLink } from "../lib/utils";

const ProductDetail = () => {
  const { id } = useParams();
  const { formatPrice, currency } = useCurrency();

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        if (data.images?.length > 0) {
          setSelectedImage(data.images[0]);
        }
      });
  }, [id]);

  if (!product) return <div className="pt-40 text-center">Loading...</div>;

  // -------- MULTI CURRENCY LOGIC --------
  const sellingPrice =
    currency === "INR"
      ? product.price_inr
      : currency === "USD"
      ? product.price_usd
      : product.price_eur;

  const originalPrice =
    currency === "INR"
      ? product.original_price_inr
      : currency === "USD"
      ? product.original_price_usd
      : product.original_price_eur;

  const hasDiscount =
    originalPrice &&
    sellingPrice &&
    originalPrice > sellingPrice;

  const discountPercent = hasDiscount
    ? Math.round(
        ((originalPrice - sellingPrice) / originalPrice) * 100
      )
    : 0;

  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div>
          {product.video && (
            <video
              src={product.video}
              controls
              className="w-full rounded-2xl mb-6"
            />
          )}

          <div className="rounded-2xl overflow-hidden mb-4">
            <img
              src={selectedImage}
              className="w-full h-[450px] object-cover"
            />
          </div>

          <div className="flex gap-3">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  selectedImage === img
                    ? "border-black"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>

          {product.featured && (
            <div className="inline-block bg-gold text-black text-xs px-3 py-1 rounded-full mb-4">
              Featured
            </div>
          )}

          <h1 className="text-3xl font-black mb-4">
            {product.name}
          </h1>

          {/* PRICE */}
          <div className="mb-6">
            <div className="flex items-center gap-4 flex-wrap">

              <span className="text-3xl font-bold text-gold">
                {formatPrice(product)}
              </span>

              {hasDiscount && (
                <span className="text-zinc-400 line-through text-lg">
                  {new Intl.NumberFormat(undefined, {
                    style: "currency",
                    currency,
                  }).format(originalPrice!)}
                </span>
              )}

              {hasDiscount && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {discountPercent}% OFF
                </span>
              )}

            </div>
          </div>

          <p className="text-zinc-600 mb-6">
            {product.description}
          </p>

          {/* DETAILS */}
          <div className="space-y-2 text-sm text-zinc-700 mb-6">
            <div><strong>Willow:</strong> {product.willow_type}</div>
            <div><strong>Grade:</strong> {product.grade}</div>
            {/* <div><strong>Weight:</strong> {product.weight}</div>
            <div><strong>Style:</strong> {product.style}</div> */}
          </div>

          {/* SPECS */}
          {product.specifications && (
            <div className="mb-8">
              <h3 className="font-bold mb-2">
                Technical Specifications
              </h3>
              <div className="space-y-1 text-sm text-zinc-600">
                {Object.entries(product.specifications).map(([k, v]) => (
                  <div key={k}>
                    <strong>{k}:</strong> {v}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* WHATSAPP BUTTON */}
          <a
            href={getWhatsAppLink(
              `Hi Cricface Team,

I would like to order:

🏏 Product: ${product.name}
💰 Price: ${formatPrice(product)}
📦 Please confirm availability.

Thank you.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Order on WhatsApp
          </a>

        </div>
      </div>
    </section>
  );
};

export default ProductDetail;