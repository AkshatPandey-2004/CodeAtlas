import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // for Roadmap
  const [userDropdownOpen, setUserDropdownOpen] = useState(false); // for user logout
  const user = JSON.parse(localStorage.getItem("user")); // Get user from localStorage
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  
    toast.success("Logged out successfully!", {
      position: "top-right",
      autoClose: 3000,  // 3 seconds
      theme: "colored",
    });
  
    setTimeout(() => {
      navigate("/login");
      window.location.reload();
    }, 3000); // 👉 match 3 sec timeout with Toast
  };

  return (
    <nav className="navbar">
      <Link to="/home" className="logo-container">
        <h1 className="logo-text">CodeAtlas</h1>
      </Link>
      
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <div
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="dropdown-btn">Roadmap ▾</span>
          {dropdownOpen && (
            <div className="dropdown-content">
              <Link to="/roadmap/devops">DevOps</Link>
              <Link to="/roadmap/cloud">Cloud</Link>
              <Link to="/roadmap/aiml">AI/ML</Link>
            </div>
          )}
        </div>
        <Link to="/notes">Notes</Link>
        <Link to="/prepare">Prepare</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/account">Account</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="login-section">
        {user ? (
          <div 
          className="user-profile" 
          onClick={() => setUserDropdownOpen(!userDropdownOpen)}
        >
          <div className="user-avatar">
            {user.username.charAt(0).toUpperCase()}
          </div>
          <span className="username">
            {user.username}
            
          </span>
        <button className="login-btn" onClick={handleLogout}>
              Logout
            </button>
        </div>
        ) : (
          <Link to="/login" className="login-btn">Log In</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
