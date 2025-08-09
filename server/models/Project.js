import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  longDescription: {
    type: String
  },
  category: {
    type: String,
    required: true,
    enum: ['web', 'mobile', 'desktop', 'ai', 'game', 'other'],
    default: 'web'
  },
  technologies: {
    type: [String],
    default: []
  },
  thumbnail: {
    type: String
  },
  images: {
    type: [String],
    default: []
  },
  demoLink: {
    type: String
  },
  githubLink: {
    type: String
  },
  client: {
    type: String
  },
  role: {
    type: String
  },
  date: {
    type: Date
  }
}, { timestamps: true });

// Add text index for search functionality
projectSchema.index({ title: 'text', description: 'text', technologies: 'text' });

const Project = mongoose.model('Project', projectSchema);

export default Project;
