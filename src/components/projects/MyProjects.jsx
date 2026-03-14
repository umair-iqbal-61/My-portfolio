import { useState } from 'react'
import { projectsData, projectsNav } from './Data'
import ProjectsItems from './ProjectsItems'

function MyProjects() {
  const [item, setItem] = useState({ name: 'all' })
  const [active, setActive] = useState(0)

  const filteredProjects = item.name === 'all'
    ? projectsData
    : projectsData.filter((project) => project.category.toLowerCase() === item.name);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() })
    setActive(index)
  }

  return (
    <>
      <div className='flex justify-center items-center gap-1 md:gap-3 mb-8'>
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index)
              }}
              className={`${active === index ? 'bg-heading text-white' : ''}
              text-heading text-[14px] py-1 px-3 font-medium rounded-lg capitalize cursor-pointer hover:bg-heading hover:text-white`}
              key={index}
            >
              {item.name}
            </span>
          )
        })}
      </div>

      <div className='grid grid-cols-[1fr] md:grid-cols-[max-content] lg:grid-cols-[repeat(2,max-content)] justify-center gap-5 lg:gap-12'>
        {filteredProjects.map((item) => {
          return <ProjectsItems item={item} key={item.id} />
        })}
      </div>
    </>
  )
}

export default MyProjects
