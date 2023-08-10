import User from "./userModel";

export const getUser = async (req: any, res: any) => {
  //Get user from the server
  try {
    const data = await User.find();
    console.log(res.json(data));
    return res.json(data);
  } catch (error) {
    return error;
  }
};

export const addUser = async (req: any, res: any) => {
  //Add user to the MongoDB
  try {
    const { name, password } = req.body;
    const newUser = new User({
      name: name,
      password: password,
    });
    const newUserDetails = await newUser.save();
    res.json({ name, id: newUserDetails._id });
  } catch (err) {
    return res.json({ message: "error" });
  }
};

export const login = async (req: any, res: any) => {
  //Check if user + password exists in the DB, return name + userID
  try {
    const { name, password } = req.body;
    console.log(name, password);

    //find user in DB
    const userDB = await User.findOne({ name, password });

    if (!userDB) throw new Error("Username or password are incorrect");

    res.status(201).send({ name: userDB.name, id: userDB._id });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
