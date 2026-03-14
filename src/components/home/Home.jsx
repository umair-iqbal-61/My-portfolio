import Social from "./Social"
import Data from "./Data"
import ScrollDown from "./ScrollDown"
import ProfileImg from "../../assets/Profile.jpeg"

function Home() {

  return (
    <>
      <section className="px-5 pt-20 md:px-10 lg:px-0 md:pt-28 md-2:pt-44 pb-8" id="home">
        <div className="flex flex-col gap-28">
          <div
            className="grid grid-cols-[0.5fr_3fr] md-2:grid-cols-[100px_repeat(2,1fr)] lg:grid-cols-[116px_repeat(2,1fr)] gap-5 lg:gap-8 items-center"
          >
            <Social />

            <img
              className="w-45 h-45 md:w-50 md-2:w-62.5 lg:w-75 md:h-50 md-2:h-62.5 lg:h-75 justify-center bg-center bg-cover bg-no-repeat justify-self-auto md-2:justify-self-center order-0 md-2:order-1 animate-profile shadow-[inset_0_0_0_9px_rgb(255_255_255/0.3)]"
              src={ProfileImg}
            />

            <Data />
          </div>

          <ScrollDown />
        </div>
      </section>
    </>
  )
}

export default Home
