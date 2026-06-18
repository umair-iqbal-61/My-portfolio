import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: "all 0.4s ease",
    background: scrolled ? "rgba(7, 7, 17, 0.85)" : "transparent",
    backdropFilter: scrolled ? "blur(16px)" : "none",
    borderBottom: scrolled ? "1px solid #1a1a35" : "1px solid transparent",
    animation: "fadeDown 0.6s ease forwards",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
    height: "68px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const logoStyle = {
    fontFamily: "var(--font-syne)",
    fontWeight: 800,
    fontSize: "22px",
    color: "var(--color-heading)",
    textDecoration: "none",
    letterSpacing: "-0.5px",
  };

  const desktopListStyle = {
    display: "flex",
    gap: "36px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const getLinkStyle = (href) => ({
    fontFamily: "var(--font-dm)",
    fontWeight: 500,
    fontSize: "14px",
    textDecoration: "none",
    color: active === href ? "var(--color-lime)" : "var(--color-text)",
    position: "relative",
    paddingBottom: "4px",
    transition: "color 0.3s ease",
  });

  const getUnderlineStyle = (href) => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "1.5px",
    width: active === href ? "100%" : "0%",
    background: "var(--color-lime)",
    transition: "width 0.3s ease",
    display: "block",
  });

  const hireMeBtnStyle = {
    fontFamily: "var(--font-syne)",
    fontWeight: 700,
    fontSize: "13px",
    padding: "9px 22px",
    borderRadius: "6px",
    background: "var(--color-lime)",
    color: "#070711",
    textDecoration: "none",
    letterSpacing: "0.03em",
    transition: "opacity 0.2s ease",
  };

  const hamburgerBarStyle = (i) => ({
    display: "block",
    height: "2px",
    width: "24px",
    background: "var(--color-heading)",
    borderRadius: "2px",
    transition: "all 0.3s ease",
    transform: menuOpen
      ? i === 0
        ? "rotate(45deg) translate(5px, 5px)"
        : i === 2
          ? "rotate(-45deg) translate(5px, -5px)"
          : "scaleX(0)"
      : "none",
  });

  const mobileMenuStyle = {
    overflow: "hidden",
    maxHeight: menuOpen ? "400px" : "0",
    transition: "max-height 0.4s ease",
    background: "rgba(7, 7, 17, 0.97)",
    borderTop: menuOpen ? "1px solid #1a1a35" : "none",
  };

  const mobileListStyle = {
    listStyle: "none",
    margin: 0,
    padding: "16px 24px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const getMobileLinkStyle = (href) => ({
    fontFamily: "var(--font-syne)",
    fontWeight: 600,
    fontSize: "18px",
    textDecoration: "none",
    color: active === href ? "var(--color-lime)" : "var(--color-heading)",
    transition: "color 0.3s ease",
  });

  const mobileHireMeStyle = {
    display: "inline-block",
    fontFamily: "var(--font-syne)",
    fontWeight: 700,
    fontSize: "14px",
    padding: "10px 24px",
    borderRadius: "6px",
    background: "var(--color-lime)",
    color: "#070711",
    textDecoration: "none",
  };

  return (
    <nav style={navStyle}>
      {/* Main bar */}
      <div style={containerStyle}>

        {/* Logo */}
        <a href="#home" onClick={() => handleNav("#home")} style={logoStyle}>
          Uma<span style={{ color: "var(--color-lime)" }}>.</span>
        </a>

        {/* Desktop nav links */}
        <ul style={desktopListStyle} className="hidden md-2:flex">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => handleNav(href)}
                style={getLinkStyle(href)}
              >
                {label}
                <span style={getUnderlineStyle(href)} />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Hire Me */}
        <a
          href="#contact"
          onClick={() => handleNav("#contact")}
          style={hireMeBtnStyle}
          className="hidden md-2:inline-block"
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Hire Me
        </a>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md-2:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span style={hamburgerBarStyle(0)} />
          <span style={hamburgerBarStyle(1)} />
          <span style={hamburgerBarStyle(2)} />
        </button>

      </div>

      {/* Mobile dropdown menu */}
      <div style={mobileMenuStyle} className="md-2:hidden">
        <ul style={mobileListStyle}>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => handleNav(href)}
                style={getMobileLinkStyle(href)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => handleNav("#contact")}
              style={mobileHireMeStyle}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}