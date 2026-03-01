// // import React, { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { motion } from 'motion/react';
// // import { ArrowRight, ShieldCheck, Hammer, Users, MessageSquare } from 'lucide-react';
// // import ProductRunway from '../components/ProductRunway';
// // import { Product } from '../types';
// // import { useCurrency } from '../context/CurrencyContext';
// // import { getWhatsAppLink, WHATSAPP_NUMBER } from '../lib/utils';

// // const Home = () => {
// //   const [products, setProducts] = useState<Product[]>([]);
// //   const { formatPrice } = useCurrency();

// //   useEffect(() => {
// //     fetch('/api/products')
// //       .then(res => res.json())
// //       .then(data => setProducts(data));
// //   }, []);

// //   return (
// //     <div className="pt-20">
// //       {/* Hero Section */}
// //       <section className="relative h-[90vh] flex items-center overflow-hidden">
// //         <div className="absolute inset-0 z-0">
// //           <img
// //             src="https://picsum.photos/seed/cricket-hero/1920/1080?blur=2"
// //             alt="Hero Background"
// //             className="w-full h-full object-cover"
// //           />
// //           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
// //         </div>

// //         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <motion.div
// //             initial={{ opacity: 0, x: -50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="max-w-2xl"
// //           >
// //             <span className="inline-block text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4">
// //               Cricface — Crafted for Victory
// //             </span>
// //             <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-tight mb-6">
// //               PREMIUM <span className="text-gold">WILLOW</span> <br />
// //               MASTERPIECES
// //             </h1>
// //             <p className="text-zinc-300 text-lg mb-10 font-light leading-relaxed">
// //               Experience the elite craftsmanship of English and Kashmir Willow bats. 
// //               Hand-selected for performance, trusted by professionals.
// //             </p>
// //             <div className="flex flex-col sm:flex-row gap-4">
// //               <Link
// //                 to="/catalog"
// //                 className="bg-gold hover:bg-[#c4a030] text-black font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center space-x-2 group"
// //               >
// //                 <span>Explore Collection</span>
// //                 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
// //               </Link>
// //               <a
// //                 href={getWhatsAppLink("Hi Cricface Team, I'd like to inquire about your bats.")}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center space-x-2"
// //               >
// //                 <MessageSquare size={18} />
// //                 <span>Contact Dealer</span>
// //               </a>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Product Runway */}
// //       {products.length > 0 && <ProductRunway products={products} />}

// //       {/* Trust Section */}
// //       <section className="py-24 bg-white">
// //         <div className="max-w-7xl mx-auto px-4">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
// //             <motion.div
// //               whileHover={{ y: -10 }}
// //               className="text-center p-8 rounded-3xl bg-zinc-50 border border-zinc-100"
// //             >
// //               <div className="w-16 h-16 bg-cricket-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-cricket-green">
// //                 <ShieldCheck size={32} />
// //               </div>
// //               <h3 className="text-xl font-display font-bold mb-4">Hand Selected Willow</h3>
// //               <p className="text-zinc-500 text-sm leading-relaxed">
// //                 Every cleft is personally inspected for grain quality, density, and performance potential.
// //               </p>
// //             </motion.div>
// //             <motion.div
// //               whileHover={{ y: -10 }}
// //               className="text-center p-8 rounded-3xl bg-zinc-50 border border-zinc-100"
// //             >
// //               <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gold">
// //                 <Hammer size={32} />
// //               </div>
// //               <h3 className="text-xl font-display font-bold mb-4">Direct from Craftsmen</h3>
// //               <p className="text-zinc-500 text-sm leading-relaxed">
// //                 No middlemen. We work directly with master bat makers to ensure authentic quality.
// //               </p>
// //             </motion.div>
// //             <motion.div
// //               whileHover={{ y: -10 }}
// //               className="text-center p-8 rounded-3xl bg-zinc-50 border border-zinc-100"
// //             >
// //               <div className="w-16 h-16 bg-cricket-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-cricket-green">
// //                 <Users size={32} />
// //               </div>
// //               <h3 className="text-xl font-display font-bold mb-4">Trusted by Players</h3>
// //               <p className="text-zinc-500 text-sm leading-relaxed">
// //                 Used by professional and club cricketers across the globe for match-winning performances.
// //               </p>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Quick Inquiry CTA */}
// //       <section className="py-20 dark-walnut-section">
// //         <div className="max-w-4xl mx-auto px-4 text-center">
// //           <h2 className="text-3xl md:text-4xl font-display font-black mb-6">READY TO FIND YOUR PERFECT MATCH?</h2>
// //           <p className="text-zinc-400 mb-10 text-lg">
// //             Our experts are here to help you choose the right bat for your playing style.
// //           </p>
// //           <Link
// //             to="/contact"
// //             className="inline-block bg-gold hover:bg-[#c4a030] text-black font-bold py-4 px-10 rounded-full transition-all"
// //           >
// //             Add Your Details
// //           </Link>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Home;

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'motion/react';
// import { ArrowRight, ShieldCheck, Hammer, Users, MessageSquare } from 'lucide-react';
// import ProductRunway from '../components/ProductRunway';
// import { Product } from '../types';
// import { useCurrency } from '../context/CurrencyContext';
// import { getWhatsAppLink } from '../lib/utils';

