/**
 * Photos Routes
 * Defines all RESTful routes for the photos resource.
 */

const router = require('express').Router();
const photoController = require('../controllers/photoController');

// Main photo routes
router.get('/', photoController.getAll);
router.get('/:id', photoController.getById);
router.post('/', photoController.create);
router.put('/:id', photoController.update);
router.patch('/:id', photoController.patch);
router.delete('/:id', photoController.remove);

module.exports = router;