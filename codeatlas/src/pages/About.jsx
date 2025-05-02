import React from "react";
import "../styles/About.css";
import { FaLightbulb, FaHistory, FaRocket, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <div className="about-content">
        <div className="about-section">
          <h2><FaLightbulb className="icon" /> Introduction</h2>
          <p>
            CodeAtlas is a web-based MERN application that merges the strengths of platforms like Javatpoint, W3Schools, and LeetCode. It provides comprehensive learning materials, coding challenges, and a performance-based ranking system. The platform covers various domains such as Cloud Computing, AI/ML, and DevOps while tracking user progress across multiple platforms.
          </p>
        </div>

        <div className="about-section">
          <h2><FaHistory className="icon" /> Background</h2>
          <p>
            Learning technical concepts and preparing for interviews requires both theory and hands-on practice. Platforms like LeetCode focus on coding, while others like W3Schools offer theory without progress tracking. Switching disrupts learning. CodeAtlas combines all essential features into one platform—structured roadmaps, practice questions, and a dynamic leaderboard—to offer a cohesive learning experience.
          </p>
        </div>

        <div className="about-section">
          <h2><FaRocket className="icon" /> Motivation</h2>
          <p>
            We saw a gap in unified learning platforms and created CodeAtlas to solve it. With features like coding practice, real-time tracking, and theoretical resources, it provides a complete educational journey. This project also strengthened our skills in full-stack development using the MERN stack, APIs, and data handling.
          </p>
        </div>

        <div className="about-section">
          <h2><FaUsers className="icon" /> Our Contribution</h2>
          <p>
            CodeAtlas simplifies tech education with structured notes, roadmaps, interview prep tools, and competitive coding leaderboards. It promotes consistent learning, helps set personal goals, and ensures learners stay ahead in the rapidly evolving tech landscape.
          </p>
        </div>

        <div className="made-by">
          <p>Created by</p>
          <h3>Akshat Pandey & Madhav Madan</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
