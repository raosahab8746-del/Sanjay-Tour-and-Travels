import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, MessageSquare, Clock, Send, Car, Mail } from 'lucide-react';
import { CONTACT_INFO, GALLERY_IMAGES, CARS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Tour Package Inquiry',
    car: CARS[0],
    pickupCity: '',
    dropoffCity: '',
    tripType: 'One Way',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let text = `*New Booking Request*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Service:* ${formData.service}`;
    
    if (formData.service === 'Car Rental Reservation') {
      if (formData.car) text += `%0A*Car:* ${formData.car}`;
      text += `%0A*Trip Type:* ${formData.tripType}`;
      if (formData.pickupCity) text += `%0A*Pick-up:* ${formData.pickupCity}`;
      if (formData.dropoffCity) text += `%0A*Drop-off:* ${formData.dropoffCity}`;
      if (formData.date) text += `%0A*Date:* ${formData.date}`;
      if (formData.time) text += `%0A*Time:* ${formData.time}`;
    }
    
    if (formData.message) text += `%0A%0A*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-8 leading-tight">
              Let's Plan Your <br />
              <span className="text-blue-600">Next Adventure</span>
            </h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Have questions about our tour packages or car rentals? Our team is here to help you plan the perfect trip. Reach out to us via phone, WhatsApp, or email.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-3">
                <span className="text-2xl">⭐</span>
                <div>
                  <p className="font-bold text-stone-900 leading-none">500+</p>
                  <p className="text-xs text-stone-500 uppercase tracking-tighter">Happy Customers</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-3">
                <span className="text-2xl">🚗</span>
                <div>
                  <p className="font-bold text-stone-900 leading-none">10+</p>
                  <p className="text-xs text-stone-500 uppercase tracking-tighter">Vehicles Available</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-bold text-stone-900 leading-none">Delhi NCR</p>
                  <p className="text-xs text-stone-500 uppercase tracking-tighter">Serving Area</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-3">
                <span className="text-2xl">⏰</span>
                <div>
                  <p className="font-bold text-stone-900 leading-none">24×7</p>
                  <p className="text-xs text-stone-500 uppercase tracking-tighter">Customer Support</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center border border-stone-100 flex-shrink-0">
                  <Phone className="text-blue-600" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">Call Us</h4>
                  {CONTACT_INFO.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone}`}
                      className="block text-lg text-stone-600 hover:text-blue-600 transition-colors"
                    >
                      +91 {phone}
                    </a>
                  ))}
                  <a 
                    href={`tel:+91${CONTACT_INFO.phones[0]}`}
                    className="mt-4 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
                  >
                    <Phone size={18} fill="currentColor" />
                    Call Now – {CONTACT_INFO.phones[0]}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center border border-stone-100 flex-shrink-0">
                  <MessageSquare className="text-green-600" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">WhatsApp</h4>
                  <p className="text-green-600 font-bold text-sm mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    WhatsApp reply in under 2 minutes
                  </p>
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-stone-600 hover:text-green-600 transition-colors"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center border border-stone-100 flex-shrink-0">
                  <MapPin className="text-rose-600" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">Our Location</h4>
                  <p className="text-lg text-stone-600 leading-relaxed max-w-xs">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center border border-stone-100 flex-shrink-0">
                  <Mail className="text-blue-400" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">Email Us</h4>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-lg text-stone-600 hover:text-blue-600 transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center border border-stone-100 flex-shrink-0">
                  <Clock className="text-amber-600" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">Working Hours</h4>
                  <p className="text-lg text-stone-600">
                    Monday - Sunday: 24/7 Service
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl border border-stone-100"
          >
            <h3 className="text-3xl font-bold text-stone-900 mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700 uppercase tracking-widest">Your Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700 uppercase tracking-widest">Phone Number</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700 uppercase tracking-widest">Select Service</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value, car: '' })}
                  className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all appearance-none cursor-pointer"
                >
                  <option>Tour Package Inquiry</option>
                  <option>Car Rental Reservation</option>
                  <option>Custom Itinerary Request</option>
                  <option>General Question</option>
                </select>
              </div>

              <AnimatePresence>
                {formData.service === 'Car Rental Reservation' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4 overflow-hidden"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-stone-700 uppercase tracking-widest flex items-center gap-2">
                        <Car size={16} className="text-blue-600" />
                        Which car would you like to book?
                      </label>
                      <select 
                        required
                        value={formData.car}
                        onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                        className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select a Car</option>
                        {CARS.map((car, idx) => (
                          <option key={idx} value={car}>{car}</option>
                        ))}
                      </select>
                      
                      {/* Urgency Triggers */}
                      <div className="mt-2 flex flex-col gap-1">
                        <p className="text-xs font-bold text-red-600 flex items-center gap-1">
                          ⚠️ Only 2 Innova cars left for today
                        </p>
                        <p className="text-xs font-bold text-orange-600 flex items-center gap-1">
                          🔥 High demand today – reserve your car early
                        </p>
                        <p className="text-[10px] text-stone-400 italic">
                          Book now to confirm your ride.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-stone-700 uppercase tracking-widest">Pick-up City</label>
                        <input
                          required
                          type="text"
                          value={formData.pickupCity}
                          onChange={(e) => setFormData({ ...formData, pickupCity: e.target.value })}
                          placeholder="e.g. Delhi"
                          className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-stone-700 uppercase tracking-widest">Drop-off City</label>
                        <input
                          required
                          type="text"
                          value={formData.dropoffCity}
                          onChange={(e) => setFormData({ ...formData, dropoffCity: e.target.value })}
                          placeholder="e.g. Jaipur"
                          className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-stone-700 uppercase tracking-widest">Journey Date</label>
                        <input
                          required
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all cursor-pointer"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-stone-700 uppercase tracking-widest">Journey Time</label>
                        <input
                          required
                          type="time"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-stone-700 uppercase tracking-widest">Trip Type</label>
                      <div className="grid grid-cols-2 gap-4">
                        {['One Way', 'Round Trip'].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, tripType: type })}
                            className={`py-3 rounded-2xl font-bold text-sm transition-all border ${
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
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700 uppercase tracking-widest">Your Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your travel plans..."
                  className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 shadow-xl shadow-blue-600/20 transition-all"
              >
                <span>Send Message</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
