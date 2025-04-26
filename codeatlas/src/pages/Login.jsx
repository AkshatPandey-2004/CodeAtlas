import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message
  
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
  
      if (response.status === 200) {
        // ✅ Save token in localStorage
        localStorage.setItem("token", response.data.token);
  
        toast.success("Login Successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
  
        setTimeout(() => {
          window.location.href = "/"; // Redirect after login
        }, 3000);
      }
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
      toast.error("Login failed! Please check your credentials.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="bodylg">
      <div className="main__bg"></div>
      <div className="main__bg layer1"></div>
      <div className="main__bg layer2"></div>
       <ToastContainer />
      <div className="login">
        <h2>Login</h2>
        <Link to="/" className="back-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-left"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </Link>
        <p className="welcome-message">
          Welcome to CodeAtlas! Your journey to coding mastery starts here.
        </p>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="text_area">
            <input
              type="text"
              placeholder="Username"
              className="text_input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="text_area">
            <input
              type="password"
              placeholder="Password"
              className="text_input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            LOGIN
          </button>
        </form>
        <Link className="link" to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
