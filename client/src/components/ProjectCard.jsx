// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const ProjectCard = ({ project, index }) => {
//   const { _id, title, description, thumbnail, technologies, demoLink, githubLink } = project;
  
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4, delay: index * 0.1 }}
//       className="card group h-full flex flex-col"
//     >
//       {/* Project Image */}
//       <div className="relative overflow-hidden">
//         <img 
//           src={thumbnail || `https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80`} 
//           alt={title}
//           className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src = `https://placehold.co/600x400/3b82f6/ffffff?text=${encodeURIComponent(title)}`;
//           }}
//           crossOrigin="anonymous"
//         />
        
//         {/* Overlay with links */}
//         <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
//           <div className="flex space-x-3">
//             {githubLink && (
//               <a 
//                 href={githubLink} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
//                 aria-label="View GitHub Repository"
//               >
//                 <i className="bi bi-github text-white"></i>
//               </a>
//             )}
            
//             {demoLink && (
//               <a 
//                 href={demoLink} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
//                 aria-label="View Live Demo"
//               >
//                 <i className="bi bi-box-arrow-up-right text-white"></i>
//               </a>
//             )}
//           </div>
          
//           <Link 
//             to={`/projects/${_id}`}
//             className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
//           >
//             View Details
//           </Link>
//         </div>
//       </div>
      
//       {/* Project Info */}
//       <div className="p-6 flex-grow flex flex-col">
//         <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
//         <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 flex-grow">
//           {description}
//         </p>
        
//         {/* Technologies */}
//         <div className="flex flex-wrap gap-2 mt-auto">
//           {technologies && technologies.map((tech, i) => (
//             <span 
//               key={i}
//               className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;

// Update Code
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index }) => {
  const { _id, title, description, thumbnail, technologies, demoLink, githubLink } = project;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card group h-full flex flex-col"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img 
          src={thumbnail || `https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80`} 
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/600x400/3b82f6/ffffff?text=${encodeURIComponent(title)}`;
          }}
          crossOrigin="anonymous"
        />
        
        {/* Overlay with links */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <div className="flex space-x-3">
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                aria-label="View GitHub Repository"
              >
                <i className="bi bi-github text-white"></i>
              </a>
            )}
            
            {demoLink && (
              <a 
                href={demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                aria-label="View Live Demo"
              >
                <i className="bi bi-box-arrow-up-right text-white"></i>
              </a>
            )}
          </div>
          
          <Link 
            to={`/projects/${_id}`}
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
      
      {/* Project Info */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 flex-grow">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies && technologies.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;




