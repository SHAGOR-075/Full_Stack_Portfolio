import Project from '../models/Project.js';

// In-memory storage for development without database
let mockProjects = [
  {
    _id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product management, cart functionality, and secure checkout.',
    longDescription: 'This e-commerce platform was built to provide a seamless shopping experience for users while giving store owners powerful management tools.',
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'web',
    createdAt: '2023-02-15T12:00:00Z',
    demoLink: 'https://example.com',
    githubLink: 'https://github.com',
    images: [],
    client: 'Self-initiated',
    role: 'Full Stack Developer',
    date: '2022-05-15'
  }
];

// Helper function to check if database is available
const isDatabaseAvailable = async () => {
  try {
    await Project.countDocuments();
    return true;
  } catch (error) {
    return false;
  }
};

// Get all projects
export const getProjects = async (req, res) => {
  try {
    const { category, search, limit = 10, page = 1 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    if (await isDatabaseAvailable()) {
      // Build query
      const query = {};
      
      if (category && category !== 'all') {
        query.category = category;
      }
      
      if (search) {
        query.$text = { $search: search };
      }
      
      // Execute query with pagination
      const projects = await Project.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit));
      
      // Get total count for pagination
      const total = await Project.countDocuments(query);
      
      res.status(200).json({
        projects,
        pagination: {
          total,
          page: parseInt(page),
          pages: Math.ceil(total / parseInt(limit))
        }
      });
    } else {
      // Use mock data
      let filteredProjects = [...mockProjects];
      
      if (category && category !== 'all') {
        filteredProjects = filteredProjects.filter(p => p.category === category);
      }
      
      if (search) {
        filteredProjects = filteredProjects.filter(p => 
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase()) ||
          p.technologies.some(t => t.toLowerCase().includes(search.toLowerCase()))
        );
      }
      
      const startIndex = skip;
      const endIndex = skip + parseInt(limit);
      const paginatedProjects = filteredProjects.slice(startIndex, endIndex);
      
      res.status(200).json({
        projects: paginatedProjects,
        pagination: {
          total: filteredProjects.length,
          page: parseInt(page),
          pages: Math.ceil(filteredProjects.length / parseInt(limit))
        }
      });
    }
  } catch (error) {
    console.error('Get projects error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get project by ID
export const getProjectById = async (req, res) => {
  try {
    if (await isDatabaseAvailable()) {
      const project = await Project.findById(req.params.id);
      
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
      
      res.status(200).json(project);
    } else {
      // Use mock data
      const project = mockProjects.find(p => p._id === req.params.id);
      
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
      
      res.status(200).json(project);
    }
  } catch (error) {
    console.error('Get project by ID error:', error);
    
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.status(500).json({ message: 'Server error' });
  }
};

// Create new project
export const createProject = async (req, res) => {
  try {
    if (await isDatabaseAvailable()) {
      const newProject = new Project(req.body);
      const savedProject = await newProject.save();
      
      res.status(201).json(savedProject);
    } else {
      // Use mock data
      const newProject = {
        _id: (mockProjects.length + 1).toString(),
        ...req.body,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      mockProjects.push(newProject);
      res.status(201).json(newProject);
    }
  } catch (error) {
    console.error('Create project error:', error);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    
    res.status(500).json({ message: 'Server error' });
  }
};

// Update project
export const updateProject = async (req, res) => {
  try {
    if (await isDatabaseAvailable()) {
      const project = await Project.findById(req.params.id);
      
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
      
      const updatedProject = await Project.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true, runValidators: true }
      );
      
      res.status(200).json(updatedProject);
    } else {
      // Use mock data
      const projectIndex = mockProjects.findIndex(p => p._id === req.params.id);
      
      if (projectIndex === -1) {
        return res.status(404).json({ message: 'Project not found' });
      }
      
      mockProjects[projectIndex] = {
        ...mockProjects[projectIndex],
        ...req.body,
        updatedAt: new Date().toISOString()
      };
      
      res.status(200).json(mockProjects[projectIndex]);
    }
  } catch (error) {
    console.error('Update project error:', error);
    
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete project
export const deleteProject = async (req, res) => {
  try {
    if (await isDatabaseAvailable()) {
      const project = await Project.findById(req.params.id);
      
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
      
      await Project.deleteOne({ _id: req.params.id });
      
      res.status(200).json({ message: 'Project removed' });
    } else {
      // Use mock data
      const projectIndex = mockProjects.findIndex(p => p._id === req.params.id);
      
      if (projectIndex === -1) {
        return res.status(404).json({ message: 'Project not found' });
      }
      
      mockProjects.splice(projectIndex, 1);
      res.status(200).json({ message: 'Project removed' });
    }
  } catch (error) {
    console.error('Delete project error:', error);
    
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.status(500).json({ message: 'Server error' });
  }
};

// Get admin dashboard stats
export const getDashboardStats = async (req, res) => {
  try {
    if (await isDatabaseAvailable()) {
      // Get total projects count
      const totalProjects = await Project.countDocuments();
      
      // Get recent projects
      const recentProjects = await Project.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select('title category createdAt');
      
      // Get projects by category
      const projectsByCategory = await Project.aggregate([
        {
          $group: {
            _id: '$category',
            count: { $sum: 1 }
          }
        },
        {
          $sort: { count: -1 }
        }
      ]);
      
      res.status(200).json({
        totalProjects,
        recentProjects,
        projectsByCategory
      });
    } else {
      // Use mock data
      const totalProjects = mockProjects.length;
      const recentProjects = mockProjects
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5)
        .map(p => ({ title: p.title, category: p.category, createdAt: p.createdAt }));
      
      const categoryCount = {};
      mockProjects.forEach(p => {
        categoryCount[p.category] = (categoryCount[p.category] || 0) + 1;
      });
      
      const projectsByCategory = Object.entries(categoryCount)
        .map(([category, count]) => ({ _id: category, count }))
        .sort((a, b) => b.count - a.count);
      
      res.status(200).json({
        totalProjects,
        recentProjects,
        projectsByCategory
      });
    }
  } catch (error) {
    console.error('Get dashboard stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};



