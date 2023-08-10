import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import itemRoutes from "./API/item/itemRoutes";
import userRoutes from "./API/user/userRoutes";

dotenv.config();

const uri = process.env.CONNECTION_STRING + "groceryProject";

if (uri) {
  mongoose
    .connect(uri)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB error :", err));
} else {
  console.log("No URI");
}

const app = express();
app.use(cors());

app.use(express.json());
app.use(cookieParser());

// app.use("/user", userRoutes);
app.use("/item", itemRoutes);
app.use("/user", userRoutes);

app.use(express.static("./client"));

app.listen(5500, () => {
  console.log("server listen on port 5500");
});
