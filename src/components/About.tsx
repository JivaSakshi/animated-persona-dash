
import React from 'react';
import { User, MapPin, Calendar, Heart, Coffee, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 my-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-500">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating animated icons */}
        <div className="absolute top-16 left-16 animate-float">
          <Coffee className="w-6 h-6 text-orange-400/40 animate-pulse" />
        </div>
        <div className="absolute top-32 right-32 animate-float" style={{ animationDelay: '2s' }}>
          <Code2 className="w-8 h-8 text-blue-400/40 animate-pulse" />
        </div>
        <div className="absolute bottom-24 right-24 animate-float" style={{ animationDelay: '1.5s' }}>
          <Heart className="w-7 h-7 text-red-400/40 animate-pulse" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="animate-scale-in">
            <div className="relative">
              <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 dark:border-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=face" 
                  alt="About Me" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-60 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Hello! I'm Nilesh Giri
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                A passionate Full Stack Developer with over 5 years of experience creating digital solutions 
                that bridge the gap between design and functionality. I specialize in building scalable web 
                applications using modern technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through technical writing and mentoring.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 group">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Age</p>
                    <p className="font-semibold text-gray-900 dark:text-white">28 Years</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 group">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-semibold text-gray-900 dark:text-white">Mumbai, India</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 group">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                    <p className="font-semibold text-gray-900 dark:text-white">5+ Years</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 group">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Passion</p>
                    <p className="font-semibold text-gray-900 dark:text-white">Problem Solving</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2">
                Let's Work Together
                <User className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
