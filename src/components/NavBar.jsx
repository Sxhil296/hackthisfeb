import React from 'react'
import logo from "../assets/hackThisFeb.png"

const NavBar = () => {
  return (
    <div>
        <main className='bg-black'>
            <header className='bg-black text-gray-500 sticky top-0 z-10'>
                <section className='max-w-4xl mx-auto p-4 flex justify-between items-center'>
                <h1 class="text-3xl font-medium">
                <a href="#hero">
                    <img src={logo} alt="logo" />
                </a>
            </h1>
                </section>
            </header>
        </main>
    </div>
  )
}

export default NavBar