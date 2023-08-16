import express from "express";
const router = express.Router();
import {
  getItem,
  addItem,
  addToCart,
  deleteItem,
  updateItem,
  handleRemoveFromCart,
} from "./itemControls";
router.get("/get-item", getItem);
router.post("/add-item", addItem);
router.put("/addToCart", addToCart);
router.delete("/delete-item/:itemId", deleteItem);
router.put("/update-item/:itemId", updateItem);
router.put("/removeFromCart", handleRemoveFromCart);
export default router;
