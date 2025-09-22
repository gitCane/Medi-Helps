import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <h4>About Us</h4>
            <p>Mehi Life is one of the leading health care consultancies with a wide range of cross-disciplinary expertise across the healthcare value chain.</p>
          </div>
          <div>
            <h4>Useful Link</h4>
            <ul className="links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Career</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact Info</h4>
            <p>Karawal Nagar<br />Uttar Pradesh, 201304</p>
            <p>+91 7030009558<br />info.mehilife@gmail.com</p>
          </div>
        </div>
      <div className="copyright">Copyright © 2025 Mehi Life. All Rights Reserved</div>
    </footer>
  );
};

export default Footer;