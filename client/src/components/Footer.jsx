import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: 'bi-github', url: 'https://github.com/SHAGOR-075' },
    { name: 'LinkedIn', icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/md-kharul-islam/' },
    { name: 'Twitter', icon: 'bi-facebook', url: 'https://www.facebook.com/share/1ECfibTHCi/' },
    { name: 'Instagram', icon: 'bi-instagram', url: 'https://www.instagram.com/shagoronik?igsh=cTBtcHNvdTFoYzJ3' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                <i className="bi bi-code-slash mr-2"></i>
                <span className="font-heading">Portfolio</span>
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Showcasing my journey, projects, and skills in software development.
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.name}
                >
                  <i className={`bi ${link.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <i className="bi bi-envelope mr-3 text-primary-600 dark:text-primary-400"></i>
                <a href="mailto:mdkharulislamshagor@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  mdkharulislamshagor@gmail.com
                </a>
              </li>
              {/* <li className="flex items-center text-gray-600 dark:text-gray-400">
                <i className="bi bi-whatsapp mr-3 text-primary-600 dark:text-primary-400"></i>
                <a href="https://wa.me/1234567890" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li> */}
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <i className="bi bi-geo-alt mr-3 text-primary-600 dark:text-primary-400"></i>
                <span>Dakshin Khan, Dhaka-1230</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 dark:text-gray-400 text-sm"
          >
            Designed by <span className="text-primary-600 dark:text-primary-400">Devloper Shagor</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
