// routes/userRoutes.js
import express from "express";
import User from "../model/User.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get current user's profile
router.get("/me", authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch profile" });
  }
});

// Update user's profile
router.put("/update", authenticate, async (req, res) => {
  const { username, leetcodeUsername, gfgUsername } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { username, leetcodeUsername, gfgUsername },
      { new: true, runValidators: true }
    ).select("-password");
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Failed to update profile" });
  }
});

export default router;
