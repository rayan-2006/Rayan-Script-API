/**
 * Album Controller
 * Handles all request logic for albums resource.
 */

const albums = require('../data/albums');
const { getNextId } = require('../utils/idGenerator');

/**
 * GET /albums - Get all albums
 */
const getAll = (req, res) => {
  res.json(albums);
};

/**
 * GET /albums/:id - Get an album by ID
 */
const getById = (req, res) => {
  const album = albums.find(a => a.id === parseInt(req.params.id));
  if (!album) {
    return res.status(404).json({ message: 'Album not found' });
  }
  res.json(album);
};

/**
 * POST /albums - Create a new album
 */
const create = (req, res) => {
  const newAlbum = {
    id: getNextId(),
    ...req.body
  };
  res.status(201).json(newAlbum);
};

/**
 * PUT /albums/:id - Replace an existing album entirely
 */
const update = (req, res) => {
  const updatedAlbum = {
    id: parseInt(req.params.id),
    ...req.body
  };
  res.json(updatedAlbum);
};

/**
 * PATCH /albums/:id - Partially update an existing album
 */
const patch = (req, res) => {
  const album = albums.find(a => a.id === parseInt(req.params.id));
  if (!album) {
    return res.status(404).json({ message: 'Album not found' });
  }
  const updatedAlbum = { ...album, ...req.body };
  res.json(updatedAlbum);
};

/**
 * DELETE /albums/:id - Delete an album
 */
const remove = (req, res) => {
  const album = albums.find(a => a.id === parseInt(req.params.id));
  if (!album) {
    return res.status(404).json({ message: 'Album not found' });
  }
  res.json({ message: 'Album deleted' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  patch,
  remove
};