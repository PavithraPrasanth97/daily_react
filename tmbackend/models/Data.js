import { Schema, model } from 'mongoose';

// Define the schema for the data we will store
const dataSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
});

// Create and export the model
export const Data = model('Data', dataSchema);
