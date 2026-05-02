/**
 * Users Routes
 * Defines all RESTful routes for the users resource.
 * Includes nested routes for user's posts, albums, and todos.
 */

const router = require('express').Router();
const userController = require('../controllers/userController');

// Main user routes
router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.patch('/:id', userController.patch);
router.delete('/:id', userController.remove);

// Nested routes - GET posts by user ID
router.get('/:userId/posts', (req, res) => {
  const posts = require('../data/posts');
  const userPosts = posts.filter(p => p.userId === parseInt(req.params.userId));
  if (userPosts.length === 0) {
    return res.status(404).json({ message: 'No posts found for this user' });
  }
  res.json(userPosts);
});

// Nested routes - GET albums by user ID
router.get('/:userId/albums', (req, res) => {
  const albums = require('../data/albums');
  const userAlbums = albums.filter(a => a.userId === parseInt(req.params.userId));
  if (userAlbums.length === 0) {
    return res.status(404).json({ message: 'No albums found for this user' });
  }
  res.json(userAlbums);
});

// Nested routes - GET todos by user ID
router.get('/:userId/todos', (req, res) => {
  const todos = require('../data/todos');
  const userTodos = todos.filter(t => t.userId === parseInt(req.params.userId));
  if (userTodos.length === 0) {
    return res.status(404).json({ message: 'No todos found for this user' });
  }
  res.json(userTodos);
});

module.exports = router;