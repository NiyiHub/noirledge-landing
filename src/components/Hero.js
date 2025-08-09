import React from 'react';
import noirledgeLogo from '../assets/noirledge-logo.png';

export const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 flex items-center justify-center bg-white p-4 rounded-2xl shadow-xl border border-blue-900/10">
            <img 
              src={noirledgeLogo} 
              alt="Noirledge Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
          Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">Literary Publishing</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
          We're crafting a revolutionary publishing experience that celebrates African voices and connects readers with extraordinary stories.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm border border-blue-900/20 rounded-full px-6 py-3 text-blue-900 font-medium">
            🚀 New Website Coming Soon
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-blue-900/20 rounded-full px-6 py-3 text-blue-900 font-medium">
            📚 Revolutionary Publishing Platform
          </div>
        </div>
      </div>
    </section>
  );
};