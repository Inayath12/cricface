// // import React, { useState, useEffect } from 'react';
// // import { useParams, Link } from 'react-router-dom';
// // import { MessageSquare, ChevronLeft, ChevronRight, Ruler, Weight, Shield, Info } from 'lucide-react';
// // import { Product } from '../types';
// // import { useCurrency } from '../context/CurrencyContext';
// // import { motion, AnimatePresence } from 'motion/react';
// // import { getWhatsAppLink, generateProductInquiryMessage } from '../lib/utils';

// // const ProductDetail = () => {
// //   const { id } = useParams();
// //   const [product, setProduct] = useState<Product | null>(null);
// //   const [activeImage, setActiveImage] = useState(0);
// //   const { formatPrice } = useCurrency();

// //   useEffect(() => {
// //     fetch(`/api/products/${id}`)
// //       .then(res => res.json())
// //       .then(data => setProduct(data));
// //   }, [id]);

// //   if (!product) return <div className="pt-32 text-center">Loading...</div>;

// //   const nextImage = () => setActiveImage((prev) => (prev + 1) % product.images.length);
// //   const prevImage = () => setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length);

// //   return (
// //     <div className="pt-32 pb-24 bg-white">
// //       <div className="max-w-7xl mx-auto px-4">
// //         <Link to="/catalog" className="inline-flex items-center text-zinc-500 hover:text-gold mb-8 transition-colors">
// //           <ChevronLeft size={20} />
// //           <span className="text-sm font-bold uppercase tracking-widest">Back to Collection</span>
// //         </Link>

// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
// //           {/* Image Gallery */}
// //           <div className="space-y-6">
// //             <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-100 group">
// //               <AnimatePresence mode="wait">
// //                 <motion.img
// //                   key={activeImage}
// //                   src={product.images[activeImage]}
// //                   alt={product.name}
// //                   initial={{ opacity: 0 }}
// //                   animate={{ opacity: 1 }}
// //                   exit={{ opacity: 0 }}
// //                   className="w-full h-full object-cover"
// //                 />
// //               </AnimatePresence>
              
// //               {product.images.length > 1 && (
// //                 <>
// //                   <button
// //                     onClick={prevImage}
// //                     className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-md rounded-full text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity"
// //                   >
// //                     <ChevronLeft size={24} />
// //                   </button>
// //                   <button
// //                     onClick={nextImage}
// //                     className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-md rounded-full text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity"
// //                   >
// //                     <ChevronRight size={24} />
// //                   </button>
// //                 </>
// //               )}
// //             </div>
            
// //             <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
// //               {product.images.map((img, idx) => (
// //                 <button
// //                   key={idx}
// //                   onClick={() => setActiveImage(idx)}
// //                   className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
// //                     activeImage === idx ? 'border-gold' : 'border-transparent opacity-60'
// //                   }`}
// //                 >
// //                   <img src={img} alt="" className="w-full h-full object-cover" />
// //                 </button>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Details */}
// //           <div className="flex flex-col">
// //             <div className="mb-8">
// //               <span className="text-gold font-bold tracking-widest text-xs uppercase mb-2 block">
// //                 {product.willow_type} • {product.grade}
// //               </span>
// //               <h1 className="text-4xl md:text-5xl font-display font-black text-zinc-900 mb-4">
// //                 {product.name}
// //               </h1>
// //               <p className="text-3xl font-bold text-cricket-green">
// //                 {formatPrice({ price_inr: product.price_inr, price_usd: product.price_usd, price_eur: product.price_eur })}
// //               </p>
// //             </div>

// //             <div className="prose prose-zinc mb-10">
// //               <p className="text-zinc-600 leading-relaxed text-lg">
// //                 {product.description}
// //               </p>
// //             </div>

// //             {/* Specs Grid */}
// //             <div className="grid grid-cols-2 gap-4 mb-10">
// //               <div className="flex items-center p-4 bg-zinc-50 rounded-2xl">
// //                 <Weight className="text-gold mr-3" size={20} />
// //                 <div>
// //                   <p className="text-[10px] uppercase font-bold text-zinc-400">Weight</p>
// //                   <p className="font-bold text-zinc-900">{product.weight}</p>
// //                 </div>
// //               </div>
// //               <div className="flex items-center p-4 bg-zinc-50 rounded-2xl">
// //                 <Ruler className="text-gold mr-3" size={20} />
// //                 <div>
// //                   <p className="text-[10px] uppercase font-bold text-zinc-400">Style</p>
// //                   <p className="font-bold text-zinc-900">{product.style}</p>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Specifications Table */}
// //             <div className="mb-10">
// //               <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-4 flex items-center">
// //                 <Info size={16} className="mr-2 text-gold" />
// //                 Technical Specs
// //               </h3>
// //               <div className="border border-zinc-100 rounded-2xl overflow-hidden">
// //                 {Object.entries(product.specifications).map(([key, value], idx) => (
// //                   <div key={key} className={`flex justify-between p-4 ${idx % 2 === 0 ? 'bg-zinc-50' : 'bg-white'}`}>
// //                     <span className="text-zinc-500 font-medium">{key}</span>
// //                     <span className="text-zinc-900 font-bold">{value}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             <div className="mt-auto">
// //               <a
// //                 href={getWhatsAppLink(generateProductInquiryMessage(product.name, formatPrice({ price_inr: product.price_inr, price_usd: product.price_usd, price_eur: product.price_eur })))}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="w-full bg-cricket-green hover:bg-cricket-green-dark text-white font-bold py-5 px-8 rounded-2xl transition-all flex items-center justify-center space-x-3 shadow-lg shadow-cricket-green/20"
// //               >
// //                 <MessageSquare size={20} />
// //                 <span className="text-lg">Contact Dealer on WhatsApp</span>
// //               </a>
// //               <p className="text-center text-zinc-400 text-xs mt-4">
// //                 Clicking will open WhatsApp to discuss this specific bat with our experts.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDetail;


// // ----------------------------------------------

// // import { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import { Product } from "../types";
// // import { useCurrency } from "../context/CurrencyContext";

// // const ProductDetail = () => {
// //   const { id } = useParams();
// //   const { formatPrice } = useCurrency();

// //   const [product, setProduct] = useState<Product | null>(null);
// //   const [selectedImage, setSelectedImage] = useState<string>("");

// //   useEffect(() => {
// //     fetch(`/api/products/${id}`)
// //       .then((res) => res.json())
// //       .then((data) => {
// //         setProduct(data);
// //         if (data.images?.length > 0) {
// //           setSelectedImage(data.images[0]);
// //         }
// //       });
// //   }, [id]);

// //   if (!product) return <div className="pt-40 text-center">Loading...</div>;

// //   const discount =
// //     product.original_price_inr && product.price_inr
// //       ? Math.round(
// //           ((product.original_price_inr - product.price_inr) /
// //             product.original_price_inr) *
// //             100
// //         )
// //       : 0;

// //   return (
// //     <section className="pt-32 pb-24 bg-white min-h-screen">
// //       <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">

// //         {/* LEFT SIDE */}
// //         <div>
// //           {product.video && (
// //             <video
// //               src={product.video}
// //               controls
// //               className="w-full rounded-2xl mb-6"
// //             />
// //           )}

// //           <div className="rounded-2xl overflow-hidden mb-4">
// //             <img
// //               src={selectedImage}
// //               className="w-full h-[450px] object-cover"
// //             />
// //           </div>

