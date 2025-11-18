import { Router } from 'express';
import { login, register, getAllUsers } from '../controller/authController.js'
import { authenticateToken } from '../middleware/middlware.js';

const authRouter = Router();



//access token

authRouter.post('/register' , register);

authRouter.post('/login' , login );

authRouter.get('/get-all-users', authenticateToken, getAllUsers)

export default authRouter;