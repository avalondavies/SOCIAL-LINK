import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center mt-12 mb-16">
      
      {/* Title - Soft & Elegant */}
      <h3 className="text-lg font-serif italic text-white/30 mb-8 tracking-[0.2em] font-light">
        Contact
      </h3>

      <div className="flex items-center justify-center gap-10">
        {/* Email */}
        <a
          href="mailto:avalondavies307@gmail.com"
          className="group relative"
          aria-label="Email Me"
        >
          {/* Hover Glow - Soft Rose */}
          <div className="absolute inset-0 bg-rose-500 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-1000 ease-in-out"></div>
          
          {/* Icon Container */}
          <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/5 backdrop-blur-md group-hover:bg-white/10 group-hover:border-rose-300/20 transition-all duration-500 ease-out group-hover:scale-110">
            <Mail 
              size={24} 
              className="text-gray-400 group-hover:text-rose-200 transition-colors duration-500" 
              strokeWidth={1.5}
            />
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/19406046565"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          aria-label="WhatsApp"
        >
           {/* Hover Glow - Soft Emerald/Teal */}
           <div className="absolute inset-0 bg-emerald-500 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-1000 ease-in-out"></div>
          
          {/* Icon Container */}
          <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/5 backdrop-blur-md group-hover:bg-white/10 group-hover:border-emerald-300/20 transition-all duration-500 ease-out group-hover:scale-110">
            <MessageCircle 
              size={24} 
              className="text-gray-400 group-hover:text-emerald-200 transition-colors duration-500" 
              strokeWidth={1.5}
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactSection;