import { BadgeCheck } from "@boxicons/react"

function SkillsCard({ title, subtitle }) {
  return (
    <div className="flex gap-2">
      <BadgeCheck fill="#333333" />

      <div>
        <h3 className="font-medium leading-4.5">{title}</h3>
        <span className="text-[10px]">{subtitle}</span>
      </div>
    </div>
  )
}

export default SkillsCard
