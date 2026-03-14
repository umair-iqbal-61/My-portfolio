import { FileCode, FolderCode, Home, Menu, SendAlt2, User, X } from '@boxicons/react'
import { useState } from 'react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeNav, setActiveNav] = useState("#home")

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    if (this.scrollY >= 80) header.classList.add("shadow-sm")
    else header.classList.remove("shadow-sm")
  })

  return (
    <nav className='header fixed top-0 left-0 right-0 z-50 bg-background mx-auto p-5 md:py-6.5 md:px-10 lg:px-0 rounded-2xl'>
      <div className='max-w-242 mx-auto w-full flex items-center justify-between'>
        <a className='text-heading text-xl md:text-[16px] font-semibold' href='/'>Umair</a>

        {/* Navigation for Desktop */}
        <div>
          <ul className='hidden md:flex items-center justify-center gap-8 font-medium text-sm [&>li>a]:hover:text-nav-dark [&>li>a]:transition [&>li>a]:duration-300'>
            <li><a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "text-nav-dark" : "text-nav"}>Home</a></li>
            <li><a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "text-nav-dark" : "text-nav"}>About</a></li>
            <li><a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "text-nav-dark" : "text-nav"}>Skills</a></li>
            <li><a href="#projects" onClick={() => setActiveNav("#projects")} className={activeNav === "#projects" ? "text-nav-dark" : "text-nav"}>Projects</a></li>
            <li><a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "text-nav-dark" : "text-nav"}>Contact</a></li>
          </ul>
        </div>

        {/* Navigation for Mobile */}
        <div className={`${isOpen ? 'absolute' : 'hidden'} md:hidden w-full bg-background left-0 p-5 top-0 border-b border-black/10 rounded-b-2xl shadow-lg`}>
          <div className='flex justify-end pb-4'>
            <X fill="#4e4e4e" onClick={() => setIsOpen(!isOpen)} className='cursor-pointer' />
          </div>
          <ul className='grid grid-cols-3 items-center justify-center gap-8 text-nav font-medium text-sm text-center [&>li]:flex [&>li]:flex-col [&>li]:items-center'>
            <li><Home fill="#4e4e4e" /><a href="#home">Home</a></li>
            <li><User fill="#4e4e4e" /><a href="#about">About</a></li>
            <li><FileCode fill="#4e4e4e" /><a href="#skills">Skills</a></li>
            <li><FolderCode fill="#4e4e4e" /><a href="#projects">Projects</a></li>
            <li><SendAlt2 fill="#4e4e4e" /><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <Menu fill="#4e4e4e" className='block md:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
      </div>
    </nav>
  )
}

export default Header
