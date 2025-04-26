import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <div className="about-content">
        <h2>Introduction</h2>
        <p>
          CodeAtlas is a web-based application built using the MERN stack that
          combines the features of Javatpoint, W3Schools, and LeetCode. The
          platform helps professionals and students excel in computer science by
          offering coding practice, structured learning materials, and a ranking
          system. It provides notes, roadmaps, and content in various fields,
          such as Cloud Computing, AI/ML, DevOps, and more. Additionally, it
          tracks users' progress across different coding platforms and ranks them
          on a leaderboard based on their performance.
        </p>

        <h2>Background Information</h2>
        <p>
          Technical education and interview preparation require structured
          resources for effective learning and problem-solving. Existing
          platforms like LeetCode, CodeForces, and HackerRank focus on coding
          challenges but lack in-depth conceptual explanations. Meanwhile,
          Javatpoint, W3Schools, and GeeksForGeeks provide broad theoretical
          content but do not integrate hands-on coding practice or progress
          tracking.
          <br />
          <br />
          Switching between platforms disrupts learning continuity for students
          and professionals preparing for technical roles. Finding a centralized
          system that offers subject-specific guidance, coding challenges, and
          real-time performance tracking remains a challenge. Additionally,
          structured roadmaps tailored to career paths like DevOps, AI/ML, and
          Cloud Computing are often missing.
          <br />
          <br />
          CodeAtlas aims to bridge these gaps by combining theoretical
          instruction, coding practice, and ranking systems into a single,
          comprehensive platform. With structured roadmaps, a personal progress
          tracker, and a leaderboard compiling user performance across multiple
          platforms, CodeAtlas is designed to be a one-stop learning solution
          for computer science enthusiasts.
        </p>

        <h2>Motivation</h2>
        <p>
          CodeAtlas was developed to address the need for a unified and
          structured learning platform in Computer Science. With numerous
          resources scattered across different websites, students and
          professionals often struggle to follow a systematic learning path. The
          lack of well-organized roadmaps for fields like DevOps, Cloud
          Computing, and AI/ML, along with the inability to track coding
          progress across multiple platforms, creates a significant challenge.
          <br />
          <br />
          To solve this, CodeAtlas integrates structured learning materials,
          coding challenges, and a ranking system that encourages users to
          improve their problem-solving skills. Inspired by platforms like
          Javatpoint, W3Schools, and LeetCode, it combines theoretical content
          with practical coding exercises. Furthermore, it tracks users’
          performance on competitive coding platforms like LeetCode, HackerRank,
          and GeeksForGeeks, ranking them on a leaderboard to foster motivation
          and competition.
          <br />
          <br />
          Beyond its functionality, the development of CodeAtlas has also helped
          our team enhance our expertise in full-stack development using the
          MERN stack. This project has strengthened our skills in database
          management, real-time ranking algorithms, API development,
          authentication, and data handling. Our goal is to continuously improve
          CodeAtlas by integrating user feedback, expanding content, and
          refining our ranking system to make the platform more engaging and
          reliable.
        </p>

        <h2>Our Contribution</h2>
        <p>
          CodeAtlas enhances technical education by providing structured
          learning materials, notes, and roadmaps for professionals and
          students. Covering topics such as DevOps, AI/ML, and Cloud Computing,
          the platform simplifies learning and career navigation. It also offers
          comprehensive technical interview preparation, ensuring users build
          confidence and perform well in job interviews.
          <br />
          <br />
          To encourage skill development, CodeAtlas features a competitive
          coding leaderboard that tracks user progress across platforms like
          LeetCode, HackerRank, and GeeksForGeeks. This ranking system fosters
          healthy competition and continuous learning. Users can also set
          personal learning goals, monitor their progress in real time, and stay
          updated with the latest advancements in technology.
          <br />
          <br />
          By bridging the gap between theoretical knowledge and practical
          application, CodeAtlas makes technical education more accessible,
          engaging, and effective for aspiring developers and professionals.
        </p>

        <p className="made-by">
          Made by
          <br />
          Akshat Pandey & Madhav Madan
        </p>
      </div>
    </div>
  );
};

export default About;