/**
 * Comments Routes
 * Defines all RESTful routes for the comments resource.
 */

const router = require('express').Router();
const commentController = require('../controllers/commentController');

// Main comment routes
router.get('/', commentController.getAll);
router.get('/:id', commentController.getById);
router.post('/', commentController.create);
router.put('/:id', commentController.update);
router.patch('/:id', commentController.patch);
router.delete('/:id', commentController.remove);

module.exports = router;