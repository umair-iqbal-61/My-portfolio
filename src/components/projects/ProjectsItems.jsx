import SeeText from "./SeeText"

function ProjectsItems({ item }) {
  return (
    <div className="p-4 lg:p-5 border border-solid border-[rgba(0,0,0,0.1)] rounded-2xl bg-white" key={item.id}>
      <img src={item.image} className="w-full md:w-73.75 rounded-2xl mb-3 lg:mb-4" />
      <h3 className="font-medium mb-1 lg:mb-2">{item.title}</h3>
      <SeeText title="See Code" />
      <SeeText title="See Live" />
    </div>
  )
}

export default ProjectsItems
