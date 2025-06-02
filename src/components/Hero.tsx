
import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast'];
  
  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    
    const typeWriter = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeWriter);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeWriter);
  }, [currentIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="animate-fade-in">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-70 animate-pulse"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-in-right">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Nilesh</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
            <span className="mr-2">I'm a</span>
            <span className="text-blue-400 font-semibold min-w-[280px] text-left">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300">
            Passionate about creating digital experiences that make a difference. 
            I craft beautiful, functional, and user-centered solutions with modern technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-500">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
            <button className="px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              View My Work
            </button>
          </div>
          
          <div className="flex justify-center space-x-6 animate-fade-in delay-700">
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
              <Github className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