// const Home = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const { formatPrice } = useCurrency();

//   useEffect(() => {
//     fetch('/api/products')
//       .then(res => res.json())
//       .then(data => setProducts(data));
//   }, []);

//   return (
//     <div className="pt-20">
      
//       {/* Hero Section */}
//       <section className="relative h-[90vh] flex items-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="https://picsum.photos/seed/cricket-hero/1920/1080?blur=2"
//             alt="Hero Background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-2xl"
//           >
//             <span className="inline-block text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4">
//               Cricface — Crafted for Victory
//             </span>

//             <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-tight mb-6">
//               PREMIUM <span className="text-gold">WILLOW</span> <br />
//               MASTERPIECES
//             </h1>

//             <p className="text-zinc-300 text-lg mb-10 font-light leading-relaxed">
//               Experience the elite craftsmanship of English and Kashmir Willow bats. 
//               Hand-selected for performance, trusted by professionals.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link
//                 to="/catalog"
//                 className="bg-gold hover:bg-[#c4a030] text-black font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center space-x-2 group"
//               >
//                 <span>Explore Collection</span>
//                 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//               </Link>

//               <a
//                 href={getWhatsAppLink("Hi Cricface Team, I'd like to inquire about your bats.")}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center space-x-2"
//               >
//                 <MessageSquare size={18} />
//                 <span>Contact Dealer</span>
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Product Runway */}
//       {products.length > 0 && <ProductRunway products={products} />}

//       {/* Scrolling Trust Section */}
//       <section className="py-24 bg-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4">

//           <motion.div
//             animate={{ x: ['0%', '-50%'] }}
//             transition={{
//               repeat: Infinity,
//               repeatType: 'loop',
//               duration: 25,
//               ease: 'linear',
//             }}
//             className="flex gap-8 w-max"
//           >
//             {[...Array(2)].map((_, index) => (
//               <div key={index} className="flex gap-8">

//                 {/* Card 1 */}
//                 <div className="min-w-[320px] p-8 rounded-3xl bg-zinc-50 border border-zinc-100 text-center shadow-sm">
//                   <div className="w-16 h-16 bg-cricket-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-cricket-green">
//                     <ShieldCheck size={32} />
//                   </div>
//                   <h3 className="text-xl font-display font-bold mb-4">
//                     Hand Selected Willow
//                   </h3>
//                   <p className="text-zinc-500 text-sm leading-relaxed">
//                     Every cleft is personally inspected for grain quality, density, and performance potential.
//                   </p>
//                 </div>

//                 {/* Card 2 */}
//                 <div className="min-w-[320px] p-8 rounded-3xl bg-zinc-50 border border-zinc-100 text-center shadow-sm">
//                   <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gold">
//                     <Hammer size={32} />
//                   </div>
//                   <h3 className="text-xl font-display font-bold mb-4">
//                     Direct from Craftsmen
//                   </h3>
//                   <p className="text-zinc-500 text-sm leading-relaxed">
//                     No middlemen. We work directly with master bat makers to ensure authentic quality.
//                   </p>
//                 </div>

