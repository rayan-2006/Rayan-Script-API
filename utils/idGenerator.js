/**
 * Utility function for generating auto-incrementing IDs.
 * Maintains a counter that increments with each call.
 */

let currentId = 0;

/**
 * Generate a new auto-incrementing ID.
 * @returns {number} The next available ID.
 */
const getNextId = () => {
  currentId += 1;
  return currentId;
};

/**
 * Reset the ID counter to a specific value.
 * Useful when reinitializing data.
 * @param {number} startFrom - The ID to start from.
 */
const resetIdCounter = (startFrom) => {
  currentId = startFrom || 0;
};

module.exports = { getNextId, resetIdCounter };