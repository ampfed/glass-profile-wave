
import React, { useState } from 'react';
import ProfileHeader from '../components/ProfileHeader';
import DiscordSection from '../components/DiscordSection';
import MusicPlayer from '../components/MusicPlayer';
import EntryScreen from '../components/EntryScreen';

const Index = () => {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
  };

  if (!hasEntered) {
    return <EntryScreen onEnter={handleEnter} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden animate-fade-in">
      {/* Banner Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-purple-900/80 to-blue-900/80"></div>
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1920&h=1080")'
        }}
      ></div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative z-10 container mx-auto px-4 py-4 max-w-6xl h-screen flex flex-col">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-3 h-full">
          <div className="flex-shrink-0">
            <ProfileHeader />
          </div>
          <div className="flex-1 flex flex-col gap-3 min-h-0">
            <div className="flex-1">
              <DiscordSection />
            </div>
            <div className="flex-shrink-0">
              <MusicPlayer autoPlay={true} />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col gap-4 h-full">
          <div className="flex-shrink-0">
            <ProfileHeader />
          </div>
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-0">
            <div className="flex flex-col">
              <DiscordSection />
            </div>
            <div className="flex flex-col">
              <MusicPlayer autoPlay={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
