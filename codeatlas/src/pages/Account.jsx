import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Account.css";

const Account = () => {
  const [formData, setFormData] = useState({
    username: "",
    leetcodeProfile: "",
    gfgProfile: "",
  });

  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  // 🔄 Load user data (optional)
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFormData({
          username: res.data.username || "",
          leetcodeProfile: res.data.leetcodeProfile || "",
          gfgProfile: res.data.gfgProfile || "",
        });
      } catch (err) {
        console.error("Failed to load profile");
      }
    };

    if (token) fetchUserData();
  }, [token]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        "http://localhost:5000/api/user/update",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessage("Profile updated successfully!");
    } catch (err) {
      setMessage("Error updating profile.");
    }
  };

  return (
    <div className="account-container">
      <h2>My Account</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input name="username" value={formData.username} onChange={handleChange} />

        <label>LeetCode Profile URL</label>
        <input name="leetcodeProfile" value={formData.leetcodeProfile} onChange={handleChange} />

        <label>GFG Profile URL</label>
        <input name="gfgProfile" value={formData.gfgProfile} onChange={handleChange} />

        <button type="submit">Update</button>
      </form>
      {message && <p className="msg">{message}</p>}
    </div>
  );
};

export default Account;
