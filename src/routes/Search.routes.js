import express from "express";
import {Create ,Search} from "../controllers/Search.js";
import {upload} from "../middlewares/Multer.middel.js"
const router = express.Router();

router.post("/search", upload.single('image'),Search);
router.post("/create", upload.single('image'),Create);

export default router;
