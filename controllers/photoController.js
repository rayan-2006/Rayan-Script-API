/**
 * Photo Controller
 * Handles all request logic for photos resource.
 */

const photos = require('../data/photos');
const { getNextId } = require('../utils/idGenerator');

/**
 * GET /photos - Get all photos
 */
const getAll = (req, res) => {
  res.json(photos);
};

/**
 * GET /photos/:id - Get a photo by ID
 */
const getById = (req, res) => {
  const photo = photos.find(p => p.id === parseInt(req.params.id));
  if (!photo) {
    return res.status(404).json({ message: 'Photo not found' });
  }
  res.json(photo);
};

/**
 * POST /photos - Create a new photo
 */
const create = (req, res) => {
  const newPhoto = {
    id: getNextId(),
    ...req.body
  };
  res.status(201).json(newPhoto);
};

/**
 * PUT /photos/:id - Replace an existing photo entirely
 */
const update = (req, res) => {
  const updatedPhoto = {
    id: parseInt(req.params.id),
    ...req.body
  };
  res.json(updatedPhoto);
};

/**
 * PATCH /photos/:id - Partially update an existing photo
 */
const patch = (req, res) => {
  const photo = photos.find(p => p.id === parseInt(req.params.id));
  if (!photo) {
    return res.status(404).json({ message: 'Photo not found' });
  }
  const updatedPhoto = { ...photo, ...req.body };
  res.json(updatedPhoto);
};

/**
 * DELETE /photos/:id - Delete a photo
 */
const remove = (req, res) => {
  const photo = photos.find(p => p.id === parseInt(req.params.id));
  if (!photo) {
    return res.status(404).json({ message: 'Photo not found' });
  }
  res.json({ message: 'Photo deleted' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  patch,
  remove
};