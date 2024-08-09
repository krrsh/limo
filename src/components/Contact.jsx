import React from 'react'
import banner from '../assets/images/banner.png'

const Contact = () => {

    

  return (
    <section className='h-[700px] flex flex-col items-center text-center  relative' style={{backgroundImage:`url(${banner})`}}>
      <div className='bg-black absolute w-full h-full opacity-50 z-[150]'></div>
      <h1 className='z-[200] font-bold uppercase text-[40px] pt-[200px] text-white'>contact info</h1>
      <p className=' pt-[30px] z-[200] text-[20px] text-white px-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod minima, veniam </p>
      <h1 className='pt-[30px] z-[200] text-[30px] font-semibold text-white'>Call us (91) 120 190 8273</h1>
      <button className='mt-[40px] z-[200] uppercase bg-primary px-10 py-4 transition-transform duration-300 hover:scale-110 text-white font-semibold'>contact us</button>

    </section>
  )
}

export default Contact
