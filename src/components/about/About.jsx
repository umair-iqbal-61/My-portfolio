import { FileDetail } from "@boxicons/react"
import AboutImg from "../../assets/Profile.jpeg"
import Resume from "../../assets/umair_iqbal-resume.pdf"
import Info from "./Info"

function About() {
  return (
    <section id="about" className="px-5 py-10 md:px-10 lg:px-0 md:pt-14 md-2:pt-22 pb-8">
      <h2 className="text-4xl text-center">About Me</h2>
      <span className="block text-[14px] mb-16 text-center">My introduction</span>

      <div className="grid grid-cols-[1fr] lg:grid-cols-[repeat(2,1fr)] gap-10 lg:gap-16">
        <img src={AboutImg} className="w-55 lg:w-87.5 rounded-3xl justify-self-center" />

        <div className="text-center lg:text-start">
          <Info />

          <p className="p-0 md:pl-20 md:pr-20 lg:pl-0 lg:pr-16 mb-8">
            Self-driven frontend developer building practical, real-world projects.
            Constantly learning, refining, and pushing for better solutions.
          </p>

          <a
            download=""
            href={Resume}
            className="inline-flex items-center gap-2 px-7 lg:px-8 py-4 lg:py-5 font-medium bg-heading hover:bg-button cursor-pointer text-background rounded-2xl"
          >
            Download Resume
            <FileDetail removePadding fill='#f8fafc' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About