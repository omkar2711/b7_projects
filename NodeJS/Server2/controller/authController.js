import { User } from '../model/userModel.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


const login = async (req, res) => {

    try {
        let user = await User.findOne({email : req.body.email})
        if(!user){
            return res.send("Email id is not registered")
        }
       
        //verify password
        const isMatch = await bcrypt.compare(req.body.pass , user.password);
        if(!isMatch){
            return  res.send("Invalid credentials");
        }

        //jwt token
        const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });


        res.json({ token });
    }
    catch (error) {
        res.send(error.message);
    }
}


const register = async (req, res) => {
    try {
        
        let user = await User.findOne({email : req.body.email});
        if(user){
            return res.send("email id already registered!")
        }
        const hashedPassword = await bcrypt.hash(req.body.pass, 10);

        user = new User({
            firstName: req.body.fname,
            lastName: req.body.lname,
            age : req.body.age,
            email: req.body.email,
            password: hashedPassword,
            role : req.body.role
        })

        

        if(req.body.pass != req.body.cpass){
            return res.send("Password and confirm password did not match");
        }

        
        user = await user.save();

        if (!user) {
            return res.status(400).send("User Cannot created");
        }
        res.send(user);
    }
    catch (error) {
        res.send(error);
    }

}

const getAllUsers = async(req, res) => {
    try{
        let users = await User.find();
        res.send(users);
    }
    catch(error){
        res.send(error);
    }
}

export {
    login,
    register,
    getAllUsers
}