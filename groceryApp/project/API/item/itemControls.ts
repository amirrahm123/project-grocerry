import UserModel from "../user/userModel";
import Item from "./itemModel";

export const getItem = async (req: any, res: any) => {
  //Get item from the DB
  try {
    const data = await Item.find();
    console.log(res.json(data));
    return res.json(data);
  } catch (error) {
    return error;
  }
};

export const addItem = async (req: any, res: any) => {
  //Add item to the DB
  try {
    const { name, src, type, price } = req.body;
    const newItem = new Item({
      name: name,
      src: src,
      type: type,
      price: price,
    });
    await newItem.save();
    res.json({ message: "Item added successfully" });
  } catch (err) {
    return res.json({ message: "error" });
  }
};

export const addToCart = async (req: any, res: any) => {
  try {
    //get the item id, user id
    const { itemId, userId } = req.body;
    //get the user cart
    const selectedUser = await UserModel.findById(userId);
    if (!selectedUser) return res.send("permission denied").status(403);
    const cart = selectedUser.cart || [];

    //update the user cart
    await UserModel.updateOne({ _id: userId }, { cart: [...cart, itemId] });
    res.send("user updated successfuly").status(200);
  } catch (err) {
    res.send("Internal server error").status(500);
    console.log(err);
  }
};
