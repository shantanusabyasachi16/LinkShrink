import express from "express"
import dotenv from "dotenv";
import cors from "cors"


dotenv.config();

const app = express();

const port= 3000

 app.get("/",(req,res)=>{
  res.send ("hello")
 })

 app.listen(port,()=>{
    console.log(`server connected`);
    
 })