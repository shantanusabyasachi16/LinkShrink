import  express  from "express";
import { shortnerModel } from "../models/urlShort";
import { message } from "antd";



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
      const shortUrl = await shortnerModel.find().sort({createdAt:-1});
      if (!shortUrl) {
        res.status(404).json({
            message:"Shorts Urls not found"
        })
      }else{
        res.status(200).json({
            shortUrl:shortUrl
        })
      }
    } catch (error) {
        
    }
}
export const  getUrl = async ( 
    req: express.Request,
    res: express.Response,) =>{
    try {
        const shortUrl = await shortnerModel.findOne({shorturl:req.params.id})
   if (!shortUrl) {
    res.status(404).json({
        message:"Full Url not founded"
    })
   }else{
    shortUrl.clicks++;
    shortUrl.save();
    res.redirect(`${shortUrl.fullUrl}`)
   }
    } catch (error) {
        console.log(error);
        
    }
}
export const  deleteUrl = async ( 
    req: express.Request,
    res: express.Response,) =>{
    try {
      const shortUrl = await shortnerModel.findByIdAndDelete(req.params.id);
        if (shortUrl) {
         res.status(200).json({
             message:"Url deleted succesfully"
         })
        }
    } catch (error) {
    console.log(error);
     
    }
}