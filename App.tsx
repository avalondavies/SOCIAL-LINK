import React, { useEffect, useState } from 'react';
import { Instagram, Youtube, Music, Video } from 'lucide-react';
import ProfileHeader from './components/ProfileHeader';
import LinkCard from './components/LinkCard';
import ContactSection from './components/ContactSection';
import { SocialLink, ProfileData } from './types';

// Icons mapping to create a custom TikTok icon using Lucide basic shapes or import standard if preferred.
// For this strict environment, we use 'Video' as a proxy for TikTok or similar unless we use a specific SVG.
// But Lucide 'Video' is safe.

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const profileData: ProfileData = {
    name: "Avalon Davies",
    handle: "ARTISTA",
    avatarUrl: "https://i.scdn.co/image/ab67616d0000b2730fbbf34d1c70c8412c83a5f0",
    bio: ["Actress", "Singer", "Influencer", "Dancer"]
  };

  const links: SocialLink[] = [
    {
      id: '1',
      platform: 'Instagram',
      url: 'https://www.instagram.com/avalon_davies?igsh=OGs4ZDV5N21iN2tz&utm_source=qr',
      icon: Instagram,
      color: '#E1306C',
      gradient: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
      label: 'Life Behind Scenes'
    },
    {
      id: '2',
      platform: 'TikTok',
      url: 'https://www.tiktok.com/@avalon_daviess',
      icon: Video, // Lucide doesn't have TikTok, using Video as abstract representation
      color: '#00F2EA',
      gradient: 'linear-gradient(to right, #00f2ea, #ff0050)',
      label: 'Performance & Humor'
    },
    {
      id: '3',
      platform: 'YouTube',
      url: 'https://www.youtube.com/@AvalonDavies',
      icon: Youtube,
      color: '#FF0000',
      gradient: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
      label: 'Musical videos & Shorts'
    },
    {
      id: '4',
      platform: 'Spotify',
      url: 'https://open.spotify.com/artist/1AX2f8OXYbwrXWvpteutyU?si=ukm3C2RPSbG_z5U3938glA',
      icon: Music,
      color: '#1DB954',
      gradient: 'linear-gradient(135deg, #1db954 0%, #191414 100%)',
      label: 'My songs & Playlists'
    }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white font-sans selection:bg-purple-500/30">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Interactive Mouse Glow - subtle follow */}
        <div 
          className="absolute w-[800px] h-[800px] rounded-full bg-purple-900/10 blur-[120px] transition-transform duration-1000 ease-out"
          style={{ 
            transform: `translate(${mousePosition.x - 400}px, ${mousePosition.y - 400}px)`,
          }}
        />
        {/* Static Ambient Lights */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pink-900/10 rounded-full blur-[120px]" />
        
        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}></div>
      </div>

      {/* Main Content Container */}
      <main className="relative z-10 px-4 max-w-2xl mx-auto flex flex-col items-center min-h-screen">
        
        <ProfileHeader data={profileData} />

        <div className="w-full flex flex-col gap-2 mt-4 animate-float">
          {links.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </div>

        <ContactSection />

        <footer className="pb-8 text-center text-gray-600">
          <p className="text-xs font-serif tracking-widest opacity-60 hover:opacity-100 transition-opacity">
            &copy; AVALON DAVIES 2026
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;