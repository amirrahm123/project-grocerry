import mongoose, { Schema } from "mongoose";

const ItemSchema = new Schema({
  name: String,
  src: String,
  type: String,
  price: Number,
});

const ItemModel = mongoose.model("Item", ItemSchema);

export default ItemModel;
