import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const DashboardPage = () => {
  const [stats, setStats] = useState({
    totalProjects: 0,
    recentProjects: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/projects/admin/dashboard');
        setStats(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError('Failed to load dashboard data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchDashboardData();
  }, []);
  
  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome to your admin dashboard. Manage your portfolio content from here.
        </p>
      </div>
      
      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      )}
      
      {/* Error State */}
      {error && !loading && (
        <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-4 rounded-lg mb-6">
          <p className="flex items-center">
            <i className="bi bi-exclamation-triangle mr-2"></i>
            {error}
          </p>
        </div>
      )}
      
      {/* Dashboard Content */}
      {!loading && !error && (
        <>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-4">
                  <i className="bi bi-folder text-2xl text-primary-600 dark:text-primary-400"></i>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Total Projects</p>
                  <h3 className="text-3xl font-bold">{stats.totalProjects}</h3>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4">
                  <i className="bi bi-eye text-2xl text-green-600 dark:text-green-400"></i>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Portfolio Views</p>
                  <h3 className="text-3xl font-bold">1,248</h3>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mr-4">
                  <i className="bi bi-download text-2xl text-indigo-600 dark:text-indigo-400"></i>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Resume Downloads</p>
                  <h3 className="text-3xl font-bold">42</h3>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8"
          >
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link 
                to="/admin/projects/new" 
                className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-3">
                  <i className="bi bi-plus text-xl text-primary-600 dark:text-primary-400"></i>
                </div>
                <span className="font-medium">Add New Project</span>
              </Link>
              
              <Link 
                to="/admin/projects" 
                className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mr-3">
                  <i className="bi bi-list-ul text-xl text-indigo-600 dark:text-indigo-400"></i>
                </div>
                <span className="font-medium">Manage Projects</span>
              </Link>
              
              <a 
                href="/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3">
                  <i className="bi bi-eye text-xl text-green-600 dark:text-green-400"></i>
                </div>
                <span className="font-medium">View Website</span>
              </a>
            </div>
          </motion.div>
          
          {/* Recent Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Recent Projects</h2>
              <Link 
                to="/admin/projects" 
                className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
              >
                View All
              </Link>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 dark:text-gray-400 text-sm border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-3 font-medium">Title</th>
                    <th className="pb-3 font-medium">Category</th>
                    <th className="pb-3 font-medium">Date</th>
                    <th className="pb-3 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recentProjects.map((project) => (
                    <tr key={project._id} className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-4 font-medium">{project.title}</td>
                      <td className="py-4 capitalize">{project.category}</td>
                      <td className="py-4">{formatDate(project.createdAt)}</td>
                      <td className="py-4">
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
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
