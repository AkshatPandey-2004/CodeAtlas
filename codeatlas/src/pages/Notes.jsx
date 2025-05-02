import React from "react";
import "../styles/Notes.css";
import { notesSections } from "../data/notesData";
import { Link } from "react-router-dom";
import CLogos from "../assets/CLogos.jpg"
import JavaLogo from "../assets/java.jpg"
import JavaScriptLogo from "../assets/javascript.jpg"
import PythonLogo from "../assets/python.jpg"
import MySQLLogo from "../assets/mysql.jpg"
import CppLogo from "../assets/cpp.jpg"
import HtmlLogo from "../assets/html.jpg"
import CssLogo from "../assets/css.jpg"
import AutomationLogo from "../assets/automation.jpg"
import JenkinsLogo from "../assets/jenkins.jpg"
import DockerLogo from "../assets/docker.jpg"
import GitActionsLogo from "../assets/gitaction.jpg"
import TerraformLogo from "../assets/terraform.jpg"
import LinuxLogo from "../assets/linux.jpg"
import GitLogo from "../assets/git.jpg"
import AnsibleLogo from "../assets/ansible.jpg"
import DeepLogo from "../assets/deep.jpg"
import CNNLogo from "../assets/cnn.jpg"
import AIlogo from "../assets/ai.jpg"
import NLPlogo from "../assets/nlp.jpg"
import MLlogo from "../assets/ml.jpg"

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Notes = () => {
  const logoMap = {
      C: CLogos,
      Java: JavaLogo,
      JavaScript: JavaScriptLogo,
      Python: PythonLogo,
      MySQL: MySQLLogo,
      CPP: CppLogo,
      Html: HtmlLogo,
      Css: CssLogo,
      Automation: AutomationLogo,
      Jenkins: JenkinsLogo,
      Docker: DockerLogo,
      GitActions: GitActionsLogo,
      Terraform: TerraformLogo,
      Linux: LinuxLogo,
      Git: GitLogo,
      Ansible: AnsibleLogo,
      Deep: DeepLogo,
      CNN: CNNLogo,
      AI: AIlogo,
      NLP: NLPlogo,
      ML: MLlogo
      // Google: GoogleLogo,
      // Amazon: AmazonLogo,
      // Microsoft: MicrosoftLogo,
      // Facebook: FacebookLogo,
      // Apple: AppleLogo,
      // Netflix: NetflixLogo,
      // Uber: UberLogo,
      // LinkedIn: LinkedinLogo,
      // Cisco: CiscoLogo,
      // Oracle: OracleLogo,
      // Tesla: TeslaLogo,
      // IBM: IBMLogo,
      // PayPal: PayPalLogo,
      // Adobe: AdobeLogo,
      // Airbnb: Airbnblogo,
      // Salesforce: SalesforceLogo,
      // Spotify: SpotifyLogo,
      // Intel: IntelLogo
    };
  return (
    <div className="notes-page">
      <h1 className="notes-header">📚 Explore Study Notes</h1>

      {notesSections.map((section, index) => {
  const prevBtnClass = `swiper-button-prev-${index}`;
  const nextBtnClass = `swiper-button-next-${index}`;

  return (
    <div className="notes-section" key={index}>
      <h2 className="section-title">{section.title}</h2>

      <div className={`swiper-button-prev ${prevBtnClass}`} />
      <div className={`swiper-button-next ${nextBtnClass}`} />

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={4}
        navigation={{
          nextEl: `.${nextBtnClass}`,
          prevEl: `.${prevBtnClass}`,
        }}
        autoplay={{ delay: 3000 }}
        loop={true}
        speed={600}
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
      >
        {section.topics.map((topic, i) => (
          <SwiperSlide key={i}>
            <Link to={topic.link} className="note-card fade-in">
              <div className="note-image-wrapper">
                <img src={logoMap[topic.image]} alt={topic.title} className="note-image" />
              </div>
              <div className="note-content">
                <h3>{topic.title}</h3>
                <p>{topic.Desc}</p>
                <button className="view-btn">View Notes</button>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
})}
    </div>
  );
};

export default Notes;
