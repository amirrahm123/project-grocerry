import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,
  password: String,
  isAdmin: { type: Boolean, default: false },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
