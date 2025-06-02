
import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my passion."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design",
      description: "Crafting beautiful user interfaces that provide exceptional user experiences."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Performance",
      description: "Optimizing applications for speed and performance across all devices."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "User Focused",
      description: "Building products that users love and find valuable in their daily lives."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 dark:from-purple-900/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
              Passionate Developer & Designer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              With over 5 years of experience in web development, I specialize in creating 
              digital solutions that combine technical excellence with exceptional design. 
              My journey began with a curiosity about how things work on the web, and it 
              has evolved into a passion for building products that make a difference.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              I believe in the power of clean code, beautiful design, and user-centered 
              thinking. Every project is an opportunity to learn something new and push 
              the boundaries of what's possible.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop" 
                alt="Coding workspace" 
                className="rounded-2xl shadow-2xl w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
