import { useEffect, useState } from "react";

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
          <img
            src="/src/assets/logo-transparent.png"
            alt="SourceXpert Logo"
          />
        </div>

        {/* RIGHT: NAV + THEME TOGGLE */}
        <div className="header-right">
          <nav className="nav">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
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
