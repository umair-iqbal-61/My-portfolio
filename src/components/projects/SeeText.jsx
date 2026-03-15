import { ArrowRightStroke } from "@boxicons/react"

function SeeText({ link, title }) {
  return (
    <a className="flex text-[14px] items-center gap-1 group" target="_blank" href={link}>
      {title} <ArrowRightStroke fill="#757575" className="transition duration-400 group-hover:translate-x-1" />
    </a>
  )
}

export default SeeText
