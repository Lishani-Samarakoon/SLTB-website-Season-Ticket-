/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));

app.use(express.json());

// Request logging middleware (development)
if (process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
    next();
  });
}

// ✅ Root route (THIS FIXES YOUR MAIN LINK)
app.get("/", (req, res) => {
  res.status(200).send("Backend is running ✅");
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ 
    status: "Backend is running fine",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Application submission endpoint
app.post("/apply", (req, res) => {
  console.log("Received application:", req.body);

  res.json({
    message: "Application received successfully",
    data: req.body,
    applicationId: `APP_${Date.now()}`,
    status: "pending_review"
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({
    error: "Internal server error",
    message: process.env.NODE_ENV === 'production' ? 'Something went wrong' : err.message
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Not found",
    message: `Endpoint ${req.method} ${req.path} does not exist`
  });
});

// Start server (ONLY ONCE)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
