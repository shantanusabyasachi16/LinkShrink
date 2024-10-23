import express  from "express";



const router = express.Router();

router.post("/urlshort",createUrl)
router.get("/urlshort",allUrl)
router.get("/urlshort/:id",geturl)
router.post("/delete/:id",deleteUrl)

export default router;