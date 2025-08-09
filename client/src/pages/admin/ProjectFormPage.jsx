import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const ProjectFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;
  
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    longDescription: '',
    category: 'web',
    technologies: [],
    demoLink: '',
    githubLink: '',
    thumbnail: '',
    images: [''],
    client: '',
    role: '',
    date: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(isEditMode);
  const [error, setError] = useState(null);
  const [techInput, setTechInput] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  // Fetch project data if in edit mode
  useEffect(() => {
    if (isEditMode) {
      const fetchProject = async () => {
        try {
          setFetchLoading(true);
          const response = await axios.get(`https://full-stack-portfoliobackend.vercel.app/api/projects/${id}`);
          setFormData(response.data);
          setError(null);
        } catch (err) {
          console.error('Error fetching project:', err);
          setError('Failed to load project data. Please try again later.');
        } finally {
          setFetchLoading(false);
        }
      };
      
      fetchProject();
    }
  }, [id, isEditMode]);
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle technology input
  const handleAddTech = () => {
    if (techInput.trim() && !formData.technologies.includes(techInput.trim())) {
      setFormData(prev => ({
        ...prev,
        technologies: [...prev.technologies, techInput.trim()]
      }));
      setTechInput('');
    }
  };
  
  // Remove technology
  const handleRemoveTech = (tech) => {
    setFormData(prev => ({
      ...prev,
      technologies: prev.technologies.filter(t => t !== tech)
    }));
  };
  
  // Handle image URL changes
  const handleImageChange = (index, value) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData(prev => ({ ...prev, images: newImages }));
  };
  
  // Add new image field
  const handleAddImage = () => {
    setFormData(prev => ({ ...prev, images: [...prev.images, ''] }));
  };
  
  // Remove image field
  const handleRemoveImage = (index) => {
    const newImages = [...formData.images];
    newImages.splice(index, 1);
    setFormData(prev => ({ ...prev, images: newImages }));
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.description || !formData.category) {
      setError('Please fill in all required fields.');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      // Filter out empty image URLs
      const filteredImages = formData.images.filter(img => img.trim() !== '');
      const dataToSubmit = {
        ...formData,
        images: filteredImages
      };
      
      if (isEditMode) {
        // Update existing project
        await axios.put(`https://full-stack-portfoliobackend.vercel.app/api/projects/${id}`, dataToSubmit);
        setSuccessMessage('Project updated successfully!');
      } else {
        // Create new project
        await axios.post('https://full-stack-portfoliobackend.vercel.app/api/projects', dataToSubmit);
        setSuccessMessage('Project created successfully!');
      }
      
      // Show success message and redirect after a delay
      setTimeout(() => {
        navigate('/admin/projects');
      }, 2000);
    } catch (err) {
      console.error('Error saving project:', err);
      setError('Failed to save project. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  // Categories
  const categories = ['web', 'mobile', 'desktop', 'ai', 'game', 'other'];
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {isEditMode ? 'Edit Project' : 'Add New Project'}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {isEditMode 
            ? 'Update the details of your existing project' 
            : 'Create a new project to showcase in your portfolio'
          }
        </p>
      </div>
      
      {/* Loading State */}
      {fetchLoading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      )}
      
      {/* Error Message */}
      {error && (
        <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-4 rounded-lg mb-6">
          <p className="flex items-center">
            <i className="bi bi-exclamation-triangle mr-2"></i>
            {error}
          </p>
        </div>
      )}
      
      {/* Success Message */}
      {successMessage && (
        <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-4 rounded-lg mb-6">
          <p className="flex items-center">
            <i className="bi bi-check-circle mr-2"></i>
            {successMessage}
          </p>
        </div>
      )}
      
      {/* Form */}
      {!fetchLoading && (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Title */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="title" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Project Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter project title"
                required
              />
            </div>
            
            {/* Short Description */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="description" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Short Description <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Brief description of your project"
                required
              />
            </div>
            
            {/* Long Description */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="longDescription" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Detailed Description
              </label>
              <textarea
                id="longDescription"
                name="longDescription"
                value={formData.longDescription}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Provide a detailed description of your project, including features, challenges, and solutions"
              ></textarea>
            </div>
            
            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Client */}
            <div>
              <label htmlFor="client" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Client
              </label>
              <input
                type="text"
                id="client"
                name="client"
                value={formData.client}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Client name or 'Self-initiated'"
              />
            </div>
            
            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Your Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="e.g. Full Stack Developer"
              />
            </div>
            
            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Completion Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            {/* Technologies */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Technologies Used
              </label>
              <div className="flex">
                <input
                  type="text"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTech())}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Add technology (e.g. React, Node.js)"
                />
                <button
                  type="button"
                  onClick={handleAddTech}
                  className="px-4 py-2 bg-primary-600 text-white rounded-r-lg hover:bg-primary-700 transition-colors"
                >
                  Add
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-3">
                {formData.technologies.map((tech, index) => (
                  <div 
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium flex items-center"
                  >
                    {tech}
                    <button
                      type="button"
                      onClick={() => handleRemoveTech(tech)}
                      className="ml-2 text-gray-500 hover:text-red-500"
                    >
                      <i className="bi bi-x"></i>
                    </button>
                  </div>
                ))}
                {formData.technologies.length === 0 && (
                  <p className="text-gray-500 dark:text-gray-400 text-sm">No technologies added yet</p>
                )}
              </div>
            </div>
            
            {/* Demo Link */}
            <div>
              <label htmlFor="demoLink" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Demo Link
              </label>
              <input
                type="url"
                id="demoLink"
                name="demoLink"
                value={formData.demoLink}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="https://example.com"
              />
            </div>
            
            {/* GitHub Link */}
            <div>
              <label htmlFor="githubLink" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                GitHub Link
              </label>
              <input
                type="url"
                id="githubLink"
                name="githubLink"
                value={formData.githubLink}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="https://github.com/username/repo"
              />
            </div>
            
            {/* Thumbnail */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="thumbnail" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Thumbnail Image URL
              </label>
              <input
                type="url"
                id="thumbnail"
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />
              {formData.thumbnail && (
                <div className="mt-2">
                  <img 
                    src={formData.thumbnail} 
                    alt="Thumbnail preview" 
                    className="h-20 object-cover rounded"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/400x200/3b82f6/ffffff?text=Invalid+Image+URL";
                    }}
                    crossOrigin="anonymous"
                  />
                </div>
              )}
            </div>
            
            {/* Project Images */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Project Images
              </label>
              
              {formData.images.map((image, index) => (
                <div key={index} className="flex items-center mb-3">
                  <input
                    type="url"
                    value={image}
                    onChange={(e) => handleImageChange(index, e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="https://example.com/image.jpg"
                  />
                  
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="ml-2 p-2 text-red-500 hover:text-red-700"
                    disabled={formData.images.length === 1}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                  
                  {image && (
                    <img 
                      src={image} 
                      alt={`Preview ${index + 1}`} 
                      className="ml-2 h-10 w-10 object-cover rounded"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/100x100/3b82f6/ffffff?text=Invalid";
                      }}
                      crossOrigin="anonymous"
                    />
                  )}
                </div>
              ))}
              
              <button
                type="button"
                onClick={handleAddImage}
                className="mt-2 flex items-center text-primary-600 dark:text-primary-400 hover:underline"
              >
                <i className="bi bi-plus-circle mr-1"></i>
                Add Another Image
              </button>
            </div>
          </div>
          
          {/* Form Actions */}
          <div className="flex justify-end space-x-3 mt-8">
            <button
              type="button"
              onClick={() => navigate('/admin/projects')}
              className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </>
              ) : (
                <>
                  <i className="bi bi-check-lg mr-2"></i>
                  {isEditMode ? 'Update Project' : 'Save Project'}
                </>
              )}
            </button>
          </div>
        </motion.form>
      )}
    </div>
  );
};

export default ProjectFormPage;


