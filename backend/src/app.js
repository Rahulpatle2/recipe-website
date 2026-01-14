import express from 'express'
import recipeRouter from './routes/recipeRoutes.js';
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js';
import cors from "cors"




const app = express();
dotenv.config();

// app.use(cors({
//     origin: process.env.CLIENT_URL,
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept", "Origin"]
// }));

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());




app.use('/recipes',recipeRouter);
app.use('/users',userRouter);
export default app;