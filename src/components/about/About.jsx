import { motion } from "framer-motion";
import { FileDetail, MedalAlt, BriefcaseAlt, HeadphoneMic } from "@boxicons/react";
import AboutImg from "../../assets/Profile.jpeg";
import Resume from "../../assets/umair_iqbal-resume.pdf";

const stats = [
  { Icon: MedalAlt, label: "Experience", value: "2 Years Freelancing" },
  { Icon: BriefcaseAlt, label: "Completed", value: "10+ Projects" },
  { Icon: HeadphoneMic, label: "Support", value: "Online 24/7" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle bg glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          custom={0}
          variants={fadeUp}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              color: "var(--color-lime)",
              textTransform: "uppercase",
            }}
          >
            About Me
          </span>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 42px)",
              marginTop: "10px",
              letterSpacing: "-1px",
            }}
          >
            Who I Am
          </h2>
        </motion.div>

        {/* Content grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "56px",
            alignItems: "center",
          }}
          className="lg:grid-cols-[0.8fr_1.2fr]"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                position: "relative",
                width: "min(320px, 80vw)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "-10px",
                  borderRadius: "24px",
                  background: "linear-gradient(135deg, #a855f7, #c4f135)",
                  opacity: 0.5,
                  filter: "blur(8px)",
                }}
              />
              <img
                src={AboutImg}
                alt="Umair Iqbal"
                style={{
                  position: "relative",
                  width: "100%",
                  borderRadius: "20px",
                  border: "3px solid #070711",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>
          </motion.div>

          {/* Text + stats */}
          <div>
            {/* Stat cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "14px",
                marginBottom: "32px",
              }}
            >
              {stats.map(({ Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={i}
                  variants={fadeUp}
                  style={{
                    background: "var(--color-bg-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "14px",
                    padding: "18px 12px",
                    textAlign: "center",
                    transition: "border-color 0.3s ease, transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#a855f7";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Icon
                    size={22}
                    fill="#c4f135"
                    style={{ marginBottom: "8px" }}
                  />
                  <h3
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: "14px",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    {label}
                  </h3>
                  <span
                    style={{
                      fontFamily: "var(--font-dm)",
                      fontSize: "11px",
                      color: "var(--color-text)",
                      display: "block",
                      marginTop: "4px",
                    }}
                  >
                    {value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Intro paragraph */}
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              custom={3}
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "var(--color-text)",
                marginBottom: "32px",
              }}
            >
              Self-driven frontend developer building practical, real-world
              projects. Constantly learning, refining, and pushing for
              better solutions — with a sharp eye for clean code and
              even cleaner UI.
            </motion.p>

            {/* Resume button */}
            <motion.a
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              custom={4}
              variants={fadeUp}
              download=""
              href={Resume}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "14px",
                padding: "14px 28px",
                borderRadius: "10px",
                background: "var(--color-lime)",
                color: "#070711",
                textDecoration: "none",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
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
              Download Resume
              <FileDetail size={18} fill="#070711" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}