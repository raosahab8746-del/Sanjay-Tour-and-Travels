import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CONTACT_INFO } from './constants';

import PopularRoutes from './components/PopularRoutes';
import FloatingBookingButton from './components/FloatingBookingButton';
import BookingModal from './components/BookingModal';
import EventFleet from './components/EventFleet';
import EventBookingModal from './components/EventBookingModal';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState('Toyota Fortuner');

  const openBookingModal = (car: string = 'Premium Car') => {
    setSelectedCar(car);
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main>
        <Hero onBookClick={() => openBookingModal()} />
        <About />
        <Packages />
        <PopularRoutes />
        <Gallery onBookClick={openBookingModal} />
        <EventFleet onBookClick={() => setIsEventModalOpen(true)} />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Floating Action Buttons */}
      <FloatingBookingButton onBookClick={() => openBookingModal()} />

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
        initialCarName={selectedCar} 
      />

      <EventBookingModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
      />

      {/* Back to Top Button */}
      <div className="fixed bottom-40 right-8 z-40">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-600/30 transition-all border-4 border-white"
              title="Back to Top"
            >
              <ArrowUp size={28} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
