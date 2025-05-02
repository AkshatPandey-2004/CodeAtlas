// routes/leaderboardRoutes.js
import express from "express";
import axios from "axios";
import User from "../model/User.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find();

    const leaderboardData = await Promise.all(
      users.map(async (user) => {
        let leetcodeSolved = 0;
        let gfgSolved = 0;

        // 📘 Get LeetCode username from profile URL
        if (user.leetcodeUsername) {
          const leetUsername = user.leetcodeUsername//.split("/").filter(Boolean).pop();
          try {
            const leetRes = await axios.get(`https://leetcode-api-faisalshohag.vercel.app/${leetUsername}`);
            leetcodeSolved = leetRes.data.totalSolved || 0;
          } catch (err) {
            console.error(`Error fetching LeetCode for ${leetUsername}:`, err.message);
          }
        }

        // 📗 Get GFG username from profile URL
        if (user.gfgUsername) {
          const gfgUsername = user.gfgUsername//.split("/").filter(Boolean).pop();
          try {
            const gfgRes = await axios.get(`https://geeks-for-geeks-api.vercel.app/${gfgUsername}`);
            gfgSolved = parseInt(gfgRes.data.info?.totalProblemsSolved || 0);
          } catch (err) {
            console.error(`Error fetching GFG for ${gfgUsername}:`, err.message);
          }
        }

        const leetcodeScore = leetcodeSolved * 2;
        const gfgScore = gfgSolved * 1.5;
        const totalScore = leetcodeScore + gfgScore;

        return {
          username: user.username,
          leetcodeSolved,
          gfgSolved,
          leetcodeScore,
          gfgScore,
          totalScore,
        };
      })
    );

    // 🏆 Sort by total score
    const sorted = leaderboardData.sort((a, b) => b.totalScore - a.totalScore);

    res.json(sorted);
  } catch (err) {
    console.error("Leaderboard Error:", err.message);
    res.status(500).json({ message: "Failed to fetch leaderboard" });
  }
});

export default router;
