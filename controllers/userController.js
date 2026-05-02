/**
 * User Controller
 * Handles all request logic for users resource.
 */

const users = require('../data/users');
const { getNextId } = require('../utils/idGenerator');

/**
 * GET /users - Get all users
 */
const getAll = (req, res) => {
  res.json(users);
};

/**
 * GET /users/:id - Get a user by ID
 */
const getById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};

/**
 * POST /users - Create a new user
 * Simulates success by returning the created data with a new ID.
 * Changes are NOT persisted.
 */
const create = (req, res) => {
  const newUser = {
    id: getNextId(),
    ...req.body
  };
  res.status(201).json(newUser);
};

/**
 * PUT /users/:id - Replace an existing user entirely
 * Simulates success by returning the updated data.
 * Changes are NOT persisted.
 */
const update = (req, res) => {
  const updatedUser = {
    id: parseInt(req.params.id),
    ...req.body
  };
  res.json(updatedUser);
};

/**
 * PATCH /users/:id - Partially update an existing user
 * Simulates success by returning the updated data.
 * Changes are NOT persisted.
 */
const patch = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  const updatedUser = { ...user, ...req.body };
  res.json(updatedUser);
};

/**
 * DELETE /users/:id - Delete a user
 * Simulates deletion by returning 200 OK with confirmation.
 * The user is NOT actually removed from the in-memory store.
 */
const remove = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json({ message: 'User deleted' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  patch,
  remove
};