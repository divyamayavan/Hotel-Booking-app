
function Contact() {
  return (
    <section id="contact" className="contact section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Have a question or want to make a reservation? We’re happy to help!</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 mb-5">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-info-box">
              <div className="icon-box">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div className="info-content">
                <h4>Our Address</h4>
                <p>45, Lotus Avenue, T. Nagar, Chennai – 600017, Tamil Nadu</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="contact-info-box">
              <div className="icon-box">
                <i className="bi bi-envelope"></i>
              </div>
              <div className="info-content">
                <h4>Email Address</h4>
                <p>info@royallotus.com</p>
                <p>banquets@royallotus.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="contact-info-box">
              <div className="icon-box">
                <i className="bi bi-headset"></i>
              </div>
              <div className="info-content">
                <h4>Hours of Operation</h4>
                <p>Monday–Sunday: 7 AM – 11 PM</p>
                <p>For banquets & events: 10 AM – 8 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps (Full Width) */}
      <div className="map-section" data-aos="fade-up" data-aos-delay="200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.3680359907497!2d80.2333451147937!3d13.04288251700864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b4ed6c548f%3A0x7b4b1f3c73d!2sT.%20Nagar%2C%20Chennai!5e0!3m2!1sen!2sin!4v1620222222222"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Royal Lotus Location"
        ></iframe>
      </div>

      <div className="container form-container-overlap">
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="300">
          <div className="col-lg-10">
            <div className="contact-form-wrapper">
              <h2 className="text-center mb-4">Get in Touch</h2>
              <form action="forms/contact.php" method="post" className="php-email-form">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <i className="bi bi-person"></i>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <i className="bi bi-envelope"></i>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <i className="bi bi-text-left"></i>
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <i className="bi bi-chat-dots message-icon"></i>
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder="Write your message..."
                          style={{ height: 180 }}
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary btn-submit">SEND MESSAGE</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
