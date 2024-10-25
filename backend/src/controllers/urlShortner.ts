import  express  from "express";
import { shortnerModel } from "../models/urlShort";



export const  createUrl = async (
    req: express.Request,
    res: express.Response,
) =>{
    try {
        const {fullUrl} = req.body;
        const existingUrl = await shortnerModel.findOne({fullUrl})
   if (existingUrl ) {
    return res.status(409).json({
        message: "URL already exists in the database",
        existingUrl: existingUrl
    })
   } else{
    const  shorturl = await shortnerModel.create({fullUrl})
    res.status(201).send(shorturl)
   }
    } catch (error) {
        console.log(error);
        
    }
}
export const  getallUrl = async ( 
    req: express.Request,
    res: express.Response,) =>{
    try {
        
    } catch (error) {
        
    }
}
export const  getUrl = async ( 
    req: express.Request,
    res: express.Response,) =>{
    try {
        
    } catch (error) {
        
    }
}
export const  deleteUrl = async ( 
    req: express.Request,
    res: express.Response,) =>{
    try {
        
    } catch (error) {
        
    }
}