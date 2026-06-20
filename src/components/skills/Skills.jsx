import { motion } from "framer-motion";

// Tweak percentages here to match your real skill level (0-100)
const skillsData = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "React", level: 80 },
  { name: "Tailwind CSS", level: 88 },
  { name: "Git", level: 70 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

function SkillBar({ name, level, index }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      custom={index}
      variants={fadeUp}
      style={{
        background: "var(--color-bg-card)",
        border: "1px solid var(--color-border)",
        borderRadius: "14px",
        padding: "20px 22px",
        transition: "border-color 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#a855f7";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: "15px",
            color: "var(--color-heading)",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: "var(--font-dm)",
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--color-lime)",
          }}
        >
          {level}%
        </span>
      </div>

      {/* Track */}
      <div
        style={{
          height: "8px",
          borderRadius: "10px",
          background: "var(--color-bg-card-2)",
          overflow: "hidden",
        }}
      >
        {/* Fill */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2 + index * 0.08, ease: "easeOut" }}
          style={{
            height: "100%",
            borderRadius: "10px",
            background: "linear-gradient(90deg, #a855f7, #c4f135)",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* bg glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-8%",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,241,53,0.08) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          custom={0}
          variants={fadeUp}
          style={{ textAlign: "center", marginBottom: "56px" }}
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
            My Arsenal
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
            Skills & Tools
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "18px",
          }}
          className="md:grid-cols-2"
        >
          {skillsData.map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}