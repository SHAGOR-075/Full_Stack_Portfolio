import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFoundPage = () => {
  return (
    <>
      <SEO 
        title="Page Not Found"
        description="The page you are looking for does not exist."
      />
      
      <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="container-custom">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400">404</h1>
              <div className="w-16 h-1 bg-primary-600 dark:bg-primary-400 mx-auto my-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/" className="btn-primary inline-flex items-center">
                <i className="bi bi-house-door mr-2"></i>
                Back to Home
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16"
            >
              <img 
                src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" 
                alt="404 Illustration"
                className="max-w-md mx-auto rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/800x400/3b82f6/ffffff?text=404+Not+Found";
                }}
                crossOrigin="anonymous"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
