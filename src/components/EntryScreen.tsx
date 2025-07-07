
import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';

interface EntryScreenProps {
  onEnter: () => void;
}

const EntryScreen = ({ onEnter }: EntryScreenProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 cursor-pointer group overflow-hidden"
         onClick={onEnter}>
      {/* Animated moving stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large moving stars */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse opacity-80"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-500 opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-1000 opacity-70"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-700 opacity-50"></div>
        
        {/* Additional animated stars */}
        <div className="absolute top-10 left-20 w-1 h-1 bg-purple-300 rounded-full animate-ping delay-200"></div>
        <div className="absolute bottom-20 right-40 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-800"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-pink-300 rounded-full animate-ping delay-1200"></div>
        <div className="absolute bottom-40 left-40 w-2 h-2 bg-indigo-300 rounded-full animate-ping delay-600"></div>
        
        {/* Moving stars with custom animation */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-1 h-1 bg-white rounded-full animate-bounce" style={{
            top: '20%',
            left: '10%',
            animationDelay: '0s',
            animationDuration: '3s'
          }}></div>
          <div className="absolute w-1 h-1 bg-white rounded-full animate-bounce" style={{
            top: '60%',
            left: '80%',
            animationDelay: '1s',
            animationDuration: '4s'
          }}></div>
          <div className="absolute w-1 h-1 bg-white rounded-full animate-bounce" style={{
            top: '80%',
            left: '30%',
            animationDelay: '2s',
            animationDuration: '5s'
          }}></div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="text-center relative z-10 transform transition-all duration-500 group-hover:scale-105">
        {/* Logo/Initial */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-4xl font-bold text-white shadow-2xl transform transition-all duration-500 group-hover:shadow-purple-500/25 group-hover:rotate-6">
            A
          </div>
          <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-500/20 to-blue-600/20 animate-ping"></div>
        </div>
        
        {/* Title */}
        <h1 className="text-6xl font-bold text-white mb-4 tracking-wider transform transition-all duration-500 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text">
          ampfed
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl text-gray-400 mb-12 transform transition-all duration-500 group-hover:text-gray-300">
          Welcome to the experience
        </p>
        
        {/* Enter button */}
        <div className="relative inline-block"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
          <div className="px-12 py-4 border-2 border-white/20 rounded-full text-white font-medium text-lg tracking-wide transition-all duration-300 hover:border-purple-400 hover:text-purple-300 hover:shadow-lg hover:shadow-purple-500/25 relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              <Volume2 className={`w-5 h-5 transition-all duration-300 ${isHovered ? 'animate-pulse' : ''}`} />
              CLICK TO ENTER
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
          
          {/* Pulse effect */}
          <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Hint text */}
        <p className="text-gray-600 text-sm mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
          Music will start automatically
        </p>
      </div>
    </div>
  );
};

export default EntryScreen;