// //           <div className="flex gap-3">
// //             {product.images?.map((img, index) => (
// //               <img
// //                 key={index}
// //                 src={img}
// //                 onClick={() => setSelectedImage(img)}
// //                 className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
// //                   selectedImage === img
// //                     ? "border-black"
// //                     : "border-transparent"
// //                 }`}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         {/* RIGHT SIDE */}
// //         <div>
// //           {product.featured && (
// //             <div className="inline-block bg-gold text-black text-xs px-3 py-1 rounded-full mb-4">
// //               Featured
// //             </div>
// //           )}

// //           <h1 className="text-3xl font-black mb-4">
// //             {product.name}
// //           </h1>

// //           {/* PRICE */}
// //           <div className="mb-6">
// //             <div className="flex items-center gap-4">
// //               <span className="text-3xl font-bold text-gold">
// //                 {formatPrice(product)}
// //               </span>

// //               {product.original_price_inr && (
// //                 <span className="text-zinc-400 line-through text-lg">
// //                   ₹{product.original_price_inr.toLocaleString()}
// //                 </span>
// //               )}

// //               {discount > 0 && (
// //                 <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
// //                   {discount}% OFF
// //                 </span>
// //               )}
// //             </div>
// //           </div>

// //           <p className="text-zinc-600 mb-6">
// //             {product.description}
// //           </p>

// //           {/* DETAILS */}
// //           <div className="space-y-2 text-sm text-zinc-700 mb-6">
// //             <div><strong>Willow:</strong> {product.willow_type}</div>
// //             <div><strong>Grade:</strong> {product.grade}</div>
// //             <div><strong>Weight:</strong> {product.weight}</div>
// //             <div><strong>Style:</strong> {product.style}</div>
// //           </div>

// //           {/* SPECS */}
// //           {product.specifications && (
// //             <div className="mb-8">
// //               <h3 className="font-bold mb-2">Technical Specifications</h3>
// //               <div className="space-y-1 text-sm text-zinc-600">
// //                 {Object.entries(product.specifications).map(([k, v]) => (
// //                   <div key={k}>
// //                     <strong>{k}:</strong> {v}
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           )}

// //           {/* WHATSAPP BUTTON */}
// //           <a
// //             href={`https://wa.me/91XXXXXXXXXX?text=Hi, I want to order ${product.name}`}
// //             target="_blank"
// //             className="inline-block bg-black text-white px-6 py-3 rounded-xl font-semibold"
// //           >
// //             Order on WhatsApp
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ProductDetail;

// // 01-03-2026


// // import { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import { Product } from "../types";
// // import { useCurrency } from "../context/CurrencyContext";
// // import { getWhatsAppLink } from "../lib/utils";

// // const ProductDetail = () => {
// //   const { id } = useParams();
// //   const { formatPrice, currency } = useCurrency();

// //   const [product, setProduct] = useState<Product | null>(null);
// //   const [selectedImage, setSelectedImage] = useState<string>("");

// //   useEffect(() => {
// //     fetch(`/api/products/${id}`)
// //       .then((res) => res.json())
// //       .then((data) => {
// //         setProduct(data);
// //         if (data.images?.length > 0) {
// //           setSelectedImage(data.images[0]);
// //         }
// //       });
// //   }, [id]);

// //   if (!product) return <div className="pt-40 text-center">Loading...</div>;

// //   // -------- MULTI CURRENCY LOGIC --------
// //   const sellingPrice =
// //     currency === "INR"
// //       ? product.price_inr
// //       : currency === "USD"
// //       ? product.price_usd
// //       : product.price_eur;

// //   const originalPrice =
// //     currency === "INR"
// //       ? product.original_price_inr
// //       : currency === "USD"
// //       ? product.original_price_usd
// //       : product.original_price_eur;

// //   const hasDiscount =
// //     originalPrice &&
// //     sellingPrice &&
// //     originalPrice > sellingPrice;

// //   const discountPercent = hasDiscount
// //     ? Math.round(
// //         ((originalPrice - sellingPrice) / originalPrice) * 100
// //       )
// //     : 0;

// //   return (
// //     <section className="pt-32 pb-24 bg-white min-h-screen">
// //       <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">

// //         {/* LEFT SIDE */}
// //         <div>
// //           {product.video && (
// //             <video
// //               src={product.video}
// //               controls
// //               className="w-full rounded-2xl mb-6"
// //             />
// //           )}

// //           <div className="rounded-2xl overflow-hidden mb-4">
// //             <img
// //               src={selectedImage}
// //               className="w-full h-[450px] object-cover"
// //             />
// //           </div>

// //           <div className="flex gap-3">
// //             {product.images?.map((img, index) => (
// //               <img
// //                 key={index}
// //                 src={img}
// //                 onClick={() => setSelectedImage(img)}
// //                 className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
// //                   selectedImage === img
// //                     ? "border-black"
// //                     : "border-transparent"
// //                 }`}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         {/* RIGHT SIDE */}
// //         <div>

// //           {product.featured && (
// //             <div className="inline-block bg-gold text-black text-xs px-3 py-1 rounded-full mb-4">
// //               Featured
// //             </div>
// //           )}

// //           <h1 className="text-3xl font-black mb-4">
// //             {product.name}
// //           </h1>

// //           {/* PRICE */}
// //           <div className="mb-6">
// //             <div className="flex items-center gap-4 flex-wrap">

// //               <span className="text-3xl font-bold text-gold">
// //                 {formatPrice(product)}
// //               </span>

// //               {hasDiscount && (
// //                 <span className="text-zinc-400 line-through text-lg">
// //                   {new Intl.NumberFormat(undefined, {
// //                     style: "currency",
// //                     currency,
// //                   }).format(originalPrice!)}
// //                 </span>
// //               )}

// //               {hasDiscount && (
// //                 <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
// //                   {discountPercent}% OFF
// //                 </span>
// //               )}

// //             </div>
// //           </div>

// //           <p className="text-zinc-600 mb-6">
// //             {product.description}
// //           </p>

// //           {/* DETAILS */}
// //           <div className="space-y-2 text-sm text-zinc-700 mb-6">
// //             <div><strong>Willow:</strong> {product.willow_type}</div>
// //             <div><strong>Grade:</strong> {product.grade}</div>
// //             {/* <div><strong>Weight:</strong> {product.weight}</div>
// //             <div><strong>Style:</strong> {product.style}</div> */}
// //           </div>

// //           {/* SPECS */}
// //           {product.specifications && (
// //             <div className="mb-8">
// //               <h3 className="font-bold mb-2">
// //                 Technical Specifications
// //               </h3>
// //               <div className="space-y-1 text-sm text-zinc-600">
// //                 {Object.entries(product.specifications).map(([k, v]) => (
// //                   <div key={k}>
// //                     <strong>{k}:</strong> {v}
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           )}

// //           {/* WHATSAPP BUTTON */}
// //           <a
// //             href={getWhatsAppLink(
// //               `Hi Cricface Team,

// // I would like to order:

// // 🏏 Product: ${product.name}
// // 💰 Price: ${formatPrice(product)}
// // 📦 Please confirm availability.

// // Thank you.`
// //             )}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
// //           >
// //             Order on WhatsApp
// //           </a>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ProductDetail;

// // 02-03-2026

// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { Product, SizePrice, OrderCustomization } from "../types";
// import { useCurrency } from "../context/CurrencyContext";
// import { getWhatsAppLink } from "../lib/utils";
// import { ChevronLeft, MessageSquare, ShoppingBag, CheckCircle2, Loader2 } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// // ─── Customization constants ──────────────────────────────────────────────────
// const SIZES = ["Size 3", "Size 4", "Size 5", "Size 6", "Harrow", "Full Size"];

// const WEIGHT_OPTIONS: Record<string, string[]> = {
//   "Kashmir Willow": ["1150g–1200g", "1200g–1250g", "1250g–1300g"],
//   "English Willow": ["1120g–1150g", "1150g–1180g", "1200g–1250g"],
//   "Size 5": ["850g–900g", "900g–950g", "950g–1000g"],
//   "Size 6": ["950g–1000g", "1000g–1050g", "1050g–1100g"],
//   "Size 3": ["800g–850g", "850g–900g"],
//   "Size 4": ["800g–850g", "850g–900g"],
//   "Harrow": ["1100g–1150g", "1150g–1200g"],
//   "Full Size": ["1120g–1150g", "1150g–1180g", "1200g–1250g"],
// };

// const HANDLE_SHAPES = ["Round Handle", "Semi Oval Handle"];
// const PROFILES = ["Duckbill Profile", "Mid to Low", "SRT"];

// // Add-on prices (INR only)
// const ADDON_PRICES = {
//   laser_engraving: 100,
//   threading: 100,
//   extra_grip: 50,
// };

// // ─── Razorpay script loader ───────────────────────────────────────────────────
// function loadRazorpay(): Promise<boolean> {
//   return new Promise((resolve) => {
//     if ((window as any).Razorpay) return resolve(true);
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.onload = () => resolve(true);
//     script.onerror = () => resolve(false);
//     document.body.appendChild(script);
//   });
// }

// // ─── Component ───────────────────────────────────────────────────────────────
// const ProductDetail = () => {
//   const { id } = useParams();
//   const { formatPrice, currency } = useCurrency();

//   const [product, setProduct] = useState<Product | null>(null);
//   const [selectedImage, setSelectedImage] = useState<string>("");

//   // Customization state
//   const [selectedSize, setSelectedSize] = useState<string>("");
//   const [selectedWeight, setSelectedWeight] = useState<string>("");
//   const [selectedHandle, setSelectedHandle] = useState<string>(HANDLE_SHAPES[0]);
//   const [selectedProfile, setSelectedProfile] = useState<string>(PROFILES[0]);
//   const [laserText, setLaserText] = useState<string>("");
//   const [threading, setThreading] = useState<boolean>(false);
//   const [extraGrip, setExtraGrip] = useState<boolean>(false);

//   // Order flow state
//   const [showOrderForm, setShowOrderForm] = useState(false);
//   const [customerName, setCustomerName] = useState("");
//   const [customerPhone, setCustomerPhone] = useState("");
//   const [customerEmail, setCustomerEmail] = useState("");
//   const [deliveryAddress, setDeliveryAddress] = useState("");
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [orderSuccess, setOrderSuccess] = useState(false);

//   useEffect(() => {
//     fetch(`/api/products/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         // Parse size_prices if it's a string
//         if (typeof data.size_prices === "string") {
//           try { data.size_prices = JSON.parse(data.size_prices); } catch { data.size_prices = []; }
//         }
//         setProduct(data);
//         if (data.images?.length > 0) setSelectedImage(data.images[0]);
//       });
//   }, [id]);

//   if (!product) return (
//     <div className="pt-40 flex items-center justify-center min-h-screen">
//       <Loader2 className="animate-spin text-gold" size={40} />
//     </div>
//   );

//   // ── Price logic ──────────────────────────────────────────────────────────
//   const getSizePriceObj = (): SizePrice | null => {
//     if (!selectedSize || !product.size_prices?.length) return null;
//     return product.size_prices.find((sp) => sp.size === selectedSize) || null;
//   };

//   const getBasePrice = () => {
//     const sp = getSizePriceObj();
//     if (sp) {
//       return currency === "INR" ? sp.price_inr : currency === "USD" ? sp.price_usd : sp.price_eur;
//     }
//     return currency === "INR" ? product.price_inr : currency === "USD" ? product.price_usd : product.price_eur;
//   };

//   const getBasePriceINR = () => {
//     const sp = getSizePriceObj();
//     return sp ? sp.price_inr : product.price_inr;
//   };

//   const getAddonTotal = () => {
//     let total = 0;
//     if (laserText.trim()) total += ADDON_PRICES.laser_engraving;
//     if (threading) total += ADDON_PRICES.threading;
//     if (extraGrip) total += ADDON_PRICES.extra_grip;
//     return total;
//   };

//   const getTotalINR = () => getBasePriceINR() + getAddonTotal();

//   const getOriginalPrice = () => {
//     const sp = getSizePriceObj();
//     if (sp) return null; // size prices don't have original
//     return currency === "INR" ? product.original_price_inr : currency === "USD" ? product.original_price_usd : product.original_price_eur;
//   };

//   const originalPrice = getOriginalPrice();
//   const sellingPrice = getBasePrice();
//   const hasDiscount = originalPrice && sellingPrice && originalPrice > sellingPrice;
//   const discountPercent = hasDiscount ? Math.round(((originalPrice - sellingPrice) / originalPrice) * 100) : 0;

//   // ── Weight options based on size + willow ────────────────────────────────
//   const getWeightOptions = () => {
//     if (selectedSize === "Size 3" || selectedSize === "Size 4") return WEIGHT_OPTIONS["Size 3"];
//     if (selectedSize === "Size 5") return WEIGHT_OPTIONS["Size 5"];
//     if (selectedSize === "Size 6") return WEIGHT_OPTIONS["Size 6"];
//     if (selectedSize === "Harrow") return WEIGHT_OPTIONS["Harrow"];
//     if (selectedSize === "Full Size") return WEIGHT_OPTIONS["Full Size"];
//     if (product.willow_type?.toLowerCase().includes("kashmir")) return WEIGHT_OPTIONS["Kashmir Willow"];
//     if (product.willow_type?.toLowerCase().includes("english")) return WEIGHT_OPTIONS["English Willow"];
//     return WEIGHT_OPTIONS["Kashmir Willow"];
//   };

//   const weightOptions = getWeightOptions();

//   // ── WhatsApp message builder ─────────────────────────────────────────────
//   const buildWhatsAppMessage = () => {
//     const addons = [];
//     if (laserText.trim()) addons.push(`Laser Engraving: "${laserText}" (+₹${ADDON_PRICES.laser_engraving})`);
//     if (threading) addons.push(`Threading (+₹${ADDON_PRICES.threading})`);
//     if (extraGrip) addons.push(`Extra Grip (+₹${ADDON_PRICES.extra_grip})`);

//     return `Hi Cricface Team,

// I would like to order:

// 🏏 Product: ${product.name}
// 📐 Size: ${selectedSize || "Not selected"}
// ⚖️ Weight: ${selectedWeight || "Not selected"}
// 🖐 Handle: ${selectedHandle}
// 📋 Profile: ${selectedProfile}
// ${addons.length ? "✨ Add-ons:\n" + addons.map(a => "  • " + a).join("\n") : ""}

