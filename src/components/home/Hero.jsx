import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProfileImg from "../../assets/Profile.jpeg";
import Social from "./Social";

const roles = ["Frontend Developer", "React Developer", "UI Craftsman"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
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
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 24px 80px",
      }}
    >
      {/* Background glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,241,53,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "48px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="md-2:grid-cols-[1.1fr_0.9fr]"
      >
        {/* Left column - text */}
        <div>
          <motion.div
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-dm)",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              color: "var(--color-lime)",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--color-lime)",
                display: "inline-block",
                boxShadow: "0 0 8px var(--color-lime)",
              }}
            />
            Available for freelance work
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(36px, 6vw, 64px)",
              lineHeight: 1.08,
              letterSpacing: "-1.5px",
              margin: 0,
            }}
          >
            Hi, I'm{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #a855f7, #c4f135)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Umair Iqbal
            </span>
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 600,
              fontSize: "clamp(18px, 2.4vw, 26px)",
              color: "var(--color-subheading)",
              marginTop: "14px",
              height: "32px",
            }}
          >
            {displayText}
            <span
              style={{
                display: "inline-block",
                width: "2px",
                height: "1em",
                background: "var(--color-lime)",
                marginLeft: "4px",
                verticalAlign: "middle",
                animation: "blink 0.9s step-end infinite",
              }}
            />
          </motion.div>

          <motion.p
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: "16px",
              lineHeight: 1.7,
              color: "var(--color-text)",
              marginTop: "20px",
              maxWidth: "480px",
            }}
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
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "32px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#contact"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "14px",
                padding: "14px 30px",
                borderRadius: "8px",
                background: "var(--color-lime)",
                color: "#070711",
                textDecoration: "none",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(196,241,53,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Hire Me
            </a>

            <a
              href="#projects"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "14px",
                padding: "14px 30px",
                borderRadius: "8px",
                border: "1px solid var(--color-border-light)",
                color: "var(--color-heading)",
                textDecoration: "none",
                transition: "border-color 0.25s ease, color 0.25s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#a855f7";
                e.currentTarget.style.color = "#a855f7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border-light)";
                e.currentTarget.style.color = "var(--color-heading)";
              }}
            >
              View Projects →
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={5}
            variants={fadeUp}
            style={{ marginTop: "40px" }}
          >
            <Social />
          </motion.div>
        </div>

        {/* Right column - profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "min(360px, 80vw)",
              height: "min(360px, 80vw)",
            }}
          >
            {/* Rotating gradient ring */}
            <div
              style={{
                position: "absolute",
                inset: "-14px",
                borderRadius: "50%",
                background: "conic-gradient(from 0deg, #a855f7, #c4f135, #a855f7)",
                animation: "spin 6s linear infinite",
                opacity: 0.7,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "0",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid #070711",
                animation: "float 5s ease-in-out infinite",
              }}
            >
              <img
                src={ProfileImg}
                alt="Umair Iqbal"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}