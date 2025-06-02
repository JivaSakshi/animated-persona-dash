
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (inView && !animationTriggered) {
      setAnimationTriggered(true);
    }
  }, [inView, animationTriggered]);

  const skills = [
    { name: 'JavaScript/TypeScript', level: 95, color: 'from-yellow-400 to-orange-500' },
    { name: 'React.js', level: 92, color: 'from-blue-400 to-cyan-500' },
    { name: 'Node.js', level: 88, color: 'from-green-400 to-emerald-500' },
    { name: 'Python', level: 85, color: 'from-blue-500 to-indigo-600' },
    { name: 'UI/UX Design', level: 90, color: 'from-purple-400 to-pink-500' },
    { name: 'Database Design', level: 83, color: 'from-red-400 to-rose-500' },
  ];

  const technologies = [
    'React', 'Vue.js', 'Angular', 'Node.js', 'Express', 'MongoDB',
    'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'REST APIs',
    'Tailwind CSS', 'Sass', 'Webpack', 'Git', 'Jest', 'Cypress'
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technologies and skills I've mastered throughout my journey as a developer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skill Bars */}
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Core Competencies</h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: animationTriggered ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Technologies & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 text-center group animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 font-medium">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
