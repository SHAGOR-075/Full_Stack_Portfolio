import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const AdminSidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: 'bi-speedometer2' },
    { name: 'Projects', path: '/admin/projects', icon: 'bi-folder' },
  ];
  
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-64 bg-gray-800 text-white hidden md:block"
    >
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <i className="bi bi-shield-lock text-2xl text-primary-400"></i>
          <h2 className="text-xl font-bold">Admin Panel</h2>
        </div>
        
        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/admin'}
                  className={({ isActive }) => 
                    `flex items-center px-4 py-3 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-primary-700 text-white' 
                        : 'text-gray-300 hover:bg-gray-700'
                    }`
                  }
                >
                  <i className={`${item.icon} mr-3`}></i>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <div className="px-6 py-4 mt-auto border-t border-gray-700">
        <NavLink
          to="/"
          className="flex items-center text-gray-300 hover:text-white transition-colors"
          target="_blank"
        >
          <i className="bi bi-arrow-up-right-square mr-2"></i>
          View Website
        </NavLink>
      </div>
    </motion.aside>
  );
};

export default AdminSidebar;
