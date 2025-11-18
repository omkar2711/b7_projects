import express from 'express'
import noteRouter from './routes/router.js';
import 'dotenv/config'
import {connectDb} from './db/connectDB.js'
import cors from 'cors';

const app = express()
const port = process.env.PORT || 3000



//middleware
app.use(cors({
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200
}));

//MongoDB Connection
connectDb();

app.use(express.json());

app.get('/', (req, res) => { res.send('Hello World') })

app.use('/note' ,noteRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
