import {  BrowserRouter as Router,Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Roadmap from "./pages/Roadmap";
import Notes from "./pages/Notes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Prepare from "./pages/Prepare";
import DevopsRoadmap from "./pages/roadmaps/DevOpsRoadmap";
import Leaderboard from "./pages/Leaderboard";
import "./styles/App.css";
import CloudRoadmap from "./pages/roadmaps/CloudRoadmap";
import AimlRoadmap from "./pages/roadmaps/AimlRoadmap";
import MyAccount from "./pages/Account";


const App = () => {
  const location = useLocation();
  const showNavbar = !['/login', '/signup'].includes(location.pathname);
  return (
    <div>
      {showNavbar && <Navbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/prepare" element={<Prepare />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/roadmap/devops" element={<DevopsRoadmap />} />
            <Route path="/roadmap/cloud" element={<CloudRoadmap />} />
            <Route path="/roadmap/aiml" element={<AimlRoadmap />} />
          </Routes>
        </div>
  );
};

export default App;
