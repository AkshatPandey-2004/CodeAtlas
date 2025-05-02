import "../styles/Home.css";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero_1.jpg";
import heroImage2 from "../assets/roadway.jpg";
import heroImage3 from "../assets/notes.jpg";
import heroImage4 from "../assets/learn.jpg";
import heroImage5 from "../assets/interview.jpg";
import amazonLogo from "../assets/amazon.png";
import metaLogo from "../assets/meta.png";
import googleLogo from "../assets/google.png";
import hackerrankLogo from "../assets/hackerrank.png";
import leetcodeLogo from "../assets/leetcode.png";
import codeforcesLogo from "../assets/codeforces.png";

const Home = () => {
  
  return (
    
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
  <div className="hero-text">
    <h1>
      Master Coding with <span>CodeAtlas 🚀</span>
    </h1>
    <h2>Your Personalized Guide to Tech Success</h2>
    <p className="hero-subtitle">
      Begin your journey with curated roadmaps, hands-on coding, and expert guidance.
    </p>

    <ul className="hero-features">
      <li>🚀 Beginner to Pro Learning Paths</li>
      <li>📚 Structured Roadmaps & Notes</li>
      <li>💻 Hands-on Coding Practice</li>
      <li>🏆 Track Progress & Earn Badges</li>
    </ul>

    <Link to="/notes">
      <button className="cta-btn">Start Learning 📚</button>
    </Link>

    <p className="hero-quote">
      "Every great developer you know started just like you – a beginner!"
    </p>
  </div>

  <div className="hero-image-wrapper">
    <img
      src={heroImage}
      alt="Coding Illustration"
      className="hero-image"
    />
  </div>
</section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose CodeAtlas?</h2>
        <div className="feature-boxes">
          <div className="feature">
            <img src={heroImage2} alt="Roadmap Icon" />
            <h3>Step-by-Step Roadmaps</h3>
            <p>Follow structured learning paths to master coding effortlessly.</p>
          </div>
          <div className="feature">
            <img src={heroImage3} alt="Notes Icon" />
            <h3>Comprehensive Notes</h3>
            <p>Access in-depth notes and explanations for every topic.</p>
          </div>
          <div className="feature">
            <img src={heroImage4} alt="Leaderboard Icon" />
            <h3>Compete & Learn</h3>
            <p>Track your progress and challenge yourself with coding tasks.</p>
          </div>
          <div className="feature">
            <img src={heroImage5} alt="Interview Questions Icon" />
            <h3>Top Interview Questions</h3>
            <p>Prepare with real coding questions asked in top tech companies.</p>
          </div>
        </div>
      </section>
      <section className="contests">
  <h2>🚀 Upcoming Contests & Hiring Challenges</h2>
  <div className="contest-cards">

    <div className="contest-card">
      <img src={leetcodeLogo} alt="LeetCode Biweekly" className="contest-img" />
      <h3>LeetCode Biweekly Contest</h3>
      <p>Next Contest: <strong>August 17, 2025</strong></p>
      <a href="https://leetcode.com/contest/" target="_blank" rel="noopener noreferrer">Participate Now</a>
    </div>

    <div className="contest-card">
      <img src={codeforcesLogo} alt="Codeforces Global Round" className="contest-img" />
      <h3>Codeforces Global Round 26</h3>
      <p>Next Contest: <strong>August 24, 2025</strong></p>
      <a href="https://codeforces.com/contests" target="_blank" rel="noopener noreferrer">Join Now</a>
    </div>

    <div className="contest-card">
      <img src={googleLogo} alt="Google Code Jam" className="contest-img" />
      <h3>Google Code Jam 2025</h3>
      <p>Qualification Round: <strong>September 10, 2025</strong></p>
      <a href="https://developers.googleblog.com/en/celebrate-googles-coding-competitions-with-a-final-round-of-programming-fun/" target="_blank" rel="noopener noreferrer">Register</a>
    </div>

    <div className="contest-card">
      <img src={amazonLogo} alt="Amazon WOW" className="contest-img" />
      <h3>Amazon WOW for Women in Tech</h3>
      <p>Apply by: <strong>August 30, 2025</strong></p>
      <a href="https://www.amazon.jobs/content/en/career-programs/university/internships-for-students" target="_blank" rel="noopener noreferrer">Apply Now</a>
    </div>

    <div className="contest-card">
      <img src={metaLogo} alt="Meta Hacker Cup" className="contest-img" />
      <h3>Meta Hacker Cup 2025</h3>
      <p>Round 1: <strong>September 7, 2025</strong></p>
      <a href="https://www.facebook.com/codingcompetitions/hacker-cup" target="_blank" rel="noopener noreferrer">Register</a>
    </div>

    <div className="contest-card">
      <img src={hackerrankLogo} alt="HackerRank Women's Cup" className="contest-img" />
      <h3>HackerRank Women’s Cup</h3>
      <p>Apply before: <strong>September 15, 2025</strong></p>
      <a href="https://www.hackerrank.com/contests/womenscup/challenges" target="_blank" rel="noopener noreferrer">Apply Now</a>
    </div>

  </div>
</section>
<footer className="footer">
  <div className="footer-container">
    <div className="footer-left">
      <h2 className="logo-footer">CodeAtlas</h2>
      <p>Your gateway to mastering coding skills, notes & interview prep.</p>
      <div className="social-icons">
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </div>

    <div className="footer-middle">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/prepare">Prepare</a></li>
        <li><a href="/notes">Notes</a></li>
        <li><a href="/leaderboard">Leaderboard</a></li>
      </ul>
    </div>

    <div className="footer-right">
  <h4>Join Our Community</h4>
  <p>Be a part of our growing tech community on Discord and stay ahead with real-time coding support, events, and peer learning.</p>
  <a href="https://discord.gg/JX8ACctt" target="_blank" className="join-discord-btn">
    <i className="fab fa-discord"></i> Join Discord
  </a>
</div>
  </div>

  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} CodeAtlas. All rights reserved.</p>
  </div>
</footer>

    </div>
  );
};

export default Home;