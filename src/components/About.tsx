import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Car, Clock, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const About: React.FC = () => {
  const features = [
    {
      icon: <Car className="text-blue-600" size={32} />,
      title: "Premium Fleet",
      description: "Well-maintained Fortuner, Innova Crysta, and Swift Dzire for maximum comfort."
    },
    {
      icon: <Shield className="text-emerald-600" size={32} />,
      title: "Safe & Secure",
      description: "Experienced, verified drivers and GPS-tracked vehicles for your peace of mind."
    },
    {
      icon: <Clock className="text-amber-600" size={32} />,
      title: "Punctual Service",
      description: "We value your time. On-time pickups and drop-offs are our top priority."
    },
    {
      icon: <MapPin className="text-rose-600" size={32} />,
      title: "Local Expertise",
      description: "Our drivers know the best routes and hidden gems across India."
    }
  ];

  return (
    <section id="about" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000"
                alt="Our Premium Fleet"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl"></div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-stone-100 z-20 max-w-[200px]">
              <p className="text-4xl font-bold text-blue-600 mb-1">10+</p>
              <p className="text-sm font-semibold text-stone-600 uppercase tracking-wider">Years of Excellence in Travel</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">About Sanjay Tour & Travels</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-6 leading-tight">
              Making Every Journey <br />
              <span className="text-blue-600 italic">Unforgettable</span>
            </h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Founded by Sanjay and Sachin Yadav, our agency has been a trusted name in the travel industry for over a decade. We specialize in providing premium car rentals and curated tour packages that cater to both leisure and business travelers across Delhi and Jaipur.
            </p>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
              Our office is located at E672, New Palam Vihar, Phase 2, Sec 112, Gurgaon. We are strategically positioned to serve the entire NCR region, Jaipur, and provide comfortable trips to Himachal, Uttarakhand, Agra, and Mathura.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col space-y-3">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center border border-stone-100">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">{feature.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
