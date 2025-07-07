
import React from 'react';
import { Code, Shield, Terminal, Wrench, Eye } from 'lucide-react';

const ProfileHeader = () => {
  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-4 md:p-8 shadow-2xl hover:bg-white/15 transition-all duration-300">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        {/* Profile Image */}
        <div className="relative">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 p-1">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-2xl md:text-4xl font-bold text-white">
              A
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-green-500 w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-white/20 animate-pulse"></div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            ampfed
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-3 md:mb-4">Dev @ ampfed</p>
          
          {/* View Counter */}
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4 md:mb-6">
            <Eye className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
            <span className="text-white/90 font-semibold text-sm md:text-base">6,014 views</span>
          </div>

          {/* Skills Icons */}
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
            <div className="skill-icon bg-purple-500/20 p-2 md:p-3 rounded-full hover:bg-purple-500/30 transition-colors cursor-pointer group">
              <Code className="w-4 h-4 md:w-6 md:h-6 text-purple-300 group-hover:text-purple-200 transition-colors" />
            </div>
            <div className="skill-icon bg-blue-500/20 p-2 md:p-3 rounded-full hover:bg-blue-500/30 transition-colors cursor-pointer group">
              <Shield className="w-4 h-4 md:w-6 md:h-6 text-blue-300 group-hover:text-blue-200 transition-colors" />
            </div>
            <div className="skill-icon bg-indigo-500/20 p-2 md:p-3 rounded-full hover:bg-indigo-500/30 transition-colors cursor-pointer group">
              <Terminal className="w-4 h-4 md:w-6 md:h-6 text-indigo-300 group-hover:text-indigo-200 transition-colors" />
            </div>
            <div className="skill-icon bg-cyan-500/20 p-2 md:p-3 rounded-full hover:bg-cyan-500/30 transition-colors cursor-pointer group">
              <Wrench className="w-4 h-4 md:w-6 md:h-6 text-cyan-300 group-hover:text-cyan-200 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
