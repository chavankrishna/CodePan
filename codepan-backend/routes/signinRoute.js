import express from "express"; 
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router(); 

router.post("/", async (req, res) => {
  try {
    const { emailOrUsername, password } = req.body;

    if (!emailOrUsername || !password) {
      return res.status(400).json({ message: "Email/Username and password are required." });
    }

    // Determine if email or username, and normalize email
    const isEmail = emailOrUsername.includes("@");
    const query = isEmail
      ? { email: emailOrUsername.toLowerCase() }
      : { username: emailOrUsername };

    const user = await User.findOne(query);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    res.status(200).json({
      message: "Signin successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        username: user.username,
      },
    });
  } catch (err) {
    console.error("Signin Error:", err);
    res.status(500).json({ message: "Server error. Try again later." });
  }
});

export default router;
