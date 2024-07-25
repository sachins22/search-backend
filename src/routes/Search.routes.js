import express from "express";
import {Create ,Search} from "../controllers/Search.js";
import {upload} from "../middlewares/Multer.middel.js"
const router = express.Router();

router.post("/search", upload.single('images'),Search);
router.post("/create", upload.single('images'),Create);

export default router;
