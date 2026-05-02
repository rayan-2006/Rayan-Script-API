/**
 * Server.js - Main Express App
 * A free REST API service that is an exact replica of JSONPlaceholder.
 * 
 * Base URL: http://localhost:3000
 * API Documentation: http://localhost:3000/api-docs
 */

const express = require('express');
const cors = require('cors'); // Import CORS middleware
const swaggerUi = require('swagger-ui-express');
const rateLimit = require('express-rate-limit');
const swaggerDocument = require('./swagger.json');

// Import routes
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');
const albumRoutes = require('./routes/albums');
const photoRoutes = require('./routes/photos');
const todoRoutes = require('./routes/todos');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// =====================================================
// CORS Configuration
// Allow requests from local frontend (development)
// =====================================================

const corsOptions = {
  origin: 'http://localhost:5501',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// Enable CORS for all routes
app.use(cors({ origin: true, credentials: true }));

// Handle preflight requests
app.options('*', cors({ origin: true, credentials: true }));

// =====================================================
// Middleware
// =====================================================

// Body parser middleware
app.use(express.json());

// Custom logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// =====================================================
// Rate Limiting
// Prevent abuse with reasonable rate limits
// =====================================================
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Limit each IP to 1000 requests per windowMs
  message: {
    message: 'Too many requests from this IP, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/', limiter);

// =====================================================
// Swagger API Documentation
// =====================================================
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'TiCode Clone API Documentation',
}));

// =====================================================
// Root endpoint
// =====================================================
app.get('/', (req, res) => {
  res.json({
    name: 'TiCode Clone API',
    description: 'A free REST API service that is an exact replica of JSONPlaceholder.',
    version: '1.0.0',
    baseUrl: `http://localhost:${PORT}`,
    documentation: `http://localhost:${PORT}/api-docs`,
    resources: {
      users: '/api/users',
      posts: '/api/posts',
      comments: '/api/comments',
      albums: '/api/albums',
      photos: '/api/photos',
      todos: '/api/todos'
    },
    notes: [
      'POST, PUT, PATCH, DELETE operations simulate success but are NOT persisted.',
      'Data resets upon server restart (in-memory storage).',
      'Nested routes: /api/users/:id/posts, /api/posts/:id/comments, /api/albums/:id/photos'
    ]
  });
});

// =====================================================
// API Routes
// =====================================================
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/albums', albumRoutes);
app.use('/api/photos', photoRoutes);
app.use('/api/todos', todoRoutes);

// =====================================================
// 404 Handler
// =====================================================
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// =====================================================
// Error Handler
// =====================================================
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// =====================================================
// Start Server
// =====================================================
app.listen(PORT, () => {
  console.log(`========================================`);
  console.log(`  TiCode Clone API (JSONPlaceholder)`);
  console.log(`  Server running on http://localhost:${PORT}`);
  console.log(`  API Documentation: http://localhost:${PORT}/api-docs`);
  console.log(`========================================`);
});

module.exports = app;
