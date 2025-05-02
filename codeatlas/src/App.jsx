import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure you import the CSS
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
import CompanyPage from "./pages/CompanyPage";
import NoteViewer from "./pages/NoteViewer";



const App = () => {
  const location = useLocation();
  const showNavbar = !['/login', '/signup'].includes(location.pathname);
  return (
    <div>
      {showNavbar && <Navbar />}
          <ToastContainer/>
          <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/notes/view/:gdriveId" element={<NoteViewer />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/prepare" element={<Prepare />} />
            <Route path="/prepare/:slug" element={<CompanyPage />} />
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
