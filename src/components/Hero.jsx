import React from 'react'
// import Typed from 'react-typed';
import herologo from "../assets/htf2.png"

const Hero = () => {
  return (
    <div name='hero' className='text-white'>
        <div className='max-w-[800px] mt-[-110px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center'>
          <img src={herologo} alt="hero-logo" className='md:w-[500px] w-[370px]'/>
    

               <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-5xl text-xl font-bold mt-[5]'>Innovate for good.</p>
                {/* <Typed
                 className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 mt-[5] text-gray-400'
                strings={['good.', 'a better tomorrow.']}
                typeSpeed={170}
                backSpeed={160}
                loop
               /> */}
               
            </div>
            <div>
              <p className='md:text-3xl sm:text-2xl text-xl font-bold mt-6'><span className='bg-[#FF1616] p2 rounde text-white'>10AM, 26 Feb 2023</span> | Credible Academy, Saharanpur </p>
            </div> 
      
            <div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf-Yi7UNoyptMD8_Bte7GmLk8YrPRe4pW6F9uttTr-0-S22yQ/viewform?pli=1" target='_blank' className="relative inline-flex items-center justify-start mt-8 py-4 px-6 pl-4 pr-12 overflow-hidden font-semibold text-[#FF1616] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#FF1616] group-hover:h-full"></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Register Now</span>
            </a>
                
               </div>
            
        </div>
    
    </div>
  )
}

export default Hero