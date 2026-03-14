import { ArrowRightStroke } from "@boxicons/react"

function ContactCard({ icon, title, subtitle, link }) {
  return (
    <div className="flex flex-col items-center text-center p-4 border border-solid border-[rgba(0,0,0,0.1)] rounded-xl bg-white">
      {icon}

      <h3 className="text-[14px] font-medium">{title}</h3>
      <span className="block text-[14px] mb-3">{subtitle}</span>

      <a className="inline-flex items-center justify-center text-[14px] text-text gap-1 group" href={link}>
        Write me <ArrowRightStroke fill="#757575" className="transition duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  )
}

export default ContactCard
