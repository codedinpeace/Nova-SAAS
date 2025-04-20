import React from 'react'
import xoraLogo from '../../assets/images/xora.svg'
import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import screen from '../../assets/images/screen.jpg'
import afterplay from '../../assets/images/logos/afterpay.svg'
import amplitude from '../../assets/images/logos/amplitude.svg'
import drips from '../../assets/images/logos/drips.svg'
import maze from '../../assets/images/logos/maze.svg'
import sonos from '../../assets/images/logos/sonos.svg'

const Download = () => {
  return (
    <div className='max-lg:h-[]' id='Download'>
        <div className='flex max-lg:ml-0 max-lg:mr-0 max-lg:flex-col max-xl:ml-[5%] ml-[15%] mr-[15%] justify-between max-xl:gap-20'>
            <div className='mt-[20%] max-lg:mt-20 max-lg:mx-auto'>
            <img src={xoraLogo} alt="" />
            <p className='text-gray-300 text-xl w-90 mt-10'>Try it now for free on iOS, Android, PC, Web - whatever your flavor, we've got you covered.</p>
        <div className='logos flex mt-20  text-6xl  gap-10 text-white cursor-pointer'>
            <FaApple className='hover:text-blue-500 bg-[#0C1838] p-3 border-0 rounded-full text-center'/>
            <FaWindows className='hover:text-blue-500 bg-[#0C1838] p-3 border-0 rounded-full text-center'/>
            <FaChrome className='hover:text-blue-500 bg-[#0C1838] p-3 border-0 rounded-full text-center'/>
            <IoLogoGooglePlaystore className='hover:text-blue-500 bg-[#0C1838] p-3 border-0 rounded-full text-center'/>
        </div>
            </div>
            <img src={screen} className='max-md:w-100 max-lg:mx-auto w-200 max-xl:w-150 mt-[10%]  p-3 border-1 border-[#f8f9ff7a] rounded-2xl ' alt="" />
        </div>
        <div className='flex justify-evenly mt-20 gap-10 flex-wrap max-w-none'>
            <img src={afterplay} alt="" />
            <img src={amplitude} alt="" />
            <img src={drips} alt="" />
            <img src={maze} alt="" />
            <img className='max-lg:hidden' src={sonos} alt="" />
        </div>
    </div>
  )
}

export default Download