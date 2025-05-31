
function Chefs() {
  return (
    <section id="chefs" className="chefs section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Chefs</h2>
        <p>The heart and soul of Royal Lotus: Meet the culinary masters behind your favourite dishes!</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-5">
            <div className="chef-highlight" data-aos="fade-right" data-aos-delay="200">
              <figure className="chef-image">
                <img
                  src="http://localhost:5173/src/assets/img/restaurant/chef-1.webp"
                  className="img-fluid"
                  alt="Executive Chef Arvind Kumar"
                />
              </figure>
              <div className="chef-details">
                <h3>Executive Chef</h3>
                <h2>Arvind Kumar</h2>
                <div className="chef-awards">
                  <span><i className="bi bi-star-fill"></i> Times Food Award Winner</span>
                  <span><i className="bi bi-star-fill"></i> South Indian Culinary Champion</span>
                </div>
                <p>
                  With 20 years of experience, Chef Arvind brings traditional Indian recipes to life, blending family secrets with modern flair.
                </p>
                <div className="chef-signature">
                  <img src="/src/assets/img/misc/signature-1.webp" alt="Chef Arvind Signature" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="team-container" data-aos="fade-left" data-aos-delay="300">
              <div className="row g-4">
                {[
                  {
                    img: "http://localhost:5173/src/assets/img/restaurant/chef-2.webp",
                    alt: "Chef Asha Nair",
                    name: "Asha Nair",
                    role: "Pastry Chef",
                    details: "Asha creates our signature desserts, from hot gulab jamuns to decadent chocolate brownies.",
                  },
                  {
                    img: "http://localhost:5173/src/assets/img/restaurant/chef-3.webp",
                    alt: "Chef Manoj Pillai",
                    name: "Manoj Pillai",
                    role: "Tandoor Expert",
                    details: "Specialist in North Indian tandoor, his naans and kebabs are loved by guests of all ages.",
                  },
                  {
                    img: "http://localhost:5173/src/assets/img/restaurant/chef-4.webp",
                    alt: "Chef Ritu Singh",
                    name: "Ritu Singh",
                    role: "Continental Specialist",
                    details: "Ritu adds a global touch to our menu—pasta, salads, and more for the cosmopolitan foodie!",
                  },
                  {
                    img: "http://localhost:5173/src/assets/img/restaurant/chef-5.webp",
                    alt: "Chef Karthik Iyer",
                    name: "Karthik Iyer",
                    role: "Grill Master",
                    details: "From sizzling sizzlers to juicy steaks, Chef Karthik brings magic to the grill!",
                  },
                ].map(({ img, alt, name, role, details }, idx) => (
                  <div className="col-md-6" key={name}>
                    <div className="chef-card" data-aos="zoom-in" data-aos-delay={200 + idx * 50}>
                      <div className="chef-img">
                        <img src={img} alt={alt} className="img-fluid" />
                        <div className="social-links">
                          <a href="#"><i className="bi bi-instagram"></i></a>
                          <a href="#"><i className="bi bi-twitter-x"></i></a>
                          <a href="#"><i className="bi bi-facebook"></i></a>
                        </div>
                      </div>
                      <div className="chef-info">
                        <h4>{name}</h4>
                        <p className="role">{role}</p>
                        <p className="details">{details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chefs;