// 💰 Base Price: ${formatPrice({ price_inr: getBasePriceINR(), price_usd: product.price_usd, price_eur: product.price_eur })}
// ${getAddonTotal() > 0 ? `➕ Add-ons: ₹${getAddonTotal()}` : ""}
// 💳 Total: ₹${getTotalINR().toLocaleString()}

// Please confirm availability. Thank you.`;
//   };

//   // ── Razorpay payment ─────────────────────────────────────────────────────
//   const handleRazorpayPayment = async () => {
//     if (!customerName || !customerPhone || !deliveryAddress) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     setIsProcessing(true);

//     const loaded = await loadRazorpay();
//     if (!loaded) {
//       alert("Failed to load Razorpay. Please try again.");
//       setIsProcessing(false);
//       return;
//     }

//     try {
//       // Create order on backend
//       const res = await fetch("/api/orders/create", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           product_id: product.id,
//           product_name: product.name,
//           customer_name: customerName,
//           customer_phone: customerPhone,
//           customer_email: customerEmail,
//           delivery_address: deliveryAddress,
//           customization: {
//             size: selectedSize,
//             weight: selectedWeight,
//             handle_shape: selectedHandle,
//             profile: selectedProfile,
//             laser_engraving: laserText,
//             threading,
//             extra_grip: extraGrip,
//           },
//           base_price_inr: getBasePriceINR(),
//           addon_price_inr: getAddonTotal(),
//           total_price_inr: getTotalINR(),
//         }),
//       });

//       const order = await res.json();

//       if (!order.razorpay_order_id) {
//         alert("Failed to create order. Please try again.");
//         setIsProcessing(false);
//         return;
//       }

//       // Open Razorpay checkout
//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//         amount: getTotalINR() * 100, // paise
//         currency: "INR",
//         name: "Cricface",
//         description: `${product.name} — ${selectedSize}`,
//         order_id: order.razorpay_order_id,
//         prefill: {
//           name: customerName,
//           contact: customerPhone,
//           email: customerEmail,
//         },
//         theme: { color: "#004d00" },
//         handler: async (response: any) => {
//           // Verify payment on backend
//           await fetch("/api/orders/verify", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               order_id: order.id,
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//             }),
//           });

//           setIsProcessing(false);
//           setOrderSuccess(true);
//           setShowOrderForm(false);
//         },
//         modal: {
//           ondismiss: () => setIsProcessing(false),
//         },
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong. Please try again.");
//       setIsProcessing(false);
//     }
//   };

//   // ─────────────────────────────────────────────────────────────────────────
//   return (
//     <section className="pt-32 pb-24 bg-white min-h-screen">
//       <div className="max-w-6xl mx-auto px-4">

//         {/* Back */}
//         <Link to="/catalog" className="inline-flex items-center text-zinc-500 hover:text-gold mb-8 transition-colors">
//           <ChevronLeft size={20} />
//           <span className="text-sm font-bold uppercase tracking-widest">Back to Collection</span>
//         </Link>

//         <div className="grid md:grid-cols-2 gap-12">

//           {/* ── LEFT: Images ── */}
//           <div>
//             {product.video && (
//               <video src={product.video} controls className="w-full rounded-2xl mb-6" />
//             )}
//             <div className="rounded-2xl overflow-hidden mb-4 bg-zinc-100">
//               <img src={selectedImage} className="w-full h-[450px] object-cover" alt={product.name} />
//             </div>
//             <div className="flex gap-3 overflow-x-auto pb-1">
//               {product.images?.map((img, index) => (
//                 <img
//                   key={index}
//                   src={img}
//                   onClick={() => setSelectedImage(img)}
//                   className={`w-20 h-20 flex-shrink-0 object-cover rounded-lg cursor-pointer border-2 transition-all ${
//                     selectedImage === img ? "border-gold scale-105" : "border-transparent opacity-60"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* ── RIGHT: Details + Customization ── */}
//           <div className="space-y-6">

//             {product.featured && (
//               <span className="inline-block bg-gold text-black text-xs px-3 py-1 rounded-full font-bold">Featured</span>
//             )}

//             <div>
//               <p className="text-xs font-bold uppercase tracking-widest text-gold mb-1">
//                 {product.willow_type} • {product.grade}
//               </p>
//               <h1 className="text-3xl font-black text-zinc-900 mb-4">{product.name}</h1>

//               {/* Price display */}
//               <div className="flex items-center gap-3 flex-wrap mb-2">
//                 <span className="text-3xl font-bold text-cricket-green">
//                   {selectedSize && getSizePriceObj()
//                     ? `₹${getSizePriceObj()!.price_inr.toLocaleString()}`
//                     : formatPrice(product)}
//                 </span>
//                 {hasDiscount && !selectedSize && (
//                   <>
//                     <span className="text-zinc-400 line-through text-lg">
//                       {new Intl.NumberFormat(undefined, { style: "currency", currency }).format(originalPrice!)}
//                     </span>
//                     <span className="bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">{discountPercent}% OFF</span>
//                   </>
//                 )}
//               </div>

//               {getAddonTotal() > 0 && (
//                 <div className="text-sm text-zinc-500">
//                   + ₹{getAddonTotal()} add-ons =
//                   <span className="font-bold text-zinc-900"> ₹{getTotalINR().toLocaleString()} total</span>
//                 </div>
//               )}
//             </div>

//             <p className="text-zinc-600">{product.description}</p>

//             <div className="text-sm text-zinc-600 space-y-1">
//               <div><strong>Willow:</strong> {product.willow_type}</div>
//               <div><strong>Grade:</strong> {product.grade}</div>
//             </div>

//             {/* ── Customization Panel ── */}
//             <div className="bg-zinc-50 rounded-2xl p-6 space-y-5 border border-zinc-100">
//               <h3 className="font-black text-zinc-900 text-lg">Customize Your Bat</h3>

//               {/* Size */}
//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
//                   Size {product.size_prices?.length ? <span className="text-gold">(price varies by size)</span> : ""}
//                 </label>
//                 <div className="flex flex-wrap gap-2">
//                   {SIZES.map((size) => {
//                     const sp = product.size_prices?.find((s) => s.size === size);
//                     return (
//                       <button
//                         key={size}
//                         onClick={() => { setSelectedSize(size); setSelectedWeight(""); }}
//                         className={`px-4 py-2 rounded-xl text-sm font-bold border-2 transition-all ${
//                           selectedSize === size
//                             ? "border-cricket-green bg-cricket-green text-white"
//                             : "border-zinc-200 bg-white text-zinc-700 hover:border-gold"
//                         }`}
//                       >
//                         {size}
//                         {sp && <span className="block text-xs font-normal">₹{sp.price_inr.toLocaleString()}</span>}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* Weight */}
//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Weight</label>
//                 <div className="flex flex-wrap gap-2">
//                   {weightOptions.map((w) => (
//                     <button
//                       key={w}
//                       onClick={() => setSelectedWeight(w)}
//                       className={`px-3 py-2 rounded-xl text-sm font-bold border-2 transition-all ${
//                         selectedWeight === w
//                           ? "border-cricket-green bg-cricket-green text-white"
//                           : "border-zinc-200 bg-white text-zinc-700 hover:border-gold"
//                       }`}
//                     >
//                       {w}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Handle Shape */}
//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Handle Shape</label>
//                 <div className="flex gap-2">
//                   {HANDLE_SHAPES.map((h) => (
//                     <button
//                       key={h}
//                       onClick={() => setSelectedHandle(h)}
//                       className={`px-4 py-2 rounded-xl text-sm font-bold border-2 transition-all ${
//                         selectedHandle === h
//                           ? "border-cricket-green bg-cricket-green text-white"
//                           : "border-zinc-200 bg-white text-zinc-700 hover:border-gold"
//                       }`}
//                     >
//                       {h}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Profile */}
//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Profile</label>
//                 <div className="flex flex-wrap gap-2">
//                   {PROFILES.map((p) => (
//                     <button
//                       key={p}
//                       onClick={() => setSelectedProfile(p)}
//                       className={`px-4 py-2 rounded-xl text-sm font-bold border-2 transition-all ${
//                         selectedProfile === p
//                           ? "border-cricket-green bg-cricket-green text-white"
//                           : "border-zinc-200 bg-white text-zinc-700 hover:border-gold"
//                       }`}
//                     >
//                       {p}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Add-ons */}
//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">Add-ons</label>
//                 <div className="space-y-3">

