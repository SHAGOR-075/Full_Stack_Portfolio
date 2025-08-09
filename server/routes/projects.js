import express from 'express';
import { 
  getProjects, 
  getProjectById, 
  createProject, 
  updateProject, 
  deleteProject,
  getDashboardStats
} from '../controllers/projectController.js';
import { auth, admin } from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get('/', getProjects);

// @route   GET /api/projects/admin/dashboard
// @desc    Get admin dashboard stats
// @access  Private/Admin
router.get('/admin/dashboard', auth, admin, getDashboardStats);

// @route   GET /api/projects/:id
// @desc    Get project by ID
// @access  Public
router.get('/:id', getProjectById);

// @route   POST /api/projects
// @desc    Create a new project
// @access  Private/Admin
router.post('/', auth, admin, createProject);

// @route   PUT /api/projects/:id
// @desc    Update a project
// @access  Private/Admin
router.put('/:id', auth, admin, updateProject);

// @route   DELETE /api/projects/:id
// @desc    Delete a project
// @access  Private/Admin
router.delete('/:id', auth, admin, deleteProject);

export default router;
