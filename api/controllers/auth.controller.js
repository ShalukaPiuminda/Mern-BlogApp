import User from "../models/User.model.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newUser = new User({ username, email, password });

  try {
    await newUser.save();
    res.json({ message: "Signup successful" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
