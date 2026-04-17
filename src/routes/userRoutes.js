import express from 'express';
import { getAllUsers, getUserById } from '../controllers/userController.js';

const userRouters = express.Router();

// GET /api/users
userRouters.get('/', getAllUsers);
userRouters.get('/:id', getUserById);

export default userRouters;