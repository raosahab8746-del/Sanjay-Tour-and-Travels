import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Clock, Car, Send } from 'lucide-react';
import { CONTACT_INFO, CARS } from '../constants';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCarName?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialCarName = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    car: initialCarName || CARS[0],
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    tripType: 'One Way',
  });

  // Update car if initialCarName changes
  React.useEffect(() => {
    if (initialCarName) {
      setFormData(prev => ({ ...prev, car: initialCarName }));
    }
  }, [initialCarName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*New Booking Request*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Car:* ${formData.car}%0A` +
      `*Trip Type:* ${formData.tripType}%0A` +
      `*Pick-up:* ${formData.pickup}%0A` +
      `*Drop-off:* ${formData.dropoff}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Time:* ${formData.time}`;

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            <div className="p-8 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-stone-900">Book Your Journey</h3>
                  <p className="text-blue-600 font-medium flex items-center gap-2 mt-1">
                    <Car size={18} />
                    Quick Reservation
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-stone-400" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-stone-700">Your Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-stone-700 flex items-center gap-2">
                    <Car size={16} className="text-blue-600" />
                    Select Car
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                    value={formData.car}
                    onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                  >
                    {CARS.map((car) => (
                      <option key={car} value={car}>{car}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-700 flex items-center gap-2">
                      <MapPin size={16} className="text-blue-600" />
                      Pick-up Location
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Enter city or area"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      value={formData.pickup}
                      onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-700 flex items-center gap-2">
                      <MapPin size={16} className="text-emerald-600" />
                      Drop-off Location
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Enter destination"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      value={formData.dropoff}
                      onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-700 flex items-center gap-2">
                      <Calendar size={16} className="text-blue-600" />
                      Date
                    </label>
                    <input
                      required
                      type="date"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-700 flex items-center gap-2">
                      <Clock size={16} className="text-blue-600" />
                      Time
                    </label>
                    <input
                      required
                      type="time"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-stone-700">Trip Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['One Way', 'Round Trip'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, tripType: type })}
                        className={`py-3 rounded-2xl font-bold text-xs transition-all border ${
                          formData.tripType === type
                            ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20'
                            : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-blue-600'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-stone-900 hover:bg-blue-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all mt-6 shadow-xl hover:shadow-blue-600/20"
                >
                  <Send size={20} />
                  Book via WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
