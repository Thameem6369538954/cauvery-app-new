import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import './App.css';

function App() {
  useEffect(() => {
    const scrollContainer = document.querySelector('[data-scroll-container]');

    if (!scrollContainer) return;

    const scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      lerp: 0.08,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    // ResizeObserver to auto-update scroll height on dynamic changes
    const observer = new ResizeObserver(() => {
      scroll.update();
    });

    observer.observe(scrollContainer);

    // Ensure scroll updates on window resize
    const handleResize = () => {
      scroll.update();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      scroll.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <div data-scroll-container className="scroll-container">
        <div data-scroll-section>
          <Home />
        </div>
        <div data-scroll-section>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
