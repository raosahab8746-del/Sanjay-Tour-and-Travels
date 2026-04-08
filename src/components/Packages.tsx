import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { TOUR_PACKAGES, CONTACT_INFO } from '../constants';

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Tour Packages
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Curated Travel <span className="text-blue-600">Experiences</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Choose from our popular tour packages or customize your own itinerary. 
              We ensure a comfortable and memorable journey for every traveler.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TOUR_PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col h-full transition-all hover:shadow-2xl"
            >

              {/* Image Container */}
              <div className="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {pkg.title}
                </h3>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                  {pkg.description}
                </p>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-gray-700 text-sm font-medium">
                      <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Namaste Sanjay Tour and Travels! 🚗%0A%0AI am very excited to book the *${pkg.title}* package. Please share the itinerary and best price for this trip. I'm looking forward to a memorable journey with you!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-gray-900 hover:bg-blue-600 text-white rounded-2xl font-bold text-sm flex items-center justify-center space-x-2 transition-all group-hover:shadow-lg group-hover:shadow-blue-600/20"
                >
                  <span>Book Now</span>
                  <ArrowRight size={16} />
                </a>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-blue-600/20"
        >

          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Want a Custom Tour Package?
          </h3>

          <p className="text-lg text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tell us your destination and preferences, and we'll create a personalized itinerary just for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href={`tel:${CONTACT_INFO.phones[0]}`}
              className="w-full sm:w-auto px-10 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl"
            >
              Call Us Now
            </a>

           <a
  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hello%20Sanjay%20Tour%20and%20Travels!%20I%20want%20to%20book%20a%20custom%20tour%20package.`}
  target="_blank"
  rel="noopener noreferrer"
  className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
>
  WhatsApp Us
</a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Packages;