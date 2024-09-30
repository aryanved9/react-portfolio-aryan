import React from 'react'
import logo from "../assets/aryanlogo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

function Navbar() {
  return (
   <nav className=' mb-16 flex items-center justify-between py-3'>
      <div className=' ml-3 flex flex-shrink-0 items-start'>
        <img src={logo} alt="logo" className='mx-2 w-16'/>
      </div>
      <div className='m-8 flex items-center justify-center gap-6 text-2xl'>
        <a href="https://www.linkedin.com/in/aryan-ved-993507231/" target='_blank' rel='noopener noreferrer' 
        className='hover:text-blue-500 cursor-pointer transition-colors duration-300'
        ><FaLinkedin/>
        </a>
        <a href="https://github.com/aryanved9" target='_blank' rel='noopener noreferrer' 
        className='hover:text-blue-500 cursor-pointer transition-colors duration-300'
        ><FaGithub/>
        </a>
  
      </div>
   </nav>
  )
}

export default Navbar