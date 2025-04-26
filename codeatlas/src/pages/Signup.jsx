import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios for API requests
import "../styles/Signup.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  // State variables for form fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(""); // To display response messages
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/signup", formData);
      
      if (response.status === 201) { // Check if user is created successfully
        // setMessage("Signup successful! Redirecting...");
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
        }
        toast.success("Signup successful! Redirecting...", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
        setIsSuccess(true);

        // Clear form
        setFormData({ username: "", email: "", password: "" });
        // const navigate = useNavigate();
        // Redirect to homepage after 2 seconds
        setTimeout(() => {
          window.location.href = "/"; // Redirect to homepage after 2 seconds
        }, 2000);
      } else {
        // setMessage("Signup failed. Please try again.");
         toast.error("Signup failed. Please try again.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Signup Error:", error.response ? error.response.data : error.message);
  setMessage(error.response?.data?.message || "Signup failed. Please try again.");
  setIsSuccess(false);
    }
  };

  return (
    <div className="bodylg">
      <div className="main__bg"></div>
      <div className="main__bg layer1"></div>
      <div className="main__bg layer2"></div>
      <ToastContainer />
      <div className="signup">
        <Link to="/" className="back-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </Link>
        <h2>Signup</h2>
        <p className="welcome-message">Welcome to CodeAtlas! Your journey to coding mastery starts here.</p>

        <form onSubmit={handleSubmit}>
          <div className="text_area">
            <input type="text" name="username" placeholder="Username" className="text_input" value={formData.username} onChange={handleChange} required />
          </div>
          <div className="text_area">
            <input type="email" name="email" placeholder="Email" className="text_input" value={formData.email} onChange={handleChange} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Please enter a valid email address"/>
          </div>
          <div className="text_area">
            <input type="password" name="password" placeholder="Password" className="text_input" value={formData.password} onChange={handleChange} required />
          </div>
          <input type="submit" value="SIGNUP" className="btn" />
        </form>

        {/* {message && (
          <p className={`message ${isSuccess ? "success" : "error"}`}>
            {message}
          </p>
        )} */}

        <Link className="link" to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Signup;
