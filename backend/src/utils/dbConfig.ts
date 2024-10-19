import mongoose from "mongoose";

const ConnectDb = async()=>{
  try {
const connect =   await mongoose.connect(`${process.env.MONGO_URI}`)
console.log("MongoDB connected");

  } catch (error) {
    console.log(error);
    
  }
  
};

  export default ConnectDb;