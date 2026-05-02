/**
 * Post Controller
 * Handles all request logic for posts resource.
 */

const posts = require('../data/posts');
const { getNextId } = require('../utils/idGenerator');

/**
 * GET /posts - Get all posts
 */
const getAll = (req, res) => {
  res.json(posts);
};

/**
 * GET /posts/:id - Get a post by ID
 */
const getById = (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  res.json(post);
};

/**
 * POST /posts - Create a new post
 */
const create = (req, res) => {
  const newPost = {
    id: getNextId(),
    ...req.body
  };
  res.status(201).json(newPost);
};

/**
 * PUT /posts/:id - Replace an existing post entirely
 */
const update = (req, res) => {
  const updatedPost = {
    id: parseInt(req.params.id),
    ...req.body
  };
  res.json(updatedPost);
};

/**
 * PATCH /posts/:id - Partially update an existing post
 */
const patch = (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  const updatedPost = { ...post, ...req.body };
  res.json(updatedPost);
};

/**
 * DELETE /posts/:id - Delete a post
 */
const remove = (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  res.json({ message: 'Post deleted' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  patch,
  remove
};