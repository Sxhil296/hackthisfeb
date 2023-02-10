import React from 'react'
import boostup from "../assets/bbu.jpg"
import credible from "../assets/credible.jpeg"

const Smaj = () => {
  return (
    <div>
      <h1 className='text-[#d04d29] font-bold text-8xl'>Sponsors</h1>
      <img src={boostup} alt="" className='w-[350px]' />
      <img src={credible} alt=""  className='w-[350px]'/>
    </div>
  )
}

export default Smaj