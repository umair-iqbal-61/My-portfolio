import { BriefcaseAlt, HeadphoneMic, MedalAlt } from "@boxicons/react"

function Info() {
  return (
    <div
      className="grid grid-cols-[repeat(2,1fr)] sm:grid-cols-[repeat(3,1fr)] md-2:grid-cols-[repeat(3,140px)] justify-center mb-8 gap-2 [&>div>span]:text-[10px] [&>div>h3]:text-sm [&>div>h3]:font-medium"
    >
      <div className="flex flex-col items-center bg-white border border-solid border-[rgba(0,0,0,0.1)] rounded-xl text-center py-3 lg:py-4 px-2 lg:px-5">
        <MedalAlt fill="#757575" className="text-2xl text-heading mb-2" />
        <h3>
          Experience
        </h3>
        <span>
          2 Years Freelancing
        </span>
      </div>

      <div className="flex flex-col items-center bg-white border border-solid border-[rgba(0,0,0,0.1)] rounded-xl text-center py-3 lg:py-4 px-2 lg:px-5">
        <BriefcaseAlt fill="#757575" className="text-2xl text-heading mb-2" />
        <h3>
          Completed
        </h3>
        <span>
          10+ Projects
        </span>
      </div>

      <div className="flex flex-col items-center bg-white border border-solid border-[rgba(0,0,0,0.1)] rounded-xl text-center py-3 lg:py-4 px-2 lg:px-5">
        <HeadphoneMic fill="#757575" className="text-2xl text-heading mb-2" />
        <h3>
          Support
        </h3>
        <span>
          Online 24/7
        </span>
      </div>
    </div>
  )
}

export default Info
