import React from 'react';
import { ProfileData } from '../types';

interface ProfileHeaderProps {
  data: ProfileData;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center pt-16 pb-8 text-center relative z-10">
      
      {/* Decorative Glow behind Avatar */}
      <div className="absolute top-12 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Avatar */}
      <div className="relative mb-6 group">
        <div className="absolute -inset-0.5 bg-gradient-to-br from-white via-gray-200 to-gray-500 rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 blur"></div>
        <img
          src={data.avatarUrl}
          alt={data.name}
          className="relative w-28 h-28 rounded-full object-cover border-2 border-black/50 shadow-2xl transition-all duration-700 ease-in-out"
        />
      </div>

      {/* Name */}
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2 tracking-tight">
        {data.name}
      </h1>

      {/* Handle */}
      <div className="inline-block px-3 py-1 mb-4 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
        <span className="text-xs font-sans font-bold tracking-[0.3em] text-purple-200 uppercase">
          {data.handle}
        </span>
      </div>

      {/* Bio */}
      <div className="flex flex-wrap justify-center gap-2 max-w-sm px-4">
        {data.bio.map((role, index) => (
          <span 
            key={index} 
            className="text-sm font-light text-gray-400 font-sans tracking-wide hover:text-white transition-colors cursor-default"
          >
            {role}
            {index < data.bio.length - 1 && <span className="mx-2 text-gray-700">|</span>}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProfileHeader;