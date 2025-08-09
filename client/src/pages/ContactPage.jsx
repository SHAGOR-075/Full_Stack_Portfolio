import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Contact"
        description="Get in touch with me for job opportunities, collaborations, or just to say hello."
        keywords={['contact', 'get in touch', 'hire', 'freelance', 'collaboration']}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Options */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
              
              <div className="space-y-8">
                {/* WhatsApp */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4">
                    <i className="bi bi-whatsapp text-2xl text-green-600 dark:text-green-400"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">WhatsApp</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">Let's chat on WhatsApp for quick responses</p>
                    <a 
                      href="https://wa.link/jvtqhm" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
                    >
                      Message on WhatsApp
                      <i className="bi bi-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                    <i className="bi bi-envelope text-2xl text-blue-600 dark:text-blue-400"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">For formal inquiries and detailed discussions</p>
                    <a 
                      href="mailto:mdkharulislamshagor@gmail.com" 
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
                    >
                      mdkharulislamshagor@gmail.com
                    </a>
                  </div>
                </div>
                
                {/* LinkedIn */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mr-4">
                    <i className="bi bi-linkedin text-2xl text-indigo-600 dark:text-indigo-400"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">LinkedIn</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">Connect with me professionally</p>
                    <a 
                      href="https://www.linkedin.com/in/md-kharul-islam/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
                    >
                      linkedin.com/in/md-kharul-islam
                      <i className="bi bi-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mr-4">
                    <i className="bi bi-geo-alt text-2xl text-red-600 dark:text-red-400"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Dakshin Khan, Dhaka-1230<br />
                      Bangladesh
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/SHAGOR-075" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <i className="bi bi-github text-xl"></i>
                  </a>
                  <a 
                    href="https://www.facebook.com/share/1ECfibTHCi/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label="Twitter"
                  >
                    <i className="bi bi-facebook text-xl"></i>
                  </a>
                  <a 
                    href="https://www.instagram.com/shagoronik?igsh=cTBtcHNvdTFoYzJ3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label="Instagram"
                  >
                    <i className="bi bi-instagram text-xl"></i>
                  </a>
                  
                </div>
              </div>
            </motion.div>
            
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-lg transform rotate-3 scale-105 opacity-20 animate-pulse-slow"></div>
              <img 
                src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" 
                alt="Contact me"
                className="relative z-10 rounded-lg shadow-xl w-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/800x600/3b82f6/ffffff?text=Contact+Me";
                }}
                crossOrigin="anonymous"
              />
              
              {/* WhatsApp CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
              >
                <a 
                  href="https://wa.link/jvtqhm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <i className="bi bi-whatsapp text-xl mr-2"></i>
                  Chat on WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some common questions about working with me. If you have other questions, feel free to reach out!
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
              >
                <h3 className="text-xl font-bold mb-3">What is your typical response time?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I typically respond to all inquiries within 24 hours. For urgent matters, WhatsApp is the fastest way to reach me.
                </p>
              </motion.div>
              
              {/* FAQ Item 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
              >
                <h3 className="text-xl font-bold mb-3">Are you available for freelance work?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, I'm open to freelance opportunities. I can work on projects of various sizes, from small websites to complex web applications.
                </p>
              </motion.div>
              
              {/* FAQ Item 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
              >
                <h3 className="text-xl font-bold mb-3">Do you work remotely or only locally?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I primarily work remotely and have experience collaborating with teams across different time zones. However, I'm open to on-site work for the right opportunity.
                </p>
              </motion.div>
              
              {/* FAQ Item 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
              >
                <h3 className="text-xl font-bold mb-3">What is your preferred project type?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I enjoy working on challenging projects that involve both frontend and backend development. I'm particularly interested in projects that focus on user experience, performance optimization, and scalability.
                </p>
              </motion.div>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start a Project?</h2>
            <p className="text-lg mb-8 text-white/90">
              Let's discuss how I can help bring your ideas to life. Reach out today and let's create something amazing together.
            </p>
            <a 
              href="https://wa.link/jvtqhm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-primary-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            >
              <i className="bi bi-whatsapp mr-2"></i>
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
