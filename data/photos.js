/**
 * In-memory data store for Photos.
 * Contains 5000 photos with the exact structure from JSONPlaceholder.
 */

const photos = [];

for (let id = 1; id <= 5000; id++) {
  const albumId = Math.ceil(id / 50);
  photos.push({
    id: id,
    albumId: albumId,
    title: `photo ${id}`,
    url: `https://via.placeholder.com/${id}/92c952`,
    thumbnailUrl: `https://via.placeholder.com/${id}/92c952?text=1`
  });
}

module.exports = photos;