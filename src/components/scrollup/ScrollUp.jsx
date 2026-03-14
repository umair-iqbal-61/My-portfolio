import { ArrowUpStroke } from "@boxicons/react"

function ScrollUp() {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup")
    if (this.scrollY >= 560) scrollUp.classList.add("bottom-12")
    else scrollUp.classList.remove("bottom-12")
  })

  return (
    <a
      href="#"
      className="scrollup fixed right-4 md:right-6 lg:right-10 -bottom-[20%] bg-heading opacity-[0.8] p-[6.4px] lg:p-2 rounded-[6.8px] z-10 duration-400 hover:bg-heading-dark">
      <ArrowUpStroke fill="#fff" removePadding />
    </a>
  )
}

export default ScrollUp
