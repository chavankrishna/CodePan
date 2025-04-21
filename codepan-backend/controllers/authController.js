// controllers/authController.js
import User from '../models/User.js';
import { sendEmail } from '../utils/sendEmail.js';
import bcrypt from 'bcryptjs';

export const forgotPassword = async (req, res) => {
  const email = req.body.email.toLowerCase();

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found.' });

    // Generate OTP
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Save OTP to user
    user.otp = { code: otpCode, expiresAt };
    await user.save();

    // Send OTP via email
    const subject = 'Password Reset OTP';
    const text = `Your OTP for password reset is ${otpCode}. It expires in 10 minutes.`;
    await sendEmail(user.email, subject, text);

    res.status(200).json({ message: 'OTP sent to your email.' });
  } catch (error) {
    console.error('Forgot Password Error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

export const resetPassword = async (req, res) => {
  const email = req.body.email.toLowerCase();
  const { otp, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !user.otp || !user.otp.code) {
      return res.status(400).json({ message: 'Invalid request.' });
    }

    if (user.otp.code !== otp) {
      return res.status(400).json({ message: 'Invalid OTP.' });
    }

    if (user.otp.expiresAt < new Date()) {
      return res.status(400).json({ message: 'OTP has expired.' });
    }

    // 🔐 Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    user.otp = undefined; // Clear OTP
    await user.save();

    res.status(200).json({ message: 'Password reset successful.' });
  } catch (error) {
    console.error('Reset Password Error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};
