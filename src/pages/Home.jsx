import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import Chefs from '../components/Chefs';
import BookTable from '../components/BookTable';
import Location from '../components/Location';
import Events from '../components/Events';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Menu />
      <Chefs />
      <BookTable />
      <Location />
      <Events />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
