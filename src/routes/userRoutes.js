import express from 'express';
import { getAllUsers, getUserById, loginUserController, registerUserController } from '../controllers/userController.js';

const userRouters = express.Router();

// GET /api/users
userRouters.get('/', getAllUsers);
userRouters.get('/:id', getUserById);
userRouters.post('/login', loginUserController);
userRouters.post('/register', registerUserController);

export default userRouters;