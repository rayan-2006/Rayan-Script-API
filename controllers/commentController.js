/**
 * Comment Controller
 * Handles all request logic for comments resource.
 */

const comments = require('../data/comments');
const { getNextId } = require('../utils/idGenerator');

/**
 * GET /comments - Get all comments
 */
const getAll = (req, res) => {
  res.json(comments);
};

/**
 * GET /comments/:id - Get a comment by ID
 */
const getById = (req, res) => {
  const comment = comments.find(c => c.id === parseInt(req.params.id));
  if (!comment) {
    return res.status(404).json({ message: 'Comment not found' });
  }
  res.json(comment);
};

/**
 * POST /comments - Create a new comment
 */
const create = (req, res) => {
  const newComment = {
    id: getNextId(),
    ...req.body
  };
  res.status(201).json(newComment);
};

/**
 * PUT /comments/:id - Replace an existing comment entirely
 */
const update = (req, res) => {
  const updatedComment = {
    id: parseInt(req.params.id),
    ...req.body
  };
  res.json(updatedComment);
};

/**
 * PATCH /comments/:id - Partially update an existing comment
 */
const patch = (req, res) => {
  const comment = comments.find(c => c.id === parseInt(req.params.id));
  if (!comment) {
    return res.status(404).json({ message: 'Comment not found' });
  }
  const updatedComment = { ...comment, ...req.body };
  res.json(updatedComment);
};

/**
 * DELETE /comments/:id - Delete a comment
 */
const remove = (req, res) => {
  const comment = comments.find(c => c.id === parseInt(req.params.id));
  if (!comment) {
    return res.status(404).json({ message: 'Comment not found' });
  }
  res.json({ message: 'Comment deleted' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  patch,
  remove
};