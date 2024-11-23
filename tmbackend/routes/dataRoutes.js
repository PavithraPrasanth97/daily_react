import express from 'express';
import { Data } from '../models/Data';

// Initialize the router
const router = express.Router();

// POST route to save data from frontend
router.post('/', async (req, res) => {
  try {
    const { name, value } = req.body;

    const newData = new Data({ name, value });
    await newData.save();

    res.status(201).json({ message: 'Data saved successfully', data: newData });
  } catch (error) {
    res.status(500).json({ message: 'Error saving data', error });
  }
});

export default router;
