import "../styles/App.css";
import Underconst from "../assets/undercons.gif";

const Home = () => {
  return (
    <div className="construction-container">
          <h1>Page Under Construction</h1>
          <img 
            src={Underconst}
            alt="Under Construction" 
            className="construction-gif"
          />
          <p>We are working hard to bring you something amazing. Stay tuned!</p>
        </div>
  );
};

export default Home;
