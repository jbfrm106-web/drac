import express from "express";

const app = express();

// Home route (test)
app.get("/", (req, res) => {
  res.send("API is running");
});

// Health check (optional but good)
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
