
import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Eye, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const allProjects = [
    {
      title: "E-Commerce Platform",
      description: "A comprehensive full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, admin dashboard, inventory management, and real-time notifications.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Redux"],
      category: "fullstack",
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, time tracking, and project analytics dashboard.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Firebase", "Vuex", "Socket.io", "CSS3", "Chart.js"],
      category: "frontend",
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application providing real-time weather data, 7-day forecasts, interactive maps, weather alerts, and location-based recommendations using multiple APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tech: ["JavaScript", "API Integration", "Chart.js", "CSS Grid", "PWA"],
      category: "frontend",
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "AI Chat Interface",
      description: "A modern chat interface with AI integration featuring real-time messaging, file sharing, intelligent responses, conversation history, and multi-language support.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tech: ["React", "OpenAI API", "WebSocket", "Redis", "Express", "TypeScript"],
      category: "fullstack",
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "An analytics dashboard for social media management with data visualization, post scheduling, performance metrics, audience insights, and automated reporting features.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      tech: ["Angular", "D3.js", "Node.js", "PostgreSQL", "Docker"],
      category: "fullstack",
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Crypto Trading Bot",
      description: "An automated cryptocurrency trading bot with machine learning algorithms, risk management, portfolio optimization, and real-time market analysis capabilities.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      tech: ["Python", "TensorFlow", "REST APIs", "WebSocket", "Docker"],
      category: "backend",
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Fitness Tracking App",
      description: "A comprehensive fitness application with workout planning, progress tracking, nutrition monitoring, social features, and personalized coaching recommendations.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tech: ["React Native", "Firebase", "HealthKit", "Redux", "Charts"],
      category: "mobile",
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Learning Management System",
      description: "An educational platform with course creation tools, interactive lessons, progress tracking, quizzes, certificates, and collaborative learning features.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "WebRTC", "AWS S3"],
      category: "fullstack",
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Real Estate Platform",
      description: "A property listing platform with advanced search, virtual tours, mortgage calculator, agent profiles, and integrated communication tools for buyers and sellers.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Mapbox", "Stripe"],
      category: "fullstack",
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "IoT Dashboard",
      description: "An Internet of Things monitoring dashboard with real-time sensor data visualization, device management, automated alerts, and predictive analytics.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      tech: ["React", "MQTT", "InfluxDB", "Grafana", "Docker"],
      category: "fullstack",
      liveUrl: "#",
      codeUrl: "#",
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Portfolio</span>
            </button>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              All Projects
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setFilter(category.id);
                setCurrentPage(1);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:scale-105'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in border border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${index * 100}ms` }}
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
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.codeUrl}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === page
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:scale-105'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
