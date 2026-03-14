import { ArrowRightStroke } from "@boxicons/react"

function SeeText({ title }) {
  return (
    <a className="flex text-[14px] items-center gap-1 group" href="#">
      {title} <ArrowRightStroke fill="#757575" className="transition duration-400 group-hover:translate-x-1" />
    </a>
  )
}

export default SeeText
