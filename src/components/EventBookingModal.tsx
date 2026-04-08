import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Users, Send, Star, Info } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface EventBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EventBookingModal: React.FC<EventBookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding',
    carCount: '5',
    pickup: '',
    date: '',
    requirements: ''
  });

  const eventTypes = ['Wedding', 'Political Rally', 'Corporate', 'VIP Convoy', 'Other'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*New Event Fleet Booking*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Event Type:* ${formData.eventType}%0A` +
      `*Cars Needed:* ${formData.carCount}%0A` +
      `*Pick-up:* ${formData.pickup}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Requirements:* ${formData.requirements || 'None'}`;

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-900/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              {/* Left Side - Info */}
              <div className="hidden md:flex md:w-1/3 bg-blue-600 p-10 flex-col justify-between text-white">
                <div>
                  <Star className="mb-6" size={40} fill="currentColor" />
                  <h3 className="text-3xl font-bold mb-4">Event Fleet Booking</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Reserve up to 25 premium vehicles for your special occasion.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Users size={16} />
                    </div>
                    <span className="text-sm font-medium">Professional Drivers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Calendar size={16} />
                    </div>
                    <span className="text-sm font-medium">24/7 Support</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="flex-1 p-8 md:p-12 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="text-2xl font-bold text-stone-900 md:hidden">Event Booking</h4>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-stone-100 rounded-full transition-colors ml-auto"
                  >
                    <X size={24} className="text-stone-400" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-stone-700 uppercase tracking-widest">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-stone-700 uppercase tracking-widest">Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-stone-700 uppercase tracking-widest">Event Type</label>
                      <select
                        required
                        className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      >
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-stone-700 uppercase tracking-widest">Number of Cars</label>
                      <input
                        required
                        type="number"
                        min="1"
                        max="25"
                        placeholder="e.g. 10"
                        className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        value={formData.carCount}
                        onChange={(e) => setFormData({ ...formData, carCount: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-stone-700 uppercase tracking-widest flex items-center gap-2">
                        <MapPin size={16} className="text-blue-600" />
                        Pick-up Location
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="City or Venue"
                        className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        value={formData.pickup}
                        onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-stone-700 uppercase tracking-widest flex items-center gap-2">
                        <Calendar size={16} className="text-blue-600" />
                        Event Date
                      </label>
                      <input
                        required
                        type="date"
                        className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all cursor-pointer"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-stone-700 uppercase tracking-widest flex items-center gap-2">
                      <Info size={16} className="text-blue-600" />
                      Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Any specific car models or instructions..."
                      className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-stone-900 hover:bg-blue-600 text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all mt-4 shadow-2xl hover:shadow-blue-600/20"
                  >
                    <Send size={24} />
                    Confirm Event Booking
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EventBookingModal;
