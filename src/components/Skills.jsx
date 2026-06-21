import { motion } from "framer-motion";

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
      className="bg-bg-card border border-border rounded-2xl px-5.5 py-5 transition-all duration-300 hover:border-violet hover:-translate-y-1"
    >
      <div className="flex justify-between items-center mb-3">
        <span className="font-syne font-bold text-[15px] text-heading">{name}</span>
        <span className="font-dm text-[13px] font-semibold text-lime">{level}%</span>
      </div>

      <div className="h-2 rounded-[10px] bg-bg-card-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2 + index * 0.08, ease: "easeOut" }}
          className="h-full rounded-[10px] bg-[linear-gradient(90deg,#a855f7,#c4f135)]"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-25 px-6 relative overflow-hidden">
      {/* bg glow */}
      <div className="absolute top-[10%] -right-[8%] w-95 h-95 rounded-full bg-[radial-gradient(circle,rgba(196,241,53,0.08)_0%,transparent_70%)] blur-[70px] pointer-events-none" />

      <div className="max-w-225 mx-auto relative z-1">

        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          custom={0}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="font-dm text-[13px] font-medium tracking-[0.15em] text-lime uppercase">
            My Arsenal
          </span>
          <h2 className="font-syne font-extrabold text-[clamp(28px,4vw,42px)] mt-2.5 tracking-[-1px]">
            Skills & Tools
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5">
          {skillsData.map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}