
function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container-fluid hero-container" data-aos="fade-up">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 content-col">
            <div className="content-wrapper">
              <div className="status-badge">Reservations Open</div>
              <h2>Welcome to Royal Lotus Hotel & Banquets</h2>
              <p>
                Experience true Indian hospitality and authentic flavours.
                Whether you’re planning a family dinner, a wedding, or a business
                lunch, we promise warm service and memorable moments, every time.
              </p>
              <div className="opening-hours" data-aos="fade-up" data-aos-delay="500">
                <i className="bi bi-clock"></i>
                <span>Open Daily: 7am - 11pm</span>
              </div>
              <div className="btn-group">
                <a href="#book-a-table" className="btn btn-book">
                  Book a Table
                </a>
                <a href="#menu" className="btn btn-menu">
                  See Our Menu
                </a>
              </div>
              <div className="social-links">
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 swiper-col">
            <div
              className="swiper hero-swiper init-swiper"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              {/* Remove script tag from here - initialize Swiper in useEffect or parent component */}
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="img-container">
                    <img
                      src="http://localhost:5173/src/assets/img/restaurant/misc-square-1.webp"
                      alt="Royal Lotus Lobby"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="img-container">
                    <img
                      src="https://localhost:5173/src/assets/img/restaurant/misc-square-2.webp"
                      alt="Banquet Celebration"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="img-container">
                    <img
                      src="https://localhost:5173/src/assets/img/restaurant/misc-square-3.webp"
                      alt="Signature Indian Cuisine"
                    />
                  </div>
                </div>
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
