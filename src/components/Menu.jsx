
function Menu() {
  return (
    <section id="menu" className="menu section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Menu</h2>
        <p>Handpicked favourites from North and South India, plus global classics!</p>
      </div>
      <div className="container" data-aos="fade-up">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <div className="menu-filters isotope-filters mb-5">
            <ul>
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-starters">Starters</li>
              <li data-filter=".filter-main">Main Courses</li>
              <li data-filter=".filter-dessert">Desserts</li>
              <li data-filter=".filter-drinks">Drinks</li>
            </ul>
          </div>
          <div className="menu-container isotope-container row gy-4">

            {/* Starters */}
            {[
              {
                img: "/src/assets/img/restaurant/starter-2.webp",
                alt: "Paneer Tikka",
                title: "Paneer Tikka",
                tag: "Vegetarian",
                desc: "Cottage cheese marinated and grilled, served with mint chutney.",
                price: "₹250",
                filterClass: "filter-starters",
              },
              {
                img: "/src/assets/img/restaurant/starter-5.webp",
                alt: "Chicken 65",
                title: "Chicken 65",
                tag: "Non-Veg",
                desc: "Spicy, crispy fried chicken bites – a true South Indian favourite.",
                price: "₹270",
                filterClass: "filter-starters",
              },
            ].map(({ img, alt, title, tag, desc, price, filterClass }) => (
              <div className={`col-lg-6 isotope-item ${filterClass}`} key={title}>
                <div className="menu-item d-flex align-items-center gap-4">
                  <img src={img} alt={alt} className="menu-img img-fluid rounded-3" />
                  <div className="menu-content">
                    <h5>
                      {title} <span className="menu-tag">{tag}</span>
                    </h5>
                    <p>{desc}</p>
                    <div className="price">{price}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Main Courses */}
            {[
              {
                img: "/src/assets/img/restaurant/main-1.webp",
                alt: "Chicken Chettinad",
                title: "Chicken Chettinad",
                tag: "Spicy",
                desc: "Authentic Chettinad-style chicken curry, aromatic and full of flavour.",
                price: "₹320",
                filterClass: "filter-main",
              },
              {
                img: "/src/assets/img/restaurant/main-4.webp",
                alt: "Paneer Butter Masala",
                title: "Paneer Butter Masala",
                tag: "Vegetarian",
                desc: "Creamy tomato gravy with cubes of paneer, served with butter naan.",
                price: "₹290",
                filterClass: "filter-main",
              },
            ].map(({ img, alt, title, tag, desc, price, filterClass }) => (
              <div className={`col-lg-6 isotope-item ${filterClass}`} key={title}>
                <div className="menu-item d-flex align-items-center gap-4">
                  <img src={img} alt={alt} className="menu-img img-fluid rounded-3" />
                  <div className="menu-content">
                    <h5>
                      {title} <span className="menu-tag">{tag}</span>
                    </h5>
                    <p>{desc}</p>
                    <div className="price">{price}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Desserts */}
            {[
              {
                img: "/src/assets/img/restaurant/dessert-2.webp",
                alt: "Gulab Jamun",
                title: "Gulab Jamun",
                tag: "Dessert",
                desc: "Soft, syrupy, and melt-in-mouth. An Indian classic!",
                price: "₹90",
                filterClass: "filter-dessert",
              },
              {
                img: "/src/assets/img/restaurant/dessert-7.webp",
                alt: "Rasmalai",
                title: "Rasmalai",
                tag: "Bengali Special",
                desc: "Chenna discs soaked in creamy, cardamom-flavoured milk.",
                price: "₹110",
                filterClass: "filter-dessert",
              },
            ].map(({ img, alt, title, tag, desc, price, filterClass }) => (
              <div className={`col-lg-6 isotope-item ${filterClass}`} key={title}>
                <div className="menu-item d-flex align-items-center gap-4">
                  <img src={img} alt={alt} className="menu-img img-fluid rounded-3" />
                  <div className="menu-content">
                    <h5>
                      {title} <span className="menu-tag">{tag}</span>
                    </h5>
                    <p>{desc}</p>
                    <div className="price">{price}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Drinks */}
            {[
              {
                img: "/src/assets/img/restaurant/drink-3.webp",
                alt: "Sweet Lassi",
                title: "Sweet Lassi",
                tag: "Traditional",
                desc: "Creamy, refreshing, and perfect for Chennai’s weather.",
                price: "₹70",
                filterClass: "filter-drinks",
              },
              {
                img: "/src/assets/img/restaurant/drink-8.webp",
                alt: "Filter Coffee",
                title: "South Indian Filter Coffee",
                tag: "Hot",
                desc: "Strong, aromatic, and made with pure love!",
                price: "₹60",
                filterClass: "filter-drinks",
              },
            ].map(({ img, alt, title, tag, desc, price, filterClass }) => (
              <div className={`col-lg-6 isotope-item ${filterClass}`} key={title}>
                <div className="menu-item d-flex align-items-center gap-4">
                  <img src={img} alt={alt} className="menu-img img-fluid rounded-3" />
                  <div className="menu-content">
                    <h5>
                      {title} <span className="menu-tag">{tag}</span>
                    </h5>
                    <p>{desc}</p>
                    <div className="price">{price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5" data-aos="fade-up">
            <a href="#" className="download-menu">
              <i className="bi bi-file-earmark-pdf"></i> Download Full Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
