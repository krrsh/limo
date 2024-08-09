import React from 'react'
import {brands} from '../data/data' 

const Brands = () => {
  return (
    <section className='mx-[20px] flex flex-col items-center pb-[100px]'>
      <h1 className='mb-20 text-[40px] text-center text-title font-bold uppercase'>Various Brands of Cars Available</h1>
      <div className='flex flex-col gap-10 lg:flex-row justify-evenly flex-wrap'>
        {brands.map((item, index)=>(
          <div className='w-[410px] h-auto cursor-pointer transform transition-transform hover:scale-105 duration-300' key={index}>
            <img src={item.image} alt={item.title} />
            <h2 className='font-bold text-center pt-3 text-[20px]'>{item.title}</h2>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Brands
