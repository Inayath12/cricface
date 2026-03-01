// // // // // // // import React from 'react';
// // // // // // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // // // // // import { Autoplay, EffectCoverflow } from 'swiper/modules';
// // // // // // // import { Link } from 'react-router-dom';
// // // // // // // import { useCurrency } from '../context/CurrencyContext';
// // // // // // // import { Product } from '../types';
// // // // // // // import { motion } from 'motion/react';
// // // // // // // import { ArrowRight } from 'lucide-react';

// // // // // // // import 'swiper/css';
// // // // // // // import 'swiper/css/effect-coverflow';

// // // // // // // interface ProductRunwayProps {
// // // // // // //   products: Product[];
// // // // // // // }

// // // // // // // const ProductRunway: React.FC<ProductRunwayProps> = ({ products }) => {
// // // // // // //   const { formatPrice } = useCurrency();

// // // // // // //   return (
// // // // // // //     <section className="py-24 bg-[#1a1a1a] overflow-hidden">
// // // // // // //       <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
// // // // // // //         <motion.span
// // // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // // //           whileInView={{ opacity: 1, y: 0 }}
// // // // // // //           className="text-gold font-bold tracking-widest text-xs uppercase"
// // // // // // //         >
// // // // // // //           Signature Collection
// // // // // // //         </motion.span>
// // // // // // //         <motion.h2
// // // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // // //           whileInView={{ opacity: 1, y: 0 }}
// // // // // // //           transition={{ delay: 0.1 }}
// // // // // // //           className="text-4xl md:text-5xl font-display font-black text-white mt-4"
// // // // // // //         >
// // // // // // //           THE RUNWAY
// // // // // // //         </motion.h2>
// // // // // // //       </div>

// // // // // // //       <div className="relative">
// // // // // // //         <Swiper
// // // // // // //           modules={[Autoplay, EffectCoverflow]}
// // // // // // //           effect="coverflow"
// // // // // // //           grabCursor={true}
// // // // // // //           centeredSlides={true}
// // // // // // //           slidesPerView={'auto'}
// // // // // // //           loop={true}
// // // // // // //           speed={1000}
// // // // // // //           autoplay={{
// // // // // // //             delay: 3000,
// // // // // // //             disableOnInteraction: false,
// // // // // // //             pauseOnMouseEnter: true,
// // // // // // //           }}
// // // // // // //           coverflowEffect={{
// // // // // // //             rotate: 0,
// // // // // // //             stretch: 0,
// // // // // // //             depth: 100,
// // // // // // //             modifier: 2.5,
// // // // // // //             slideShadows: false,
// // // // // // //           }}
// // // // // // //           className="product-swiper !pb-20 !pt-10"
// // // // // // //         >
// // // // // // //           {products.map((product) => (
// // // // // // //             <SwiperSlide key={product.id} className="!w-[300px] md:!w-[400px]">
// // // // // // //               {({ isActive }) => (
// // // // // // //                 <div
// // // // // // //                   className={`relative transition-all duration-700 rounded-2xl overflow-hidden bg-white group ${
// // // // // // //                     isActive ? 'scale-125 z-10 shadow-[0_20px_50px_rgba(212,175,55,0.3)]' : 'scale-90 opacity-40 grayscale-[0.5]'
// // // // // // //                   }`}
// // // // // // //                 >
// // // // // // //                   <div className="aspect-[3/4] overflow-hidden bg-zinc-100">
// // // // // // //                     <img
// // // // // // //                       src={product.images[0]}
// // // // // // //                       alt={product.name}
// // // // // // //                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// // // // // // //                     />
// // // // // // //                     <div className="absolute top-4 right-4 bg-cricket-green text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
// // // // // // //                       {product.grade}
// // // // // // //                     </div>
// // // // // // //                   </div>
                  
// // // // // // //                   <div className="p-6 text-center">
// // // // // // //                     <h3 className="text-xl font-display font-bold text-zinc-900 mb-1">
// // // // // // //                       {product.name}
// // // // // // //                     </h3>
// // // // // // //                     <p className="text-gold font-bold text-lg mb-4">
// // // // // // //                       {formatPrice({ price_inr: product.price_inr, price_usd: product.price_usd, price_eur: product.price_eur })}
// // // // // // //                     </p>
// // // // // // //                     <Link
// // // // // // //                       to={`/product/${product.id}`}
// // // // // // //                       className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-cricket-green hover:text-gold transition-colors"
// // // // // // //                     >
// // // // // // //                       <span>View Details</span>
// // // // // // //                       <ArrowRight size={14} />
// // // // // // //                     </Link>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               )}
// // // // // // //             </SwiperSlide>
// // // // // // //           ))}
// // // // // // //         </Swiper>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ProductRunway;


// // // // // // // import { motion } from "motion/react";
// // // // // // // import { Product } from "../types";
// // // // // // // import { Link } from "react-router-dom";
// // // // // // // import { useCurrency } from "../context/CurrencyContext";

// // // // // // // interface Props {
// // // // // // //   products: Product[];
// // // // // // // }

// // // // // // // const ProductRunway = ({ products }: Props) => {
// // // // // // //   const { formatPrice } = useCurrency();

// // // // // // //   if (!products || products.length === 0) return null;

// // // // // // //   return (
// // // // // // //     <section className="py-20 bg-zinc-50 overflow-hidden">
// // // // // // //       <div className="max-w-7xl mx-auto px-4 mb-12">
// // // // // // //         <h2 className="text-3xl md:text-4xl font-display font-black text-center">
// // // // // // //           Featured Collection
// // // // // // //         </h2>
// // // // // // //       </div>

// // // // // // //       <motion.div
// // // // // // //         animate={{ x: ["0%", "-50%"] }}
// // // // // // //         transition={{
// // // // // // //           repeat: Infinity,
// // // // // // //           repeatType: "loop",
// // // // // // //           duration: 30,
// // // // // // //           ease: "linear",
// // // // // // //         }}
// // // // // // //         className="flex gap-8 w-max px-4"
// // // // // // //       >
// // // // // // //         {[...products, ...products].map((product, index) => (
// // // // // // //           <Link
// // // // // // //             to={`/product/${product.id}`}
// // // // // // //             key={`${product.id}-${index}`}
// // // // // // //             className="min-w-[280px] bg-white rounded-3xl shadow-md hover:shadow-xl transition-all overflow-hidden group"
// // // // // // //           >
// // // // // // //             <div className="h-64 overflow-hidden">
// // // // // // //               <img
// // // // // // //                 src={product.image}
// // // // // // //                 alt={product.name}
// // // // // // //                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// // // // // // //               />
// // // // // // //             </div>

