import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Phone, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920"
          alt="Travel Background"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
            Your Trusted Travel Partner
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight leading-none">
            Explore India <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              In Luxury & Style
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Premium car rentals and custom tour packages. Specializing in Fortuner, Innova Crysta, and Swift Dzire for your perfect journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBookClick}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg flex items-center justify-center space-x-2 shadow-xl shadow-blue-600/20 transition-all"
            >
              <MessageSquare size={20} fill="currentColor" />
              <span>Book Your Taxi</span>
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:+91${CONTACT_INFO.phones[0]}`}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md rounded-full font-bold text-lg flex items-center justify-center space-x-2 transition-all"
            >
              <Phone size={20} fill="currentColor" />
              <span>Call Now</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating Stats or Features */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 hidden md:block">
        <div className="grid grid-cols-4 gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
          <div className="text-center border-r border-white/10">
            <p className="text-2xl font-bold text-white mb-1">⭐ 500+</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Happy Customers</p>
          </div>
          <div className="text-center border-r border-white/10">
            <p className="text-2xl font-bold text-white mb-1">🚗 10+</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Vehicles Available</p>
          </div>
          <div className="text-center border-r border-white/10">
            <p className="text-2xl font-bold text-white mb-1">📍 Delhi NCR</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Serving Area</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white mb-1">⏰ 24×7</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
