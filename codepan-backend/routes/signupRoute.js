import express from "express";
import User from "../models/User.js";

const router = express.Router();       

// POST /api/signup
router.post("/", async (req, res) => {  
  try {
    const { name, email, username, password } = req.body;

    // Simple validations (can be enhanced)
    if (!name || !email || !username || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if email or username already exists
    const existingEmail = await User.findOne({ email });
    const existingUsername = await User.findOne({ username });

    if (existingEmail) {
      return res.status(409).json({ message: "Email already in use." });
    }

    if (existingUsername) {
      return res.status(409).json({ message: "Username already in use." });
    }

    // Create user
    const newUser = new User({ name, email, username, password });
    await newUser.save();

    res.status(201).json({ message: "User created successfully." });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ message: "Server error. Try again later." });
  }
});

export default router;