// // // // // // //             <div className="p-6 text-center">
// // // // // // //               <h3 className="text-lg font-display font-bold mb-2">
// // // // // // //                 {product.name}
// // // // // // //               </h3>
// // // // // // //               <p className="text-gold font-semibold text-lg">
// // // // // // //                 {formatPrice(product)}
// // // // // // //               </p>
// // // // // // //             </div>
// // // // // // //           </Link>
// // // // // // //         ))}
// // // // // // //       </motion.div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ProductRunway;


// // // // // // import { motion, useAnimation } from "framer-motion";
// // // // // // import { useEffect } from "react";
// // // // // // import { Product } from "../types";
// // // // // // import { Link } from "react-router-dom";
// // // // // // import { useCurrency } from "../context/CurrencyContext";

// // // // // // interface Props {
// // // // // //   products: Product[];
// // // // // // }

// // // // // // const ProductRunway = ({ products }: Props) => {
// // // // // //   const { formatPrice } = useCurrency();
// // // // // //   const controls = useAnimation();

// // // // // //   useEffect(() => {
// // // // // //     controls.start({
// // // // // //       x: ["0%", "-50%"],
// // // // // //       transition: {
// // // // // //         repeat: Infinity,
// // // // // //         repeatType: "loop",
// // // // // //         duration: 30,
// // // // // //         ease: "linear",
// // // // // //       },
// // // // // //     });
// // // // // //   }, [controls]);

// // // // // //   if (!products || products.length === 0) return null;

// // // // // //   return (
// // // // // //     <section className="py-20 bg-zinc-50 overflow-hidden">
// // // // // //       <div className="max-w-7xl mx-auto px-4 mb-12">
// // // // // //         <h2 className="text-3xl md:text-4xl font-display font-black text-center">
// // // // // //           Featured Collection
// // // // // //         </h2>
// // // // // //       </div>

// // // // // //       <motion.div
// // // // // //         animate={controls}
// // // // // //         onHoverStart={() => controls.stop()}
// // // // // //         onHoverEnd={() =>
// // // // // //           controls.start({
// // // // // //             x: ["0%", "-50%"],
// // // // // //             transition: {
// // // // // //               repeat: Infinity,
// // // // // //               repeatType: "loop",
// // // // // //               duration: 30,
// // // // // //               ease: "linear",
// // // // // //             },
// // // // // //           })
// // // // // //         }
// // // // // //         className="flex gap-8 w-max px-4"
// // // // // //       >
// // // // // //         {[...products, ...products].map((product, index) => (
// // // // // //           <Link
// // // // // //             to={`/product/${product.id}`}
// // // // // //             key={`${product.id}-${index}`}
// // // // // //             className="min-w-[280px] bg-white rounded-3xl shadow-md hover:shadow-xl transition-all overflow-hidden group"
// // // // // //           >
// // // // // //             <div className="h-64 overflow-hidden">
// // // // // //               <img
// // // // // //                 src={product.image}
// // // // // //                 alt={product.name}
// // // // // //                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// // // // // //               />
// // // // // //             </div>

// // // // // //             <div className="p-6 text-center">
// // // // // //               <h3 className="text-lg font-display font-bold mb-2">
// // // // // //                 {product.name}
// // // // // //               </h3>
// // // // // //               <p className="text-gold font-semibold text-lg">
// // // // // //                 {formatPrice(product)}
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </Link>
// // // // // //         ))}
// // // // // //       </motion.div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default ProductRunway;


// // // // // import { motion, useAnimation } from "framer-motion";
// // // // // import { useEffect, useRef } from "react";
// // // // // import { Product } from "../types";
// // // // // import { Link } from "react-router-dom";
// // // // // import { useCurrency } from "../context/CurrencyContext";

// // // // // interface Props {
// // // // //   products: Product[];
// // // // // }

// // // // // const ProductRunway = ({ products }: Props) => {
// // // // //   const { formatPrice } = useCurrency();
// // // // //   const controls = useAnimation();
// // // // //   const containerRef = useRef<HTMLDivElement>(null);

// // // // //   const startAnimation = () => {
// // // // //     controls.start({
// // // // //       x: ["0%", "-50%"],
// // // // //       transition: {
// // // // //         repeat: Infinity,
// // // // //         repeatType: "loop",
// // // // //         duration: 30,
// // // // //         ease: "linear",
// // // // //       },
// // // // //     });
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     startAnimation();
// // // // //   }, []);

// // // // //   if (!products || products.length === 0) return null;

// // // // //   return (
// // // // //     <section className="py-16 bg-zinc-50 overflow-hidden">
// // // // //       <div className="max-w-7xl mx-auto px-4 mb-12">
// // // // //         <h2 className="text-3xl md:text-4xl font-display font-black text-center">
// // // // //           Featured Collection
// // // // //         </h2>
// // // // //       </div>

// // // // //       <div className="overflow-hidden cursor-grab active:cursor-grabbing">
// // // // //         <motion.div
// // // // //           ref={containerRef}
// // // // //           drag="x"
// // // // //           dragConstraints={{ left: -1000, right: 0 }}
// // // // //           dragElastic={0.1}
// // // // //           animate={controls}
// // // // //           onHoverStart={() => controls.stop()}
// // // // //           onHoverEnd={() => startAnimation()}
// // // // //           onDragStart={() => controls.stop()}
// // // // //           onDragEnd={() => startAnimation()}
// // // // //           className="flex gap-8 w-max px-4"
// // // // //         >
// // // // //           {[...products, ...products].map((product, index) => (
// // // // //             <Link
// // // // //               to={`/product/${product.id}`}
// // // // //               key={`${product.id}-${index}`}
// // // // //               className="min-w-[260px] bg-white rounded-3xl shadow-md hover:shadow-xl transition-all overflow-hidden group"
// // // // //             >
// // // // //               <div className="h-56 overflow-hidden">
// // // // //                 {/* <img
// // // // //                   src={product.images?.[0]}
// // // // //                   alt={product.name}
// // // // //                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// // // // //                 /> */}
// // // // //                 <img
// // // // //                   src={product.images && product.images.length > 0 ? product.images[0] : "/placeholder.png"}
// // // // //                   alt={product.name}
// // // // //                   className="w-full h-full object-cover"
// // // // //                 />
// // // // //               </div>

// // // // //               <div className="p-5 text-center">
// // // // //                 <h3 className="text-base font-display font-bold mb-2">
// // // // //                   {product.name}
// // // // //                 </h3>
// // // // //                 <p className="text-gold font-semibold text-lg">
// // // // //                   {formatPrice(product)}
// // // // //                 </p>
// // // // //               </div>
// // // // //             </Link>
// // // // //           ))}
// // // // //         </motion.div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default ProductRunway;


