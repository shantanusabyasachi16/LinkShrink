import express from "express";
import { getallUrl, createUrl, deleteUrl, getUrl } from "../controllers/urlShortner";

const router = express.Router();

// Typecasting route handlers to express.RequestHandler
router.post("/urlshort", createUrl as express.RequestHandler);
router.get("/urlshort", getallUrl as express.RequestHandler);
router.get("/urlshort/:id", getUrl as express.RequestHandler);
router.post("/delete/:id", deleteUrl as express.RequestHandler);  

export default router;
