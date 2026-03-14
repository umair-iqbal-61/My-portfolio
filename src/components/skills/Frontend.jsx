import SkillsCard from "./SkillsCard"

function Frontend() {
  return (
    <div className="grid grid-cols-[1fr] gap-6 md:gap-9 lg:gap-12 p-6 md:py-8 md:px-16 border border-solid border-[rgba(0,0,0,0.1)] rounded-[20px] bg-white">
      <h3 className="text-[18px] text-center mb-6">Frontend Developer</h3>

      <div className="grid grid-cols-[max-content] md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(2,350px)] gap-4 md:gap-12 justify-center">
        <div className="grid items-start gap-4">
          <SkillsCard title="HTML" subtitle="Intermediate" />

          <SkillsCard title="CSS" subtitle="Intermediate" />

          <SkillsCard title="JavaScript" subtitle="Intermediate" />
        </div>

        <div className="grid items-start gap-4">
          <SkillsCard title="Tailwind CSS" subtitle="Intermediate" />

          <SkillsCard title="React" subtitle="Intermediate" />

          <SkillsCard title="Git" subtitle="Intermediate" />
        </div>
      </div>
    </div>
  )
}

export default Frontend
