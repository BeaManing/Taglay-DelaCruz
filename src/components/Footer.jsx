import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer-collapsible">
      <div className="footer-content">

        <div className="footer-section">
          <h3>About Us</h3>
          <p>Beatriz Dela Cruz</p>
          <p>Manila, Philippines</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: delacruzbs@students.national-u.edu.ph</p>
          <p>Phone: 0967-530-0770</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <span>📘</span>
            <span>🐦</span>
            <span>📸</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
