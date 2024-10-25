import express ,  { Request, Response } from "express";
import {getallUrl, createUrl, deleteUrl, getUrl } from "../controllers/urlShortner";



const router = express.Router();

router.post("/urlshort",createUrl)
router.get("/urlshort",getallUrl)
router.get("/urlshort/:id",getUrl)
router.post("/delete/:id",deleteUrl)

export default router;