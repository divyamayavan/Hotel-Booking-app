function Footer() {
  return (
    <footer id="footer" className="footer">

      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
              <span className="sitename">Royal Lotus Hotel</span>
            </a>
            <p>
              Royal Lotus Hotel & Banquets offers a unique blend of luxury, tradition, and world-class hospitality in the
              heart of Chennai. Experience authentic Indian and international cuisine, exceptional service, and
              unforgettable events.
            </p>
            <div className="social-links d-flex mt-4">
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#events">Banquet Booking</a></li>
              <li><a href="#menu">Dining Reservations</a></li>
              <li><a href="#events">Corporate Events</a></li>
              <li><a href="#events">Wedding Planning</a></li>
              <li><a href="#menu">Catering Services</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>45, Lotus Avenue, T. Nagar</p>
            <p>Chennai, Tamil Nadu 600017</p>
            <p>India</p>
            <p className="mt-4"><strong>Phone:</strong> <span>+91 98765 43210</span></p>
            <p><strong>Email:</strong> <span>info@royallotus.com</span></p>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span> <strong className="px-1 sitename">Royal Lotus Hotel</strong> <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed and Developed by Divya Bharathi
        </div>
      </div>

    </footer>
  );
}

export default Footer;
