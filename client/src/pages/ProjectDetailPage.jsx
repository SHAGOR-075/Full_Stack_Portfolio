import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import SEO from '../components/SEO';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Fetch project details from API
  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/projects/${id}`);
        setProject(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching project:', err);
        setError('Failed to load project details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchProject();
  }, [id]);
  
  // Next image in gallery
  const nextImage = () => {
    if (project && project.images) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  
  // Previous image in gallery
  const prevImage = () => {
    if (project && project.images) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
      );
    }
  };
  
  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };
  
  // Prepare SEO data
  const seoData = project ? {
    title: project.title,
    description: project.description,
    keywords: [...project.technologies, 'project', 'portfolio'],
    ogImage: project.images && project.images.length > 0 ? project.images[0] : '',
    ogType: 'article',
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": project.title,
      "description": project.description,
      "applicationCategory": "WebApplication",
      "operatingSystem": "Any",
      "author": {
        "@type": "Person",
        "name": " Md Kharul Islam Shagor"
      },
      "datePublished": project.date
    }
  } : {
    title: 'Project Details',
    description: 'Detailed information about this project including technologies used and key features.'
  };

  return (
    <>
      {project && <SEO {...seoData} />}
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Link to="/projects" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-4">
              <i className="bi bi-arrow-left mr-2"></i>
              Back to Projects
            </Link>
            {loading ? (
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Loading Project...</h1>
            ) : error ? (
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Not Found</h1>
            ) : (
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
            )}
          </motion.div>
        </div>
      </section>
      
      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-20 bg-white dark:bg-gray-800">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      )}
      
      {/* Error State */}
      {error && !loading && (
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container-custom">
            <div className="text-center py-12">
              <i className="bi bi-exclamation-triangle text-4xl text-red-500 mb-4"></i>
              <p className="text-lg text-gray-600 dark:text-gray-400">{error}</p>
              <Link to="/projects" className="btn-primary mt-8">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      )}
      
      {/* Project Details */}
      {!loading && !error && project && (
        <>
          {/* Image Gallery */}
          <section className="py-12 bg-white dark:bg-gray-800">
            <div className="container-custom">
              <div className="relative">
                {/* Main Image */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-video overflow-hidden rounded-xl shadow-xl"
                >
                  <img 
                    src={project.images && project.images.length > 0 ? project.images[currentImageIndex] : 'https://placehold.co/1200x800/3b82f6/ffffff?text=Project+Image'}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/1200x800/3b82f6/ffffff?text=${encodeURIComponent(project.title)}`;
                    }}
                    crossOrigin="anonymous"
                  />
                  
                  {/* Navigation Arrows */}
                  {project.images && project.images.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                        aria-label="Previous image"
                      >
                        <i className="bi bi-chevron-left text-xl"></i>
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                        aria-label="Next image"
                      >
                        <i className="bi bi-chevron-right text-xl"></i>
                      </button>
                      
                      {/* Image Counter */}
                      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        {currentImageIndex + 1} / {project.images.length}
                      </div>
                    </>
                  )}
                </motion.div>
                
                {/* Thumbnails */}
                {project.images && project.images.length > 1 && (
                  <div className="flex justify-center mt-4 space-x-2 overflow-x-auto py-2">
                    {project.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-16 h-16 rounded-md overflow-hidden transition-all ${
                          currentImageIndex === index 
                            ? 'ring-2 ring-primary-600 scale-105' 
                            : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img 
                          src={image} 
                          alt={`${project.title} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://placehold.co/100x100/3b82f6/ffffff?text=${index + 1}`;
                          }}
                          crossOrigin="anonymous"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
          
          {/* Project Info */}
          <section className="py-16 bg-white dark:bg-gray-800">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                      <p className="mb-6">{project.description}</p>
                      {project.longDescription && (
                        <div className="mt-6 whitespace-pre-line">
                          {project.longDescription}
                        </div>
                      )}
                    </div>
                    
                    {/* Technologies */}
                    <div className="mt-12">
                      <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Sidebar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="lg:col-span-1"
                >
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-6">Project Details</h3>
                    
                    <div className="space-y-4">
                      {/* Date */}
                      {project.date && (
                        <div className="flex items-start">
                          <i className="bi bi-calendar3 text-primary-600 dark:text-primary-400 text-xl mr-4 mt-1"></i>
                          <div>
                            <h4 className="font-semibold">Date</h4>
                            <p className="text-gray-600 dark:text-gray-400">{formatDate(project.date)}</p>
                          </div>
                        </div>
                      )}
                      
                      {/* Client */}
                      {project.client && (
                        <div className="flex items-start">
                          <i className="bi bi-building text-primary-600 dark:text-primary-400 text-xl mr-4 mt-1"></i>
                          <div>
                            <h4 className="font-semibold">Client</h4>
                            <p className="text-gray-600 dark:text-gray-400">{project.client}</p>
                          </div>
                        </div>
                      )}
                      
                      {/* Role */}
                      {project.role && (
                        <div className="flex items-start">
                          <i className="bi bi-person text-primary-600 dark:text-primary-400 text-xl mr-4 mt-1"></i>
                          <div>
                            <h4 className="font-semibold">My Role</h4>
                            <p className="text-gray-600 dark:text-gray-400">{project.role}</p>
                          </div>
                        </div>
                      )}
                      
                      {/* Category */}
                      {project.category && (
                        <div className="flex items-start">
                          <i className="bi bi-tag text-primary-600 dark:text-primary-400 text-xl mr-4 mt-1"></i>
                          <div>
                            <h4 className="font-semibold">Category</h4>
                            <p className="text-gray-600 dark:text-gray-400">
                              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Links */}
                    <div className="mt-8 space-y-4">
                      {project.demoLink && (
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-primary w-full flex justify-center items-center"
                        >
                          <i className="bi bi-box-arrow-up-right mr-2"></i>
                          Live Demo
                        </a>
                      )}
                      
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-outline w-full flex justify-center items-center"
                        >
                          <i className="bi bi-github mr-2"></i>
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Next/Prev Navigation */}
          <section className="py-12 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="container-custom">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <Link 
                  to="/projects" 
                  className="mb-4 sm:mb-0 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <i className="bi bi-grid-3x3-gap mr-2"></i>
                  All Projects
                </Link>
                
                <div className="flex space-x-4">
                  <Link 
                    to={`/projects/${parseInt(id) - 1 > 0 ? parseInt(id) - 1 : 1}`} 
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <i className="bi bi-arrow-left mr-2"></i>
                    Previous
                  </Link>
                  
                  <Link 
                    to={`/projects/${parseInt(id) + 1}`} 
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    Next
                    <i className="bi bi-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ProjectDetailPage;
