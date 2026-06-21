import { useState, useEffect } from "react";
import { ArrowUpStroke } from "@boxicons/react";

export default function ScrollUp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY >= 560);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#home"
      // bottom position is dynamic (depends on scroll visibility) — must stay inline
      style={{ bottom: visible ? "24px" : "-60px" }}
      className="fixed right-5 z-999 w-11 h-11 flex items-center justify-center rounded-xl bg-lime shadow-[0_8px_24px_rgba(196,241,53,0.25)] transition-all duration-400 hover:-translate-y-1"
    >
      <ArrowUpStroke fill="#070711" />
    </a>
  );
}