import React from 'react'
import prizes from "../assets/prizes.png"

const Prizes = () => {
  return (
    <div className='w-full py-16 px-4 text-white'>
    <div className='max-w-[1140px] mx-auto grid md:grid-cols-2'>
        <img src={prizes} alt="laptop jpg" className='w-[300px] mx-auto my-4'/>
        <div className='flex flex-col justify-center'>
            <h1 className='md:text-3xl sm:text-2xl text-xl font-bold mt-[-2rem]'>Out of all the candidates, three final candidates will be selected and will be gives cash prizes.</h1>
            <p className='font-bold mt-10'> First Prize - ₹2500</p>
            <p className='font-bold mt-10'> Second Prize - ₹1500</p>
            <p className='font-bold mt-10'> Third Prize - ₹500</p>
        </div>
    </div>
</div>
  )
}

export default Prizes