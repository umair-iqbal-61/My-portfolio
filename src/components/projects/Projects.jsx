import MyProjects from "./MyProjects"


function Projects() {
  return (
    <section className="px-5 py-10 md:px-10 lg:px-0 md:pt-14 md-2:pt-22 pb-8" id="projects">
      <h2 className="text-4xl text-center">Projects</h2>
      <span className="block text-[14px] mb-16 text-center">My recent work</span>

      <MyProjects />
    </section>
  )
}

export default Projects
