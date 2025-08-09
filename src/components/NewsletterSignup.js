import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="w-full bg-gradient-to-r from-[#172554] to-[#1e40af] text-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected</h2>
        <p className="text-lg md:text-xl text-[#DBEAFE] max-w-2xl mx-auto mb-8 leading-relaxed">
          Be the first to experience our new platform. Get exclusive updates about book launches, author events, and the literary community.
        </p>
        
        {isSubscribed ? (
          <div className="bg-green-500 text-white p-4 rounded-xl max-w-md mx-auto flex items-center">
            <Check className="w-5 h-5 mr-2" />
            Thank you for subscribing!
          </div>
        ) : (
          <div className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 bg-white/10 p-2 rounded-xl backdrop-blur-sm">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-6 py-4 rounded-lg text-white placeholder-white/70 bg-transparent border border-white/20 focus:outline-none focus:border-white/40 transition-colors" 
              />
              <button 
                onClick={handleSubmit}
                className="bg-[#D65D2B] text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Subscribe
                <Mail className="w-4 h-4 ml-2" />
              </button>
            </div>
            <p className="text-sm text-[#DBEAFE] mt-4">
              Join our literary community. Unsubscribe anytime.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};