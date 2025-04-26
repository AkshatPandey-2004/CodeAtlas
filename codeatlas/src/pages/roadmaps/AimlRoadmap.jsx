import "../../styles/roadmap.css";
import roadmap from "../../assets/Aiml.jpg";    

const AimlRoadmap = () => {
  return (
    <div className="roadmap-container">
      <h1>Aiml Roadmap</h1>
      <p>Here is the roadmap to becoming Aiml Engineer:</p>
      <img 
        src={roadmap} 
        alt="Aiml Roadmap"
        className="roadmap-image"
      />
      <p>
        For more details, visit <a href="https://roadmap.sh/ai/artificial-intelligence-and-machine-learning-roadmap-bax4x" target="_blank" rel="noopener noreferrer">roadmap.sh</a>.
      </p>
    </div>
  );
};

export default AimlRoadmap; 