//                 {/* Card 3 */}
//                 <div className="min-w-[320px] p-8 rounded-3xl bg-zinc-50 border border-zinc-100 text-center shadow-sm">
//                   <div className="w-16 h-16 bg-cricket-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-cricket-green">
//                     <Users size={32} />
//                   </div>
//                   <h3 className="text-xl font-display font-bold mb-4">
//                     Trusted by Players
//                   </h3>
//                   <p className="text-zinc-500 text-sm leading-relaxed">
//                     Used by professional and club cricketers across the globe for match-winning performances.
//                   </p>
//                 </div>

//               </div>
//             ))}
//           </motion.div>

//         </div>
//       </section>

//       {/* Quick Inquiry CTA */}
//       <section className="py-20 dark-walnut-section">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-display font-black mb-6">
//             READY TO FIND YOUR PERFECT MATCH?
//           </h2>
//           <p className="text-zinc-400 mb-10 text-lg">
//             Our experts are here to help you choose the right bat for your playing style.
//           </p>
//           <Link
//             to="/contact"
//             className="inline-block bg-gold hover:bg-[#c4a030] text-black font-bold py-4 px-10 rounded-full transition-all"
//           >
//             Add Your Details
//           </Link>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Hammer, Users, MessageSquare } from 'lucide-react';
import ProductRunway from '../components/ProductRunway';
import { Product } from '../types';
import { useCurrency } from '../context/CurrencyContext';
import { getWhatsAppLink } from '../lib/utils';
import LimitedTimeOffer from '../components/LimitedTimeOffer';
import TrustedByProfessionals from "../components/TrustedByProfessionals";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { formatPrice } = useCurrency();

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="pt-20">

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ytimg.com/vi/88l2O25PHmo/maxresdefault.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-gold font-bold tracking-[0.3em] uppercase text-xs sm:text-sm mb-4">
              Cricface — Crafted for Victory
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight mb-6">
              PREMIUM <span className="text-gold">WILLOW</span> <br />
              MASTERPIECES
            </h1>

            <p className="text-zinc-300 text-base sm:text-lg mb-10 font-light leading-relaxed">
              Experience the elite craftsmanship of English and Kashmir Willow bats.
              Hand-selected for performance, trusted by professionals.
            </p>

            {/* Responsive Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

              <Link
                to="/catalog"
                className="w-full sm:w-auto text-center bg-gold hover:bg-[#c4a030] text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all flex items-center justify-center space-x-2 group text-sm sm:text-base"
              >
                <span>Explore Collection</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={getWhatsAppLink("Hi Cricface Team, I'd like to inquire about your bats.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <MessageSquare size={18} />
                <span>Contact Dealer</span>
              </a>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Limited Offer Timer
      <LimitedTimeOffer /> */}

      <div className="pt-17">
      <LimitedTimeOffer />
      {/* rest of home */}
    </div>

      {/* Product Runway */}
      {products.length > 0 && <ProductRunway products={products} />}

      <TrustedByProfessionals />

      {/* Trust Section (STATIC & RESPONSIVE) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Card 1 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-50 border border-zinc-100 text-center shadow-sm hover:shadow-md transition-all">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cricket-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-cricket-green">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold mb-4">
                Hand Selected Willow
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Every cleft is personally inspected for grain quality, density, and performance potential.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-50 border border-zinc-100 text-center shadow-sm hover:shadow-md transition-all">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gold">
                <Hammer size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold mb-4">
                Direct from Craftsmen
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                No middlemen. We work directly with master bat makers to ensure authentic quality.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-50 border border-zinc-100 text-center shadow-sm hover:shadow-md transition-all">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cricket-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-cricket-green">
                <Users size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold mb-4">
                Trusted by Players
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Used by professional and club cricketers across the globe for match-winning performances.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 dark-walnut-section">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black mb-6">
            READY TO FIND YOUR PERFECT MATCH?
          </h2>
          <p className="text-zinc-400 mb-10 text-base sm:text-lg">
            Our experts are here to help you choose the right bat for your playing style.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gold hover:bg-[#c4a030] text-black font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all text-sm sm:text-base"
          >
            Add Your Details
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
