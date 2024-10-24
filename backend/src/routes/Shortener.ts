import express  from "express";
import { allUrl, createUrl, deleteUrl, getUrl } from "../controllers/urlShortner";



const router = express.Router();

router.post("/urlshort",createUrl)
router.get("/urlshort",allUrl)
router.get("/urlshort/:id",getUrl)
router.post("/delete/:id",deleteUrl)

export default router;