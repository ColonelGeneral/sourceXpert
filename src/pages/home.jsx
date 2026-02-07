import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import accessoriesImg from "../assets/products/accessories.jpg";
import bathProductsImg from "../assets/products/bath-products.jpg";
import beddingImg from "../assets/products/bedding.jpg";
import doormatImg from "../assets/products/doormat.jpg";
import floorKitchenImg from "../assets/products/floor-kitchen.jpg";
import homeDecorImg from "../assets/products/home-decor.jpg";
import tableKitchenImg from "../assets/products/table-kitchen.jpg";
import windowPanelsImg from "../assets/products/window-panels.jpg";
import tableWareImg from "../assets/products/tableware.jpg";
import decorativeitemsimg from "../assets/products/decorative-items.jpg";
import kidsdecorimg from "../assets/products/kids-decor.jpg";
import christmasDecorationsImg from "../assets/products/christmas-decorations.jpg";
import hero1 from "../assets/hero/hero1.jpg";
import hero2 from "../assets/hero/hero2.jpeg";
import hero3 from "../assets/hero/hero3.jpg";
import hero4 from "../assets/hero/hero4.jpg";


const heroImages = [ hero1, hero2, hero3, hero4];

const productItems = [
  { id: 1, title: "Table & Kitchen", image: tableKitchenImg },
  { id: 2, title: "Floor Coverings", image: floorKitchenImg },
  { id: 3, title: "Bedding", image: beddingImg },
  { id: 4, title: "Doormats", image: doormatImg },
  { id: 5, title: "Window Panels", image: windowPanelsImg },
  { id: 6, title: "Accessories", image: accessoriesImg },
  { id: 7, title: "Home Decor", image: homeDecorImg },
  { id: 8, title: "Bath Products", image: bathProductsImg },
  { id: 9, title: "Tableware", image: tableWareImg },
  { id: 10, title: "Decorative Items", image: decorativeitemsimg },
  { id: 11, title: "Kids Decor", image: kidsdecorimg },
  { id: 12, title: "Christmas Decorations", image: christmasDecorationsImg },
];

export default function Home() {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  const prevSlide = () =>
    setCurrent(prev => (prev === 0 ? heroImages.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent(prev => (prev === heroImages.length - 1 ? 0 : prev + 1));

  const onTouchStart = e => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = e => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
  };

  return (
    <main style={{ paddingTop: "96px" }}>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content animate-in">
          <h1>SourceXpert</h1>
          <p>
            Your one-stop shop for all sourcing needs.
            <br />
            Anywhere, Everywhere.
          </p>
        </div>

        <div className="hero-visual">
          <div
            className="slider"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <img src={heroImages[current]} alt="Hero slide" />
            <button className="slider-btn left" onClick={prevSlide}>‹</button>
            <button className="slider-btn right" onClick={nextSlide}>›</button>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products" id="products">
        <div className="products-inner">
          <h2>Our Product Categories</h2>

          <div className="products-grid">
            {productItems.map(item => (
              <div
                key={item.id}
                className="product-tile"
                style={{ backgroundImage: `url(${item.image})` }}
                onClick={() => navigate("/products")}
              >
                <div className="product-overlay" />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="about" id="about">
        <div className="about-inner">
          <h2>About Us</h2>

          <p>
            <strong>
              SourceXpert combines market insight and execution excellence to deliver reliable global sourcing.
            </strong>{" "}
            The company is led by founders who together bring over 40 years of combined industry experience, with one
            founder contributing 25 years and the other 15 years of sustained involvement in the export ecosystem.
            Their professional backgrounds span extensive engagement with leading buying houses and multinational
            corporations, providing deep exposure to international quality benchmarks, procurement practices, and
            compliance-driven sourcing models. This collective experience allows SourceXpert to operate with clarity,
            precision, and a strong buyer-first mindset.
          </p>

          <p>
            By understanding the pulse of the market, evolving trends, and the expectations of global customers,
            SourceXpert aligns its sourcing strategies with real business needs. Every engagement is structured to
            ensure consistency, responsiveness, and the delivery of best-in-class services that prioritize customer
            satisfaction and long-term value for buyers. The company’s approach is rooted in trust, transparency, and
            a commitment to building enduring partnerships across the global sourcing ecosystem.
          </p>
        </div>
      </section>

      <section className="contact" id="contact">
  <div className="contact-inner">
    <h2>Contact Us</h2>
    <p>
      Reach out to discuss sourcing requirements, partnerships,
      or custom product development.
    </p>

    <form
      action="https://formspree.io/f/xeeggjpq"
      method="POST"
      className="contact-form"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
      />

      <textarea
        name="message"
        placeholder="Tell us about your requirements"
        rows="5"
        required
      />

      <button type="submit" className="primary-btn">
        Send Message
      </button>
    </form>
  </div>
</section>



    </main>
  );
}
