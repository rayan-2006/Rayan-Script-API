/**
 * Albums Routes
 * Defines all RESTful routes for the albums resource.
 * Includes nested routes for album's photos.
 */

const router = require('express').Router();
const albumController = require('../controllers/albumController');

// Main album routes
router.get('/', albumController.getAll);
router.get('/:id', albumController.getById);
router.post('/', albumController.create);
router.put('/:id', albumController.update);
router.patch('/:id', albumController.patch);
router.delete('/:id', albumController.remove);

// Nested routes - GET photos by album ID
router.get('/:albumId/photos', (req, res) => {
  const photos = require('../data/photos');
  const albumPhotos = photos.filter(p => p.albumId === parseInt(req.params.albumId));
  if (albumPhotos.length === 0) {
    return res.status(404).json({ message: 'No photos found for this album' });
  }
  res.json(albumPhotos);
});

module.exports = router;