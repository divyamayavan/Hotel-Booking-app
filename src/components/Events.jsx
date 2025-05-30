
function Events() {
  return (
    <section id="events" className="events section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="intro-text text-center mb-5" data-aos="fade-up" data-aos-delay="150">
          <h2>Create Unforgettable Moments</h2>
          <p>
            At Royal Lotus Hotel & Banquets, we transform your celebrations into cherished memories. Whether it’s a
            grand wedding or a corporate meeting, our elegant venues and expert team ensure every event is truly
            special.
          </p>
        </div>

        <div className="event-types">
          <div className="row">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="event-type-card">
                <div className="icon-wrapper">
                  <i className="bi bi-calendar-heart"></i>
                </div>
                <h3>Weddings & Receptions</h3>
                <p>
                  Celebrate your big day in style! From traditional South Indian muhurthams to modern themed
                  receptions, our grand ballroom can host up to 300 guests.
                </p>
                <span className="capacity">Up to 300 guests</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="250">
              <div className="event-type-card">
                <div className="icon-wrapper">
                  <i className="bi bi-building"></i>
                </div>
                <h3>Corporate Events</h3>
                <p>
                  Host conferences, seminars, and team outings with our state-of-the-art audio-visual facilities and
                  personalized menu options.
                </p>
                <span className="capacity">Up to 150 guests</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="event-type-card">
                <div className="icon-wrapper">
                  <i className="bi bi-people"></i>
                </div>
                <h3>Family Gatherings</h3>
                <p>
                  Perfect for birthdays, anniversaries, or intimate poojas. Our cozy banquet halls can be customized
                  for small private functions.
                </p>
                <span className="capacity">Up to 60 guests</span>
              </div>
            </div>
          </div>
        </div>

        <div className="gallery-showcase" data-aos="fade-up" data-aos-delay="150">
          <div className="row g-3">
            <div className="col-lg-8">
              <div className="main-image" data-aos="zoom-in" data-aos-delay="200">
                <img src="/src/assets/img/restaurant/event-1.webp" alt="Wedding at Royal Lotus" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row g-3">
                <div className="col-lg-12 col-md-6">
                  <div className="gallery-item" data-aos="zoom-in" data-aos-delay="250">
                    <img src="/src/assets/img/restaurant/event-5.webp" alt="Corporate Event" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="gallery-item" data-aos="zoom-in" data-aos-delay="300">
                    <img src="/src/assets/img/restaurant/event-7.webp" alt="Birthday Party" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="event-cta" data-aos="fade-up" data-aos-delay="200">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3>Ready to plan your special event?</h3>
              <p>
                Tell us your vision—our expert event planners will take care of everything. Call or enquire online to
                get started!
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#contact" className="btn-reserve">Reserve Venue</a>
            </div>
          </div>
        </div>

        <div className="featured-events" data-aos="fade-up" data-aos-delay="200">
          <h3>Upcoming Featured Events</h3>
          <div className="row g-4">
            <div className="col-lg-6 col-md-6">
              <div className="featured-event-card" data-aos="fade-up" data-aos-delay="250">
                <div className="event-date">
                  <span className="month">Jun</span>
                  <span className="day">30</span>
                </div>
                <div className="event-content">
                  <div className="event-image">
                    <img src="/src/assets/img/restaurant/event-3.webp" alt="Monsoon Food Festival" className="img-fluid" />
                  </div>
                  <div className="event-info">
                    <h4>Monsoon Food Festival</h4>
                    <ul className="event-meta">
                      <li><i className="bi bi-clock"></i> 6:00 PM - 11:00 PM</li>
                      <li><i className="bi bi-geo-alt"></i> Royal Lotus Banquet Hall</li>
                    </ul>
                    <p>
                      Experience regional delicacies from across India, curated by our celebrity chefs. Live counters,
                      music & much more!
                    </p>
                    <a href="#" className="btn-details">View Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="featured-event-card" data-aos="fade-up" data-aos-delay="300">
                <div className="event-date">
                  <span className="month">Jul</span>
                  <span className="day">14</span>
                </div>
                <div className="event-content">
                  <div className="event-image">
                    <img src="/src/assets/img/restaurant/event-8.webp" alt="Independence Day Gala" className="img-fluid" />
                  </div>
                  <div className="event-info">
                    <h4>Independence Day Gala</h4>
                    <ul className="event-meta">
                      <li><i className="bi bi-clock"></i> 7:00 PM - 11:00 PM</li>
                      <li><i className="bi bi-geo-alt"></i> Rooftop Garden</li>
                    </ul>
                    <p>
                      Flag hoisting, cultural shows, and a lavish buffet! Open to all families—book your seats in
                      advance.
                    </p>
                    <a href="#" className="btn-details">View Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Events;
