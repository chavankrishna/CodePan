import express from 'express';
import Post from '../models/Post.js';
import { authMiddleware, adminMiddleware, editorMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Create a post (Guest Writer)
router.post('/', authMiddleware, async (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({ title, content, author: req.user.id });
  await newPost.save();
  res.status(201).json({ message: 'Post submitted for review' });
});

// Approve a post (Editor/Admin)
router.put('/:id/approve', editorMiddleware, async (req, res) => {
  await Post.findByIdAndUpdate(req.params.id, { status: 'approved' });
  res.json({ message: 'Post approved' });
});

// Get all approved posts
router.get('/', async (req, res) => {
  const posts = await Post.find({ status: 'approved' }).populate('author', 'username');
  res.json(posts);
});

export default router;


