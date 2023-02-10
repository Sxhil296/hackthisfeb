import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import navlogo from "../assets/navlogo.png"
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='shadow-md  z-50 flex justify-between items-center h-24 max-w-[1140px] mx-auto px-4 text-white'>
      <img src={navlogo} alt="nav-logo" />
      <ul className='hidden md:flex cursor-pointer'>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSf-Yi7UNoyptMD8_Bte7GmLk8YrPRe4pW6F9uttTr-0-S22yQ/viewform?pli=1" target='_blank' rel="noreferrer" class="text-white bg-[#FF1616] hover:bg-[#d04d29] font-bold rounded-md px-6 py-1 text-center mr-3 md:mr-0 items-center"><button type="button" className='mt-3' >Register</button></a>

      
        <Link to='about'><li className='p-4 hover:text-[#FF1616]'>About</li></Link>
        <Link to='prizes'><li className='p-4 hover:text-[#FF1616]'>Prizes</li></Link>
        <Link to='sponsors'><li className='p-4 hover:text-[#FF1616]'>Sponsors</li></Link>
        <Link to='questions'><li className='p-4 hover:text-[#FF1616]'>FAQs</li></Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        {/* <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1> */}
          <img src={navlogo} alt="nav-logo" />
          {/* <button type="button" class="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-bold rounded-md px-6 py-1 text-center mr-3 md:mr-0 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-700 border-b border-gray-600 mt-4">Register</button> */}
          <li className='p-4 border-b border-gray-600 hover:text-[#FF1616]'>About</li>
          <li className='p-4 border-b border-gray-600 hover:text-[#FF1616]'>Prizes</li>
          <li className='p-4 border-b border-gray-600 hover:text-[#FF1616]'>Sponsors</li>
          <li className='p-4 border-b border-gray-600 hover:text-[#FF1616]'>FAQs</li>

      </ul>
    </div>
  );
};

export default Navbar;