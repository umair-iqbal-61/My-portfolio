import { FaInstagram, FaXTwitter } from "react-icons/fa6"
import LinksFooter from "./LinksFooter"
import { RiFacebookFill } from "react-icons/ri"

function Footer() {
  return (
    <footer className="border border-solid border-[rgba(0,0,0,0.1)]">
      <div className="max-w-242 mx-auto pt-8 pb-17">
        {/* Logo */}
        <a href="#home" className="flex items-center justify-center text-4xl text-white font-bold text-center mb-8">
          Uma<span style={{ color: "var(--color-lime)" }}>.</span>
        </a>

        <ul className="flex justify-center gap-6 mb-8 [&>li>a]:text-nav [&>li>a]:hover:text-nav-dark">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="projects">Projects</a></li>
        </ul>

        <div className="flex justify-center gap-5">
          <LinksFooter link={"https://www.facebook.com/profile.php?id=100008758242924"} icon={<RiFacebookFill />} />

          <LinksFooter link={"https://www.instagram.com/_umair_iqbal/"} icon={<FaInstagram />} />

          <LinksFooter link={"https://x.com/_umair_iqbal"} icon={<FaXTwitter />} />
        </div>

        <span className="block mt-18 text-lime text-center text-[13px]">
          &#169; Umair_Iqbal. All rights reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
