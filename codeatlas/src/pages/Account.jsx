import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Account.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // ✅ Make sure you import this

const Account = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    leetcodeUsername: "",
    gfgUsername: "",
  });
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const token = localStorage.getItem("token");
  const navigate = useNavigate(); // ✅ Move outside so it's globally accessible

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFormData({
          username: res.data.username || "",
          email: res.data.email || "",
          leetcodeUsername: res.data.leetcodeUsername || "",
          gfgUsername: res.data.gfgUsername || "",
        });
      } catch (err) {
        toast.error("Failed to load profile!");
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchUserData();
  }, [token]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    toast.success("Logged out successfully!", {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
    });

    setTimeout(() => {
      navigate("/login");
      window.location.reload();
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setUpdating(true);
      await axios.put(
        "http://localhost:5000/api/user/update",
        {
          username: formData.username,
          leetcodeUsername: formData.leetcodeUsername,
          gfgUsername: formData.gfgUsername,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error("Error updating profile!");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="account-loading">
        <div className="spinner"></div>
        <p>Loading Profile...</p>
      </div>
    );
  }

  return (
    <div className="account-wrapper">
      <ToastContainer />
      <div className="account-card">
        <div className="account-sidebar">
          <div className="profile-avatar">
            {formData.username.charAt(0).toUpperCase()}
          </div>
          <h3>{formData.username}</h3>
          <p>{formData.email}</p>
        </div>

        <div className="account-details">
          <h2>Edit Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>LeetCode Profile URL</label>
              <input
                name="leetcodeUsername"
                value={formData.leetcodeUsername}
                onChange={handleChange}
                placeholder="https://leetcode.com/yourUsername"
              />
            </div>

            <div className="form-group">
              <label>GFG Profile URL</label>
              <input
                name="gfgUsername"
                value={formData.gfgUsername}
                onChange={handleChange}
                placeholder="https://www.geeksforgeeks.org/yourUsername/"
              />
            </div>

            <button type="submit" disabled={updating}>
              {updating ? "Updating..." : "Save Changes"}
            </button>

            <button type="button" onClick={handleLogout} className="logout-btn">
  Logout
</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
