
import React from 'react';
import { Github, Mail, MessageCircle, User, Gamepad2 } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/ampfed',
      color: 'from-gray-500 to-gray-700',
      hoverColor: 'hover:from-gray-400 hover:to-gray-600'
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      url: '#',
      color: 'from-indigo-500 to-purple-600',
      hoverColor: 'hover:from-indigo-400 hover:to-purple-500'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:contact@ampfed.dev',
      color: 'from-red-500 to-pink-600',
      hoverColor: 'hover:from-red-400 hover:to-pink-500'
    },
    {
      name: 'Profile',
      icon: User,
      url: '#',
      color: 'from-blue-500 to-cyan-600',
      hoverColor: 'hover:from-blue-400 hover:to-cyan-500'
    },
    {
      name: 'Gaming',
      icon: Gamepad2,
      url: '#',
      color: 'from-green-500 to-emerald-600',
      hoverColor: 'hover:from-green-400 hover:to-emerald-500'
    }
  ];

  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">Connect With Me</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r ${link.color} ${link.hoverColor} transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
          >
            <link.icon className="w-5 h-5 text-white" />
            <span className="text-white font-medium">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
