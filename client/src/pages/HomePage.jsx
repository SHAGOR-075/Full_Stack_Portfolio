import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

const HomePage = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch featured projects
  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://full-stack-portfoliobackend.vercel.app/api/projects?limit=3');
        setFeaturedProjects(response.data.projects || response.data);
      } catch (err) {
        console.error('Error fetching featured projects:', err);
        // Keep empty array on error to avoid breaking the page
        setFeaturedProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProjects();
  }, []);

  return (
    <>
      <SEO 
        title="Home"
        description="Welcome to my portfolio website. I'm a full-stack developer specializing in creating exceptional digital experiences."
        keywords={['portfolio', 'developer', 'web development', 'full-stack']}
      />
      
      <Hero />
      
      {/* Featured Projects Section */}
      <section className="section bg-white dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Check out some of my recent work. These projects showcase my skills and expertise in web development.
            </p>
          </motion.div>
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.length > 0 ? (
                featuredProjects.map((project, index) => (
                  <motion.div
                    key={project._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="card group"
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.thumbnail || `https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80`} 
                        alt={project.title}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://placehold.co/600x400/3b82f6/ffffff?text=${encodeURIComponent(project.title)}`;
                        }}
                        crossOrigin="anonymous"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies && project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Link 
                        to={`/projects/${project._id}`} 
                        className="text-primary-600 dark:text-primary-400 font-medium hover:underline inline-flex items-center"
                      >
                        View Details
                        <i className="bi bi-arrow-right ml-2"></i>
                      </Link>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400">No projects available yet.</p>
                  <Link to="/projects" className="btn-primary mt-4">
                    View All Projects
                  </Link>
                </div>
              )}
            </div>
          )}
          
          <div className="text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link
                to="/projects"
                className="btn-primary inline-flex items-center"
              >
                View All Projects
                <i className="bi bi-arrow-right ml-2"></i>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Overview Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I've worked with a variety of technologies and frameworks to create robust and scalable applications.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Skill 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="text-primary-600 dark:text-primary-400 text-3xl mb-4">
                <i className="bi bi-filetype-jsx"></i>
              </div>
              <h3 className="font-bold mb-2">React</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Frontend Development</p>
            </motion.div>
            
            {/* Skill 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="text-primary-600 dark:text-primary-400 text-3xl mb-4">
                <i className="bi bi-hdd-stack"></i>
              </div>
              <h3 className="font-bold mb-2">Node.js</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Backend Development</p>
            </motion.div>
            
            {/* Skill 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="text-primary-600 dark:text-primary-400 text-3xl mb-4">
                <i className="bi bi-database"></i>
              </div>
              <h3 className="font-bold mb-2">MongoDB</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Database</p>
            </motion.div>
            
            {/* Skill 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="text-primary-600 dark:text-primary-400 text-3xl mb-4">
                <i className="bi bi-palette"></i>
              </div>
              <h3 className="font-bold mb-2">UI/UX Design</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Frontend</p>
            </motion.div>
            
            {/* Skill 5 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="text-primary-600 dark:text-primary-400 text-3xl mb-4">
                <i className="bi bi-git"></i>
              </div>
              <h3 className="font-bold mb-2">Git</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Version Control</p>
            </motion.div>
            
            {/* Skill 6 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="text-primary-600 dark:text-primary-400 text-3xl mb-4">
                <i className="bi bi-cloud"></i>
              </div>
              <h3 className="font-bold mb-2">AWS</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Cloud Services</p>
            </motion.div>
            
            {/* Skill 7 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="text-primary-600 dark:text-primary-400 text-3xl mb-4">
                <i className="bi bi-phone"></i>
              </div>
              <h3 className="font-bold mb-2">React Native</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Mobile Development</p>
            </motion.div>
            
            {/* Skill 8 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="text-primary-600 dark:text-primary-400 text-3xl mb-4">
                <i className="bi bi-shield-check"></i>
              </div>
              <h3 className="font-bold mb-2">Security</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Web Security</p>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true, margin: "-100px" }}
              href="/skills"
              className="btn-outline inline-flex items-center"
            >
              View All Skills
              <i className="bi bi-arrow-right ml-2"></i>
            </motion.a>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg mb-8 text-white/90">
              I'm currently available for freelance work or full-time positions.
              If you're interested in working together, let's connect!
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-white text-primary-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            >
              Get In Touch
              <i className="bi bi-arrow-right ml-2"></i>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
