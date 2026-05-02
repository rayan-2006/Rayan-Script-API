/**
 * Todo Controller
 * Handles all request logic for todos resource.
 */

const todos = require('../data/todos');
const { getNextId } = require('../utils/idGenerator');

/**
 * GET /todos - Get all todos
 */
const getAll = (req, res) => {
  res.json(todos);
};

/**
 * GET /todos/:id - Get a todo by ID
 */
const getById = (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  res.json(todo);
};

/**
 * POST /todos - Create a new todo
 */
const create = (req, res) => {
  const newTodo = {
    id: getNextId(),
    ...req.body
  };
  res.status(201).json(newTodo);
};

/**
 * PUT /todos/:id - Replace an existing todo entirely
 */
const update = (req, res) => {
  const updatedTodo = {
    id: parseInt(req.params.id),
    ...req.body
  };
  res.json(updatedTodo);
};

/**
 * PATCH /todos/:id - Partially update an existing todo
 */
const patch = (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  const updatedTodo = { ...todo, ...req.body };
  res.json(updatedTodo);
};

/**
 * DELETE /todos/:id - Delete a todo
 */
const remove = (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  res.json({ message: 'Todo deleted' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  patch,
  remove
};