const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const connectDb = require("./src/db");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/health", (req, res) => {
  res.json({ status: "Backend is running fine" });
});

// Mount API routes
const applicationsRouter = require("./src/routes/applications");
app.use("/api/applications", applicationsRouter);

// Debug: list mounted routes
if (app._router && Array.isArray(app._router.stack)) {
  try {
    const info = app._router.stack.map((layer) => ({
      name: layer.name,
      path: layer.route ? layer.route.path : undefined,
      methods: layer.route ? layer.route.methods : undefined,
    }));
    console.log('router stack:', info);
  } catch (e) {
    console.log('router stack introspect failed', e.message);
  }
}

// Connect to MongoDB (if configured)
connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Backend server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.warn("MongoDB connection failed, starting server without DB:", err.message);
    app.listen(PORT, () => {
      console.log(`Backend server running at http://localhost:${PORT}`);
    });
  });