// // // // import { motion, useAnimation } from "framer-motion";
// // // // import { useEffect } from "react";
// // // // import { Product } from "../types";
// // // // import { Link } from "react-router-dom";
// // // // import { useCurrency } from "../context/CurrencyContext";

// // // // interface Props {
// // // //   products: Product[];
// // // // }

// // // // const ProductRunway = ({ products }: Props) => {
// // // //   const { formatPrice } = useCurrency();
// // // //   const controls = useAnimation();

// // // //   const startAnimation = () => {
// // // //     controls.start({
// // // //       x: ["0%", "-50%"],
// // // //       transition: {
// // // //         repeat: Infinity,
// // // //         repeatType: "loop",
// // // //         duration: 30,
// // // //         ease: "linear",
// // // //       },
// // // //     });
// // // //   };

// // // //   useEffect(() => {
// // // //     startAnimation();
// // // //   }, []);

// // // //   if (!products || products.length === 0) return null;

// // // //   return (
// // // //     <section className="py-20 bg-zinc-50">
// // // //       {/* Title */}
// // // //       <div className="max-w-7xl mx-auto px-4 mb-12">
// // // //         <h2 className="text-3xl md:text-4xl font-display font-black text-center">
// // // //           Featured Collection
// // // //         </h2>
// // // //       </div>

// // // //       {/* Scroll Container */}
// // // //       <div className="relative overflow-hidden">
// // // //         {/* Padding added to prevent shadow clipping */}
// // // //         <div className="py-6">
// // // //           <motion.div
// // // //             animate={controls}
// // // //             drag="x"
// // // //             dragConstraints={{ left: -2000, right: 0 }}
// // // //             dragElastic={0.1}
// // // //             onHoverStart={() => controls.stop()}
// // // //             onHoverEnd={() => startAnimation()}
// // // //             onDragStart={() => controls.stop()}
// // // //             onDragEnd={() => startAnimation()}
// // // //             className="flex gap-8 w-max px-4 cursor-grab active:cursor-grabbing"
// // // //           >
// // // //             {[...products, ...products].map((product, index) => (
// // // //               <Link
// // // //                 to={`/product/${product.id}`}
// // // //                 key={`${product.id}-${index}`}
// // // //                 className="min-w-[260px] bg-white rounded-3xl shadow-lg shadow-black/10 hover:shadow-xl transition-all duration-300 group"
// // // //               >
// // // //                 {/* Image */}
// // // //                 <div className="h-56 overflow-hidden rounded-t-3xl">
// // // //                   <img
// // // //                     src={
// // // //                       product.images && product.images.length > 0
// // // //                         ? product.images[0]
// // // //                         : "/placeholder.png"
// // // //                     }
// // // //                     alt={product.name}
// // // //                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// // // //                   />
// // // //                 </div>

// // // //                 {/* Content */}
// // // //                 <div className="p-5 text-center">
// // // //                   <h3 className="text-base font-display font-bold mb-2 text-zinc-900">
// // // //                     {product.name}
// // // //                   </h3>
// // // //                   <p className="text-gold font-semibold text-lg">
// // // //                     {formatPrice(product)}
// // // //                   </p>
// // // //                 </div>
// // // //               </Link>
// // // //             ))}
// // // //           </motion.div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default ProductRunway;


// // // import { motion, useAnimation } from "framer-motion";
// // // import { useEffect } from "react";
// // // import { Product } from "../types";
// // // import { Link } from "react-router-dom";
// // // import { useCurrency } from "../context/CurrencyContext";

// // // interface Props {
// // //   products: Product[];
// // // }

// // // const ProductRunway = ({ products }: Props) => {
// // //   const { formatPrice } = useCurrency();
// // //   const controls = useAnimation();

// // //   const startAnimation = () => {
// // //     controls.start({
// // //       x: ["0%", "-50%"],
// // //       transition: {
// // //         repeat: Infinity,
// // //         repeatType: "loop",
// // //         duration: 35,
// // //         ease: "linear",
// // //       },
// // //     });
// // //   };

// // //   useEffect(() => {
// // //     startAnimation();
// // //   }, []);

// // //   if (!products || products.length === 0) return null;

// // //   return (
// // //     <section className="py-16 md:py-20 bg-zinc-50">
// // //       {/* Title */}
// // //       <div className="max-w-7xl mx-auto px-4 mb-8 md:mb-12">
// // //         <h2 className="text-2xl md:text-4xl font-display font-black text-center">
// // //           Featured Collection
// // //         </h2>
// // //       </div>

// // //       {/* Scroll Container */}
// // //       <div className="relative overflow-hidden">
// // //         <div className="py-4">
// // //           <motion.div
// // //             animate={controls}
// // //             drag="x"
// // //             dragConstraints={{ left: -2000, right: 0 }}
// // //             dragElastic={0.1}
// // //             onHoverStart={() => controls.stop()}
// // //             onHoverEnd={() => startAnimation()}
// // //             onDragStart={() => controls.stop()}
// // //             onDragEnd={() => startAnimation()}
// // //             className="flex gap-4 md:gap-8 w-max px-4 md:px-8 cursor-grab active:cursor-grabbing"
// // //           >
// // //             {[...products, ...products].map((product, index) => (
// // //               // <Link
// // //               //   to={`/product/${product.id}`}
// // //               //   key={`${product.id}-${index}`}
// // //               //   className="min-w-[220px] sm:min-w-[240px] md:min-w-[260px] bg-white rounded-2xl md:rounded-3xl shadow-md md:shadow-lg hover:shadow-xl transition-all duration-300 group"
// // //               // >
// // //               //   {/* Image */}
// // //               //   <div className="h-44 sm:h-48 md:h-56 overflow-hidden rounded-t-2xl md:rounded-t-3xl">
// // //               //     <img
// // //               //       src={
// // //               //         product.images && product.images.length > 0
// // //               //           ? product.images[0]
// // //               //           : "/placeholder.png"
// // //               //       }
// // //               //       alt={product.name}
// // //               //       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// // //               //     />
// // //               //   </div>

// // //               //   {/* Content */}
// // //               //   <div className="p-4 md:p-5 text-center">
// // //               //     <h3 className="text-sm md:text-base font-display font-bold mb-2 text-zinc-900">
// // //               //       {product.name}
// // //               //     </h3>
// // //               //     <p className="text-gold font-semibold text-base md:text-lg">
// // //               //       {formatPrice(product)}
// // //               //     </p>
// // //               //   </div>
// // //               // </Link>
// // //               <Link
// // //   to={`/product/${product.id}`}
// // //   key={`${product.id}-${index}`}
// // //   className="min-w-[60px] sm:min-w-[200px] md:min-w-[260px] 
// // //              bg-white rounded-2xl md:rounded-3xl 
// // //              shadow-md md:shadow-lg hover:shadow-xl 
// // //              transition-all duration-300 group"
// // // >
// // //   {/* Image */}
// // //   <div className="h-180 sm:h-72 md:h-56 overflow-hidden rounded-t-2xl md:rounded-t-3xl">
// // //     <img
// // //       src={
// // //         product.images && product.images.length > 0
// // //           ? product.images[0]
// // //           : "/placeholder.png"
// // //       }
// // //       alt={product.name}
// // //       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// // //     />
// // //   </div>

