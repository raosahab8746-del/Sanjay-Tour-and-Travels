import React from 'react';
import { Phone, MapPin, Mail, MessageSquare, Facebook, Instagram, Twitter } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Section */}
          <div className="space-y-8">
            <div className="flex flex-col">
              <span className="font-bold text-2xl tracking-tight text-white">
                SANJAY TOUR & TRAVELS
              </span>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-blue-400">
                Premium Travel Solutions
              </span>
            </div>
            <p className="text-stone-400 leading-relaxed max-w-xs">
              Providing premium car rentals and curated tour packages across India. Experience luxury and comfort with every journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all border border-white/10">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-pink-600 rounded-xl flex items-center justify-center transition-all border border-white/10">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-blue-400 rounded-xl flex items-center justify-center transition-all border border-white/10">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 border-b border-white/10 pb-4 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-stone-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-stone-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#packages" className="text-stone-400 hover:text-white transition-colors">Tour Packages</a></li>
              <li><a href="#gallery" className="text-stone-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-stone-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-stone-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="text-xl font-bold mb-8 border-b border-white/10 pb-4 inline-block">Popular Tours</h4>
            <ul className="space-y-4">
              <li><a href="#packages" className="text-stone-400 hover:text-white transition-colors">Golden Triangle Tour</a></li>
              <li><a href="#packages" className="text-stone-400 hover:text-white transition-colors">Himachal Adventure</a></li>
              <li><a href="#packages" className="text-stone-400 hover:text-white transition-colors">Rajasthan Heritage</a></li>
              <li><a href="#packages" className="text-stone-400 hover:text-white transition-colors">Leh Ladakh Expedition</a></li>
              <li><a href="#packages" className="text-stone-400 hover:text-white transition-colors">South India Spiritual</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 border-b border-white/10 pb-4 inline-block">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-stone-400 leading-relaxed">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-blue-400 flex-shrink-0" size={20} />
                <div className="flex flex-col">
                  {CONTACT_INFO.phones.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone}`} className="text-stone-400 hover:text-white transition-colors">+91 {phone}</a>
                  ))}
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <MessageSquare className="text-green-400 flex-shrink-0" size={20} />
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors">WhatsApp Chat</a>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-blue-400 flex-shrink-0" size={20} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-stone-400 hover:text-white transition-colors">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-stone-500 text-sm">
            © {currentYear} Sanjay Tour & Travels. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm text-stone-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
