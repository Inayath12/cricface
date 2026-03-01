import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getWhatsAppLink, generateGeneralInquiryMessage, WHATSAPP_NUMBER } from '../lib/utils';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    product: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to DB
    await fetch('/api/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    setIsSubmitted(true);

    // Redirect to WhatsApp after a short delay
    setTimeout(() => {
      window.open(getWhatsAppLink(generateGeneralInquiryMessage(formData)), '_blank');
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h1 className="text-5xl font-display font-black text-zinc-900 mb-8">GET IN TOUCH</h1>
            <p className="text-zinc-600 text-lg mb-12 leading-relaxed">
              Have questions about our bats or need expert advice? 
              Fill out the form or reach out directly via our contact channels.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-gold flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 mb-1">Email Us</h3>
                  <p className="text-zinc-500">champaabid155@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-gold flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 mb-1">Call / WhatsApp</h3>
                  <p className="text-zinc-500">{WHATSAPP_NUMBER}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-gold flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 mb-1">Visit Us</h3>
                  <p className="text-zinc-500">Qamarwari chowk, Srinagar, Jammu & Kashmir</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-zinc-200/50 border border-zinc-100 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-4 bg-zinc-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Contact Number *</label>
                      <input
                        required
                        type="tel"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        className="w-full px-5 py-4 bg-zinc-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 bg-zinc-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Interested Product</label>
                    <input
                      type="text"
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-5 py-4 bg-zinc-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                      placeholder="e.g. Emperor Edition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Message / Query *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-4 bg-zinc-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-cricket-green hover:bg-cricket-green-dark text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center space-x-3 shadow-lg shadow-cricket-green/20"
                  >
                    <Send size={18} />
                    <span>Send Inquiry</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">Inquiry Received!</h2>
                  <p className="text-zinc-500 mb-8">
                    Thank you for reaching out. We are redirecting you to WhatsApp to continue the conversation...
                  </p>
                  <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
