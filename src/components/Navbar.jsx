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

  // Dynamic only — depends on scroll state, can't be a static Tailwind class
  const navDynamicStyle = {
    background: scrolled ? "rgba(7, 7, 17, 0.85)" : "transparent",
    backdropFilter: scrolled ? "blur(16px)" : "none",
    borderBottom: scrolled ? "1px solid #1a1a35" : "1px solid transparent",
  };

  // Dynamic only — depends on menuOpen state
  const hamburgerBarTransform = (i) => ({
    transform: menuOpen
      ? i === 0
        ? "rotate(45deg) translate(5px, 5px)"
        : i === 2
          ? "rotate(-45deg) translate(5px, -5px)"
          : "scaleX(0)"
      : "none",
  });

  return (
    <nav
      style={navDynamicStyle}
      className="fixed top-0 left-0 right-0 z-1000 transition-all duration-400 ease-in-out animate-fadedown"
    >
      {/* Main bar */}
      <div className="max-w-300 mx-auto px-6 h-17 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNav("#home")}
          className="font-syne font-extrabold text-[22px] text-heading no-underline tracking-tight"
        >
          U<span className="text-lime">.</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md-2:flex gap-9 list-none m-0 p-0">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => handleNav(href)}
                className={`font-dm font-medium text-sm no-underline relative pb-1 transition-colors duration-300 ${active === href ? "text-lime" : "text-text"
                  }`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-lime transition-all duration-300 block ${active === href ? "w-full" : "w-0"
                    }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Hire Me */}
        <a
          href="#contact"
          onClick={() => handleNav("#contact")}
          className="hidden md-2:inline-block font-syne font-bold text-[13px] px-5.5 py-2.25 rounded-md bg-lime text-bg no-underline tracking-wide transition-opacity duration-200 hover:opacity-80"
        >
          Hire Me
        </a>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md-2:hidden flex flex-col gap-1.25 bg-transparent border-none cursor-pointer p-2"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={hamburgerBarTransform(i)}
              className="block h-0.5 w-6 bg-heading rounded-sm transition-all duration-300"
            />
          ))}
        </button>

      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md-2:hidden overflow-hidden transition-[max-height] duration-400 ease-in-out bg-[rgba(7,7,17,0.97)] ${menuOpen ? "max-h-100 border-t border-border" : "max-h-0 border-t border-transparent"
          }`}
      >
        <ul className="list-none m-0 px-6 pt-4 pb-6 flex flex-col gap-5">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => handleNav(href)}
                className={`font-syne font-semibold text-lg no-underline transition-colors duration-300 ${active === href ? "text-lime" : "text-heading"
                  }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => handleNav("#contact")}
              className="inline-block font-syne font-bold text-sm px-6 py-2.5 rounded-md bg-lime text-bg no-underline"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}