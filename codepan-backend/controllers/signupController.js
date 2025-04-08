// controllers/signupController.js
import User from '../models/User.js'; // adjust if needed

export const signupUser = async (req, res) => {
  try {
    const { name, email, username, password } = req.body;

    // Simple validation (you can add more)
    if (!name || !email || !username || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already in use' });
    }

    // Check if username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(409).json({ message: 'Username already in use' });
    }

    // Create new user
    const newUser = new User({ name, email, username, password });
    await newUser.save();

    // ✅ SEND SUCCESS RESPONSE
    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
