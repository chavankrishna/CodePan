import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';

// Import routes
import signupRoute from './routes/signupRoute.js';  
import signinRoute from './routes/signinRoute.js';
//import authRoutes from './routes/authRoutes.js';  
//import postRoutes from './routes/postRoutes.js';       

dotenv.config();        
connectDB();        

const app = express();

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/signup', signupRoute);   
app.use('/api/signin', signinRoute);    
//app.use('/api/auth', authRoutes);
//app.use('/api/posts', postRoutes);

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 




