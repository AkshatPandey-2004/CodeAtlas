import express from "express";
import axios from "axios";
import User from "../model/User.js";

const router = express.Router();

// Refresh score for all users
router.get("/refresh", async (req, res) => {
  try {
    const users = await User.find();

    const updatedUsers = await Promise.all(users.map(async (user) => {
      let leetcodeSolved = 0;
      let gfgSolved = 0;

      // Leetcode API call
      if (user.leetcodeProfile) {
        const username = user.leetcodeProfile.split("/").filter(Boolean).pop();
        const leetRes = await axios.get(`https://leetcode-api-faisalshohag.vercel.app/${username}`);
        leetcodeSolved = leetRes.data?.totalSolved || 0;
      }

      // GFG API call
      if (user.gfgProfile) {
        const username = user.gfgProfile.split("/").filter(Boolean).pop();
        const gfgRes = await axios.get(`https://geeks-for-geeks-api.vercel.app/${username}`);
        gfgSolved = parseInt(gfgRes.data?.info?.totalProblemsSolved) || 0;
      }

      user.leetcodeSolved = leetcodeSolved;
      user.gfgSolved = gfgSolved;
      await user.save();

      return {
        username: user.username,
        leetcodeSolved,
        gfgSolved,
        score: leetcodeSolved * 2 + gfgSolved * 1.5
      };
    }));

    res.json({ message: "Scores refreshed", updatedUsers });
  } catch (err) {
    console.error("Error refreshing scores:", err);
    res.status(500).json({ message: "Failed to refresh scores" });
  }
});

export default router;
