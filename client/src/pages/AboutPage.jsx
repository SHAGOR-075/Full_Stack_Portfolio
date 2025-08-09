import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const AboutPage = () => {
  // Education data
  const education = [
    {
      degree: 'Bachelor of Computer Science & Engineering',
      institution: 'World University Of Bangladesh',
      year: '2020 - 2024',
      description: 'Specialized in  Machine Learning with a focus on web technologies and distributed systems.'
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
    //   description: 'Lead developer for enterprise web applications. Architected and implemented scalable solutions using React, Node.js, and MongoDB.'
    // },
    {
      position: 'Frontend Developer',
      company: 'HAMS FLY LIMITED',
      year: '2014 - 2025',
      description: 'Developed responsive and accessible user interfaces for various clients. Worked with React, Vue.js, and modern CSS frameworks.'
    },
    {
      position: 'Web Development Intern',
      company: 'HAMS FLY LIMITED',
      year: '2024 - 2025',
      description: 'Assisted in developing and maintaining web applications. Gained experience with JavaScript, HTML, CSS, and basic backend technologies.'
    }
  ];

  return (
    <>
      <SEO 
        title="About Me"
        description="Learn more about my background, education, experience, and what drives me as a developer."
        keywords={['about', 'education', 'experience', 'developer background']}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Get to know more about my journey, experience, and passion for creating exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-lg transform rotate-3 scale-105 opacity-20 animate-pulse-slow"></div>
              <img 
                src="https://i.ibb.co.com/G3BpN2Ns/IMG-4119-copy.jpg" 
                alt=" Md Kharul Islam Shagor - Full Stack Developer"
                className="relative z-10 rounded-lg shadow-xl w-full object-cover"
                style={{ maxHeight: '500px' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/600x800/3b82f6/ffffff?text=John+Doe";
                }}
                crossOrigin="anonymous"
              />
            </motion.div>
            
            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6">My Journey</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Hello! I'm Md Kharul Islam Shagor, a passionate full-stack developer with over 1 years of experience in creating web applications that deliver exceptional user experiences.
                </p>
                <p>
                  My journey in web development began during my college years when I built my first website. Since then, I've been captivated by the ever-evolving world of web technologies and have dedicated myself to mastering both frontend and backend development.
                </p>
                <p>
                  I specialize in building modern, responsive, and accessible web applications using technologies like React, Node.js, and MongoDB. I'm also experienced with cloud services like AWS and have a strong foundation in web security practices.
                </p>
                <p>
                  When I'm not coding, you can find me hiking in the mountains, reading tech blogs, or experimenting with new programming languages and frameworks. I believe in continuous learning and staying updated with the latest industry trends.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/contact" className="btn-primary">
                  Get In Touch
                </a>
                <a href="/resume" className="btn-outline">
                  View Resume
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My academic background that has shaped my technical knowledge and problem-solving skills.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-12 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary-500"
              >
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary-500 transform -translate-x-1.5"></div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{item.degree}</h3>
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm font-medium rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">{item.institution}</p>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey and the valuable experience I've gained along the way.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-12 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-secondary-500"
              >
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-secondary-500 transform -translate-x-1.5"></div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{item.position}</h3>
                    <span className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-800 dark:text-secondary-300 text-sm font-medium rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-secondary-600 dark:text-secondary-400 font-medium mb-3">{item.company}</p>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Personal Interests */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Beyond Coding</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              When I'm not in front of a computer, here's what I enjoy doing.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Interest 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
            >
              <img 
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Travelling"
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/600x400/3b82f6/ffffff?text=Hiking";
                }}
                crossOrigin="anonymous"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Travelling</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I enjoy exploring new places, experiencing different cultures, and finding inspiration through travel adventures.
                </p>
              </div>
            </motion.div>
            
            {/* Interest 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
            >
              <img 
                src="https://thumbs.dreamstime.com/b/bast%C3%A3o-e-esfera-de-grilo-26560801.jpg" 
                alt="Playing Cricket"
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/600x400/3b82f6/ffffff?text=Reading";
                }}
                crossOrigin="anonymous"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Playing Cricket</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Enjoy playing cricket as a way to stay active, build teamwork, and have fun with friends during my free time.
                </p>
              </div>
            </motion.div>
            
            {/* Interest 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
            >
              <img 
                src="https://media.product.which.co.uk/prod/images/original/gm-f0d384dc-22fa-40ee-aabd-64abf3514774-watching-films-on-tvnewsmain.jpeg" 
                alt="Watching Movie"
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/600x400/3b82f6/ffffff?text=Music";
                }}
                crossOrigin="anonymous"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Watching Movie</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I enjoy watching movies in my free time, especially those that inspire creativity and storytelling.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Work Together?</h2>
            <p className="text-lg mb-8 text-white/90">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-white text-primary-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            >
              Get In Touch
              <i className="bi bi-arrow-right ml-2"></i>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
