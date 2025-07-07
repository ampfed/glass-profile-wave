
import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

interface MusicPlayerProps {
  autoPlay?: boolean;
}

const MusicPlayer = ({ autoPlay = false }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(45);
  const [duration] = useState(180);

  useEffect(() => {
    if (autoPlay) {
      setIsPlaying(true);
      // Start the time progression when auto-playing
      const interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            return 0; // Loop back to start
          }
          return prev + 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [autoPlay, duration]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = (currentTime / duration) * 100;

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">🎵 Best Playlist Ever</h2>
      
      <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl p-6 border border-white/10">
        {/* Song Info */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-2">Shenanigans</h3>
          <p className="text-white/70">Jasiah (feat. Yung Bans)</p>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-white/60 text-sm mb-2">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2 cursor-pointer">
            <div 
              className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white">
            <SkipBack className="w-5 h-5" />
          </button>
          
          <button 
            onClick={handlePlayPause}
            className="p-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 transition-all duration-300 text-white transform hover:scale-105 shadow-lg"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
          </button>
          
          <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white">
            <SkipForward className="w-5 h-5" />
          </button>
          
          <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white">
            <Volume2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
