import React from 'react';
import { Shield, Target, Heart, Award } from 'lucide-react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center mb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cricface.com/upload/blog/post-13.jpg"
            alt="Craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-cricket-green/80 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-black text-white mb-6"
          >
            OUR STORY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-willow/80 text-xl max-w-2xl mx-auto font-light"
          >
            A passion for cricket, a commitment to craftsmanship, and the pursuit of the perfect willow.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <h2 className="text-4xl font-display font-black text-zinc-900 mb-8">CRAFTING VICTORY</h2>
            <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
              <p>
                Cricface was born from a simple observation: the soul of a great innings lies in the quality of the wood. 
                Our journey started in the heart of Kashmir and the lush forests of England, where we source only the 
                finest willow clefts.
              </p>
              <p>
                We believe that every batsman deserves a tool that feels like an extension of their own arm. 
                That's why we work directly with master craftsmen who have spent decades perfecting the art 
                of bat making—balancing weight, optimizing the sweet spot, and ensuring every grain tells a story.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://image2url.com/r2/default/images/1772201628230-099bad5c-fe2c-4832-8c40-3047e302b77d.jpg" alt="Bat Making" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-gold p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-black font-black text-4xl">10+</p>
              <p className="text-black/60 font-bold uppercase tracking-widest text-xs">Years of Excellence</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gold">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-display font-bold mb-4">Quality</h3>
            <p className="text-zinc-500">Uncompromising standards in willow selection and manufacturing.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gold">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-display font-bold mb-4">Performance</h3>
            <p className="text-zinc-500">Engineered for maximum power, balance, and pick-up.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gold">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-display font-bold mb-4">Trust</h3>
            <p className="text-zinc-500">Building lasting relationships with players at every level.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
