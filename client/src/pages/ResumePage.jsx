import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ResumePage = () => {
  // Education data
  const education = [
    {
      degree: 'Bachelor of Computer Science & Engineering',
      institution: 'World University Of Bangladesh',
      year: '2020 - 2024',
      description: 'Specialized in Machine Learning with a focus on web technologies and distributed systems.'
    },
    {
      degree: 'Full Stack Web Development with JavaScript (MERN)',
      institution: 'Ostad-Learn Sikll Live',
      year: '2024-2025',
      description: 'Completed Full Stack Web Development with JavaScript (MERN) course from Ostad, where I gained hands-on experience in building dynamic web applications using MongoDB, Express.js, React, and Node.js.'
    }
  ];
  
  // Experience data
  const experience = [
    // {
    //   position: 'Senior Full Stack Developer',
    //   company: 'Tech Innovations Inc.',
    //   year: '2020 - Present',
    //   description: 'Lead developer for enterprise web applications. Architected and implemented scalable solutions using React, Node.js, and MongoDB.',
    //   responsibilities: [
    //     'Designed and developed responsive web applications using React and Node.js',
    //     'Led a team of 5 developers, implementing Agile methodologies',
    //     'Optimized application performance, reducing load time by 40%',
    //     'Implemented CI/CD pipelines using GitHub Actions',
    //     'Collaborated with UX/UI designers to create intuitive user interfaces'
    //   ]
    // },
    {
      position: 'Frontend Developer',
      company: 'HAMS FLY LIMITED',
      year: '2014 - 2025',
      description: 'Developed responsive and accessible user interfaces for various clients. Worked with React, Vue.js, and modern CSS frameworks.',
      responsibilities: [
        'Built responsive and accessible web interfaces using React and Vue.js',
        'Implemented state management using Redux and Vuex',
        'Created reusable component libraries to improve development efficiency',
        'Collaborated with backend developers to integrate RESTful APIs',
        'Performed cross-browser testing and debugging'
      ]
    },
    {
      position: 'Web Development Intern',
      company: 'HAMS FLY LIMITED',
      year: '2014 - 2025',
      description: 'Assisted in developing and maintaining web applications. Gained experience with JavaScript, HTML, CSS, and basic backend technologies.',
      responsibilities: [
        'Assisted senior developers in building web applications',
        'Developed and maintained HTML, CSS, and JavaScript code',
        'Fixed bugs and implemented minor features',
        'Participated in code reviews and team meetings',
        'Learned version control with Git and GitHub'
      ]
    }
  ];
  
  // Skills data
  const skills = {
    technical: [
      'JavaScript (ES6+)', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 
      'HTML5', 'CSS3', 'Tailwind CSS', 
      'RESTful APIs', 'Git'
    ],
    soft: [
      'Problem Solving', 'Team Leadership', 'Communication', 
      'Time Management', 'Adaptability', 'Critical Thinking'
    ]
  };
  
  // Certifications
  const certifications = [
    {
      name: 'Full Stack Web Development with JavaScript (MERN)',
      issuer: 'Ostad-Learn Sikll Live',
      year: '2025'
    }
    // {
    //   name: 'MongoDB Certified Developer',
    //   issuer: 'MongoDB University',
    //   year: '2020'
    // },
    // {
    //   name: 'Professional Scrum Master I (PSM I)',
    //   issuer: 'Scrum.org',
    //   year: '2019'
    // }
  ];

  return (
    <>
      <SEO 
        title="Resume"
        description="View my professional resume, including my education, work experience, skills, and certifications."
        keywords={['resume', 'CV', 'education', 'experience', 'skills', 'certifications']}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Resume</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A summary of my professional experience, education, skills, and certifications.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <a 
                href="https://drive.google.com/file/d/1lHeGKi_Gq7NqvG1QZVQO0yDdb554VxMp/view?usp=sharing" 
                download
                className="btn-primary inline-flex items-center"
              >
                <i className="bi bi-download mr-2"></i>
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Resume Content */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <img 
                  src="https://i.ibb.co.com/G3BpN2Ns/IMG-4119-copy.jpg" 
                  alt=" Md Kharul Islam Shagor"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-md"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/200x200/3b82f6/ffffff?text=John+Doe";
                  }}
                  crossOrigin="anonymous"
                />
                
                <div>
                  <h2 className="text-3xl font-bold mb-2">Md Kharul Islam Shagor</h2>
                  <p className="text-xl text-primary-600 dark:text-primary-400 mb-4">Full Stack Developer</p>
                  
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <div className="flex items-center">
                      <i className="bi bi-envelope text-gray-500 dark:text-gray-400 mr-3"></i>
                      <span>mdkharulislamshagor@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <i className="bi bi-phone text-gray-500 dark:text-gray-400 mr-3"></i>
                      <span>+880 1753484109</span>
                    </div>
                    <div className="flex items-center">
                      <i className="bi bi-geo-alt text-gray-500 dark:text-gray-400 mr-3"></i>
                      <span>Dakshin Khan, Dhaka, Bangladesh</span>
                    </div>
                    <div className="flex items-center">
                      <i className="bi bi-linkedin text-gray-500 dark:text-gray-400 mr-3"></i>
                      <a 
                        href="https://www.linkedin.com/in/md-kharul-islam/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        linkedin.com/in/md-kharul-islam
                      </a>
                    </div>
                    <div className="flex items-center">
                      <i className="bi bi-github text-gray-500 dark:text-gray-400 mr-3"></i>
                      <a 
                        href="https://github.com/SHAGOR-075" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        github.com/SHAGOR-075
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                Professional Summary
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Passionate and results-driven Full Stack Developer with over 1 years of experience in designing, developing, and deploying web applications. Proficient in both frontend and backend technologies, with a strong focus on creating responsive, user-friendly interfaces and scalable server-side solutions. Experienced in leading development teams and implementing best practices for efficient project delivery.
              </p>
            </motion.div>
            
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                Work Experience
              </h2>
              
              <div className="space-y-12">
                {experience.map((job, index) => (
                  <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary-500 transform -translate-x-1.5"></div>
                    <div>
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{job.position}</h3>
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full">
                          {job.year}
                        </span>
                      </div>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">{job.company}</p>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{job.description}</p>
                      
                      {job.responsibilities && (
                        <div>
                          <p className="font-medium mb-2">Key Responsibilities:</p>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                            {job.responsibilities.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                Education
              </h2>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-secondary-500 transform -translate-x-1.5"></div>
                    <div>
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{edu.degree}</h3>
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-secondary-600 dark:text-secondary-400 font-medium mb-3">{edu.institution}</p>
                      <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                Skills
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Technical Skills */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.technical.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Soft Skills */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                Certifications
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"
                  >
                    <div className="text-primary-600 dark:text-primary-400 text-3xl mb-4">
                      <i className="bi bi-award"></i>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{cert.year}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Interested in my experience and skills? Feel free to reach out for potential opportunities or collaborations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary">
                Contact Me
              </a>
              <a 
                href="https://drive.google.com/file/d/1lHeGKi_Gq7NqvG1QZVQO0yDdb554VxMp/view?usp=sharing" 
                download
                className="btn-outline"
              >
                <i className="bi bi-download mr-2"></i>
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ResumePage;
