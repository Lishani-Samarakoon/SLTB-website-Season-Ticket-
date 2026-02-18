/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());


app.get("/health", (req, res) => {
  res.json({ status: "Backend is running fine " });
});


app.post("/apply", (req, res) => {
  console.log("Received application:", req.body);

  res.json({
    message: "Application received successfully",
    data: req.body,
  });
});


app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
