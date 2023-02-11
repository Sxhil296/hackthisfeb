import React from 'react'
import prizes from "../assets/prizes.png"

const Prizes = () => {
  return (

<div name='prizes' className='w-full py-6 px-4'>
      <div className='max-w-[1140px] mx-auto '>
        <h1  className='text-[#d04d29] md:text-8xl text-4xl font-bold'>Prizes</h1>
      </div>
      <div className='max-w-[1140px] mx-auto grid md:grid-cols-2 mt-10 mb-10'>
      <img src={prizes} alt="laptop jpg" className='w-[250px] md:w-[340px] mx-auto my-4'/>
            <div className='flex flex-col justify-center text-white'>
                <p className=' font-medium text-sm md:text-xl '>
      Every pariticipant will be given a <span className='text-[#d04d29]'>participation certificate</span> and three final participants will be selected as winners. These three final participants will be given <span className='text-[#d04d29]'>cash prizes</span> along with the certificate.
      </p>
      <p className='font-bold mt-8 text-sm'> First Prize - ₹2500</p>
      <p className='font-bold mt-8 text-sm'> Second Prize - ₹1500</p>
      <p className='font-bold mt-8 text-sm'> Third Prize - ₹500</p>
            </div>

        </div>
    </div>
  )
}

export default Prizes