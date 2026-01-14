import '../styles/Footer.css'
import fb from '../components/facebook-logo-facebook-icon-free-free-vector-removebg-preview.png'
import x from '../components/images-removebg-preview.png'
import ig from '../components/iglogo.png'

const Footer = () => {
  return (
    <footer className="footer-collapsible">
      <div className="footer-content">

        <div className="footer-section">
          <h3>About Me</h3>
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
             <img src={fb} alt="fb-logo" className="social-icon-img" />
             <img src={x} alt="x-logo" className="social-icon-img" />
             <img src={ig} alt="ig-logo" className="social-icon-img" />
        </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
