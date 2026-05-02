/**
 * In-memory data store for Albums.
 * Provides mock data for testing and development purposes.
 */

const albums = [];

for (let id = 1; id <= 100; id++) {
  albums.push({
    id: id,
    userId: ((id - 1) % 10) + 1,
    title: `Album ${id}`
  });
}

module.exports = albums;