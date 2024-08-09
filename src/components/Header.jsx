import React from 'react'
import logo from '../assets/images/logo.svg'
import { links } from '../data/data'

const Header = () => {
  return (
    <section className='bg-white flex justify-between items-center px-5 h-[80px]'>
      <img src={logo} alt="logo" />
      <div className='hidden lg:flex gap-20'>
        {links.map((item, index)=>{
            return <a className='cursor:pointer hover:text-primary' key={index} href={item.path}>{item.title}</a>
        })}
      </div>
    </section>
  )
}

export default Header
