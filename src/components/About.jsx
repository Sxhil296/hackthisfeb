import React from 'react'
import aboutimg from "../assets/about.png"
import { Link } from 'react-scroll'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md' 

const About = () => {
  return (
    <div name='about' className='w-full py-6 px-4'>
      <div className='max-w-[1140px] mx-auto '>
        <h1 className='text-[#d04d29] text-8xl font-bold'>About Us</h1>
      </div>
      <div className='max-w-[1140px] mx-auto grid md:grid-cols-2 mt-10 mb-10'>
            
            <div className='flex flex-col-reverse justify-center'>
                <p className='text-white font-medium text-xl '>
      Hack This Feb began with a mindset of encouraging new hackers to build
      unique projects regardless of the tech or field; the only focus was to
      create something meaningful and enjoy building while also solving the
      shared struggles of our surroundings. <br /><br />

      The community encourages Inclusion and Diversity at its core and has
      various events and happenings around the same as well to keep hackers
      engaged in a meaningful way. All in all, we want hackers to not just
      participate but experience a hackathon in a true sense.
    
      </p>
            </div>
            <img src={aboutimg} alt="laptop jpg" className='w-[500px] mx-auto my-4'/>

        </div>
    </div>
  )
}

export default About