//                   {/* Laser Engraving */}
//                   <div className="bg-white rounded-xl p-4 border border-zinc-200">
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="text-sm font-bold">Laser Engraving</span>
//                       <span className="text-xs text-gold font-bold">+₹{ADDON_PRICES.laser_engraving}</span>
//                     </div>
//                     <input
//                       type="text"
//                       placeholder="Enter text to engrave (leave blank to skip)"
//                       value={laserText}
//                       onChange={(e) => setLaserText(e.target.value)}
//                       maxLength={30}
//                       className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/20"
//                     />
//                   </div>

//                   {/* Threading */}
//                   <div
//                     onClick={() => setThreading(!threading)}
//                     className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
//                       threading ? "border-cricket-green bg-cricket-green/5" : "border-zinc-200 bg-white"
//                     }`}
//                   >
//                     <div>
//                       <span className="text-sm font-bold">Threading</span>
//                       <p className="text-xs text-zinc-400">Professional bat threading</p>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <span className="text-xs text-gold font-bold">+₹{ADDON_PRICES.threading}</span>
//                       <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
//                         threading ? "bg-cricket-green border-cricket-green" : "border-zinc-300"
//                       }`}>
//                         {threading && <div className="w-2 h-2 bg-white rounded-full" />}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Extra Grip */}
//                   <div
//                     onClick={() => setExtraGrip(!extraGrip)}
//                     className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
//                       extraGrip ? "border-cricket-green bg-cricket-green/5" : "border-zinc-200 bg-white"
//                     }`}
//                   >
//                     <div>
//                       <span className="text-sm font-bold">Extra Grip</span>
//                       <p className="text-xs text-zinc-400">Premium quality extra grip</p>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <span className="text-xs text-gold font-bold">+₹{ADDON_PRICES.extra_grip}</span>
//                       <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
//                         extraGrip ? "bg-cricket-green border-cricket-green" : "border-zinc-300"
//                       }`}>
//                         {extraGrip && <div className="w-2 h-2 bg-white rounded-full" />}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Specifications */}
//             {product.specifications && Object.keys(product.specifications).length > 0 && (
//               <div>
//                 <h3 className="font-bold mb-3 text-zinc-900">Technical Specifications</h3>
//                 <div className="border border-zinc-100 rounded-2xl overflow-hidden">
//                   {Object.entries(product.specifications).map(([k, v], idx) => (
//                     <div key={k} className={`flex justify-between p-3 text-sm ${idx % 2 === 0 ? "bg-zinc-50" : "bg-white"}`}>
//                       <span className="text-zinc-500">{k}</span>
//                       <span className="font-bold text-zinc-900">{v}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* ── Action Buttons ── */}
//             <div className="space-y-3 pt-2">
//               {/* Buy Now */}
//               <button
//                 onClick={() => setShowOrderForm(true)}
//                 className="w-full bg-cricket-green hover:bg-cricket-green-dark text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-cricket-green/20"
//               >
//                 <ShoppingBag size={20} />
//                 <span>Buy Now — ₹{getTotalINR().toLocaleString()}</span>
//               </button>

//               {/* WhatsApp */}
//               <a
//                 href={getWhatsAppLink(buildWhatsAppMessage())}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-full border-2 border-cricket-green text-cricket-green hover:bg-cricket-green hover:text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-3"
//               >
//                 <MessageSquare size={20} />
//                 <span>Order via WhatsApp</span>
//               </a>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* ── Order Form Modal ── */}
//       <AnimatePresence>
//         {showOrderForm && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
//             onClick={() => setShowOrderForm(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 40 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 40 }}
//               onClick={(e) => e.stopPropagation()}
//               className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl my-8"
//             >
//               <h2 className="text-2xl font-black mb-2">Complete Your Order</h2>
//               <p className="text-zinc-400 text-sm mb-6">Fill in your details to proceed to payment</p>

//               {/* Order Summary */}
//               <div className="bg-zinc-50 rounded-xl p-4 mb-6 text-sm space-y-1">
//                 <div className="flex justify-between font-bold text-zinc-900">
//                   <span>{product.name}</span>
//                   <span>₹{getBasePriceINR().toLocaleString()}</span>
//                 </div>
//                 {selectedSize && <div className="text-zinc-500">Size: {selectedSize}</div>}
//                 {selectedWeight && <div className="text-zinc-500">Weight: {selectedWeight}</div>}
//                 {selectedHandle && <div className="text-zinc-500">Handle: {selectedHandle}</div>}
//                 {selectedProfile && <div className="text-zinc-500">Profile: {selectedProfile}</div>}
//                 {laserText && <div className="flex justify-between text-zinc-500"><span>Laser Engraving</span><span>+₹{ADDON_PRICES.laser_engraving}</span></div>}
//                 {threading && <div className="flex justify-between text-zinc-500"><span>Threading</span><span>+₹{ADDON_PRICES.threading}</span></div>}
//                 {extraGrip && <div className="flex justify-between text-zinc-500"><span>Extra Grip</span><span>+₹{ADDON_PRICES.extra_grip}</span></div>}
//                 <div className="flex justify-between font-black text-cricket-green pt-2 border-t border-zinc-200 text-base">
//                   <span>Total</span>
//                   <span>₹{getTotalINR().toLocaleString()}</span>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <input
//                   required
//                   type="text"
//                   placeholder="Full Name *"
//                   value={customerName}
//                   onChange={(e) => setCustomerName(e.target.value)}
//                   className="w-full px-4 py-3 bg-zinc-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/20"
//                 />
//                 <input
//                   required
//                   type="tel"
//                   placeholder="Phone Number *"
//                   value={customerPhone}
//                   onChange={(e) => setCustomerPhone(e.target.value)}
//                   className="w-full px-4 py-3 bg-zinc-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/20"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email (for order confirmation)"
//                   value={customerEmail}
//                   onChange={(e) => setCustomerEmail(e.target.value)}
//                   className="w-full px-4 py-3 bg-zinc-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/20"
//                 />
//                 <textarea
//                   required
//                   rows={3}
//                   placeholder="Full Delivery Address *"
//                   value={deliveryAddress}
//                   onChange={(e) => setDeliveryAddress(e.target.value)}
//                   className="w-full px-4 py-3 bg-zinc-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/20 resize-none"
//                 />

