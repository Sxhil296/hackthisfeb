import React from 'react';
import navlogo from "../assets/htf2.png"

import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1140px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1> */}
        <img src={navlogo} alt="footer-logo" className='w-[100px]' />

        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-bold text-2xl text-[#d04d29]'>Guides</h6>
        <ul>
            <li className='py-2 text-sm font-bold'>Register</li>
            <li className='py-2 text-sm font-bold'>About</li>
            <li className='py-2 text-sm font-bold'>FAQs</li>
            <li className='py-2 text-sm font-bold'>Prizes</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-2xl text-[#d04d29]'>Explore</h6>
        <ul>
            <li className='py-2 text-sm font-bold'>Blogs</li>
            <li className='py-2 text-sm font-bold'>Swags</li>
            <li className='py-2 text-sm font-bold'>Dev.to</li>
            <li className='py-2 text-sm font-bold'>Sponsor Us</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-2xl text-[#d04d29]'>Sponsors</h6>
        <ul>
            <li className='py-2 text-sm font-bold'>BrandBoostUp</li>
            <li className='py-2 text-sm font-bold'>Credible Academy</li>
            <li className='py-2 text-sm font-bold'>xyz</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;