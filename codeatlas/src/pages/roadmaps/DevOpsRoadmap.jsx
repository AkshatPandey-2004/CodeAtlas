import "../../styles/roadmap.css";
import devopsroadmap from "../../assets/devops.jpg";

const DevOpsRoadmap = () => {
  return (
    <div className="roadmap-container">
      <h1>DevOps Roadmap</h1>
      <p>Here is the roadmap to becoming a DevOps Engineer:</p>
      <img 
        src={devopsroadmap} 
        alt="DevOps Roadmap"
        className="roadmap-image"
      />
      <p>
        For more details, visit <a href="https://roadmap.sh/devops" target="_blank" rel="noopener noreferrer">roadmap.sh</a>.
      </p>
    </div>
  );
};

export default DevOpsRoadmap; 