//                 <button
//                   onClick={handleRazorpayPayment}
//                   disabled={isProcessing}
//                   className="w-full bg-cricket-green text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-60"
//                 >
//                   {isProcessing ? <Loader2 size={20} className="animate-spin" /> : <ShoppingBag size={20} />}
//                   {isProcessing ? "Processing..." : `Pay ₹${getTotalINR().toLocaleString()}`}
//                 </button>

//                 <p className="text-center text-xs text-zinc-400">
//                   Secured by Razorpay • UPI, Cards, Net Banking accepted
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ── Order Success ── */}
//       <AnimatePresence>
//         {orderSuccess && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//           >
//             <motion.div
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               className="bg-white w-full max-w-sm rounded-3xl p-10 text-center shadow-2xl"
//             >
//               <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <CheckCircle2 size={40} />
//               </div>
//               <h2 className="text-2xl font-black mb-2">Order Placed!</h2>
//               <p className="text-zinc-500 mb-6">
//                 Thank you {customerName}! Your order for <strong>{product.name}</strong> has been confirmed.
//                 We'll contact you on <strong>{customerPhone}</strong> for delivery details.
//               </p>
//               <button
//                 onClick={() => setOrderSuccess(false)}
//                 className="w-full bg-cricket-green text-white font-bold py-3 rounded-2xl"
//               >
//                 Continue Shopping
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//     </section>
//   );
// };

