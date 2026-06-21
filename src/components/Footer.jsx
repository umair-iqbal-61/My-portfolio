import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";

const socialLinks = [
  { Icon: RiFacebookFill, link: "https://www.facebook.com/profile.php?id=100008758242924" },
  { Icon: FaInstagram,    link: "https://www.instagram.com/_umair_iqbal/" },
  { Icon: FaXTwitter,     link: "https://x.com/_umair_iqbal" },
];

const footerLinks = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-card-2 pt-14 px-6 pb-8">
      <div className="max-w-250 mx-auto text-center">

        {/* Logo */}
        <span className="font-syne font-extrabold text-[26px] text-heading">
          Umair<span className="text-lime">.</span>
        </span>

        {/* Nav links */}
        <ul className="flex justify-center flex-wrap gap-7 list-none my-7 p-0">
          {footerLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="font-dm text-sm font-medium text-text no-underline transition-colors duration-300 hover:text-lime"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Socials */}
        <div className="flex justify-center gap-3.5 mb-8">
          {socialLinks.map(({ Icon, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-[10px] bg-bg-card border border-border text-heading text-[17px] transition-all duration-300 hover:bg-lime hover:text-bg hover:-translate-y-1"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-5" />

        <span className="font-dm text-xs text-muted">
          © {new Date().getFullYear()} Umair Iqbal. All rights reserved.
        </span>
      </div>
    </footer>
  );
}