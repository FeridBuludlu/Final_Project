import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userExists = await userModel.findOne({ username });

    if (userExists) {
      return res.status(409).json({ message: "username already exists" });
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new userModel({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).send({ message: "Login ugurla basa catdi", user: newUser });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ message: "user tapılmadı" });

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "parol yanlışdır" });

    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        email: user.email,
      },
      process.env.JWT,
      { expiresIn: "1h" }
    );

    const { password, ...otherDetails } = user._doc;
    res.status(200).json({
      message: "Login successful",
      details: { ...otherDetails },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllUser = async (req,res) =>{
    try {
        const users = await userModel.find({})
        res.status(200).json({users : users})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}
