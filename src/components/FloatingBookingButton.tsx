import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface FloatingBookingButtonProps {
  onBookClick: () => void;
}

const FloatingBookingButton: React.FC<FloatingBookingButtonProps> = ({ onBookClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
      {/* Call Button */}
      <motion.a
        href={`tel:+91${CONTACT_INFO.phones[0]}`}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 text-white p-4 rounded-full shadow-2xl flex items-center gap-3 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">
          Call Now
        </span>
        <Phone size={24} fill="currentColor" />
      </motion.a>

      {/* WhatsApp Booking Button */}
      <motion.button
        onClick={onBookClick}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 border-4 border-white"
      >
        <div className="relative">
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          <MessageSquare size={24} fill="currentColor" />
        </div>
        <span className="font-bold text-lg">Book Taxi in 10 Seconds</span>
      </motion.button>
    </div>
  );
};

export default FloatingBookingButton;
