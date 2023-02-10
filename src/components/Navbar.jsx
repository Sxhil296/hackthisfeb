import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import navlogo from "../assets/navlogo.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1140px] mx-auto px-4 text-white'>
      <img src={navlogo} alt="nav-logo" />
      <ul className='hidden md:flex'>
      <button type="button" class="text-white bg-[#FF1616] hover:bg-[#d04d29] focus:ring-4 focus:outline-none focus:ring-red-300 font-bold rounded-md px-6 py-1 text-center mr-3 md:mr-0 ">Register</button>

      
        <li className='p-4'>About</li>
        <li className='p-4'>Sponsors</li>
        <li className='p-4'>FAQs</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        {/* <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1> */}
          <img src={navlogo} alt="nav-logo" />
          {/* <button type="button" class="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-bold rounded-md px-6 py-1 text-center mr-3 md:mr-0 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-700 border-b border-gray-600 mt-4">Register</button> */}
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4 border-b border-gray-600'>Sponsors</li>
          <li className='p-4 border-b border-gray-600'>FAQs</li>

      </ul>
    </div>
  );
};

export default Navbar;