import React from "react";

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>What our guests say about Royal Lotus Hotel & Banquets</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper init-swiper">
          {/* Swiper JSON config script can't be used as is in React, so this requires Swiper React implementation for full functionality */}
          <div className="swiper-wrapper">

            {[
              {
                stars: 5,
                text: "Truly a home away from home! The rooms were spotless and the food reminded me of my childhood. Thank you Royal Lotus for your hospitality.",
                img: "/src/assets/img/person/person-m-9.webp",
                name: "Vijay Kumar",
                role: "IT Professional, Bengaluru",
              },
              {
                stars: 5,
                text: "We hosted our daughter’s wedding here – the banquet hall was elegant and the staff went above and beyond for every guest. Highly recommend for family events!",
                img: "/src/assets/img/person/person-f-5.webp",
                name: "Saranya Rajan",
                role: "Homemaker, Chennai",
              },
              {
                stars: 5,
                text: "The South Indian breakfast is a must-try! Very friendly team, clean spaces, and perfect location near the city center.",
                img: "/src/assets/img/person/person-f-12.webp",
                name: "Anil Deshmukh",
                role: "Business Traveller, Pune",
              },
              {
                stars: 5,
                text: "Had my company conference here. The facilities are world-class and food was fresh and tasty. Will visit again with my family!",
                img: "/src/assets/img/person/person-m-12.webp",
                name: "Priya Shetty",
                role: "Corporate Manager, Hyderabad",
              },
              {
                stars: 5,
                text: "Clean rooms, great ambience, and exceptional service! Thank you for making our family vacation memorable.",
                img: "/src/assets/img/person/person-m-13.webp",
                name: "Farheen Akhtar",
                role: "Writer, Coimbatore",
              },
            ].map(({ stars, text, img, name, role }, idx) => (
              <div className="swiper-slide" key={name}>
                <div className="testimonial-item">
                  <div className="stars">
                    {[...Array(stars)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                  <p>{text}</p>
                  <div className="profile mt-auto">
                    <img src={img} className="testimonial-img" alt={name} />
                    <h3>{name}</h3>
                    <h4>{role}</h4>
                  </div>
                </div>
              </div>
            ))}

          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
