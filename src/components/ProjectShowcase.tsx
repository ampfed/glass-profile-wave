
import React from 'react';
import { ExternalLink, Star, GitFork } from 'lucide-react';

const ProjectShowcase = () => {
  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl hover:bg-white/15 transition-all duration-300">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Featured Project</h2>
      
      <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
              🔗 Discord.js v14 Bot Base
            </h3>
            <p className="text-white/70 mb-4">
              A comprehensive Discord bot template built with Discord.js v14, featuring modern JavaScript patterns, command handling, and event management.
            </p>
          </div>
          <ExternalLink className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
        </div>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1 text-white/60">
            <Star className="w-4 h-4" />
            <span className="text-sm">42</span>
          </div>
          <div className="flex items-center gap-1 text-white/60">
            <GitFork className="w-4 h-4" />
            <span className="text-sm">12</span>
          </div>
          <span className="px-2 py-1 bg-blue-500/30 text-blue-200 text-xs rounded-full">JavaScript</span>
        </div>
        
        <a
          href="https://github.com/tsoxas/base"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <Github className="w-5 h-5" />
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectShowcase;
