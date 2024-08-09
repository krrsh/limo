import React from 'react'
import logo from '../assets/images/logowhite.svg'
import fb from '../assets/images/facebook.svg'
import twitter from '../assets/images/twitter.svg'
import insta from '../assets/images/ig.svg'
import linkedin from '../assets/images/linkedin.svg'
import yt from '../assets/images/youtube.svg'
import location from '../assets/images/footer-loc.svg'
import time from '../assets/images/time.svg'
import call from '../assets/images/call.svg'

const Footer = () => {
  return (
    <section className='bg-title text-white flex flex-col gap-10'>
    <div className='flex flex-col gap-10 p-10 lg:flex-row justify-evenly'>
      <div >
        <img className='pb-2' src={logo} alt='logo' />
        <p>Lorem ipsumctur perspiciatis! Nam, tempore veritatis.</p>
        <div className='pt-5 flex gap-3 items-center'>
            <a href=''><img src={fb} alt="" /></a>
            <a href=''><img src={twitter} alt="" /></a>
            <a href=''><img src={linkedin} alt="" /></a>
            <a href=''><img src={insta} alt="" /></a>
            <a href=''><img src={yt} alt="" /></a>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='font-bold text-[30px] uppercase '>Contact info</h1>
        <div className='flex gap-2 items-center'><img src={location} alt="locIcon" /><p>GST road, Chennai</p></div>
        <div className='flex gap-2 items-center'><img src={call} alt="callIcon" /><p>Call: 999 888 6667</p></div>
        <div className='flex gap-2 items-center'><img src={time} alt="TimeIcon" /><p>8:00-18:00, Sun: Closed</p></div>
      </div>
      <div>
        <h1 className='font-bold text-[30px] uppercase pb-5'>subscribe to our newsletter</h1>
        <p></p>
        <div className='flex'><input className='border-b w-full bg-transparent outline-none' type="text" placeholder='Enter Email ID'/><button className='border-b uppercase font-bold'>subscribe</button></div>
      </div>
    </div>
    <hr className='bg-description h-[1px] border-none'/>
    <div className='pb-10 px-10 text-placeholder'>
        <p>&copy; Limocart, All rights reserved</p>
    </div>
    </section>
  )
}

export default Footer
