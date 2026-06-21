import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProfileImg from "../assets/Profile.jpeg";
import Social from "./home/Social";

const roles = ["Frontend Developer", "React Developer", "UI Craftsman"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1400);
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden px-6 pt-30 pb-20"
    >
      <div className="absolute -top-[10%] -right-[10%] w-125 h-125 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.18)_0%,transparent_70%)] blur-[60px] pointer-events-none" />
      <div className="absolute -bottom-[15%] -left-[5%] w-100 h-100 rounded-full bg-[radial-gradient(circle,rgba(196,241,53,0.12)_0%,transparent_70%)] blur-[60px] pointer-events-none" />

      <div className="max-w-300 mx-auto w-full relative z-1 grid grid-cols-1 md-2:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

        {/* Left column - text */}
        <div>
          <motion.div
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 font-dm text-[13px] font-medium tracking-[0.12em] text-lime mb-5 uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-lime inline-block shadow-[0_0_8px_var(--color-lime)]" />
            Available for freelance work
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="font-syne font-extrabold text-[clamp(36px,6vw,64px)] leading-[1.08] tracking-[-1.5px] m-0"
          >
            Hi, I'm{" "}
            <span className="bg-[linear-gradient(90deg,#a855f7,#c4f135)] bg-clip-text text-transparent">
              Umair Iqbal
            </span>
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="font-syne font-semibold text-[clamp(18px,2.4vw,26px)] text-subheading mt-3.5 h-8"
          >
            {displayText}
            <span className="inline-block w-0.5 h-[1em] bg-lime ml-1 align-middle animate-blink" />
          </motion.div>

          <motion.p
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="font-dm text-base leading-[1.7] text-text mt-5 max-w-[120"
          >
            I build fast, responsive, and visually polished web interfaces
            using React and Tailwind CSS — turning ideas into experiences
            people actually enjoy using.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="flex gap-4 mt-8 flex-wrap"
          >
            <a
              href="#contact"
              className="font-syne font-bold text-sm px-7.5 py-3.5 rounded-lg bg-lime text-bg no-underline inline-block transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(196,241,53,0.25)]"
            >
              Hire Me
            </a>

            <a
              href="#projects"
              className="font-syne font-bold text-sm px-7.5 py-3.5 rounded-lg border border-border-light text-heading no-underline inline-block transition-colors duration-300 hover:border-violet hover:text-violet"
            >
              View Projects →
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={5}
            variants={fadeUp}
            className="mt-10"
          >
            <Social />
          </motion.div>
        </div>

        {/* Right column - profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center relative"
        >
          <div className="relative w-[min(360px,80vw)] h-[min(360px,80vw)]">
            {/* Rotating gradient ring */}
            <div className="absolute -inset-3.5 rounded-full bg-[conic-gradient(from_0deg,#a855f7,#c4f135,#a855f7)] animate-spin-slow opacity-70" />
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-bg animate-float">
              <img
                src={ProfileImg}
                alt="Umair Iqbal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}