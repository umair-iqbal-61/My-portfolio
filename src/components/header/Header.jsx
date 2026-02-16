import { FileCode, FolderCode, Home, Menu, SendAlt2, User, X } from '@boxicons/react'
import { useState } from 'react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='flex items-center justify-between p-5 md:py-10 md:px-10 lg:px-0'>
      <a className='text-heading text-xl md:text-[16px] font-medium' href='/'>Umair</a>

      {/* Navigation for Desktop */}
      <div>
        <ul className='hidden md:flex items-center justify-center gap-8 text-nav font-medium text-sm [&>li>a]:hover:text-nav-dark [&>li>a]:transition [&>li>a]:duration-300'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
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
    </nav>
  )
}

export default Header
