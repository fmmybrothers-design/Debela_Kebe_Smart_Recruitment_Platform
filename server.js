/**
 * Smart Talent Discovery and Recruitment Management Platform
 * Main Server Entry Point
 * 
 * @author Debela Kebede
 * @description Connecting Talent, Empowering Careers
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');

// Load environment variables
dotenv.config();

// Import database connection
const db = require('./backend/config/database');

// Import routes
const authRoutes = require('./backend/routes/authRoutes');
const jobSeekerRoutes = require('./backend/routes/jobSeekerRoutes');
const employerRoutes = require('./backend/routes/employerRoutes');
const adminRoutes = require('./backend/routes/adminRoutes');
const vacancyRoutes = require('./backend/routes/vacancyRoutes');
const applicationRoutes = require('./backend/routes/applicationRoutes');

// Initialize Express app
const app = express();

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Request logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW || 15) * 60 * 1000,
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || 100),
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// API Routes - MUST BE BEFORE STATIC FILES
app.use('/api/auth', authRoutes);
app.use('/api/jobseeker', jobSeekerRoutes);
app.use('/api/employer', employerRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/vacancies', vacancyRoutes);
app.use('/api/applications', applicationRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'success',
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    author: 'Debela Kebede'
  });
});

// Debug endpoint to list all routes
app.get('/api/routes', (req, res) => {
  const routes = [];
  app._router.stack.forEach((middleware) => {
    if (middleware.route) {
      routes.push({
        path: middleware.route.path,
        methods: Object.keys(middleware.route.methods)
      });
    }
  });
  res.json({ routes });
});

// Frontend page routes - MUST BE BEFORE STATIC FILES
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'pages', 'index.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'pages', 'home.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'pages', 'register.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'pages', 'login.html'));
});

app.get('/jobs', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'pages', 'jobs.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'pages', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'pages', 'contact.html'));
});

app.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'pages', 'test.html'));
});

app.get('/test-simple', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'pages', 'test-simple.html'));
});

app.get('/diagnostic', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'pages', 'diagnostic.html'));
});

app.get('/dashboard/jobseeker', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'pages', 'dashboard-jobseeker.html'));
});

app.get('/dashboard/employer', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'pages', 'dashboard-employer.html'));
});

// Serve static files - AFTER ROUTES
app.use(express.static(path.join(__dirname, 'frontend')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 404 handler for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'API endpoint not found'
  });
});

// 404 handler for other routes
app.use('*', (req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>404 - Page Not Found</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body class="bg-light">
      <div class="container text-center" style="padding-top: 100px;">
        <h1 class="display-1">404</h1>
        <p class="lead">Page not found</p>
        <a href="/" class="btn btn-primary">Go Home</a>
      </div>
    </body>
    </html>
  `);
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  
  res.status(statusCode).json({
    status: 'error',
    message: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// Start server
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, () => {
  console.log('='.repeat(60));
  console.log('Smart Talent Discovery and Recruitment Management Platform');
  console.log('Author: Debela Kebede');
  console.log('Tagline: Connecting Talent, Empowering Careers');
  console.log('='.repeat(60));
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode`);
  console.log(`Server: http://${HOST}:${PORT}`);
  console.log(`API: http://${HOST}:${PORT}/api`);
  console.log('='.repeat(60));
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

module.exports = app;
