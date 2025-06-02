
import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Firebase", "Vuex", "Socket.io", "CSS3"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides real-time weather data, forecasts, and interactive maps using external APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tech: ["JavaScript", "API Integration", "Chart.js", "CSS Grid", "PWA"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tech: ["React", "Tailwind CSS", "Framer Motion", "TypeScript", "Vite"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "An analytics dashboard for social media management with data visualization, scheduling features, and performance metrics.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      tech: ["Angular", "D3.js", "Node.js", "PostgreSQL", "Docker"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "AI Chat Interface",
      description: "A modern chat interface with AI integration, featuring real-time messaging, file sharing, and intelligent responses.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tech: ["React", "OpenAI API", "WebSocket", "Redis", "Express"],
      liveUrl: "#",
      codeUrl: "#",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.liveUrl}
                    className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Eye className="w-4 h-4 text-white" />
                  </a>
                  <a 
                    href={project.codeUrl}
                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.codeUrl}
                    className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
