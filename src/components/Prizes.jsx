import React from 'react'
import prizes from "../assets/prizes.png"

const Prizes = () => {
  return (

<div name='prizes' className='w-full py-6 px-4'>
      <div className='max-w-[1140px] mx-auto '>
        <h1  className='text-[#d04d29] text-8xl font-bold'>Prizes</h1>
      </div>
      <div className='max-w-[1140px] mx-auto grid md:grid-cols-2 mt-10 mb-10'>
      <img src={prizes} alt="laptop jpg" className='w-[350px] mx-auto my-4'/>
            <div className='flex flex-col justify-center text-white'>
                <p className=' font-medium text-xl '>
      Every pariticipant will be given a participation certificate and three final participants will be selected as winners.These three final participants will be given cash prizes along with the certificate.
      </p>
      <p className='font-bold mt-10'> First Prize - ₹2500</p>
      <p className='font-bold mt-10'> Second Prize - ₹1500</p>
      <p className='font-bold mt-10'> Third Prize - ₹500</p>
            </div>

        </div>
    </div>
  )
}

export default Prizes