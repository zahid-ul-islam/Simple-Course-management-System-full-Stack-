const express = require('express');
const connectDB = require('./db');
const userRouter = require('./routes/user');
const authRoutes = require('./routes/auth');
const courseRoute = require('./routes/course')
const cors = require('cors')

require('dotenv').config();
const app = express();

app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:5173'
    })
)


connectDB()
app.use('/api', userRouter)
app.use('/api' , authRoutes)
app.use('/api', courseRoute)

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
});
