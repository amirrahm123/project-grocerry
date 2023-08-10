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