// // //   {/* Content */}
// // //   <div className="p-3 md:p-5 text-center">
// // //     <h3 className="text-xs sm:text-sm md:text-base font-display font-bold mb-2 text-zinc-900">
// // //       {product.name}
// // //     </h3>
// // //     <p className="text-gold font-semibold text-sm md:text-lg">
// // //       {formatPrice(product)}
// // //     </p>
// // //   </div>
// // // </Link>
// // //             ))}
// // //           </motion.div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ProductRunway;

// // import { motion, useAnimation } from "framer-motion";
// // import { useEffect, useRef, useState } from "react";
// // import { Product } from "../types";
// // import { Link } from "react-router-dom";
// // import { useCurrency } from "../context/CurrencyContext";
// // import { ChevronLeft, ChevronRight } from "lucide-react";

// // interface Props {
// //   products: Product[];
// // }

// // const ProductRunway = ({ products }: Props) => {
// //   const { formatPrice } = useCurrency();
// //   const controls = useAnimation();
// //   const scrollRef = useRef<HTMLDivElement>(null);
// //   const [activeIndex, setActiveIndex] = useState(0);

// //   const isMobile =
// //     typeof window !== "undefined" && window.innerWidth < 768;

// //   const startAnimation = () => {
// //     controls.start({
// //       x: ["0%", "-50%"],
// //       transition: {
// //         repeat: Infinity,
// //         repeatType: "loop",
// //         duration: 35,
// //         ease: "linear",
// //       },
// //     });
// //   };

// //   useEffect(() => {
// //     if (!isMobile) startAnimation();
// //   }, []);

// //   if (!products || products.length === 0) return null;

// //   const scroll = (direction: "left" | "right") => {
// //     if (!scrollRef.current) return;
// //     const cardWidth = 180; // mobile card width
// //     const gap = 12;
// //     const scrollAmount = cardWidth + gap;

// //     scrollRef.current.scrollBy({
// //       left: direction === "left" ? -scrollAmount : scrollAmount,
// //       behavior: "smooth",
// //     });
// //   };

// //   const handleScroll = () => {
// //     if (!scrollRef.current) return;
// //     const scrollLeft = scrollRef.current.scrollLeft;
// //     const cardWidth = 180 + 12;
// //     const index = Math.round(scrollLeft / cardWidth);
// //     setActiveIndex(index);
// //   };

// //   return (
// //     <section className="py-16 md:py-20 bg-zinc-50">
// //       <div className="max-w-7xl mx-auto px-4 mb-8 md:mb-12">
// //         <h2 className="text-2xl md:text-4xl font-display font-black text-center">
// //           Featured Collection
// //         </h2>
// //       </div>

// //       <div className="relative">

// //         {isMobile ? (
// //           <>
// //             {/* Swipe Hint */}
// //             <p className="text-center text-xs text-zinc-400 mb-4">
// //               Swipe →
// //             </p>

// //             {/* Left Arrow */}
// //             <button
// //               onClick={() => scroll("left")}
// //               className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
// //             >
// //               <ChevronLeft size={18} />
// //             </button>

// //             {/* Right Arrow */}
// //             <button
// //               onClick={() => scroll("right")}
// //               className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
// //             >
// //               <ChevronRight size={18} />
// //             </button>

// //             {/* Scrollable Row */}
// //             <div
// //               ref={scrollRef}
// //               onScroll={handleScroll}
// //               className="flex gap-3 overflow-x-auto px-6 snap-x snap-mandatory scroll-smooth scrollbar-hide"
// //             >
// //               {products.map((product, index) => (
// //                 <Link
// //                   key={product.id}
// //                   to={`/product/${product.id}`}
// //                   className="min-w-[170px] snap-start bg-white rounded-2xl shadow-md"
// //                 >
// //                   <div className="h-72 overflow-hidden rounded-t-2xl">
// //                     <img
// //                       src={product.images?.[0] || "/placeholder.png"}
// //                       alt={product.name}
// //                       className="w-full h-full object-cover"
// //                     />
// //                   </div>

// //                   <div className="p-3 text-center">
// //                     <h3 className="text-sm font-bold mb-1">
// //                       {product.name}
// //                     </h3>
// //                     <p className="text-gold font-semibold text-sm">
// //                       {formatPrice(product)}
// //                     </p>
// //                   </div>
// //                 </Link>
// //               ))}
// //             </div>

// //             {/* Dots */}
// //             <div className="flex justify-center gap-2 mt-4">
// //               {products.map((_, index) => (
// //                 <div
// //                   key={index}
// //                   className={`h-2 w-2 rounded-full transition-all ${
// //                     index === activeIndex
// //                       ? "bg-black"
// //                       : "bg-zinc-300"
// //                   }`}
// //                 />
// //               ))}
// //             </div>
// //           </>
// //         ) : (
// //           // Desktop Auto Scroll
// //           <div className="overflow-hidden py-6">
// //             <motion.div
// //               animate={controls}
// //               drag="x"
// //               dragConstraints={{ left: -2000, right: 0 }}
// //               dragElastic={0.1}
// //               onHoverStart={() => controls.stop()}
// //               onHoverEnd={() => startAnimation()}
// //               onDragStart={() => controls.stop()}
// //               onDragEnd={() => startAnimation()}
// //               className="flex gap-8 w-max px-4 cursor-grab active:cursor-grabbing"
// //             >
// //               {[...products, ...products].map((product, index) => (
// //                 <Link
// //                   key={`${product.id}-${index}`}
// //                   to={`/product/${product.id}`}
// //                   className="min-w-[260px] bg-white rounded-3xl shadow-lg shadow-black/10 hover:shadow-xl transition-all duration-300 group"
// //                 >
// //                   <div className="h-56 overflow-hidden rounded-t-3xl">
// //                     <img
// //                       src={product.images?.[0] || "/placeholder.png"}
// //                       alt={product.name}
// //                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// //                     />
// //                   </div>

// //                   <div className="p-5 text-center">
// //                     <h3 className="text-base font-bold mb-2 text-zinc-900">
// //                       {product.name}
// //                     </h3>
// //                     <p className="text-gold font-semibold text-lg">
// //                       {formatPrice(product)}
// //                     </p>
// //                   </div>
// //                 </Link>
// //               ))}
// //             </motion.div>
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // };

