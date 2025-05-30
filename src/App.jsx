// In App.jsx or your component
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'swiper/css';  // Swiper core CSS
import 'swiper/css/navigation'; // Swiper modules CSS, if using

import { useEffect } from 'react';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Home/>
  );
}

export default App;