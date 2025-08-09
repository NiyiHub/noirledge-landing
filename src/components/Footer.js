import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin, Mail, Phone, ArrowRight } from 'lucide-react';


export const Footer = () => {
  return (
    <footer className="w-full bg-[#030712] text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">Noirledge</h3>
            <p className="text-gray-300 leading-relaxed">
              Committed to excellence and innovation in African literary publishing. We celebrate voices, stories, and the transformative power of literature.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail className="w-4 h-4" />
              <span>info@noirledge.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Phone className="w-4 h-4" />
              <span>+234 (0) 909 666 4359</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 mr-2 mt-1 text-[#D65D2B]" />
                <span>Amplify African literary voices</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 mr-2 mt-1 text-[#D65D2B]" />
                <span>Foster literary excellence</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 mr-2 mt-1 text-[#D65D2B]" />
                <span>Connect readers globally</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Follow Our Journey</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-[#D65D2B] p-3 rounded-lg transition-colors group">
                <Instagram className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-[#D65D2B] p-3 rounded-lg transition-colors group">
                <Twitter className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-[#D65D2B] p-3 rounded-lg transition-colors group">
                <Facebook className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-[#D65D2B] p-3 rounded-lg transition-colors group">
                <Linkedin className="w-5 h-5 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Noirledge. All rights reserved.
            </p>
            <div className="text-gray-400 text-sm">
              Crafted with ❤️ for African Literature
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};