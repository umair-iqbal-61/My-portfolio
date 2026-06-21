import { motion } from "framer-motion";
import { FileDetail, MedalAlt, BriefcaseAlt, HeadphoneMic } from "@boxicons/react";
import AboutImg from "../assets/Profile.jpeg";
import Resume from "../assets/umair_iqbal-resume.pdf";

const stats = [
  { Icon: MedalAlt,      label: "Experience", value: "2 Years Freelancing" },
  { Icon: BriefcaseAlt,  label: "Completed",  value: "10+ Projects" },
  { Icon: HeadphoneMic,  label: "Support",    value: "Online 24/7" },
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
    <section id="about" className="py-25 px-6 relative overflow-hidden">
      {/* subtle bg glow */}
      <div className="absolute top-[20%] -left-[10%] w-87.5 h-87.5 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.10)_0%,transparent_70%)] blur-[60px] pointer-events-none" />

      <div className="max-w-300 mx-auto relative z-1">

        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          custom={0}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="font-dm text-[13px] font-medium tracking-[0.15em] text-lime uppercase">
            About Me
          </span>
          <h2 className="font-syne font-extrabold text-[clamp(28px,4vw,42px)] mt-2.5 tracking-[-1px]">
            Who I Am
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-14 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative w-[min(320px,80vw)]">
              <div className="absolute -inset-2.5 rounded-3xl bg-[linear-gradient(135deg,#a855f7,#c4f135)] opacity-50 blur-sm" />
              <img
                src={AboutImg}
                alt="Umair Iqbal"
                className="relative w-full rounded-[20px] border-[3px] border-bg block object-cover"
              />
            </div>
          </motion.div>

          {/* Text + stats */}
          <div>
            {/* Stat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
              {stats.map(({ Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={i}
                  variants={fadeUp}
                  className="bg-bg-card border border-border rounded-2xl px-3 py-4.5 text-center transition-all duration-300 hover:border-violet hover:-translate-y-1"
                >
                  <Icon size={22} fill="#c4f135" className="mb-2 mx-auto" />
                  <h3 className="font-syne text-sm font-bold m-0">{label}</h3>
                  <span className="font-dm text-[11px] text-text block mt-1">
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
              className="font-dm text-base leading-[1.8] text-text mb-8"
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
              className="inline-flex items-center gap-2.5 font-syne font-bold text-sm px-7 py-3.5 rounded-[10px] bg-lime text-bg no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(196,241,53,0.25)]"
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