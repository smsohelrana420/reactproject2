import React from 'react'
import herobg from "../../assets/hero-bg.jpg"
const Hero = () => {
  return (
    <div style={{backgroundImage:`url(${herobg})`}} className='flex flex-col items-center text-white h-[90vh] bg-no-repeat bg-cover bg-center justify-center px-4 text-center'>
        <h2 className='text-4xl md:text-8xl mb-6 font-bold'>Welcome to My Website</h2>
        <p className='text-lg md:text-xl mb-4'>Your Journey Start Here</p>
        <button className='bg-white text-indigo-700 px-6 py-2 rounded-md font-medium hover:bg-gray-200 cursor-pointer'>Purchase Products</button>

    </div>
  )
}

export default Hero