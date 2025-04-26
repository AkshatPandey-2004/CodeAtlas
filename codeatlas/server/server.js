import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";  // ✅ Auth routes
import userRoutes from "./routes/userRoutes.js";  // ✅ Protected user routes
import scoreRoutes from "./routes/scoreRoutes.js";
import cron from "node-cron";
import axios from "axios";
import leaderboardRoutes from "./routes/leaderboardRoutes.js";
// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middlewares
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use("/api/leaderboard", leaderboardRoutes);

// ✅ API Routes
app.use("/api", authRoutes);        // Signup & Login
app.use("/api/user", userRoutes);   // Account update, settings (JWT protected routes)
app.use("/api/score", scoreRoutes);
// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// ✅ Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB ✅");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT} 🚀`)
    );
  })
  .catch((err) =>
    console.error("MongoDB connection error ❌:", err)
  );

  cron.schedule("0 * * * *", async () => { // every hour
    try {
      await axios.get("http://localhost:5000/api/score/refresh");
      console.log("Score refreshed ✅");
    } catch (err) {
      console.log("Failed to refresh score ❌");
    }
  });
