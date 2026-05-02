/**
 * Posts Routes
 * Defines all RESTful routes for the posts resource.
 * Includes nested routes for post's comments.
 */

const router = require('express').Router();
const postController = require('../controllers/postController');

// Main post routes
router.get('/', postController.getAll);
router.get('/:id', postController.getById);
router.post('/', postController.create);
router.put('/:id', postController.update);
router.patch('/:id', postController.patch);
router.delete('/:id', postController.remove);

// Nested routes - GET comments by post ID
router.get('/:postId/comments', (req, res) => {
  const comments = require('../data/comments');
  const postComments = comments.filter(c => c.postId === parseInt(req.params.postId));
  if (postComments.length === 0) {
    return res.status(404).json({ message: 'No comments found for this post' });
  }
  res.json(postComments);
});

module.exports = router;