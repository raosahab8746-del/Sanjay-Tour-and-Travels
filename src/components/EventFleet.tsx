import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Calendar, Shield, Star, Car, ArrowRight } from 'lucide-react';

interface EventFleetProps {
  onBookClick: () => void;
}

const EventFleet: React.FC<EventFleetProps> = ({ onBookClick }) => {
  const features = [
    "Up to 25 Cars Available",
    "Wedding / Baraat Car Convoy",
    "Political Rally Fleet",
    "Corporate Event Transport",
    "Luxury SUVs and Comfortable Sedans",
    "Professional Drivers",
    "24/7 Support"
  ];

  return (
    <section id="events" className="py-24 bg-stone-900 text-white overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 skew-x-12 transform origin-top-right"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-emerald-600/5 -skew-x-12 transform origin-bottom-left"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Star size={14} fill="currentColor" />
              Premium Event Services
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              Event & Wedding <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Car Fleet
              </span>
            </h2>
            
            <p className="text-xl text-stone-400 mb-10 leading-relaxed">
              We provide large fleet arrangements for special occasions. Book up to 25 premium cars for weddings, baraat processions, rallies, VIP movements, or corporate events. Our fleet includes Fortuner, Innova Crysta, Ertiga, and Dzire with professional drivers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-emerald-400" />
                  </div>
                  <span className="text-stone-300 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBookClick}
              className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-blue-600/30 transition-all"
            >
              <span>Book 25 Cars for Your Event</span>
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200"
                alt="Wedding Event Car Fleet"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Users size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg leading-tight">VIP Convoy Specialist</p>
                    <p className="text-stone-300 text-sm">Trusted by 100+ Event Organizers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Car Image */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 w-64 h-64 hidden xl:block z-20"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-[2.5rem] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=400"
                  alt="Fortuner"
                  className="w-full h-full object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventFleet;
