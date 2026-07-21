const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 CIL Cohort 20 Telegram Bot</h1>
    <p>Backend Status: <b style="color:green;">ONLINE</b></p>
    <p>Hosted on Render ☁️</p>
    <p>Version: v1.0.0</p>
    <p>Deployment Successful ✅</p>
  `);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "online",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
