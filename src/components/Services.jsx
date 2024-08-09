import React from 'react'
import { services } from '../data/data'

const Services = () => {
  return (
    <section className='bg-[#F5F5F5] p-16 flex flex-col items-center'>
      <div className='flex flex-col items-center gap-[100px] text-center lg:flex-row'>
        {services.map((item, index)=>(
            <div key={index} className='flex flex-col items-center gap-2'>
                <img src={item.icon} alt={item.title} />
                <span className='font-bold text-[15px] uppercase text-title'>{item.title}</span>
                <span className='text-description'>{item.description}</span>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Services
