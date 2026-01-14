import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <h1 className="about-title">About This Site</h1>

      <div className="about-card">
        <p>
          This website is a simple article platform built using React.
          It demonstrates routing, dynamic content rendering, and clean
          UI design principles.
        </p>

        <p>
          Articles are loaded from a structured data source and displayed
          as clickable cards. Each article provides a short preview before
          navigating to the full content.
        </p>

        <p>
          The project focuses on simplicity, readability, and maintainable
          front-end code while practicing real-world React concepts.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
