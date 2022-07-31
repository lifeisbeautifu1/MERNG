import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
  },
  description: {
    type: String,
    required: [true, 'Please provide description'],
  },
  status: {
    type: String,
    required: [true, 'Please provide status'],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  },
});

const Project = mongoose.model('Project', ProjectSchema);

export default Project;
