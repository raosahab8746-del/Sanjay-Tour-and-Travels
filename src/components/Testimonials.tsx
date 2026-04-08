import React from 'react';
import { motion } from 'framer-motion';  
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Client Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              What Our <span className="text-blue-600">Travelers Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We take pride in providing exceptional service and creating unforgettable travel experiences for our clients.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-stone-50 rounded-[2.5rem] p-10 shadow-xl border border-stone-100 flex flex-col h-full relative group transition-all hover:shadow-2xl hover:bg-white"
            >
              <div className="absolute top-8 right-10 text-blue-600/10 group-hover:text-blue-600/20 transition-colors">
                <Quote size={64} />
              </div>

              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'} mr-1`}
                  />
                ))}
              </div>

              <p className="text-gray-700 text-lg italic leading-relaxed mb-8 flex-grow">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-600/20">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
