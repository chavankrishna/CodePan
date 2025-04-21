import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signin = async (req, res) => {
  try {
    const { emailOrUsername, password } = req.body;

    // Validate input
    if (!emailOrUsername || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if input is email or username
    const isEmail = emailOrUsername.includes("@");
    const query = isEmail
      ? { email: emailOrUsername.toLowerCase() } // Normalize email
      : { username: emailOrUsername };

    const user = await User.findOne(query);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Set token in cookie (optional)
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // Send response
    res.status(200).json({
      message: "Login successful.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        username: user.username,
      },
      token,
    });
  } catch (error) {
    console.error("Signin Error:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
