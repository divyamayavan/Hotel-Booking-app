
function Location() {
  return (
    <section id="location" className="location section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Location</h2>
        <p>Find Royal Lotus Hotel & Banquets in the heart of Chennai!</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <div className="map-container">
              {/* Update with your hotel’s real Google Map embed link */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.3680359907497!2d80.2333451147937!3d13.04288251700864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b4ed6c548f%3A0x7b4b1f3c73d!2sT.%20Nagar%2C%20Chennai!5e0!3m2!1sen!2sin!4v1620222222222"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Royal Lotus Location"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <div className="info-container">
              <div className="section-header">
                <h2>Find Us</h2>
                <p>You're always welcome!</p>
              </div>
              <div className="info-card" data-aos="fade-up" data-aos-delay="300">
                <div className="info-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="info-content">
                  <h3>Our Location</h3>
                  <p>45, Lotus Avenue, T. Nagar, Chennai, Tamil Nadu 600017</p>
                </div>
              </div>
              <div className="info-card" data-aos="fade-up" data-aos-delay="400">
                <div className="info-icon">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="info-content">
                  <h3>Reservations</h3>
                  <p>+91 98765 43210</p>
                  <p className="small-text">
                    Reserve your table or event at least 48 hours in advance for the best experience!
                  </p>
                </div>
              </div>
              <div className="info-card" data-aos="fade-up" data-aos-delay="500">
                <div className="info-icon">
                  <i className="bi bi-clock"></i>
                </div>
                <div className="info-content">
                  <h3>Hours</h3>
                  <div className="hours-grid">
                    <div className="day">Monday - Friday</div>
                    <div className="time">7:00 AM - 11:00 PM</div>
                    <div className="day">Saturday - Sunday</div>
                    <div className="time">7:00 AM - 12:00 Midnight</div>
                    <div className="day">Breakfast</div>
                    <div className="time">7:00 AM - 10:30 AM</div>
                  </div>
                </div>
              </div>
              <div className="cta-wrapper" data-aos="fade-up" data-aos-delay="600">
                <a href="#book-a-table" className="btn-book">
                  Make a Reservation
                </a>
                <a href="#contact" className="btn-contact">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
