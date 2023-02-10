import React from 'react'
import aboutimg from "../assets/about.png"

const About = () => {
  return (
    <div className='w-full py-8 px-4'>
        <div className='max-w-[1140px] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center'>
            <h1 className='text-[#d04d29] font-bold text-8xl '>About Us</h1>
            <p className='text-white fond-bold text-2xl'>
              Hack This Feb began with a mindset of encouraging new hackers to build
              unique projects regardless of the tech or field; the only focus was to
              create something meaningful and enjoy building while also solving the
              shared struggles of our surroundings.
              <br />
              <br />
              The community encourages Inclusion and Diversity at its core and has
              various events and happenings around the same as well to keep hackers engaged in a meaningful way. All in all, we want hackers to not just participate but experience a hackathon in a true sense.
    
              </p>
              <img src={aboutimg} alt="laptop jpg" className='flex flex-col w-[500px] mx-auto my-4'/>
            </div>
            
        </div>
    </div>
  )
}

export default About