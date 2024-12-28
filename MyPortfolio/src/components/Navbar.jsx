import React from 'react'
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      {/* Navbar left section */}
      <div>
        <div className= 'mb-10 md:mb-20'>
          <p className= 'text-white text-4xl font-semibold mb-2'>ADEYEMI IBRAHIM</p>
          <p className= 'text-white text-xl mb-2'>Front End Engineer</p>
          <p className='text-slate-400 text-base'>I build accessible, pixel-perfect digital </p>
          <p className='text-slate-400 text-base'>experiences for the web.</p>
        </div>

        <div className= 'hidden md:block'>
          <div className= "flex space-x-2 mb-5 hover:scale-x-150 hover:text-white transform origin-left transition-all duration-300">
            <TfiLayoutLineSolid className="text-2xl" />
            <p className="text-base font-bold">ABOUT</p>
          </div>
          <div className= "flex space-x-2 mb-5 hover:scale-x-150 hover:text-white transform origin-left transition-all duration-300">
            <TfiLayoutLineSolid className= ' text-2xl' />
            <p className= 'text-base font-bold '>EXPERIENCE</p>
          </div>
          <div className= "flex space-x-2 mb-5 hover:scale-x-150 hover:text-white transform origin-left transition-all duration-300">
            <TfiLayoutLineSolid className='text-2xl' />
            <p className= 'text-base font-bold'>PROJECTS</p>
          </div>
        </div>

        <div className='flex space-x-2 md:mt-14'>
            <div><IoLogoGithub className= 'w-8 h-8'/></div>
            <div><FaLinkedin className= 'w-8 h-8' /></div>
            <div><FaInstagram className= 'w-8 h-8'/></div>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar