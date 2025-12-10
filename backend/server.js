// backend/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import contactRoutes from "./routes/contact.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route (so you don't get "Cannot GET /")
app.get("/", (req, res) => {
  res.send({ message: "Backend is running!" });
});

// Routes
app.use("/api/contact", contactRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on port ${PORT}`)
);
