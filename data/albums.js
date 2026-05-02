/**
 * In-memory data store for Albums.
 * Contains 100 albums with the exact structure from JSONPlaceholder.
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