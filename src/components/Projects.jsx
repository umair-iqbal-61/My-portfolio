import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowOutUpLeftStrokeSquare, Code } from "@boxicons/react";
import { projectsData, projectsNav } from "./projects/Data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="bg-bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-violet hover:-translate-y-1.5"
    >
      {/* Image with overlay */}
      <div className="relative overflow-hidden aspect-16/10 group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(7,7,17,0.9)_100%)]" />
        <span className="absolute top-3.5 left-3.5 font-dm text-[11px] font-semibold tracking-wide uppercase text-bg bg-lime px-2.5 py-1 rounded-full">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-syne font-bold text-lg text-heading mb-4">
          {project.title}
        </h3>

        <div className="flex gap-2.5">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 font-syne font-bold text-[13px] px-3.5 py-2.5 rounded-lg bg-lime text-bg no-underline transition-opacity duration-200 hover:opacity-85"
          >
            Live Demo
            <ArrowOutUpLeftStrokeSquare flip="horizontal" size={14} fill="#070711" />
          </a>

          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 font-syne font-bold text-[13px] px-3.5 py-2.5 rounded-lg border border-border-light text-heading no-underline transition-colors duration-200 hover:border-violet hover:text-violet"
          >
            Code
            <Code size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category.toLowerCase() === activeFilter);

  return (
    <section id="projects" className="py-25 px-6 relative overflow-hidden">
      <div className="absolute bottom-[5%] -right-[10%] w-105 h-105 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.10)_0%,transparent_70%)] blur-[70px] pointer-events-none" />

      <div className="max-w-300 mx-auto relative z-1">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          custom={0}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <span className="font-dm text-[13px] font-medium tracking-[0.15em] text-lime uppercase">
            My Work
          </span>
          <h2 className="font-syne font-extrabold text-[clamp(28px,4vw,42px)] mt-2.5 tracking-[-1px]">
            Featured Projects
          </h2>
        </motion.div>

        {/* Filter nav */}
        <div className="flex justify-center gap-2.5 mb-12 flex-wrap">
          {projectsNav.map((navItem) => (
            <button
              key={navItem.name}
              onClick={() => setActiveFilter(navItem.name)}
              className={`font-dm font-semibold text-[13px] capitalize px-5 py-2 rounded-full border cursor-pointer transition-all duration-300 ${
                activeFilter === navItem.name
                  ? "border-lime bg-lime text-bg"
                  : "border-border bg-transparent text-text"
              }`}
            >
              {navItem.name}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6.5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted font-dm mt-10">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}