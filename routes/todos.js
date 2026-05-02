/**
 * Todos Routes
 * Defines all RESTful routes for the todos resource.
 */

const router = require('express').Router();
const todoController = require('../controllers/todoController');

// Main todo routes
router.get('/', todoController.getAll);
router.get('/:id', todoController.getById);
router.post('/', todoController.create);
router.put('/:id', todoController.update);
router.patch('/:id', todoController.patch);
router.delete('/:id', todoController.remove);

module.exports = router;