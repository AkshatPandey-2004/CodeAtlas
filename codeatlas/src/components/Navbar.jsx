import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav className="navbar">
       <Link to="/" className="logo-container">
        <h1 className="logo-text">CodeAtlas</h1>
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
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
      <Link to="/login" className="login-btn">Log In</Link>
    </nav>
  );
};

export default Navbar;
