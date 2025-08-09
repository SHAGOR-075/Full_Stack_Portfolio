import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

// Generate JWT token
const generateToken = (id, email, role) => {
  return jwt.sign(
    { id, email, role },
    process.env.JWT_SECRET || 'fallback_secret_key',
    { expiresIn: process.env.JWT_EXPIRES_IN || '24h' }
  );
};

// Hardcoded admin for development without database
const hardcodedAdmin = {
  _id: 'admin_user_id',
  email: 'admin@portfolio.com',
  password: 'admin123',
  role: 'admin',
  comparePassword: function(password) {
    return password === this.password;
  }
};

// Login controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }
    
    let user = null;
    
    // Try database first if MongoDB is connected
    try {
      user = await User.findOne({ email });
      
      // For demo purposes, create admin user if it doesn't exist
      if (!user && email === (process.env.ADMIN_EMAIL || 'admin@portfolio.com')) {
        user = await User.create({
          email: process.env.ADMIN_EMAIL || 'admin@portfolio.com',
          password: process.env.ADMIN_PASSWORD || 'admin123',
          role: 'admin'
        });
      }
    } catch (dbError) {
      // If database is not available, use hardcoded admin
      console.log('Database not available, using hardcoded admin');
      if (email === hardcodedAdmin.email) {
        user = hardcodedAdmin;
      }
    }
    
    // If user doesn't exist or password is incorrect
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    // Generate token
    const token = generateToken(user._id, user.email, user.role);
    
    res.status(200).json({
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get current user
export const getCurrentUser = async (req, res) => {
  try {
    let user = null;
    
    try {
      user = await User.findById(req.user.id).select('-password');
    } catch (dbError) {
      // If database is not available, use hardcoded admin
      if (req.user.id === hardcodedAdmin._id) {
        user = {
          _id: hardcodedAdmin._id,
          email: hardcodedAdmin.email,
          role: hardcodedAdmin.role
        };
      }
    }
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.status(200).json(user);
  } catch (error) {
    console.error('Get current user error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
