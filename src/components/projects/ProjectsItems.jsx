import SeeText from "./SeeText"

function ProjectsItems({ item }) {
  return (
    <div className="p-4 lg:p-5 border-2 border-solid border-[#c4f1354d] rounded-2xl" key={item.id}>
      <img src={item.image} className="w-full md:w-73.75 rounded-2xl mb-3 lg:mb-4" />
      <h3 className="font-medium mb-1 lg:mb-2">{item.title}</h3>
      <SeeText link={`${item.code}`} title="View Code" />
      <SeeText link={`${item.live}`} title="Live Demo" />
    </div>
  )
}

export default ProjectsItems
