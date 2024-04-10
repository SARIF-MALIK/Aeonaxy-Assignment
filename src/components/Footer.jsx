import React from 'react'
import bullPng from '../assets/footerBullPng.png'
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'


function Footer() {
  return (
    <div className='flex justify-around relative py-5'>
        <div className="social">
        <ul className="hidden md:flex justify-between gap-5">
          <li className='flex items-center gap-2'><img src={fb} alt="fb link" />Redbull.Nh</li>
          <li className='flex items-center gap-2'><img src={insta} alt="fb link" />Redbull.Inst</li>
          <li className='flex items-center gap-2'><img src={twitter} alt="fb link" />Redbull.Twi</li>
        </ul>
        </div>
        <div className='rounded-full absolute -top-20 w-40 h-40 bg-white'>
            <img src={bullPng} alt="" className='w-full'/>
        </div>
        <div>
        <ul className="hidden md:flex justify-between gap-5 font-inter font-normal text-lg">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>EVENTS</li>
          <li>PRODUCTS</li>
          <li>ATHLETES</li>
        </ul>
        </div>
    </div>
  )
}

export default Footer