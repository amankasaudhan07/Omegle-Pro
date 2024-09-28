import express from 'express';
import dotenv from 'dotenv';
import { dbConnect } from './config/database.js';
import userRouter from './routes/user.js'
import cors from 'cors'

import http from 'http'; // For creating the server
import { initializeSocket } from './controller/chatController.js'; // Import Socket.IO controller


const app = express();

dotenv.config();
app.use(express.json());

app.use(cors({
    origin:true,
    method:["GET","POST","PUT","DELETE"],
    credentials:true,
}))

app.use('/api/user',userRouter);


// Create HTTP server
const server = http.createServer(app);
// Initialize Socket.IO
initializeSocket(server); // Initialize the Socket.IO functionality

const PORT = process.env.PORT || 4000;


server.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
    // dbConnect(); // Connect to database
    // handleSocketConnection(server); // Initialize Socket.IO
})

dbConnect();