import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const ProjectsAdminPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  
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
  
  // Handle delete project
  const handleDelete = async () => {
    if (!deleteId) return;
    
    try {
      setDeleteLoading(true);
      
      await axios.delete(`https://full-stack-portfoliobackend.vercel.app/api/projects/${deleteId}`);
      
      // Update local state
      setProjects(projects.filter(project => project._id !== deleteId));
      
      // Close modal
      setShowDeleteModal(false);
      setDeleteId(null);
    } catch (err) {
      console.error('Error deleting project:', err);
      setError('Failed to delete project. Please try again later.');
    } finally {
      setDeleteLoading(false);
    }
  };
  
  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Projects</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your portfolio projects
          </p>
        </div>
        
        <Link 
          to="/admin/projects/new" 
          className="btn-primary flex items-center"
        >
          <i className="bi bi-plus-lg mr-2"></i>
          Add New Project
        </Link>
      </div>
      
      {/* Error Message */}
      {error && (
        <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-4 rounded-lg mb-6">
          <p className="flex items-center">
            <i className="bi bi-exclamation-triangle mr-2"></i>
            {error}
          </p>
        </div>
      )}
      
      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      )}
      
      {/* Projects Table */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700 text-left text-gray-600 dark:text-gray-300">
                  <th className="px-6 py-4 font-medium">Project</th>
                  <th className="px-6 py-4 font-medium">Category</th>
                  <th className="px-6 py-4 font-medium">Technologies</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {projects.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                      No projects found. Click "Add New Project" to create one.
                    </td>
                  </tr>
                ) : (
                  projects.map((project) => (
                    <tr key={project._id} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img 
                            src={project.thumbnail} 
                            alt={project.title}
                            className="w-12 h-12 rounded object-cover mr-3"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = `https://placehold.co/100x100/3b82f6/ffffff?text=${encodeURIComponent(project.title.charAt(0))}`;
                            }}
                            crossOrigin="anonymous"
                          />
                          <div>
                            <p className="font-medium text-gray-800 dark:text-gray-200">{project.title}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{project.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 capitalize">
                        <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies && project.technologies.slice(0, 2).map((tech, index) => (
                            <span 
                              key={index}
                              className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies && project.technologies.length > 2 && (
                            <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                              +{project.technologies.length - 2}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">
                        {formatDate(project.createdAt)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <Link 
                            to={`/admin/projects/edit/${project._id}`}
                            className="p-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded hover:bg-blue-200 dark:hover:bg-blue-800/30"
                            title="Edit"
                          >
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <Link 
                            to={`/projects/${project._id}`}
                            target="_blank"
                            className="p-1.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded hover:bg-green-200 dark:hover:bg-green-800/30"
                            title="View"
                          >
                            <i className="bi bi-eye"></i>
                          </Link>
                          <button 
                            onClick={() => {
                              setDeleteId(project._id);
                              setShowDeleteModal(true);
                            }}
                            className="p-1.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded hover:bg-red-200 dark:hover:bg-red-800/30"
                            title="Delete"
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
      
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-md w-full p-6"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="bi bi-exclamation-triangle text-3xl text-red-600 dark:text-red-400"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Delete Project</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Are you sure you want to delete this project? This action cannot be undone.
              </p>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setDeleteId(null);
                }}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                disabled={deleteLoading}
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center"
                disabled={deleteLoading}
              >
                {deleteLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Deleting...
                  </>
                ) : (
                  <>
                    <i className="bi bi-trash mr-2"></i>
                    Delete
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ProjectsAdminPage;



