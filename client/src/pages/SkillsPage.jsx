import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import SkillBar from '../components/SkillBar';

const SkillsPage = () => {
  // Frontend skills
  const frontendSkills = [
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'React.js', level: 92 },
    { name: 'Vue.js', level: 85 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'Responsive Design', level: 94 },
    { name: 'UI/UX Design', level: 80 }
  ];
  
  // Backend skills
  const backendSkills = [
    { name: 'Node.js', level: 88 },
    { name: 'Express.js', level: 90 },
    { name: 'MongoDB', level: 85 },
    { name: 'PostgreSQL', level: 82 },
    { name: 'RESTful APIs', level: 92 },
    { name: 'GraphQL', level: 78 },
    { name: 'Authentication & Security', level: 86 }
  ];
  
  // Other skills
  const otherSkills = [
    { name: 'Git & GitHub', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'AWS', level: 80 },
    { name: 'CI/CD', level: 78 },
    { name: 'Testing (Jest, Mocha)', level: 82 },
    { name: 'Agile Methodologies', level: 85 },
    { name: 'Problem Solving', level: 95 }
  ];
  
  // Tools and technologies
  const tools = [
    { name: 'VS Code', icon: 'bi-code-square' },
    { name: 'Git', icon: 'bi-git' },
    { name: 'GitHub', icon: 'bi-github' },
    { name: 'npm', icon: 'bi-box' },
    { name: 'Webpack', icon: 'bi-box-seam' },
    { name: 'Figma', icon: 'bi-palette' },
    { name: 'Postman', icon: 'bi-send' },
    { name: 'Chrome DevTools', icon: 'bi-bug' },
    { name: 'Docker', icon: 'bi-box2' },
    { name: 'AWS', icon: 'bi-cloud' },
    { name: 'MongoDB Compass', icon: 'bi-database' },
    { name: 'Terminal', icon: 'bi-terminal' }
  ];

  return (
    <>
      <SEO 
        title="Skills"
        description="Explore my technical skills, tools, and technologies I use for web development and software engineering."
        keywords={['skills', 'web development', 'frontend', 'backend', 'tools', 'technologies']}
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Skills</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills, tools, and technologies I've mastered throughout my career.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Skills Overview */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Frontend Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 h-full">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-4">
                    <i className="bi bi-laptop text-2xl text-primary-600 dark:text-primary-400"></i>
                  </div>
                  <h2 className="text-2xl font-bold">Frontend</h2>
                </div>
                
                <div>
                  {frontendSkills.map((skill, index) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill.name} 
                      level={skill.level} 
                      index={index} 
                    />
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Backend Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 h-full">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mr-4">
                    <i className="bi bi-server text-2xl text-secondary-600 dark:text-secondary-400"></i>
                  </div>
                  <h2 className="text-2xl font-bold">Backend</h2>
                </div>
                
                <div>
                  {backendSkills.map((skill, index) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill.name} 
                      level={skill.level} 
                      index={index} 
                    />
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Other Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 h-full">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center mr-4">
                    <i className="bi bi-gear text-2xl text-gray-700 dark:text-gray-300"></i>
                  </div>
                  <h2 className="text-2xl font-bold">Other Skills</h2>
                </div>
                
                <div>
                  {otherSkills.map((skill, index) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill.name} 
                      level={skill.level} 
                      index={index} 
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Tools & Technologies */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Tools & Technologies</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The essential tools and technologies I use in my development workflow.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-primary-600 dark:text-primary-400 text-3xl mb-3">
                  <i className={`bi ${tool.icon}`}></i>
                </div>
                <h3 className="font-medium">{tool.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Learning & Growth */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-6">Continuous Learning</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  I believe in the power of continuous learning and staying updated with the latest technologies and best practices in the ever-evolving field of web development.
                </p>
                <p>
                  Currently, I'm expanding my knowledge in:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-center">
                    <i className="bi bi-check-circle-fill text-primary-600 dark:text-primary-400 mr-2"></i>
                    <span>Advanced React patterns and performance optimization</span>
                  </li>
                  <li className="flex items-center">
                    <i className="bi bi-check-circle-fill text-primary-600 dark:text-primary-400 mr-2"></i>
                    <span>Serverless architecture and cloud functions</span>
                  </li>
                  <li className="flex items-center">
                    <i className="bi bi-check-circle-fill text-primary-600 dark:text-primary-400 mr-2"></i>
                    <span>Web3 and blockchain development</span>
                  </li>
                  <li className="flex items-center">
                    <i className="bi bi-check-circle-fill text-primary-600 dark:text-primary-400 mr-2"></i>
                    <span>Machine learning and AI integration in web applications</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-lg transform rotate-3 scale-105 opacity-20 animate-pulse-slow"></div>
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Continuous learning and growth"
                className="relative z-10 rounded-lg shadow-xl w-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/800x600/3b82f6/ffffff?text=Continuous+Learning";
                }}
                crossOrigin="anonymous"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-lg mb-8 text-white/90">
              Let's combine my technical skills with your vision to create something extraordinary.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="inline-block px-8 py-3 bg-white text-primary-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
              >
                Get In Touch
              </a>
              <a 
                href="/projects" 
                className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
              >
                View My Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SkillsPage;
