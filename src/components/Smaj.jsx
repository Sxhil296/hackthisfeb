import React from 'react'
import boostup from "../assets/bbu.jpg"
import credible from "../assets/credible.jpeg"

const Smaj = () => {
  return (
    <div name='sponsors' className='w-full py-6 px-4'>
      <div className='max-w-[1140px] mx-auto '>
        <h1 className='text-[#d04d29] md:text-8xl text-4xl font-bold'>Sponsors</h1>
      </div>
      <div className='max-w-[1140px] mx-auto grid md:grid-cols-2 mt-10 mb-10'>
      <img src={boostup} alt="laptop jpg" className='md:w-[350px] w-[200px] mx-auto my-4 rounded-lg'/>
            <div className='flex flex-col-reverse justify-center'>
            <img src={credible} alt="laptop jpg" className='md:w-[350px] w-[200px] mx-auto my-4 rounded-lg '/>
            </div>
        </div>
    </div>
  )
}

export default Smaj