// export default ProductDetail;

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Product, SizePrice } from "../types";
import { useCurrency } from "../context/CurrencyContext";
import { getWhatsAppLink } from "../lib/utils";
import { ChevronLeft, MessageSquare, ShoppingBag, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Constants ────────────────────────────────────────────────────────────────
const SIZES = [ "Size 3", "Size 4", "Size 5", "Size 6", "Harrow", "Full Size"];

const WEIGHT_OPTIONS: Record<string, string[]> = {
  "Kashmir Willow": ["1150g–1200g", "1200g–1250g", "1250g–1300g"],
  "English Willow": ["1120g–1150g", "1150g–1180g", "1200g–1250g"],
  "Size 3":         ["800g–850g", "850g–900g"],
  "Size 4":         ["800g–850g", "850g–900g"],
  "Size 5":         ["850g–900g", "900g–950g", "950g–1000g"],
  "Size 6":         ["950g–1000g", "1000g–1050g", "1050g–1100g"],
  "Harrow":         ["1100g–1150g", "1150g–1200g"],
  "Full Size":      ["1150g–1200g", "1200g–1250g", "1250g–1300g"],
};

const HANDLE_SHAPES = ["Round Handle", "Semi Oval Handle"];
const PROFILES      = ["Duckbill Profile", "Mid to Low", "SRT"];
const ADDON_PRICES  = { laser_engraving: 100, threading: 100, extra_grip: 50 };

function getAdvanceAmount(total: number): number {
  if (total < 10000) return 500;
  if (total < 15000) return 1000;
  return 1500;
}

function loadRazorpay(): Promise<boolean> {
  return new Promise((resolve) => {
    if ((window as any).Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

// ─── Component ───────────────────────────────────────────────────────────────
const ProductDetail = () => {
  const { id } = useParams();
  const { formatPrice, currency } = useCurrency();

  const [product, setProduct]             = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  // Customization
  const [selectedSize, setSelectedSize]       = useState("");
  const [selectedWeight, setSelectedWeight]   = useState("");
  const [selectedHandle, setSelectedHandle]   = useState(HANDLE_SHAPES[0]);
  const [selectedProfile, setSelectedProfile] = useState(PROFILES[0]);
  const [laserText, setLaserText]             = useState("");
  const [threading, setThreading]             = useState(false);
  const [extraGrip, setExtraGrip]             = useState(false);

  // Order form
  const [showOrderForm, setShowOrderForm]     = useState(false);
  const [customerName, setCustomerName]       = useState("");
  const [customerPhone, setCustomerPhone]     = useState("");
  const [customerEmail, setCustomerEmail]     = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [pinCode, setPinCode]                 = useState("");
  const [paymentType, setPaymentType]         = useState<"full" | "advance">("full");
  const [isProcessing, setIsProcessing]       = useState(false);
  const [orderSuccess, setOrderSuccess]       = useState(false);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((r) => r.json())
      .then((data) => {
        if (typeof data.size_prices === "string") {
          try { data.size_prices = JSON.parse(data.size_prices); } catch { data.size_prices = []; }
        }
        setProduct(data);
        if (data.images?.length > 0) setSelectedImage(data.images[0]);
      });
  }, [id]);

  if (!product) return (
    <div className="pt-40 flex items-center justify-center min-h-screen">
      <Loader2 className="animate-spin text-gold" size={40} />
    </div>
  );

  // ── Price helpers ────────────────────────────────────────────────────────
  const getSizePriceObj = (): SizePrice | null =>
    selectedSize && product.size_prices?.length
      ? product.size_prices.find((sp) => sp.size === selectedSize) || null
      : null;

  const getBasePriceINR = (): number => getSizePriceObj()?.price_inr ?? product.price_inr;

  const getBasePrice = (): number => {
    const sp = getSizePriceObj();
    if (sp) return currency === "INR" ? sp.price_inr : currency === "USD" ? sp.price_usd : sp.price_eur;
    return currency === "INR" ? product.price_inr : currency === "USD" ? product.price_usd : product.price_eur;
  };

  const getAddonTotal = (): number =>
    (laserText.trim() ? ADDON_PRICES.laser_engraving : 0) +
    (threading ? ADDON_PRICES.threading : 0) +
    (extraGrip ? ADDON_PRICES.extra_grip : 0);

  const getTotalINR    = (): number => getBasePriceINR() + getAddonTotal();
  const advanceAmount  = getAdvanceAmount(getTotalINR());
  const pendingAmount  = getTotalINR() - advanceAmount;

  const originalPrice = getSizePriceObj()
    ? null
    : (currency === "INR" ? product.original_price_inr : currency === "USD" ? product.original_price_usd : product.original_price_eur);
  const hasDiscount   = originalPrice && getBasePrice() && originalPrice > getBasePrice();
  const discountPct   = hasDiscount ? Math.round(((originalPrice! - getBasePrice()) / originalPrice!) * 100) : 0;

  const getWeightOptions = (): string[] => {
    if (["Size 3", "Size 4"].includes(selectedSize)) return WEIGHT_OPTIONS["Size 3"];
    if (WEIGHT_OPTIONS[selectedSize]) return WEIGHT_OPTIONS[selectedSize];
    if (product.willow_type?.toLowerCase().includes("kashmir")) return WEIGHT_OPTIONS["Kashmir Willow"];
    if (product.willow_type?.toLowerCase().includes("english")) return WEIGHT_OPTIONS["English Willow"];
    return WEIGHT_OPTIONS["Kashmir Willow"];
  };

  const buildWhatsAppMessage = () => {
    const addons: string[] = [];
    if (laserText.trim()) addons.push(`Laser Engraving: "${laserText}" (+₹${ADDON_PRICES.laser_engraving})`);
    if (threading)        addons.push(`Threading (+₹${ADDON_PRICES.threading})`);
    if (extraGrip)        addons.push(`Extra Grip (+₹${ADDON_PRICES.extra_grip})`);
    return `Hi Cricface Team,\n\nI would like to order:\n\n🏏 Product: ${product.name}\n📐 Size: ${selectedSize || "Not selected"}\n⚖️ Weight: ${selectedWeight || "Not selected"}\n🖐 Handle: ${selectedHandle}\n📋 Profile: ${selectedProfile}\n${addons.length ? "✨ Add-ons:\n" + addons.map((a) => "  • " + a).join("\n") + "\n" : ""}\n💰 Base: ₹${getBasePriceINR().toLocaleString()}${getAddonTotal() > 0 ? `\n➕ Add-ons: ₹${getAddonTotal()}` : ""}\n💳 Total: ₹${getTotalINR().toLocaleString()}\n\nPlease confirm availability. Thank you.`;
  };

  const handleRazorpayPayment = async () => {
    if (!customerName.trim() || !customerPhone.trim() || !deliveryAddress.trim() || !pinCode.trim()) {
      alert("Please fill in all required fields including PIN code.");
      return;
    }
    setIsProcessing(true);
    const loaded = await loadRazorpay();
    if (!loaded) { alert("Failed to load Razorpay."); setIsProcessing(false); return; }

    try {
      const res = await fetch("/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_id: product.id, product_name: product.name,
          customer_name: customerName, customer_phone: customerPhone,
          customer_email: customerEmail, delivery_address: deliveryAddress,
          pin_code: pinCode,
          customization: { size: selectedSize, weight: selectedWeight, handle_shape: selectedHandle, profile: selectedProfile, laser_engraving: laserText, threading, extra_grip: extraGrip },
          base_price_inr: getBasePriceINR(), addon_price_inr: getAddonTotal(),
          total_price_inr: getTotalINR(), payment_type: paymentType,
        }),
      });
      const order = await res.json();
      if (!order.razorpay_order_id) { alert("Failed to create order. Please try again."); setIsProcessing(false); return; }

      const chargeAmount = paymentType === "advance" ? advanceAmount : getTotalINR();
      const rzp = new (window as any).Razorpay({
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: Math.round(chargeAmount * 100),
        currency: "INR",
        name: "Cricface",
        description: `${product.name}${paymentType === "advance" ? " (Advance)" : ""}`,
        order_id: order.razorpay_order_id,
        prefill: { name: customerName, contact: customerPhone, email: customerEmail },
        theme: { color: "#004d00" },
        handler: async (response: any) => {
          await fetch("/api/orders/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ order_id: order.id, razorpay_order_id: response.razorpay_order_id, razorpay_payment_id: response.razorpay_payment_id, razorpay_signature: response.razorpay_signature }),
          });
          setIsProcessing(false);
          setOrderSuccess(true);
          setShowOrderForm(false);
        },
        modal: { ondismiss: () => setIsProcessing(false) },
      });
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
      setIsProcessing(false);
    }
  };

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4">

        <Link to="/catalog" className="inline-flex items-center text-zinc-500 hover:text-gold mb-8 transition-colors">
          <ChevronLeft size={20} />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Collection</span>
        </Link>

        <div className="grid md:grid-cols-2 gap-12">

          {/* ── Images ── */}
          <div>
            {product.video && <video src={product.video} controls className="w-full rounded-2xl mb-6" />}
            <div className="rounded-2xl overflow-hidden mb-4 bg-zinc-100">
              <img src={selectedImage} className="w-full h-[450px] object-cover" alt={product.name} />
            </div>
            <div className="flex gap-3 overflow-x-auto pb-1">
              {product.images?.map((img, i) => (
                <img key={i} src={img} onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 flex-shrink-0 object-cover rounded-lg cursor-pointer border-2 transition-all ${selectedImage === img ? "border-gold scale-105" : "border-transparent opacity-60"}`} />
              ))}
            </div>
          </div>

          {/* ── Details ── */}
          <div className="space-y-6">
            {product.featured && <span className="inline-block bg-gold text-black text-xs px-3 py-1 rounded-full font-bold">Featured</span>}

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gold mb-1">{product.willow_type} • {product.grade}</p>
              <h1 className="text-3xl font-black text-zinc-900 mb-4">{product.name}</h1>
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <span className="text-3xl font-bold text-cricket-green">
                  {selectedSize && getSizePriceObj() ? `₹${getSizePriceObj()!.price_inr.toLocaleString()}` : formatPrice(product)}
                </span>
                {hasDiscount && !selectedSize && (
                  <>
                    <span className="text-zinc-400 line-through text-lg">{new Intl.NumberFormat(undefined, { style: "currency", currency }).format(originalPrice!)}</span>
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">{discountPct}% OFF</span>
                  </>
                )}
              </div>
              {getAddonTotal() > 0 && (
                <p className="text-sm text-zinc-500">+ ₹{getAddonTotal()} add-ons = <span className="font-bold text-zinc-900">₹{getTotalINR().toLocaleString()} total</span></p>
              )}
            </div>

            <p className="text-zinc-600">{product.description}</p>
            <div className="text-sm text-zinc-600 space-y-1">
              <div><strong>Willow:</strong> {product.willow_type}</div>
              <div><strong>Grade:</strong> {product.grade}</div>
            </div>

            {/* Customization */}
            <div className="bg-zinc-50 rounded-2xl p-6 space-y-5 border border-zinc-100">
              <h3 className="font-black text-zinc-900 text-lg">Customize Your Bat</h3>

              {/* Size */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                  Size {product.size_prices?.length ? <span className="text-gold">(price varies by size)</span> : ""}
                </label>
                <div className="flex flex-wrap gap-2">
                  {SIZES.map((size) => {
                    const sp = product.size_prices?.find((s) => s.size === size);
                    return (
                      <button key={size} onClick={() => { setSelectedSize(size); setSelectedWeight(""); }}
                        className={`px-4 py-2 rounded-xl text-sm font-bold border-2 transition-all ${selectedSize === size ? "border-cricket-green bg-cricket-green text-white" : "border-zinc-200 bg-white text-zinc-700 hover:border-gold"}`}>
                        {size}
                        {sp && <span className="block text-xs font-normal">₹{sp.price_inr.toLocaleString()}</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Weight */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Weight</label>
                <div className="flex flex-wrap gap-2">
                  {getWeightOptions().map((w) => (
                    <button key={w} onClick={() => setSelectedWeight(w)}
                      className={`px-3 py-2 rounded-xl text-sm font-bold border-2 transition-all ${selectedWeight === w ? "border-cricket-green bg-cricket-green text-white" : "border-zinc-200 bg-white text-zinc-700 hover:border-gold"}`}>
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              {/* Handle */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Handle Shape</label>
                <div className="flex gap-2 flex-wrap">
                  {HANDLE_SHAPES.map((h) => (
                    <button key={h} onClick={() => setSelectedHandle(h)}
                      className={`px-4 py-2 rounded-xl text-sm font-bold border-2 transition-all ${selectedHandle === h ? "border-cricket-green bg-cricket-green text-white" : "border-zinc-200 bg-white text-zinc-700 hover:border-gold"}`}>
                      {h}
                    </button>
                  ))}
                </div>
              </div>

              {/* Profile */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Profile</label>
                <div className="flex flex-wrap gap-2">
                  {PROFILES.map((p) => (
                    <button key={p} onClick={() => setSelectedProfile(p)}
                      className={`px-4 py-2 rounded-xl text-sm font-bold border-2 transition-all ${selectedProfile === p ? "border-cricket-green bg-cricket-green text-white" : "border-zinc-200 bg-white text-zinc-700 hover:border-gold"}`}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">Add-ons</label>
                <div className="space-y-3">
                  <div className="bg-white rounded-xl p-4 border border-zinc-200">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-bold">Laser Engraving</span>
                      <span className="text-xs text-gold font-bold">+₹{ADDON_PRICES.laser_engraving}</span>
                    </div>
                    <input type="text" placeholder="Enter text to engrave (leave blank to skip)"
                      value={laserText} onChange={(e) => setLaserText(e.target.value)} maxLength={30}
                      className="w-full px-3 py-2 bg-zinc-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/20" />
                  </div>
                  {[{ label: "Threading", desc: "Professional bat threading", state: threading, set: setThreading, price: ADDON_PRICES.threading },
                    { label: "Extra Grip", desc: "Premium quality extra grip", state: extraGrip, set: setExtraGrip, price: ADDON_PRICES.extra_grip }
                  ].map(({ label, desc, state, set, price }) => (
                    <div key={label} onClick={() => set(!state)}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${state ? "border-cricket-green bg-cricket-green/5" : "border-zinc-200 bg-white"}`}>
                      <div>
                        <p className="text-sm font-bold">{label}</p>
                        <p className="text-xs text-zinc-400">{desc}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gold font-bold">+₹{price}</span>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${state ? "bg-cricket-green border-cricket-green" : "border-zinc-300"}`}>
                          {state && <div className="w-2 h-2 bg-white rounded-full" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Specifications */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div>
                <h3 className="font-bold mb-3 text-zinc-900">Technical Specifications</h3>
                <div className="border border-zinc-100 rounded-2xl overflow-hidden">
                  {Object.entries(product.specifications).map(([k, v], idx) => (
                    <div key={k} className={`flex justify-between p-3 text-sm ${idx % 2 === 0 ? "bg-zinc-50" : "bg-white"}`}>
                      <span className="text-zinc-500">{k}</span>
                      <span className="font-bold text-zinc-900">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="space-y-3 pt-2">
              <button onClick={() => setShowOrderForm(true)}
                className="w-full bg-cricket-green hover:bg-cricket-green-dark text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-cricket-green/20">
                <ShoppingBag size={20} />
                <span>Buy Now — ₹{getTotalINR().toLocaleString()}</span>
              </button>
              <a href={getWhatsAppLink(buildWhatsAppMessage())} target="_blank" rel="noopener noreferrer"
                className="w-full border-2 border-cricket-green text-cricket-green hover:bg-cricket-green hover:text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-3">
                <MessageSquare size={20} />
                <span>Order via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Order Form Modal ── */}
      <AnimatePresence>
        {showOrderForm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setShowOrderForm(false)}>
            <motion.div initial={{ scale: 0.9, y: 40 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 40 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl my-8">

              <h2 className="text-2xl font-black mb-1">Complete Your Order</h2>
              <p className="text-zinc-400 text-sm mb-6">Fill in your details to proceed to payment</p>

              {/* Summary */}
              <div className="bg-zinc-50 rounded-xl p-4 mb-6 text-sm space-y-1">
                <div className="flex justify-between font-bold text-zinc-900">
                  <span>{product.name}</span><span>₹{getBasePriceINR().toLocaleString()}</span>
                </div>
                {selectedSize    && <div className="text-zinc-500">Size: {selectedSize}</div>}
                {selectedWeight  && <div className="text-zinc-500">Weight: {selectedWeight}</div>}
                {selectedHandle  && <div className="text-zinc-500">Handle: {selectedHandle}</div>}
                {selectedProfile && <div className="text-zinc-500">Profile: {selectedProfile}</div>}
                {laserText && <div className="flex justify-between text-zinc-500"><span>Laser Engraving</span><span>+₹{ADDON_PRICES.laser_engraving}</span></div>}
                {threading && <div className="flex justify-between text-zinc-500"><span>Threading</span><span>+₹{ADDON_PRICES.threading}</span></div>}
                {extraGrip && <div className="flex justify-between text-zinc-500"><span>Extra Grip</span><span>+₹{ADDON_PRICES.extra_grip}</span></div>}
                <div className="flex justify-between font-black text-cricket-green pt-2 border-t border-zinc-200 text-base">
                  <span>Total</span><span>₹{getTotalINR().toLocaleString()}</span>
                </div>
              </div>

              {/* Customer fields */}
              <div className="space-y-3 mb-6">
                <input required type="text" placeholder="Full Name *" value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/20" />
                <input required type="tel" placeholder="Phone Number *" value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/20" />
                <input type="email" placeholder="Email (for order confirmation)" value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/20" />
                <textarea required rows={3} placeholder="Full Delivery Address *" value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/20 resize-none" />
                <input required type="text" placeholder="PIN Code *" maxLength={6}
                  value={pinCode} onChange={(e) => setPinCode(e.target.value.replace(/\D/g, ""))}
                  className="w-full px-4 py-3 bg-zinc-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/20" />
              </div>

              {/* Payment type */}
              <div className="space-y-2 mb-5">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Payment Option</p>
                <div onClick={() => setPaymentType("full")}
                  className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentType === "full" ? "border-cricket-green bg-cricket-green/5" : "border-zinc-200 bg-white"}`}>
                  <div>
                    <p className="font-bold text-sm">Pay Full Amount</p>
                    <p className="text-xs text-zinc-400">Complete payment now</p>
                  </div>
                  <p className="font-black text-cricket-green">₹{getTotalINR().toLocaleString()}</p>
                </div>
                <div onClick={() => setPaymentType("advance")}
                  className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentType === "advance" ? "border-gold bg-gold/5" : "border-zinc-200 bg-white"}`}>
                  <div>
                    <p className="font-bold text-sm">Pay Advance</p>
                    <p className="text-xs text-zinc-400">₹{pendingAmount.toLocaleString()} remaining on delivery</p>
                  </div>
                  <p className="font-black text-gold">₹{advanceAmount.toLocaleString()}</p>
                </div>
              </div>

              <button onClick={handleRazorpayPayment} disabled={isProcessing}
                className="w-full bg-cricket-green text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 disabled:opacity-60 transition-all">
                {isProcessing ? <Loader2 size={20} className="animate-spin" /> : <ShoppingBag size={20} />}
                {isProcessing ? "Processing..." : paymentType === "advance" ? `Pay Advance ₹${advanceAmount.toLocaleString()}` : `Pay ₹${getTotalINR().toLocaleString()}`}
              </button>
              <p className="text-center text-xs text-zinc-400 mt-3">Secured by Razorpay • UPI, Cards, Net Banking accepted</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Success Modal ── */}
      <AnimatePresence>
        {orderSuccess && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              className="bg-white w-full max-w-sm rounded-3xl p-10 text-center shadow-2xl">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-2xl font-black mb-2">Order Placed!</h2>
              <p className="text-zinc-500 mb-2">
                Thank you <strong>{customerName}</strong>! Your order for <strong>{product.name}</strong> has been confirmed.
              </p>
              {paymentType === "advance" && (
                <p className="text-sm text-yellow-600 font-semibold mb-4">
                  ₹{pendingAmount.toLocaleString()} remaining will be collected on delivery.
                </p>
              )}
              <p className="text-zinc-400 text-sm mb-6">We'll contact you on <strong>{customerPhone}</strong> for delivery details.</p>
              <button onClick={() => setOrderSuccess(false)} className="w-full bg-cricket-green text-white font-bold py-3 rounded-2xl">
                Continue Shopping
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductDetail;