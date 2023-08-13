import express from "express";
const router = express.Router();
import { getItem, addItem, addToCart, deleteItem } from "./itemControls";
router.get("/get-item", getItem);
router.post("/add-item", addItem);
router.put("/addToCart", addToCart);
router.delete("/delete-item/:itemId", deleteItem);
export default router;
