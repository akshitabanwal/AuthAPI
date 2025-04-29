import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import {runMigration } from './migrations/20250429-create-users.js'; 
const app=express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

dotenv.config();
const Port=5000;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
 app.use("/api",authRoutes); 
 
app.get("/",(req,res)=>{
    res.send("auth api is working succesfully");
})
async function start() {
  try {
   
    await runMigration();            
   
    app.listen(Port, () => console.log(`Server on port ${Port}`)); 
  } catch (err) {
    console.error("Migration failed to start:", err);
    process.exit(1);
  }
}

start();
app.listen(Port,()=>{
    console.log(`Server started successfully at ${Port}`);
})
