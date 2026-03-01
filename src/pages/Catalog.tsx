import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, MessageSquare, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { useCurrency } from '../context/CurrencyContext';
import { motion, AnimatePresence } from 'motion/react';
import { getWhatsAppLink, generateProductInquiryMessage } from '../lib/utils';

// const { formatPrice, currency } = useCurrency();

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { formatPrice } = useCurrency();

  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [willowFilter, setWillowFilter] = useState(searchParams.get('willow') || '');

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    let result = products;

    if (searchQuery) {
      result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if (willowFilter) {
      result = result.filter(p => p.willow_type === willowFilter);
    }

    setFilteredProducts(result);
  }, [searchQuery, willowFilter, products]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header & Filters */}
        <div className="mb-12">
          <h1 className="text-4xl font-display font-black text-zinc-900 mb-8">THE COLLECTION</h1>
          
          <div className="flex flex-col md:flex-row gap-4 items-center bg-white p-4 rounded-2xl shadow-sm border border-zinc-100 sticky top-24 z-30">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              <input
                type="text"
                placeholder="Search bats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zinc-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
              />
            </div>
            
            <div className="flex gap-2 w-full md:w-auto">
              <select
                value={willowFilter}
                onChange={(e) => setWillowFilter(e.target.value)}
                className="flex-1 md:w-48 px-4 py-3 bg-zinc-50 rounded-xl focus:outline-none cursor-pointer text-sm font-medium"
              >
                <option value="">All Willow Types</option>
                <option value="English Willow">English Willow</option>
                <option value="Kashmir Willow">Kashmir Willow</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-zinc-100">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-white/90 backdrop-blur-sm text-zinc-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {product.grade}
                    </span>
                  </div>
                </Link>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-display font-bold text-zinc-900 group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-zinc-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-50">
                    <span className="text-xl font-bold text-cricket-green">
                      {formatPrice({ price_inr: product.price_inr, price_usd: product.price_usd, price_eur: product.price_eur })}
                    </span>
                    <div className="flex gap-2">
                      <a
                        href={getWhatsAppLink(generateProductInquiryMessage(product.name, formatPrice({ price_inr: product.price_inr, price_usd: product.price_usd, price_eur: product.price_eur })))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-cricket-green text-white rounded-xl hover:bg-cricket-green-dark transition-colors"
                        title="Inquire on WhatsApp"
                      >
                        <MessageSquare size={18} />
                      </a>
                      <Link
                        to={`/product/${product.id}`}
                        className="p-3 bg-zinc-100 text-zinc-900 rounded-xl hover:bg-zinc-200 transition-colors"
                      >
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                  {/* <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-50">

  {(() => {
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
      <>
        <div className="flex flex-col">
          {hasDiscount && (
            <span className="text-xs text-zinc-400 line-through">
              {new Intl.NumberFormat(undefined, {
                style: "currency",
                currency,
              }).format(originalPrice!)}
            </span>
          )}

          <span className="text-xl font-bold text-cricket-green">
            {formatPrice(product)}
          </span>

          {hasDiscount && (
            <span className="text-xs font-bold text-red-600">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        <div className="flex gap-2">
          <a
            href={getWhatsAppLink(
              generateProductInquiryMessage(
                product.name,
                formatPrice(product)
              )
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-cricket-green text-white rounded-xl hover:bg-cricket-green-dark transition-colors"
          >
            <MessageSquare size={18} />
          </a>

          <Link
            to={`/product/${product.id}`}
            className="p-3 bg-zinc-100 text-zinc-900 rounded-xl hover:bg-zinc-200 transition-colors"
          >
            <ArrowRight size={18} />
          </Link>
        </div>
      </>
    );
  })()}

</div> */}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <p className="text-zinc-400 text-lg">No bats found matching your criteria.</p>
            <button
              onClick={() => { setSearchQuery(''); setWillowFilter(''); }}
              className="mt-4 text-gold font-bold underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;


// import React, { useState, useEffect } from "react";
// import { useSearchParams, Link } from "react-router-dom";
// import { Search, MessageSquare, ArrowRight } from "lucide-react";
// import { Product } from "../types";
// import { useCurrency } from "../context/CurrencyContext";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   getWhatsAppLink,
//   generateProductInquiryMessage,
// } from "../lib/utils";

// const Catalog = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [searchParams] = useSearchParams();
//   const { formatPrice, currency } = useCurrency();

//   const [searchQuery, setSearchQuery] = useState(
//     searchParams.get("q") || ""
//   );
//   const [willowFilter, setWillowFilter] = useState(
//     searchParams.get("willow") || ""
//   );

//   useEffect(() => {
//     fetch("/api/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setFilteredProducts(data);
//       });
//   }, []);

//   useEffect(() => {
//     let result = products;

//     if (searchQuery) {
//       result = result.filter((p) =>
//         p.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (willowFilter) {
//       result = result.filter(
//         (p) => p.willow_type === willowFilter
//       );
//     }

//     setFilteredProducts(result);
//   }, [searchQuery, willowFilter, products]);

//   const getPrices = (product: Product) => {
//     const sellingPrice =
//       currency === "INR"
//         ? product.price_inr
//         : currency === "USD"
//         ? product.price_usd
//         : product.price_eur;

//     const originalPrice =
//       currency === "INR"
//         ? product.original_price_inr
//         : currency === "USD"
//         ? product.original_price_usd
//         : product.original_price_eur;

//     const hasDiscount =
//       originalPrice &&
//       sellingPrice &&
//       originalPrice > sellingPrice;

//     const discountPercent = hasDiscount
//       ? Math.round(
//           ((originalPrice - sellingPrice) / originalPrice) * 100
//         )
//       : 0;

//     return { sellingPrice, originalPrice, hasDiscount, discountPercent };
//   };

//   return (
//     <div className="pt-32 pb-24 min-h-screen bg-zinc-50">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Header */}
//         <div className="mb-12">
//           <h1 className="text-4xl font-display font-black text-zinc-900 mb-8">
//             THE COLLECTION
//           </h1>

//           <div className="flex flex-col md:flex-row gap-4 items-center bg-white p-4 rounded-2xl shadow-sm border border-zinc-100 sticky top-24 z-30">
//             <div className="relative flex-1 w-full">
//               <Search
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
//                 size={18}
//               />
//               <input
//                 type="text"
//                 placeholder="Search bats..."
//                 value={searchQuery}
//                 onChange={(e) =>
//                   setSearchQuery(e.target.value)
//                 }
//                 className="w-full pl-12 pr-4 py-3 bg-zinc-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/20"
//               />
//             </div>

//             <select
//               value={willowFilter}
//               onChange={(e) =>
//                 setWillowFilter(e.target.value)
//               }
//               className="w-full md:w-48 px-4 py-3 bg-zinc-50 rounded-xl"
//             >
//               <option value="">All Willow Types</option>
//               <option value="English Willow">
//                 English Willow
//               </option>
//               <option value="Kashmir Willow">
//                 Kashmir Willow
//               </option>
//             </select>
//           </div>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <AnimatePresence>
//             {filteredProducts.map((product) => {
//               const {
//                 originalPrice,
//                 hasDiscount,
//                 discountPercent,
//               } = getPrices(product);

//               return (
//                 <motion.div
//                   key={product.id}
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-300 group relative"
//                 >
//                   {/* Discount Badge */}
//                   {hasDiscount && (
//                     <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
//                       {discountPercent}% OFF
//                     </div>
//                   )}

//                   {/* Limited Offer Ribbon */}
//                   {hasDiscount && product.featured && (
//                     <div className="absolute top-4 right-4 bg-black text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-wide z-10 animate-pulse">
//                       Limited Offer
//                     </div>
//                   )}

//                   <Link
//                     to={`/product/${product.id}`}
//                     className="block relative aspect-[4/5] overflow-hidden bg-zinc-100"
//                   >
//                     <img
//                       src={product.images[0]}
//                       alt={product.name}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                   </Link>

//                   <div className="p-6 flex flex-col h-full">
//                     <h3 className="text-xl font-display font-bold text-zinc-900 mb-2 group-hover:text-gold transition-colors">
//                       {product.name}
//                     </h3>

//                     <p className="text-zinc-500 text-sm mb-4 line-clamp-2">
//                       {product.description}
//                     </p>

//                     <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">

//                       <div>
//                         {hasDiscount && (
//                           <div className="text-xs line-through text-zinc-400">
//                             {new Intl.NumberFormat(undefined, {
//                               style: "currency",
//                               currency,
//                             }).format(originalPrice!)}
//                           </div>
//                         )}

//                         <div className="text-xl font-bold text-cricket-green">
//                           {formatPrice(product)}
//                         </div>
//                       </div>

//                       <div className="flex gap-2">
//                         <a
//                           href={getWhatsAppLink(
//                             generateProductInquiryMessage(
//                               product.name,
//                               formatPrice(product)
//                             )
//                           )}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="p-3 bg-cricket-green text-white rounded-xl hover:bg-green-700 transition"
//                         >
//                           <MessageSquare size={18} />
//                         </a>

//                         <Link
//                           to={`/product/${product.id}`}
//                           className="p-3 bg-zinc-100 text-zinc-900 rounded-xl hover:bg-zinc-200 transition"
//                         >
//                           <ArrowRight size={18} />
//                         </Link>
//                       </div>

//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </div>

//         {filteredProducts.length === 0 && (
//           <div className="text-center py-24">
//             <p className="text-zinc-400 text-lg">
//               No bats found matching your criteria.
//             </p>
//             <button
//               onClick={() => {
//                 setSearchQuery("");
//                 setWillowFilter("");
//               }}
//               className="mt-4 text-gold font-bold underline"
//             >
//               Clear all filters
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Catalog;

// import React, { useState, useEffect } from "react";
// import { useSearchParams, Link } from "react-router-dom";
// import { Search, MessageSquare, ArrowRight } from "lucide-react";
// import { Product } from "../types";
// import { useCurrency } from "../context/CurrencyContext";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   getWhatsAppLink,
//   generateProductInquiryMessage,
// } from "../lib/utils";

// const Catalog = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [searchParams] = useSearchParams();
//   const { currency } = useCurrency();

//   const [searchQuery, setSearchQuery] = useState(
//     searchParams.get("q") || ""
//   );
//   const [willowFilter, setWillowFilter] = useState(
//     searchParams.get("willow") || ""
//   );

//   useEffect(() => {
//     fetch("/api/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setFilteredProducts(data);
//       });
//   }, []);

//   useEffect(() => {
//     let result = products;

//     if (searchQuery) {
//       result = result.filter((p) =>
//         p.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (willowFilter) {
//       result = result.filter(
//         (p) => p.willow_type === willowFilter
//       );
//     }

//     setFilteredProducts(result);
//   }, [searchQuery, willowFilter, products]);

//   const getPrices = (product: Product) => {
//     const sellingPrice =
//       currency === "INR"
//         ? product.price_inr
//         : currency === "USD"
//         ? product.price_usd || product.price_inr
//         : product.price_eur || product.price_inr;

//     const originalPrice =
//       currency === "INR"
//         ? product.original_price_inr
//         : currency === "USD"
//         ? product.original_price_usd
//         : product.original_price_eur;

//     const hasDiscount =
//       originalPrice &&
//       sellingPrice &&
//       originalPrice > sellingPrice;

//     const discountPercent = hasDiscount
//       ? Math.round(
//           ((originalPrice - sellingPrice) / originalPrice) * 100
//         )
//       : 0;

//     return {
//       sellingPrice,
//       originalPrice,
//       hasDiscount,
//       discountPercent,
//     };
//   };

//   const formatCurrency = (amount: number) => {
//     return new Intl.NumberFormat(undefined, {
//       style: "currency",
//       currency,
//     }).format(amount);
//   };

//   return (
//     <div className="pt-32 pb-24 min-h-screen bg-zinc-50">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Header */}
//         <div className="mb-12">
//           <h1 className="text-4xl font-display font-black text-zinc-900 mb-8">
//             THE COLLECTION
//           </h1>

//           <div className="flex flex-col md:flex-row gap-4 items-center bg-white p-4 rounded-2xl shadow-sm border border-zinc-100 sticky top-24 z-30">
//             <div className="relative flex-1 w-full">
//               <Search
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
//                 size={18}
//               />
//               <input
//                 type="text"
//                 placeholder="Search bats..."
//                 value={searchQuery}
//                 onChange={(e) =>
//                   setSearchQuery(e.target.value)
//                 }
//                 className="w-full pl-12 pr-4 py-3 bg-zinc-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/20"
//               />
//             </div>

//             <select
//               value={willowFilter}
//               onChange={(e) =>
//                 setWillowFilter(e.target.value)
//               }
//               className="w-full md:w-48 px-4 py-3 bg-zinc-50 rounded-xl"
//             >
//               <option value="">All Willow Types</option>
//               <option value="English Willow">
//                 English Willow
//               </option>
//               <option value="Kashmir Willow">
//                 Kashmir Willow
//               </option>
//             </select>
//           </div>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <AnimatePresence>
//             {filteredProducts.map((product) => {
//               const {
//                 sellingPrice,
//                 originalPrice,
//                 hasDiscount,
//                 discountPercent,
//               } = getPrices(product);

//               return (
//                 <motion.div
//                   key={product.id}
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-300 group relative"
//                 >
//                   {/* Discount Badge */}
//                   {hasDiscount && (
//                     <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
//                       {discountPercent}% OFF
//                     </div>
//                   )}

//                   {/* Limited Offer Ribbon */}
//                   {hasDiscount && product.featured && (
//                     <div className="absolute top-4 right-4 bg-black text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-wide z-10 animate-pulse">
//                       Limited Offer
//                     </div>
//                   )}

//                   <Link
//                     to={`/product/${product.id}`}
//                     className="block relative aspect-[4/5] overflow-hidden bg-zinc-100"
//                   >
//                     <img
//                       src={product.images?.[0] || "/placeholder.png"}
//                       alt={product.name}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                   </Link>

//                   <div className="p-6 flex flex-col h-full">
//                     <h3 className="text-xl font-display font-bold text-zinc-900 mb-2 group-hover:text-gold transition-colors">
//                       {product.name}
//                     </h3>

//                     <p className="text-zinc-500 text-sm mb-4 line-clamp-2">
//                       {product.description}
//                     </p>

//                     <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">

//                       <div>
//                         {hasDiscount && originalPrice && (
//                           <div className="text-xs line-through text-zinc-400">
//                             {formatCurrency(originalPrice)}
//                           </div>
//                         )}

//                         <div className="text-xl font-bold text-cricket-green">
//                           {sellingPrice
//                             ? formatCurrency(sellingPrice)
//                             : "—"}
//                         </div>
//                       </div>

//                       <div className="flex gap-2">
//                         <a
//                           href={getWhatsAppLink(
//                             generateProductInquiryMessage(
//                               product.name,
//                               sellingPrice
//                                 ? formatCurrency(sellingPrice)
//                                 : ""
//                             )
//                           )}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="p-3 bg-cricket-green text-white rounded-xl hover:bg-green-700 transition"
//                         >
//                           <MessageSquare size={18} />
//                         </a>

//                         <Link
//                           to={`/product/${product.id}`}
//                           className="p-3 bg-zinc-100 text-zinc-900 rounded-xl hover:bg-zinc-200 transition"
//                         >
//                           <ArrowRight size={18} />
//                         </Link>
//                       </div>

//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </div>

//         {filteredProducts.length === 0 && (
//           <div className="text-center py-24">
//             <p className="text-zinc-400 text-lg">
//               No bats found matching your criteria.
//             </p>
//             <button
//               onClick={() => {
//                 setSearchQuery("");
//                 setWillowFilter("");
//               }}
//               className="mt-4 text-gold font-bold underline"
//             >
//               Clear all filters
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Catalog;



