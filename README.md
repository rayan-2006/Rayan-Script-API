# Rayan Script API (My Mock Data Playground)

A free, self-hosted REST API service designed for rapid testing and prototyping. This API offers a familiar structure for developers, ensuring a smooth integration experience without relying on external services.


[my github](https://github.com/rayan-2006)
## 📋 Table of Contents

- [Resources](#resources)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Nested Routes](#nested-routes)
- [API Documentation](#api-documentation)
- [Important Notes](#important-notes)
- [Example Requests](#example-requests)

## 📦 Resources

This API provides the following resources:

| Resource   | Description                    | Count |
|------------|--------------------------------|-------|
| Users      | User profiles                  | 10    |
| Posts      | Blog posts                     | 100   |
| Comments   | Comments on posts              | 500   |
| Albums     | Photo albums                   | 100   |
| Photos     | Photos in albums               | 5000  |
| Todos      | To-do items                    | 200   |

## 🛠 Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Steps

1. **Clone or download the project**

```bash
git clone https://github.com/rayan-2006/Rayan-Script-API
cd your-repo-name
```

2. **Install dependencies**

### Use this mirror during internet outages.
```bash
npm config set registry https://mirror2.chabokan.net/npm/
```

```bash
npm install
```

## 🚀 Usage

### Start the server

```bash
npm start
```

Or directly:

```bash
node server.js
```

The server will start on **`http://localhost:3000`** by default.

To use a different port:

```bash
PORT=8080 npm start
```

## 📡 API Endpoints

All API endpoints are prefixed with `/api/`.

### Users

| Method | Endpoint              | Description           |
|--------|-----------------------|-----------------------|
| GET    | `/api/users`          | Get all users         |
| GET    | `/api/users/:id`      | Get user by ID        |
| POST   | `/api/users`          | Create a new user     |
| PUT    | `/api/users/:id`      | Replace a user        |
| PATCH  | `/api/users/:id`      | Partially update user |
| DELETE | `/api/users/:id`      | Delete a user         |

### Posts

| Method | Endpoint              | Description           |
|--------|-----------------------|-----------------------|
| GET    | `/api/posts`          | Get all posts         |
| GET    | `/api/posts/:id`      | Get post by ID        |
| POST   | `/api/posts`          | Create a new post     |
| PUT    | `/api/posts/:id`      | Replace a post        |
| PATCH  | `/api/posts/:id`      | Partially update post |
| DELETE | `/api/posts/:id`      | Delete a post         |

### Comments

| Method | Endpoint                | Description              |
|--------|-------------------------|--------------------------|
| GET    | `/api/comments`         | Get all comments         |
| GET    | `/api/comments/:id`     | Get comment by ID        |
| POST   | `/api/comments`         | Create a new comment     |
| PUT    | `/api/comments/:id`     | Replace a comment        |
| PATCH  | `/api/comments/:id`     | Partially update comment |
| DELETE | `/api/comments/:id`     | Delete a comment         |

### Albums

| Method | Endpoint               | Description           |
|--------|------------------------|-----------------------|
| GET    | `/api/albums`          | Get all albums        |
| GET    | `/api/albums/:id`      | Get album by ID       |
| POST   | `/api/albums`          | Create a new album    |
| PUT    | `/api/albums/:id`      | Replace an album      |
| PATCH  | `/api/albums/:id`      | Partially update album|
| DELETE | `/api/albums/:id`      | Delete an album       |

### Photos

| Method | Endpoint               | Description           |
|--------|------------------------|-----------------------|
| GET    | `/api/photos`          | Get all photos        |
| GET    | `/api/photos/:id`      | Get photo by ID       |
| POST   | `/api/photos`          | Create a new photo    |
| PUT    | `/api/photos/:id`      | Replace a photo       |
| PATCH  | `/api/photos/:id`      | Partially update photo|
| DELETE | `/api/photos/:id`      | Delete a photo        |

### Todos

| Method | Endpoint               | Description           |
|--------|------------------------|-----------------------|
| GET    | `/api/todos`           | Get all todos         |
| GET    | `/api/todos/:id`       | Get todo by ID        |
| POST   | `/api/todos`           | Create a new todo     |
| PUT    | `/api/todos/:id`       | Replace a todo        |
| PATCH  | `/api/todos/:id`       | Partially update todo |
| DELETE | `/api/todos/:id`       | Delete a todo         |

## 🔗 Nested Routes

Supports nested resources:

| Method | Endpoint                      | Description                    |
|--------|-------------------------------|--------------------------------|
| GET    | `/api/users/:userId/posts`    | Get all posts by user ID       |
| GET    | `/api/users/:userId/albums`   | Get all albums by user ID      |
| GET    | `/api/users/:userId/todos`    | Get all todos by user ID       |
| GET    | `/api/posts/:postId/comments` | Get all comments by post ID    |
| GET    | `/api/albums/:albumId/photos` | Get all photos by album ID     |

## 📖 API Documentation

Interactive API documentation is available at:

**`http://localhost:3000/api-docs`**

This provides a Swagger UI interface where you can explore and test all available endpoints.

## ⚠️ Important Notes

### In-Memory Storage

- All data is stored **in-memory** (JavaScript arrays/objects).
- **Data resets upon server restart.**
- Changes made via POST, PUT, PATCH, DELETE are **simulated** and NOT persisted.

### Simulated Write Operations

| Operation | Behavior |
|-----------|----------|
| **POST**  | Returns `201 Created` with the new data + auto-generated ID. The data is NOT saved. |
| **PUT**   | Returns `200 OK` with the updated data. The data is NOT saved. |
| **PATCH** | Returns `200 OK` with the partially updated data. The data is NOT saved. |
| **DELETE**| Returns `200 OK` with a confirmation message. The data is NOT actually deleted. |

This API provides a flexible foundation for frontend development and testing, allowing for custom data structures and behaviors.

## 💡 Example Requests

### Get all users

```bash
curl http://localhost:3000/api/users
```

### Get a single user

```bash
curl http://localhost:3000/api/users/1
```

### Create a new post

```bash
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"userId": 1, "title": "My New Post", "body": "This is my post."}'
```

### Get comments for a post

```bash
curl http://localhost:3000/api/posts/1/comments
```

### Using JavaScript/Fetch

```javascript
// Get all posts
fetch('http://localhost:3000/api/posts')
  .then(res => res.json())
  .then(data => console.log(data));

// Create a new todo
fetch('http://localhost:3000/api/todos', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 1,
    title: 'Learn Node.js',
    completed: false
  })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

## 📊 Data Structure Reference

### User

```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8056 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
```

### Post

```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum..."
}
```

### Comment

```json
{
  "postId": 1,
  "id": 1,
  "name": "id labore ex et quam laborum",
  "email": "Eliseo@gardner.biz",
  "body": "laudantium enim quasi est quidem magnam voluptate ipsam..."
}
```

### Album

```json
{
  "userId": 1,
  "id": 1,
  "title": "quidem molestiae enim"
}
```

### Photo

```json
{
  "albumId": 1,
  "id": 1,
  "title": "accusamus beatae ad facilis cum architecto ducimus",
  "url": "https://via.placeholder.com/600/92c952",
  "thumbnailUrl": "https://via.placeholder.com/150/92c952"
}
```

### Todo

```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

## 📁 Project Structure

```
rayan-script-api/
├── data/               # In-memory data files
│   ├── users.js
│   ├── posts.js
│   ├── comments.js
│   ├── albums.js
│   ├── photos.js
│   └── todos.js
├── routes/             # Express route definitions
│   ├── users.js
│   ├── posts.js
│   ├── comments.js
│   ├── albums.js
│   ├── photos.js
│   └── todos.js
├── controllers/        # Request handlers
│   ├── userController.js
│   ├── postController.js
│   ├── commentController.js
│   ├── albumController.js
│   ├── photoController.js
│   └── todoController.js
├── utils/              # Utility functions
│   └── idGenerator.js
├── server.js           # Main Express app
├── swagger.json        # OpenAPI/Swagger definition
├── package.json        # Project dependencies
└── README.md           # This file
```

## 🔒 Security

- **Rate Limiting**: Built-in rate limiting (1000 requests per 15 minutes per IP).
- **CORS**: Can be enabled by adding `cors` middleware if needed for cross-origin requests.

## 🤝 Contribute to Rayan Script API

Feel free to fork, modify, and use this project as needed. If you have ideas for improvement or want to contribute, your input is welcome! We encourage you to share your modifications.

## 📄 License

This project is provided as open-source and free to use. You are free to use, modify, and distribute it. (Released under the MIT License.)

[my github](https://github.com/rayan-2006);

---

**Happy Coding! 🚀**