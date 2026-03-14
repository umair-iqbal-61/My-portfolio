import { SendAlt2 } from "@boxicons/react"

function Data() {
  return (
    <div className="col-span-2 md-2:col-span-1">
      <h1 className="text-[44px] font-semibold mb-1 text-heading">
        Umair Iqbal
        <span className="text-[34px] ml-1.5">
          🖐
        </span>
      </h1>

      <h3 className="relative pl-15 lg:pl-21.5 mb-4 text-[18px] text-heading">
        <span class="absolute left-0 top-[12.8px] lg:top-3 w-10.5 lg:w-17.5 h-px bg-divider">
        </span>
        Front-end Developer
      </h3>

      <p className="md-2:max-w-100 mb-10 text-sm text-text">Frontend Developer crafting fast, responsive, and modern web experiences.</p>

      <a href="#contact">
        <button className="flex gap-2.5 px-7 lg:px-8 py-4 lg:py-5 bg-heading hover:bg-button cursor-pointer text-background rounded-2xl">
          Say Hello
          <SendAlt2 rotate={315} />
        </button>
      </a>
    </div>
  )
}

export default Data
