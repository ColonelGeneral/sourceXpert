import { useEffect, useRef, useState } from "react";
import Header from "./components/Header.jsx";

const heroImages = [
  "/src/assets/hero/hero1.jpg",
  "/src/assets/hero/hero2.jpeg",
  "/src/assets/hero/hero3.jpg",
  "/src/assets/hero/hero4.jpg",
  "/src/assets/hero/hero5.jpg",
  "/src/assets/hero/hero6.jpg",
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-slide (pauses on hover)
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === heroImages.length - 1 ? 0 : prev + 1
    );
  };

  // Swipe handlers
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
  };

  return (
    <>
      <Header />

      <main style={{ paddingTop: "96px" }}>
        <section className="hero">
          {/* TEXT */}
          <div className="hero-content animate-in">
            <h1>SourceXpert</h1>

            <p>Your one-stop shop for all sourcing needs.</p>

            <div className="hero-actions">
              <button className="primary-btn">Get Started</button>
              <button className="secondary-btn">Learn More</button>
            </div>
          </div>

          {/* SLIDER */}
          <div className="hero-visual">
            <div
              className="slider"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <img
                src={heroImages[current]}
                alt="Hero slide"
                key={current}
              />

              {/* Arrows */}
              <button
                className="slider-btn left"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                ‹
              </button>
              <button
                className="slider-btn right"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                ›
              </button>

              {/* Dots */}
              <div className="slider-dots">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    className={`dot ${idx === current ? "active" : ""}`}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
