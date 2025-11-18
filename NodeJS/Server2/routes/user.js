import {Router} from 'express';
import { updateUser, deleteUser } from '../controller/userController.js'
import { register, getAllUsers} from '../controller/authController.js'

const userRouter = Router();


//api routes
userRouter.get('/', (req, res) => {
    res.send('<h1>User Home Page</h1>');
});

userRouter.patch('/update-user', updateUser);

userRouter.get('/get-all-user', getAllUsers)

userRouter.post('/create-user' , register);

userRouter.delete('/delete-user' , deleteUser);



export default userRouter;
