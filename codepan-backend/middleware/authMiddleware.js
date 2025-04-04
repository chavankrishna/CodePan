import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
};

export const adminMiddleware = (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Access denied' });
  next();
};

export const editorMiddleware = (req, res, next) => {
  if (!['admin', 'editor'].includes(req.user.role)) return res.status(403).json({ error: 'Access denied' });
  next();
};