// // export default ProductRunway;


// //  ----------------------------------------------------------------------------------

// // import { Product } from "../types";
// // import { Link } from "react-router-dom";
// // import { useCurrency } from "../context/CurrencyContext";

// // interface Props {
// //   products: Product[];
// // }

// // const ProductRunway = ({ products }: Props) => {
// //   const { formatPrice } = useCurrency();

// //   if (!products?.length) return null;

// //   const featuredProducts = products.filter((p) => p.featured);

// //   return (
// //     <section className="py-20 bg-zinc-50">
// //       <div className="max-w-7xl mx-auto px-4 mb-12">
// //         <h2 className="text-3xl md:text-4xl font-black text-center">
// //           Featured Collection
// //         </h2>
// //       </div>

// //       <div className="overflow-x-auto">
// //         <div className="flex gap-6 px-4 pb-4">

// //           {featuredProducts.map((product) => {
// //             const discount =
// //               product.original_price_inr && product.price_inr
// //                 ? Math.round(
// //                     ((product.original_price_inr - product.price_inr) /
// //                       product.original_price_inr) *
// //                       100
// //                   )
// //                 : 0;

// //             return (
// //               <Link
// //                 to={`/product/${product.id}`}
// //                 key={product.id}
// //                 className="min-w-[220px] sm:min-w-[260px] bg-white rounded-3xl shadow-lg group relative"
// //               >

// //                 {/* BADGES */}
// //                 <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
// //                   {discount > 0 && (
// //                     <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
// //                       {discount}% OFF
// //                     </span>
// //                   )}
// //                   <span className="bg-gold text-black text-xs px-2 py-1 rounded">
// //                     Featured
// //                   </span>
// //                 </div>

// //                 <div className="h-72 sm:h-80 overflow-hidden rounded-t-3xl">
// //                   <img
// //                     src={product.images?.[0] || "/placeholder.png"}
// //                     className="w-full h-full object-cover group-hover:scale-105 transition"
// //                   />
// //                 </div>

// //                 <div className="p-5 text-center">
// //                   <h3 className="text-base font-bold mb-2">
// //                     {product.name}
// //                   </h3>

// //                   <div className="flex justify-center items-center gap-3">
// //                     <span className="text-gold font-semibold text-lg">
// //                       {formatPrice(product)}
// //                     </span>

// //                     {product.original_price_inr && (
// //                       <span className="text-zinc-400 line-through text-sm">
// //                         ₹{product.original_price_inr.toLocaleString()}
// //                       </span>
// //                     )}
// //                   </div>
// //                 </div>
// //               </Link>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ProductRunway;

// // ---------------------------------------------------------------------

// // import { motion, useAnimation } from "framer-motion";
// // import { useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import { Product } from "../types";
// // import { useCurrency } from "../context/CurrencyContext";

// // interface Props {
// //   products: Product[];
// // }

// // const ProductRunway = ({ products }: Props) => {
// //   const controls = useAnimation();
// //   const { formatPrice } = useCurrency();

// //   useEffect(() => {
// //     controls.start({
// //       x: ["0%", "-50%"],
// //       transition: {
// //         repeat: Infinity,
// //         repeatType: "loop",
// //         duration: 30,
// //         ease: "linear",
// //       },
// //     });
// //   }, []);

// //   if (!products || products.length === 0) return null;

// //   const featuredProducts = products.filter((p) => p.featured);

// //   if (featuredProducts.length === 0) return null;

// //   return (
// //     <section className="py-16 bg-zinc-50 overflow-x-hidden">
// //       {/* Title */}
// //       <div className="max-w-7xl mx-auto px-4 mb-12">
// //         <h2 className="text-3xl md:text-4xl font-display font-black text-center">
// //           Featured Collection
// //         </h2>
// //       </div>

// //       {/* Scroll Container */}
// //       <div className="relative w-full overflow-hidden">

// //         {/* Fade Left */}
// //         <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />

// //         {/* Fade Right */}
// //         <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />

// //         <motion.div
// //           animate={controls}
// //           className="flex gap-6 w-max px-4"
// //           onHoverStart={() => controls.stop()}
// //           onHoverEnd={() =>
// //             controls.start({
// //               x: ["0%", "-50%"],
// //               transition: {
// //                 repeat: Infinity,
// //                 repeatType: "loop",
// //                 duration: 30,
// //                 ease: "linear",
// //               },
// //             })
// //           }
// //         >
// //           {[...featuredProducts, ...featuredProducts].map((product, index) => {

// //             const hasDiscount =
// //               product.original_price_inr &&
// //               product.price_inr &&
// //               product.original_price_inr > product.price_inr;

// //             const discountPercent =
// //               hasDiscount
// //                 ? Math.round(
// //                     ((product.original_price_inr! - product.price_inr!) /
// //                       product.original_price_inr!) *
// //                       100
// //                   )
// //                 : 0;

// //             return (
// //               <Link
// //                 to={`/product/${product.id}`}
// //                 key={`${product.id}-${index}`}
// //                 className="min-w-[220px] sm:min-w-[260px] bg-white rounded-3xl shadow-lg shadow-black/10 hover:shadow-xl transition-all duration-300 group relative"
// //               >
// //                 {/* Discount Badge */}
// //                 {hasDiscount && (
// //                   <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full z-20">
// //                     {discountPercent}% OFF
// //                   </div>
// //                 )}

// //                 {/* Image */}
// //                 <div className="h-72 sm:h-56 overflow-hidden rounded-t-3xl">
// //                   <img
// //                     src={
// //                       product.images && product.images.length > 0
// //                         ? product.images[0]
// //                         : "/placeholder.png"
// //                     }
// //                     alt={product.name}
// //                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// //                   />
// //                 </div>

// //                 {/* Content */}
// //                 <div className="p-5 text-center">
// //                   <h3 className="text-sm font-display font-bold mb-2 text-zinc-900">
// //                     {product.name}
// //                   </h3>

// //                   <div className="flex flex-col items-center gap-1">
// //                     {hasDiscount && (
// //                       <span className="text-xs line-through text-zinc-400">
// //                         ₹{product.original_price_inr?.toLocaleString()}
// //                       </span>
// //                     )}

// //                     <span className="text-gold font-semibold text-lg">
// //                       {formatPrice(product)}
// //                     </span>
// //                   </div>
// //                 </div>
// //               </Link>
// //             );
// //           })}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ProductRunway;

// // import { motion, useAnimation } from "framer-motion";
// // import { useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import { Product } from "../types";
// // import { useCurrency } from "../context/CurrencyContext";

