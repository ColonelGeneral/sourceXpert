import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [dark, setDark] = useState(false);

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

  return (
    <header className="header">
      <div className="header-inner">
        {/* LEFT: LOGO */}
        <div className="logo">
          <Link to="/">
            <img
              src="/src/assets/logo-transparent.png"
              alt="SourceXpert Logo"
            />
          </Link>
        </div>

        {/* RIGHT: NAV + THEME TOGGLE */}
        <div className="header-right">
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
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
