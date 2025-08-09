import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  
  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://full-stack-portfoliobackend.vercel.app/api/projects');
        setProjects(response.data.projects || response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, []);
  
  // Extract unique categories from projects
  const categories = ['all', ...new Set(projects.map(project => project.category || 'other'))];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <>
      <SEO 
        title="Projects"
        description="Explore my portfolio of web development, mobile apps, and other software projects."
        keywords={['projects', 'portfolio', 'web development', 'mobile apps']}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A collection of my work, side projects, and experiments. Each project represents a unique challenge and learning experience.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container-custom">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>
          
          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
            </div>
          )}
          
          {/* Error State */}
          {error && !loading && (
            <div className="text-center py-12">
              <i className="bi bi-exclamation-triangle text-4xl text-red-500 mb-4"></i>
              <p className="text-lg text-gray-600 dark:text-gray-400">{error}</p>
            </div>
          )}
          
          {/* Projects Grid */}
          {!loading && !error && (
            <>
              {filteredProjects.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600 dark:text-gray-400">No projects found in this category.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project, index) => (
                    <ProjectCard key={project._id} project={project} index={index} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Interested in Working Together?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              I'm always open to discussing new projects or partnership opportunities.
            </p>
            <a href="/contact" className="btn-primary">
              Get In Touch
              <i className="bi bi-arrow-right ml-2"></i>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
