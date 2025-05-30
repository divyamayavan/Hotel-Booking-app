function Header() {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container position-relative d-flex align-items-center justify-content-between">

        <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
          <i className="bi bi-fork-knife"></i>
          <h1 className="sitename">Royal Lotus</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#book-a-table">Book a Table</a></li>
            <li><a href="#chefs">Chefs</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted d-none d-sm-block" href="#book-a-table">Book a Table</a>

      </div>
    </header>
  );
}

export default Header;
