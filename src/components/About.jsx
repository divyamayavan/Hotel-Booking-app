
function About() {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center gy-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="about-content">
              <h3>Our Story</h3>
              <p className="fst-italic">
                Founded in 2005, Royal Lotus brings the comfort of home and the flavours of India to the heart of Chennai.
              </p>
              <p>
                Whether you’re staying with us or simply dining in, our family-run team welcomes you with warmth and care. From traditional South Indian breakfast to grand North Indian dinners, every dish is prepared with handpicked ingredients and heartfelt service.
              </p>
              <div className="chef-signature mt-4">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <img
                      src="http://localhost:5173/src/assets/img/restaurant/chef-1.webp"
                      className="chef-avatar rounded-circle"
                      alt="Chef Arvind Kumar"
                    />
                  </div>
                  <div className="col">
                    <p className="chef-message mb-2">
                      "Every guest is family to us, and every meal is a celebration of Indian taste."
                    </p>
                    <p className="chef-name">Chef Arvind Kumar, Executive Chef</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="about-image-wrapper">
              <img
                src="http://localhost:5173/src/assets/img/restaurant/showcase-4.webp"
                className="img-fluid main-image shadow"
                alt="Hotel Interior"
              />
              <img
                src="http://localhost:5173/src/assets/img/restaurant/showcase-2.webp"
                className="img-fluid accent-image shadow"
                alt="Family Dining"
              />
              <span className="establishment-year d-flex align-items-center justify-content-center text-center">
                Est. 2005
              </span>
            </div>
          </div>
        </div>

        <div className="row mt-5 pt-4 features-section">
          {[
            { icon: "bi-award", title: "Award Winning", desc: "Recognised among Chennai's top 10 family hotels, 2023." },
            { icon: "bi-egg-fried", title: "Fresh Ingredients", desc: "We source vegetables and spices fresh every morning." },
            { icon: "bi-people", title: "Friendly Team", desc: "Our staff are always ready with a smile and a helping hand." },
            { icon: "bi-heart", title: "Cooked with Love", desc: "Every meal is prepared with genuine care for your comfort." }
          ].map(({ icon, title, desc }, idx) => (
            <div
              className="col-lg-3 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay={200 + idx * 100}
              key={title}
            >
              <div className="feature-box">
                <div className="feature-icon">
                  <i className={`bi ${icon}`}></i>
                </div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-3">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
            <div className="stats-container d-flex flex-wrap gap-4">
              {[
                { number: "15+", label: "Years Experience" },
                { number: "5", label: "Expert Chefs" },
                { number: "3", label: "Culinary Awards" },
                { number: "15000+", label: "Happy Customers" }
              ].map(({ number, label }) => (
                <div className="stat-item" key={label}>
                  <span className="stat-number">{number}</span>
                  <p className="stat-label">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
