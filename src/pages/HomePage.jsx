import '../styles/HomePage.css';
import catGIF from '../components/catGIF.gif';


const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to my Homepage</h1>
      <p className="home-subtitle">
        Explore articles, learn new topics, and stay updated with the latest content.
      </p>


     <img src={catGIF} alt="Funny cat GIF" className="home-gif" />
    </div>
  );
};

export default HomePage;
