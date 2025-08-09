import React from 'react';
import { BookOpen, Users, Award, Calendar, Check } from 'lucide-react';

export const ComingSoon = () => {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#172554] mb-4">
            Reimagining Literary Publishing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our new platform will transform how readers discover, engage with, and celebrate African literature.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE] p-8 rounded-2xl border-l-4 border-[#172554] shadow-lg">
              <h3 className="text-2xl font-bold text-[#172554] mb-6">What's Coming</h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <div className="bg-[#172554] rounded-full p-1 mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#172554]">Immersive Book Catalog</h4>
                    <p className="text-gray-700">Interactive showcase with rich media and author insights</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="bg-[#172554] rounded-full p-1 mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#172554]">Author Spotlight</h4>
                    <p className="text-gray-700">Dedicated spaces for author profiles and literary journeys</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="bg-[#172554] rounded-full p-1 mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#172554]">Digital Reading Experience</h4>
                    <p className="text-gray-700">Seamless integration of print and digital publishing</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="bg-[#172554] rounded-full p-1 mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#172554]">Community Hub</h4>
                    <p className="text-gray-700">Connect with fellow readers and literary enthusiasts</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#172554] text-white p-6 rounded-2xl text-center transform hover:scale-105 transition-transform">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-[#DBEAFE]" />
              <h4 className="font-bold text-lg mb-2">50+</h4>
              <p className="text-[#DBEAFE]">Published Titles</p>
            </div>
            <div className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] p-6 rounded-2xl text-center border border-[#172554]/10 transform hover:scale-105 transition-transform">
              <Users className="w-12 h-12 mx-auto mb-4 text-[#172554]" />
              <h4 className="font-bold text-lg mb-2 text-[#172554]">25+</h4>
              <p className="text-gray-600">Featured Authors</p>
            </div>
            <div className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] p-6 rounded-2xl text-center border border-[#172554]/10 transform hover:scale-105 transition-transform">
              <Award className="w-12 h-12 mx-auto mb-4 text-[#172554]" />
              <h4 className="font-bold text-lg mb-2 text-[#172554]">10+</h4>
              <p className="text-gray-600">Literary Awards</p>
            </div>
            <div className="bg-[#172554] text-white p-6 rounded-2xl text-center transform hover:scale-105 transition-transform">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-[#DBEAFE]" />
              <h4 className="font-bold text-lg mb-2">5</h4>
              <p className="text-[#DBEAFE]">Years Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};