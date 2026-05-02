/**
 * In-memory data store for Todos.
 * Provides mock todo data for testing and development.
 */

const todos = [];

for (let id = 1; id <= 200; id++) {
  todos.push({
    id: id,
    userId: ((id - 1) % 10) + 1,
    title: `task ${id}`,
    completed: id % 3 === 0
  });
}

module.exports = todos;