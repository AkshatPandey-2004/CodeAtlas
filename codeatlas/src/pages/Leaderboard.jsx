import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Leaderboard.css";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/leaderboard");
        setUsers(res.data);
      } catch (err) {
        console.error("Failed to fetch leaderboard");
      }
    };

    fetchLeaderboard();
  }, []);

  const getRankIcon = (rank) => {
    if (rank === 0) return "🥇";
    if (rank === 1) return "🥈";
    if (rank === 2) return "🥉";
    return rank + 1;
  };

  return (
    <div className="leaderboard-background">
      <div className="leaderboard-card">
        <h2 className="leaderboard-title">🏆 Leaderboard</h2>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>LeetCode</th>
              <th>GFG</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr
                key={idx}
                className={`leaderboard-row ${
                  idx === 0 ? "gold" : idx === 1 ? "silver" : idx === 2 ? "bronze" : ""
                }`}
              >
                <td>{getRankIcon(idx)}</td>
                <td className="user-cell">
                  <span>{user.username}</span>
                </td>
                <td>{user.leetcodeSolved}</td>
                <td>{user.gfgSolved}</td>
                <td>{user.totalScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
