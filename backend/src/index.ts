import express, { urlencoded } from "express"
import dotenv from "dotenv";
import cors from "cors"
import ConnectDb from "./utils/dbConfig";
import urlshort from "./routes/Shortener"



dotenv.config();  
ConnectDb();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
   origin:"http://localhost:5173",
   credentials:true,
}))

//api
app.use("/api/",urlshort)

const port= 3000

 app.get("/",(req,res)=>{
  res.send ("hello")
 })

 app.listen(port,()=>{
    console.log(`server connected`);
    
 })