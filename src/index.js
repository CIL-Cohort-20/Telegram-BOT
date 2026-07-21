const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// Health check route
app.get("/", (req, res) => {
  res.send("🚀 Telegram Bot backend is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