// // interface Props {
// //   products: Product[];
// // }

// // const ProductRunway = ({ products }: Props) => {
// //   const controls = useAnimation();
// //   const { formatPrice } = useCurrency();

// //   useEffect(() => {
// //     controls.start({
// //       x: "-50%",
// //       transition: {
// //         repeat: Infinity,
// //         repeatType: "loop",
// //         duration: 35,
// //         ease: "linear",
// //       },
// //     });
// //   }, []);

// //   if (!products || products.length === 0) return null;

// //   const featuredProducts = products.filter((p) => p.featured);
// //   if (featuredProducts.length === 0) return null;

// //   return (
// //     <section className="py-16 bg-zinc-50 overflow-hidden">
// //       {/* Title */}
// //       <div className="max-w-7xl mx-auto px-4 mb-10">
// //         <h2 className="text-3xl md:text-4xl font-display font-black text-center">
// //           Featured Collection
// //         </h2>
// //       </div>

// //       {/* Scroll Container */}
// //       <div className="relative overflow-hidden w-full">
// //         <motion.div
// //           animate={controls}
// //           className="flex gap-6 w-max px-4"
// //           onHoverStart={() => controls.stop()}
// //           onHoverEnd={() =>
// //             controls.start({
// //               x: "-50%",
// //               transition: {
// //                 repeat: Infinity,
// //                 repeatType: "loop",
// //                 duration: 35,
// //                 ease: "linear",
// //               },
// //             })
// //           }
// //         >
// //           {[...featuredProducts, ...featuredProducts].map((product, index) => {
// //             const hasDiscount =
// //               product.original_price_inr &&
// //               product.price_inr &&
// //               product.original_price_inr > product.price_inr;

// //             const discountPercent =
// //               hasDiscount
// //                 ? Math.round(
// //                     ((product.original_price_inr! - product.price_inr!) /
// //                       product.original_price_inr!) *
// //                       100
// //                   )
// //                 : 0;

// //             return (
// //               <Link
// //                 to={`/product/${product.id}`}
// //                 key={`${product.id}-${index}`}
// //                 className="min-w-[200px] sm:min-w-[240px] bg-white rounded-3xl shadow-lg shadow-black/10 hover:shadow-xl transition-all duration-300 group relative"
// //               >
// //                 {/* Discount Badge */}
// //                 {hasDiscount && (
// //                   <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full z-20">
// //                     {discountPercent}% OFF
// //                   </div>
// //                 )}

// //                 {/* Image */}
// //                 <div className="h-80 sm:h-60 overflow-hidden rounded-t-3xl">
// //                   <img
// //                     src={
// //                       product.images && product.images.length > 0
// //                         ? product.images[0]
// //                         : "/placeholder.png"
// //                     }
// //                     alt={product.name}
// //                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// //                   />
// //                 </div>

// //                 {/* Content */}
// //                 <div className="p-4 text-center">
// //                   <h3 className="text-sm font-display font-bold mb-2 text-zinc-900">
// //                     {product.name}
// //                   </h3>

// //                   <div className="flex flex-col items-center gap-1">
// //                     {hasDiscount && (
// //                       <span className="text-xs line-through text-zinc-400">
// //                         ₹{product.original_price_inr?.toLocaleString()}
// //                       </span>
// //                     )}

// //                     <span className="text-gold font-semibold text-lg">
// //                       {formatPrice(product)}
// //                     </span>
// //                   </div>
// //                 </div>
// //               </Link>
// //             );
// //           })}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ProductRunway;

// //  -----------------------------------------------------

// import { motion, useAnimation } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { Product } from "../types";
// import { Link } from "react-router-dom";
// import { useCurrency } from "../context/CurrencyContext";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// interface Props {
//   products: Product[];
// }

// const ProductRunway = ({ products }: Props) => {
//   const { formatPrice } = useCurrency();
//   const controls = useAnimation();
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const isMobile =
//     typeof window !== "undefined" && window.innerWidth < 768;

//   const startAnimation = () => {
//     controls.start({
//       x: ["0%", "-50%"],
//       transition: {
//         repeat: Infinity,
//         repeatType: "loop",
//         duration: 35,
//         ease: "linear",
//       },
//     });
//   };

//   useEffect(() => {
//     if (!isMobile) startAnimation();
//   }, []);

//   if (!products || products.length === 0) return null;

//   const featuredProducts = products.filter((p) => p.featured);

//   if (featuredProducts.length === 0) return null;

//   const scroll = (direction: "left" | "right") => {
//     if (!scrollRef.current) return;
//     const cardWidth = 180;
//     const gap = 12;
//     const scrollAmount = cardWidth + gap;

//     scrollRef.current.scrollBy({
//       left: direction === "left" ? -scrollAmount : scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   const handleScroll = () => {
//     if (!scrollRef.current) return;
//     const scrollLeft = scrollRef.current.scrollLeft;
//     const cardWidth = 180 + 12;
//     const index = Math.round(scrollLeft / cardWidth);
//     setActiveIndex(index);
//   };

//   return (
//     <section className="py-16 md:py-20 bg-zinc-50">
//       <div className="max-w-7xl mx-auto px-4 mb-8 md:mb-12">
//         <h2 className="text-2xl md:text-4xl font-display font-black text-center">
//           Featured Collection
//         </h2>
//       </div>

//       <div className="relative">

//         {isMobile ? (
//           <>
//             <p className="text-center text-xs text-zinc-400 mb-4">
//               Swipe →
//             </p>

//             <button
//               onClick={() => scroll("left")}
//               className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
//             >
//               <ChevronLeft size={18} />
//             </button>

//             <button
//               onClick={() => scroll("right")}
//               className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
//             >
//               <ChevronRight size={18} />
//             </button>

//             <div
//               ref={scrollRef}
//               onScroll={handleScroll}
//               className="flex gap-3 overflow-x-auto px-6 snap-x snap-mandatory scroll-smooth scrollbar-hide"
//             >
//               {featuredProducts.map((product, index) => {

//                 const hasDiscount =
//                   product.original_price_inr &&
//                   product.price_inr &&
//                   product.original_price_inr > product.price_inr;

//                 const discountPercent =
//                   hasDiscount
//                     ? Math.round(
//                         ((product.original_price_inr! - product.price_inr!) /
//                           product.original_price_inr!) *
//                           100
//                       )
//                     : 0;

//                 return (
//                   <Link
//                     key={product.id}
//                     to={`/product/${product.id}`}
//                     className="relative min-w-[170px] snap-start bg-white rounded-2xl shadow-md"
//                   >
//                     {hasDiscount && (
//                       <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
//                         {discountPercent}% OFF
//                       </div>
//                     )}

