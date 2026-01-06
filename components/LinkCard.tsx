import React, { useState } from 'react';
import { SocialLink } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface LinkCardProps {
  link: SocialLink;
}

const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full max-w-md mx-auto mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Glow Effect - Only visible on hover */}
      <div 
        className={`absolute -inset-1 rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition duration-700 ease-out`}
        style={{ background: link.gradient }}
      />

      {/* Main Card Structure */}
      <div className="relative flex items-center justify-between p-4 sm:p-5 rounded-xl border border-white/10 bg-black/20 backdrop-blur-md overflow-hidden transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:border-white/30 group-hover:bg-white/5">
        
        {/* Artistic Background Texture (Subtle Noise) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

        {/* Hover Fill Animation */}
        <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
            style={{ background: link.gradient }}
        />

        {/* Icon Container */}
        <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover:border-white/50 transition-colors duration-300">
          <link.icon 
            size={24} 
            className={`transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
            style={{ color: isHovered ? link.color : '#A1A1AA' }} // Gray to Color on hover
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex-1 px-4 text-center">
          <h3 className="text-lg font-medium tracking-wide text-gray-200 group-hover:text-white transition-colors duration-300 font-serif">
            {link.platform}
          </h3>
          <p className="text-xs text-gray-500 uppercase tracking-widest group-hover:text-gray-300 transition-colors duration-300">
            {link.label}
          </p>
        </div>

        {/* Action Icon */}
        <div className="relative z-10 opacity-50 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
          <ArrowUpRight size={20} color="white" />
        </div>
      </div>
    </a>
  );
};

export default LinkCard;