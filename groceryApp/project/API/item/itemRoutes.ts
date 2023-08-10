import express from "express";
const router = express.Router();
import { getItem, addItem } from "./itemControls";
router.get("/get-item", getItem);
router.post("/add-item", addItem);
export default router;
