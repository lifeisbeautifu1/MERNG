import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
  },
  phone: {
    type: String,
    required: [true, 'Please provide phone'],
  },
});

const Client = mongoose.model('Client', ClientSchema);

export default Client;
