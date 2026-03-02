// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
// import { WHATSAPP_NUMBER } from '../lib/utils';

// const Footer = () => {
//   return (
//     <footer className="bg-[#1a1a1a] text-white pt-24 pb-12">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
//           {/* Brand */}
//           <div className="space-y-6">
//             <Link to="/" className="flex items-center space-x-2">
//               <span className="text-2xl font-display font-black tracking-tighter text-white">
//                 CRICFACE
//               </span>
//               <div className="w-1.5 h-1.5 rounded-full bg-gold" />
//             </Link>
//             <p className="text-zinc-400 text-sm leading-relaxed">
//               Premium handcrafted cricket bats for the elite player. 
//               Crafted for victory, designed for performance.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
//                 <Instagram size={18} />
//               </a>
//               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
//                 <Facebook size={18} />
//               </a>
//               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
//                 <Twitter size={18} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Explore</h4>
//             <ul className="space-y-4 text-zinc-400 text-sm">
//               <li><Link to="/catalog" className="hover:text-gold transition-colors">The Collection</Link></li>
//               <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
//               <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
//               <li><Link to="/refund-policy" className="hover:text-gold transition-colors">Refund Policy</Link></li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Contact</h4>
//             <ul className="space-y-4 text-zinc-400 text-sm">
//               <li className="flex items-center space-x-3">
//                 <Mail size={16} className="text-gold" />
//                 <span>champaabid155@gmail.com</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <Phone size={16} className="text-gold" />
//                 <span>{WHATSAPP_NUMBER}</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <MapPin size={16} className="text-gold" />
//                 <span>Srinagar, J&K</span>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Newsletter</h4>
//             <p className="text-zinc-400 text-sm mb-4">Join the elite circle for exclusive updates.</p>
//             <div className="flex">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="bg-white/5 border border-white/10 px-4 py-2 rounded-l-lg focus:outline-none focus:border-gold flex-1 text-sm"
//               />
//               <button className="bg-gold text-black font-bold px-4 py-2 rounded-r-lg text-sm hover:bg-[#c4a030] transition-all">
//                 Join
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
//           <p className="text-zinc-500 text-xs">
//             © {new Date().getFullYear()} Cricface. All rights reserved.
//           </p>
//           <div className="flex space-x-6 text-zinc-500 text-xs">
//             <Link to="/refund-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
//             <Link to="/refund-policy" className="hover:text-white transition-colors">Terms of Service</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../lib/utils';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 sm:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-display font-black tracking-tighter text-white">
                CRICFACE
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Premium handcrafted cricket bats for the elite player.
              Crafted for victory, designed for performance.
            </p>

            <div className="flex space-x-4">
              <a href="https://www.instagram.com/cricface_cf/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">
              Explore
            </h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li>
                <Link to="/catalog" className="hover:text-gold transition-colors">
                  The Collection
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-gold transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-gold" />
                <span>champaabid155@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-gold" />
                <span>{WHATSAPP_NUMBER}</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-gold" />
                <span>Qamarwari Chowk Srinagar, Jammu & Kashmir</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">
              Newsletter
            </h4>
            <p className="text-zinc-400 text-sm mb-4">
              Join the elite circle for exclusive updates.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/5 border border-white/10 px-4 py-2 rounded-l-lg focus:outline-none focus:border-gold flex-1 text-sm"
              />
              <button className="bg-gold text-black font-bold px-4 py-2 rounded-r-lg text-sm hover:bg-[#c4a030] transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-zinc-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Cricface. All rights reserved.
          </p>

          <div className="flex space-x-6 text-zinc-500 text-xs">
            <Link to="/refund-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/refund-policy" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Admin Login (Very Bottom) */}
        <div className="mt-8 text-center border-t border-white/5 pt-6">
          <Link
            to="/admin/login"
            className="text-[11px] text-zinc-500 hover:text-gold transition-colors tracking-wide"
          >
            Admin Login
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
