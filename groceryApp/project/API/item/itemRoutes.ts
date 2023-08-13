import express from "express";
const router = express.Router();
import { getItem, addItem, addToCart } from "./itemControls";
router.get("/get-item", getItem);
router.post("/add-item", addItem);
router.put("/addToCart", addToCart);
export default router;