//                     <div className="h-72 overflow-hidden rounded-t-2xl">
//                       <img
//                         src={product.images?.[0] || "/placeholder.png"}
//                         alt={product.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>

//                     <div className="p-3 text-center">
//                       <h3 className="text-sm font-bold mb-1">
//                         {product.name}
//                       </h3>

//                       {hasDiscount && (
//                         <p className="text-xs line-through text-zinc-400">
//                           ₹{product.original_price_inr?.toLocaleString()}
//                         </p>
//                       )}

//                       <p className="text-gold font-semibold text-sm">
//                         {formatPrice(product)}
//                       </p>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </div>

//             <div className="flex justify-center gap-2 mt-4">
//               {featuredProducts.map((_, index) => (
//                 <div
//                   key={index}
//                   className={`h-2 w-2 rounded-full transition-all ${
//                     index === activeIndex
//                       ? "bg-black"
//                       : "bg-zinc-300"
//                   }`}
//                 />
//               ))}
//             </div>
//           </>
//         ) : (
//           <div className="overflow-hidden py-6">
//             <motion.div
//               animate={controls}
//               drag="x"
//               dragConstraints={{ left: -2000, right: 0 }}
//               dragElastic={0.1}
//               onHoverStart={() => controls.stop()}
//               onHoverEnd={() => startAnimation()}
//               onDragStart={() => controls.stop()}
//               onDragEnd={() => startAnimation()}
//               className="flex gap-8 w-max px-4 cursor-grab active:cursor-grabbing"
//             >
//               {[...featuredProducts, ...featuredProducts].map((product, index) => {

//                 const hasDiscount =
//                   product.original_price_inr &&
//                   product.price_inr &&
//                   product.original_price_inr > product.price_inr;

//                 const discountPercent =
//                   hasDiscount
//                     ? Math.round(
//                         ((product.original_price_inr! - product.price_inr!) /
//                           product.original_price_inr!) *
//                           100
//                       )
//                     : 0;

//                 return (
//                   <Link
//                     key={`${product.id}-${index}`}
//                     to={`/product/${product.id}`}
//                     className="relative min-w-[260px] bg-white rounded-3xl shadow-lg shadow-black/10 hover:shadow-xl transition-all duration-300 group"
//                   >
//                     {hasDiscount && (
//                       <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
//                         {discountPercent}% OFF
//                       </div>
//                     )}

//                     <div className="h-56 overflow-hidden rounded-t-3xl">
//                       <img
//                         src={product.images?.[0] || "/placeholder.png"}
//                         alt={product.name}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                       />
//                     </div>

//                     <div className="p-5 text-center">
//                       <h3 className="text-base font-bold mb-2 text-zinc-900">
//                         {product.name}
//                       </h3>

//                       {hasDiscount && (
//                         <p className="text-xs line-through text-zinc-400">
//                           ₹{product.original_price_inr?.toLocaleString()}
//                         </p>
//                       )}

//                       <p className="text-gold font-semibold text-lg">
//                         {formatPrice(product)}
//                       </p>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ProductRunway;


// import { motion, useAnimation } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { Product } from "../types";
// import { Link } from "react-router-dom";
// import { useCurrency } from "../context/CurrencyContext";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// interface Props {
//   products: Product[];
// }

// const ProductRunway = ({ products }: Props) => {
//   const { formatPrice, currency } = useCurrency();
//   const controls = useAnimation();
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const isMobile =
//     typeof window !== "undefined" && window.innerWidth < 768;

//   const startAnimation = () => {
//     controls.start({
//       x: ["0%", "-50%"],
//       transition: {
//         repeat: Infinity,
//         repeatType: "loop",
//         duration: 35,
//         ease: "linear",
//       },
//     });
//   };

//   useEffect(() => {
//     if (!isMobile) startAnimation();
//   }, []);

//   if (!products || products.length === 0) return null;

//   const featuredProducts = products.filter((p) => p.featured);
//   if (featuredProducts.length === 0) return null;

//   const scroll = (direction: "left" | "right") => {
//     if (!scrollRef.current) return;
//     const cardWidth = 180;
//     const gap = 12;
//     const scrollAmount = cardWidth + gap;

//     scrollRef.current.scrollBy({
//       left: direction === "left" ? -scrollAmount : scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   const handleScroll = () => {
//     if (!scrollRef.current) return;
//     const scrollLeft = scrollRef.current.scrollLeft;
//     const cardWidth = 180 + 12;
//     const index = Math.round(scrollLeft / cardWidth);
//     setActiveIndex(index);
//   };

//   return (
//     <section className="py-16 md:py-20 bg-zinc-50">
//       <div className="max-w-7xl mx-auto px-4 mb-8 md:mb-12">
//         <h2 className="text-2xl md:text-4xl font-display font-black text-center">
//           Featured Collection
//         </h2>
//       </div>

//       <div className="relative">

//         {isMobile ? (
//           <>
//             <p className="text-center text-xs text-zinc-400 mb-4">
//               Swipe →
//             </p>

//             <button
//               onClick={() => scroll("left")}
//               className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
//             >
//               <ChevronLeft size={18} />
//             </button>

//             <button
//               onClick={() => scroll("right")}
//               className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
//             >
//               <ChevronRight size={18} />
//             </button>

//             <div
//               ref={scrollRef}
//               onScroll={handleScroll}
//               className="flex gap-3 overflow-x-auto px-6 snap-x snap-mandatory scroll-smooth scrollbar-hide"
//             >
//               {featuredProducts.map((product, index) => {

//                 const isINR = currency === "INR";
//                 const originalPrice = product.original_price_inr;
//                 const sellingPrice = product.price_inr;

//                 const hasDiscount =
//                   isINR &&
//                   originalPrice &&
//                   sellingPrice &&
//                   originalPrice > sellingPrice;

//                 const discountPercent = hasDiscount
//                   ? Math.round(
//                       ((originalPrice - sellingPrice) / originalPrice) * 100
//                     )
//                   : 0;

//                 return (
//                   <Link
//                     key={product.id}
//                     to={`/product/${product.id}`}
//                     className="relative min-w-[170px] snap-start bg-white rounded-2xl shadow-md"
//                   >
//                     {hasDiscount && (
//                       <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
//                         {discountPercent}% OFF
//                       </div>
//                     )}

//                     <div className="h-72 overflow-hidden rounded-t-2xl">
//                       <img
//                         src={product.images?.[0] || "/placeholder.png"}
//                         alt={product.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>

//                     <div className="p-3 text-center">
//                       <h3 className="text-sm font-bold mb-1">
//                         {product.name}
//                       </h3>

