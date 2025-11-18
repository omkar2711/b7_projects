import express from 'express';
import userRouter from './routes/user.js';
import productRouter from './routes/product.js';
import authRouter from './routes/auth.js';

import 'dotenv/config'
import {connectDb} from './db/dbConfig.js'


const app = express()
const port = 3001

// app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs'); 


//middleware
app.use(express.json());

//MongoDB Connection
connectDb();
    

app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Home Page',
        userName: 'User',
        items: ['Item 1', 'Item 2', 'Item 3'] 
    });
});

app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/auth', authRouter);

app.listen(port, (req,res) => {
    console.log(`Example app listening on port ${port}`)
    // res.send(`Example app listening on port ${port}`);
})


//Register -> password Hashing -> store in db -> bcrypt
//Login -> password verify -> Generate jwt token -> access to protected route
//Protected Route -> verify jwt token -> access granted else access denied