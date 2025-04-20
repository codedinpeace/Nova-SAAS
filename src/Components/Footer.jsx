import React from 'react'
import discord from '../../assets/images/socials/discord.svg'
import insta from '../../assets/images/socials/instagram.svg'
import threads from '../../assets/images/socials/threads.svg'
import x from '../../assets/images/socials/x.svg'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col justify-end h-50 pb-5 px-10 bg-[#080d27] '>
        <div className='flex max-md:flex-col max-md:mx-auto max-md:gap-10'>
            <div className=''>
            <h1 className='text-gray-500'>Copyright© Pranam Shaw</h1>
            </div>
            <div className='logos2 flex ml-auto gap-10'>
            <a href="https://discord.com/channels/@me"><img src={discord} alt="" className='' /></a>
           <a href="https://www.instagram.com/__i.am.alive__"> <img src={insta} alt="" className='  ' /></a>
            <a href="https://www.threads.net/@__i.am.alive__"><img src={threads} alt=""  className=' '/></a>
           <a href="https://x.com/PranamShaw"> <img src={x} alt="" className='' /></a>
            </div>
            </div>
    </div>
        
    
    </div>
  )
}

export default Footer