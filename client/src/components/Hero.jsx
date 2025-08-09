import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-300 dark:bg-primary-900 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary-300 dark:bg-secondary-900 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm font-medium mb-6"
            >
              Full Stack Developer
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Hi, I'm <span className="text-primary-600 dark:text-primary-400">Md Kharul Islam Shagor</span>
              <br />
              I build things for the web
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
            >
              I'm a passionate full-stack developer specializing in creating exceptional digital experiences. 
              Currently focused on building accessible, human-centered products.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/projects" className="btn-primary">
                View My Work
                <i className="bi bi-arrow-right ml-2"></i>
              </Link>
              <Link to="/contact" className="btn-outline">
                Get In Touch
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-12 flex items-center space-x-6"
            >
              <a 
                href="https://github.com/SHAGOR-075" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <i className="bi bi-github text-2xl"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/md-kharul-islam/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin text-2xl"></i>
              </a>
              <a 
                href="https://www.facebook.com/share/1ECfibTHCi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <i className="bi bi-facebook text-2xl"></i>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full blur-2xl opacity-20 animate-pulse-slow"></div>
              <img 
                src="https://i.ibb.co.com/G3BpN2Ns/IMG-4119-copy.jpg" 
                alt="Shagor - Full Stack Developer"
                className="relative z-10 rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white dark:border-gray-800 shadow-xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/400x400/3b82f6/ffffff?text=John+Doe";
                }}
                crossOrigin="anonymous"
              />
              
              {/* Floating Elements */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-4 py-2 flex items-center"
              >
                <i className="bi bi-code-slash text-primary-600 dark:text-primary-400 text-xl mr-2"></i>
                <span className="font-medium">Full Stack Dev</span>
              </motion.div>
              
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -top-6 -right-6 z-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-4 py-2 flex items-center"
              >
                <i className="bi bi-lightning-charge-fill text-secondary-600 dark:text-secondary-400 text-xl mr-2"></i>
                <span className="font-medium">Problem Solver</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-gray-600 dark:border-gray-400 rounded-full flex justify-center pt-2"
          >
            <motion.div 
              animate={{ height: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 bg-gray-600 dark:bg-gray-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
