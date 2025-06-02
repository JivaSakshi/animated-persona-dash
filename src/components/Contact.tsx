
import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "nilesh@example.com",
      link: "mailto:nilesh@example.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91 12345 67890",
      link: "tel:+911234567890"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Mumbai, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "#",
      color: "hover:text-gray-600 dark:hover:text-gray-400"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-600 dark:hover:text-blue-400"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      url: "#",
      color: "hover:text-sky-600 dark:hover:text-sky-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex flex-col items-center text-center p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all duration-300 group hover:scale-105 shadow-sm hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300 mb-4">
                  {info.icon}
                </div>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-2">{info.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{info.details}</p>
              </a>
            ))}
          </div>

          <div className="text-center space-y-8">
            <div>
              <h4 className="text-gray-900 dark:text-white font-semibold mb-6">Follow Me</h4>
              <div className="flex justify-center space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-4 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all duration-300 hover:scale-110 text-gray-600 dark:text-gray-300 ${social.color} shadow-sm hover:shadow-lg animate-bounce-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={() => navigate('/contact')}
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <Mail className="w-5 h-5" />
              <span>Send Message</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
