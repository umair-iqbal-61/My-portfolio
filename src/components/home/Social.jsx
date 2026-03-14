import { TbBrandGithub, TbBrandInstagram } from "react-icons/tb"

function Social() {
  return (
    <div className="grid grid-cols-1 gap-4 text-xl text-nav [&>a]:hover:text-nav-dark">
      <a target="_blank" href="https://www.instagram.com/_umair_iqbal/"><TbBrandInstagram className="text-[24px] text-heading" /></a>
      <a target="_blank" href="https://github.com/umair-iqbal-61"><TbBrandGithub className="text-[24px] text-heading" /></a>
    </div>
  )
}

export default Social
