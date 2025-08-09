import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const AdminNavbar = () => {
  const { logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm z-10">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Admin Dashboard
          </h1>
          
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <i className="bi bi-sun text-xl"></i>
              ) : (
                <i className="bi bi-moon text-xl"></i>
              )}
            </button>
            
            {/* Logout Button */}
            <button
              onClick={logout}
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <i className="bi bi-box-arrow-right mr-2"></i>
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
