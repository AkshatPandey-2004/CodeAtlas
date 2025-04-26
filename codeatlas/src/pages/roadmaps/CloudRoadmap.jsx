import "../../styles/roadmap.css";
import roadmap from "../../assets/Cloud.jpg";    

const CloudRoadmap = () => {
  return (
    <div className="roadmap-container">
      <h1>Cloud Roadmap</h1>
      <p>Here is the roadmap to becoming Cloud Engineer:</p>
      <img 
        src={roadmap} 
        alt="Cloud Roadmap"
        className="roadmap-image"
      />
      <p>
        For more details, visit <a href="https://roadmap.sh/ai/cloud-computing-vhd65" target="_blank" rel="noopener noreferrer">roadmap.sh</a>.
      </p>
    </div>
  );
};

export default CloudRoadmap; 
