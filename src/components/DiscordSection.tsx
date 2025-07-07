
import React from 'react';
import { MessageCircle, Crown, Shield, Zap } from 'lucide-react';

const DiscordSection = () => {
  const badges = [
    { icon: Crown, name: 'Discord Partner', color: 'text-yellow-400' },
    { icon: Shield, name: 'Verified Developer', color: 'text-green-400' },
    { icon: Zap, name: 'Early Supporter', color: 'text-purple-400' }
  ];

  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Discord Identity</h2>
      
      <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">@tsoxas</h3>
            <p className="text-white/70">Active Discord Developer</p>
          </div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
        </div>
        
        {/* Badges */}
        <div className="flex flex-wrap gap-3 mb-6">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg">
              <badge.icon className={`w-4 h-4 ${badge.color}`} />
              <span className="text-white/90 text-sm">{badge.name}</span>
            </div>
          ))}
        </div>
        
        <button className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
          <MessageCircle className="w-5 h-5" />
          Add on Discord
        </button>
      </div>
    </div>
  );
};

export default DiscordSection;
