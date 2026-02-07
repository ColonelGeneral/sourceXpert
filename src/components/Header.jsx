import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo-transparent.png";

export default function Header() {
  const [dark, setDark] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Load saved theme on mount
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = !dark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const goToAbout = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById("about")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="header">
      <div className="header-inner">
        {/* LEFT: LOGO */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="SourceXpert Logo" />
          </Link>
        </div>

        {/* RIGHT: NAV + THEME TOGGLE */}
        <div className="header-right">
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <button className="nav-link" onClick={goToAbout}>
              About
            </button>
          </nav>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {dark ? "☀" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
}
