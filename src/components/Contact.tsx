
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      url: "#",
      color: "hover:text-sky-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Talk</h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, creative ideas, or 
                potential collaborations. Don't hesitate to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-gray-300">{info.details}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110 text-gray-300 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