//                       {hasDiscount && (
//                         <p className="text-xs line-through text-zinc-400">
//                           ₹{originalPrice?.toLocaleString()}
//                         </p>
//                       )}

//                       <p className="text-gold font-semibold text-sm">
//                         {formatPrice(product)}
//                       </p>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </div>

//             <div className="flex justify-center gap-2 mt-4">
//               {featuredProducts.map((_, index) => (
//                 <div
//                   key={index}
//                   className={`h-2 w-2 rounded-full transition-all ${
//                     index === activeIndex
//                       ? "bg-black"
//                       : "bg-zinc-300"
//                   }`}
//                 />
//               ))}
//             </div>
//           </>
//         ) : (
//           <div className="overflow-hidden py-6">
//             <motion.div
//               animate={controls}
//               drag="x"
//               dragConstraints={{ left: -2000, right: 0 }}
//               dragElastic={0.1}
//               onHoverStart={() => controls.stop()}
//               onHoverEnd={() => startAnimation()}
//               onDragStart={() => controls.stop()}
//               onDragEnd={() => startAnimation()}
//               className="flex gap-8 w-max px-4 cursor-grab active:cursor-grabbing"
//             >
//               {[...featuredProducts, ...featuredProducts].map((product, index) => {

//                 const isINR = currency === "INR";
//                 const originalPrice = product.original_price_inr;
//                 const sellingPrice = product.price_inr;

//                 const hasDiscount =
//                   isINR &&
//                   originalPrice &&
//                   sellingPrice &&
//                   originalPrice > sellingPrice;

//                 const discountPercent = hasDiscount
//                   ? Math.round(
//                       ((originalPrice - sellingPrice) / originalPrice) * 100
//                     )
//                   : 0;

//                 return (
//                   <Link
//                     key={`${product.id}-${index}`}
//                     to={`/product/${product.id}`}
//                     className="relative min-w-[260px] bg-white rounded-3xl shadow-lg shadow-black/10 hover:shadow-xl transition-all duration-300 group"
//                   >
//                     {hasDiscount && (
//                       <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
//                         {discountPercent}% OFF
//                       </div>
//                     )}

//                     <div className="h-56 overflow-hidden rounded-t-3xl">
//                       <img
//                         src={product.images?.[0] || "/placeholder.png"}
//                         alt={product.name}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                       />
//                     </div>

//                     <div className="p-5 text-center">
//                       <h3 className="text-base font-bold mb-2 text-zinc-900">
//                         {product.name}
//                       </h3>

//                       {hasDiscount && (
//                         <p className="text-xs line-through text-zinc-400">
//                           ₹{originalPrice?.toLocaleString()}
//                         </p>
//                       )}

//                       <p className="text-gold font-semibold text-lg">
//                         {formatPrice(product)}
//                       </p>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ProductRunway;


import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Product } from "../types";
import { Link } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  products: Product[];
}

const ProductRunway = ({ products }: Props) => {
  const { formatPrice, currency } = useCurrency();
  const controls = useAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  const startAnimation = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 35,
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    if (!isMobile) startAnimation();
  }, []);

  if (!products || products.length === 0) return null;

  const featuredProducts = products.filter((p) => p.featured);
  if (featuredProducts.length === 0) return null;

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 180;
    const gap = 12;
    const scrollAmount = cardWidth + gap;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = 180 + 12;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  const getPrices = (product: Product) => {
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

    return { sellingPrice, originalPrice, hasDiscount, discountPercent };
  };

  return (
    <section className="py-16 md:py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-display font-black text-center">
          Featured Collection
        </h2>
      </div>

      <div className="relative">

        {isMobile ? (
          <>
            <p className="text-center text-xs text-zinc-400 mb-4">
              Swipe →
            </p>

            <button
              onClick={() => scroll("left")}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
            >
              <ChevronRight size={18} />
            </button>

            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-3 overflow-x-auto px-6 snap-x snap-mandatory scroll-smooth scrollbar-hide pb-4"
            >
              {featuredProducts.map((product, index) => {
                const {
                  sellingPrice,
                  originalPrice,
                  hasDiscount,
                  discountPercent,
                } = getPrices(product);

                return (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="relative min-w-[170px] snap-start bg-white rounded-2xl shadow-md"
                  >
                    {hasDiscount && (
                      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                        {discountPercent}% OFF
                      </div>
                    )}

                    <div className="h-72 overflow-hidden rounded-t-2xl">
                      <img
                        src={product.images?.[0] || "/placeholder.png"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-3 text-center">
                      <h3 className="text-sm font-bold mb-1">
                        {product.name}
                      </h3>

                      {hasDiscount && (
                        <p className="text-xs line-through text-zinc-400">
                          {originalPrice &&
                            new Intl.NumberFormat(undefined, {
                              style: "currency",
                              currency,
                            }).format(originalPrice)}
                        </p>
                      )}

                      <p className="text-gold font-semibold text-sm">
                        {formatPrice(product)}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {featuredProducts.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-black"
                      : "bg-zinc-300"
                  }`}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="overflow-hidden py-6">
            <motion.div
              animate={controls}
              drag="x"
              dragConstraints={{ left: -2000, right: 0 }}
              dragElastic={0.1}
              onHoverStart={() => controls.stop()}
              onHoverEnd={() => startAnimation()}
              onDragStart={() => controls.stop()}
              onDragEnd={() => startAnimation()}
              className="flex gap-8 w-max px-4 cursor-grab active:cursor-grabbing"
            >
              {[...featuredProducts, ...featuredProducts].map(
                (product, index) => {
                  const {
                    sellingPrice,
                    originalPrice,
                    hasDiscount,
                    discountPercent,
                  } = getPrices(product);

                  return (
                    <Link
                      key={`${product.id}-${index}`}
                      to={`/product/${product.id}`}
                      className="relative min-w-[260px] bg-white rounded-3xl shadow-lg shadow-black/10 hover:shadow-xl transition-all duration-300 group"
                    >
                      {hasDiscount && (
                        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                          {discountPercent}% OFF
                        </div>
                      )}

                      <div className="h-56 overflow-hidden rounded-t-3xl">
                        <img
                          src={product.images?.[0] || "/placeholder.png"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-5 text-center">
                        <h3 className="text-base font-bold mb-2 text-zinc-900">
                          {product.name}
                        </h3>

                        {hasDiscount && (
                          <p className="text-xs line-through text-zinc-400">
                            {originalPrice &&
                              new Intl.NumberFormat(undefined, {
                                style: "currency",
                                currency,
                              }).format(originalPrice)}
                          </p>
                        )}

                        <p className="text-gold font-semibold text-lg">
                          {formatPrice(product)}
                        </p>
                      </div>
                    </Link>
                  );
                }
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductRunway;