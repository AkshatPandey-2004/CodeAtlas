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
          <h1>Master Coding with <span>CodeAtlas 🚀</span></h1>
          <h2>Your Personalized Guide to Tech Success</h2>
          <p>Your ultimate roadmap to becoming a successful developer.</p>
          
          {/* Bullet Points for More Info */}
          <ul className="hero-features">
            <li>🚀 Beginner to Pro Learning Paths</li>
            <li>📚 Structured Roadmaps & Notes</li>
            <li>💻 Hands-on Coding Practice</li>
            <li>🏆 Track Progress & Earn Badges</li>
          </ul>

          <Link to="/roadmap">
            <button className="cta-btn">Start Learning 📚</button>
          </Link>

          {/* Motivational Line */}
          
          <p className="hero-quote">"Every great developer you know started just like you – a beginner!"</p>
        </div>

        <img src={heroImage} alt="Coding Illustration" className="hero-image" />
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
      <img src={leetcodeLogo} alt="LeetCode Contest" className="contest-img"/>
      <h3>LeetCode Weekly Contest</h3>
      <p>Next Contest: <strong>March 10, 2025</strong></p>
      <a href="https://leetcode.com/contest/" target="_blank" rel="noopener noreferrer">Participate Now</a>
    </div>

    <div className="contest-card">
      <img src={codeforcesLogo} alt="CodeForces Contest" className="contest-img"/>
      <h3>CodeForces Contests</h3>
      <p>Next Contest: <strong>March 15, 2025</strong></p>
      <a href="https://codeforces.com/contests" target="_blank" rel="noopener noreferrer">Join Now</a>
    </div>

    <div className="contest-card">
      <img src={googleLogo} alt="Google Kick Start" className="contest-img"/>
      <h3>Google Summer of Code</h3>
      <p>Next Challenge: <strong>March 20, 2025</strong></p>
      <a href="https://summerofcode.withgoogle.com" target="_blank" rel="noopener noreferrer">Register</a>
    </div>

    <div className="contest-card">
      <img src={amazonLogo} alt="Amazon Hiring Challenge" className="contest-img"/>
      <h3>Amazon SDE Hiring Challenge</h3>
      <p>Apply before: <strong>March 25, 2025</strong></p>
      <a href="https://www.hackerearth.com/challenges/hiring/" target="_blank" rel="noopener noreferrer">Apply Now</a>
    </div>

    <div className="contest-card">
      <img src={metaLogo} alt="Meta Hacker Cup" className="contest-img"/>
      <h3>Meta Hacker Cup</h3>
      <p>Qualifiers Start: <strong>April 5, 2025</strong></p>
      <a href="https://www.facebook.com/codingcompetitions/hacker-cup" target="_blank" rel="noopener noreferrer">Register</a>
    </div>

    <div className="contest-card">
      <img src={hackerrankLogo} alt="HackerRank Hiring Challenge" className="contest-img"/>
      <h3>HackerRank Hiring Challenge</h3>
      <p>Apply before: <strong>April 10, 2025</strong></p>
      <a href="https://www.hackerrank.com/challenges" target="_blank" rel="noopener noreferrer">Apply Now</a>
    </div>
  </div>
</section>
<footer className="footer">
                <h3>Stay Updated with CodeAtlas</h3>
                <p>Subscribe to our newsletter for the latest coding tips, contests, and updates.</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
                </form>
                <div className="footer-links">
                    <a href="/about">About Us</a>
                    <a href="/prepare">Contact</a>
                    <a href="/notes">Privacy Policy</a>
                    <a href="/leaderboard">Terms of Service</a>
                </div>
            </footer>   
    </div>
  );
};

export default Home;