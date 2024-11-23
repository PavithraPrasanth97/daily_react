import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dataRouter from './routes/dataRoute';

// Initialize app
const app = express();
app.use(cors());
app.use(express.json());  // To parse JSON body from frontend

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Routes
app.use('/api/data', dataRouter);

// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
