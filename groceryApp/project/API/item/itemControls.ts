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

export const deleteItem = async (req: any, res: any) => {
  try {
    const { itemId } = req.params;
    await Item.findByIdAndRemove(itemId);
    res.send("Item Deleted Successfully").status(200);
  } catch (error) {
    return res.send("Internal Server Error").status(500);
  }
};
export const updateItem = async (req: any, res: any) => {
  try {
    const { itemId } = req.params;
    const { name, src, price, type } = req.body;
    await Item.updateOne({ _id: itemId }, { name, src, price, type });
    res.send("Item edited Successfully").status(200);
  } catch (error) {
    return res.send("Internal Server Error").status(500);
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
