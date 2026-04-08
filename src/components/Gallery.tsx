import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';
import { Calendar } from 'lucide-react';

interface GalleryProps {
  onBookClick: (car: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onBookClick }) => {
  return (
    <section id="fleet" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Premium Fleet</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-6 leading-tight">
              Choose Your <span className="text-blue-600">Ride</span>
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Tap on any car to book it instantly. We provide comfortable journeys for intercity and local trips.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => onBookClick(image.alt)}
              className="relative group h-80 rounded-[2.5rem] overflow-hidden shadow-xl border border-stone-200 cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-white font-bold text-xl tracking-tight mb-2">{image.alt}</p>
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-wider">
                  <Calendar size={16} />
                  <span>Tap to Book Now</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
