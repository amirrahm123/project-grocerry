import express from "express";
import { getUser, addUser, login } from "./userControls";
const router = express.Router();

router.get("/get-user", getUser);
router.post("/add-user", addUser);
router.post("/login-user", login);

export default router;
