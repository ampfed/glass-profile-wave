
import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import SocialLinks from '../components/SocialLinks';
import ProjectShowcase from '../components/ProjectShowcase';
import DiscordSection from '../components/DiscordSection';
import MusicPlayer from '../components/MusicPlayer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)" /%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          {/* Profile Header */}
          <ProfileHeader />
          
          {/* Social Links */}
          <SocialLinks />
          
          {/* Project Showcase */}
          <ProjectShowcase />
          
          {/* Discord Section */}
          <DiscordSection />
          
          {/* Music Player */}
          <MusicPlayer />
        </div>
      </div>
    </div>
  );
};

export default Index;
