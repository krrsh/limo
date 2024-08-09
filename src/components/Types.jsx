import React, { useState } from 'react'
import { cartypes, types } from '../data/data'

const Types = () => {

    const [enabled, setEnabled] = useState("All");

  return (
    <section className='flex flex-col gap-10 items-center mb-[100px]'>
      <h1 className='uppercase font-bold text-[40px] text-title' >find by type</h1>
      <div className='flex gap-8'>
        {cartypes.map((item, index)=>(
            <button onClick={()=>setEnabled(item)} className={`${item == enabled ? 'text-white bg-primary' : 'text-disabled bg-white'}  font-semibold px-4 py-2  border border-placeholder hover:shadow-md`} key={index}>{item}</button>
        ))}
      </div>
      <div className='w-full flex flex-col gap-14 lg:flex-row lg:justify-evenly lg:flex-wrap'>
      {types.map((item, index)=>(
        <div className='items-center flex flex-col' key={index}>
            <img className='w-[410px] h-auto hover:shadow-lg' src={item.image} alt={item.title} />
            <span className='font-bold text-[20px]'>{item.title}</span>
            <div className='text-description'>starts from <span className='font-bold text-[15px] text-title'>{item.price}/day</span> </div>
            <button className='font-semibold text-white uppercase bg-primary w-1/5 mt-3 transition-transform transform duration-75 hover:scale-105  shadow-lg'>rent now</button>
        </div>
      ))}
      </div>
    </section>
  )
}

export default Types
Types