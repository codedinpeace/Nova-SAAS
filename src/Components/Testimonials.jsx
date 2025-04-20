import React from 'react'
import pfp1 from '../../assets/images/testimonials/alicia-barker.png'
import pfp2 from '../../assets/images/testimonials/becky-snider.png'
import pfp3 from '../../assets/images/testimonials/jessica-saunders.png'
import pfp4 from '../../assets/images/testimonials/jim-bradley.png'
import pfp5 from '../../assets/images/testimonials/mark-erixon.png'
import pfp6 from '../../assets/images/testimonials/melanie-hurst.png'
import { FaStar } from "react-icons/fa";


const Testimonials = () => {
  return (
    <div className='' id='Testimonials'>
        <div className='flex justify-center'>
            <h1 className='text-5xl font-bold text-white text-center underline underline-offset-4 max-md:text-3xl decoration-gray-300 decoration-2'>Words from our fans</h1>
        </div>
        <div className='grid grid-cols-3 max-lg:grid-cols-1 tracking-wide mt-10'>   
            <div className='card max-md:w-70 mb-10 mx-auto w-100 h-100 '>
                <p className='text-white text-xl max-md:text-[16px] max-md:w-60  mt-25 w-80 text-center mx-auto'>Xora's customer support is second to none! They're like my tech superheroes, always there when I need them.</p>
                <div className='flex justify-center mt-10 gap-3 text-xl'>
                    <FaStar className='text-blue-500'/>
                    <FaStar className='text-blue-500'/>
                    <FaStar className='text-blue-500'/>
                    <FaStar className='text-blue-500'/>
                    <FaStar className='text-blue-500'/>
                </div>
            <div className=" flex justify-center gap-3 ">
                <img src={pfp1} alt="" className='w-15 h-15 mt-10' />
                <p className='text-blue-500 mt-10 '>Alicia Barker
                    <p className='opacity-50 font-medium text-gray-500 text-[10px]'>GLOBALOMADS</p>
                </p>
                
               
            </div>
            </div>
            <div className='card max-md:w-70 mb-10 mx-auto w-100 h-100 '>
                <p className='text-white text-xl max-md:text-[16px] max-md:w-60  mt-25 w-80 text-center mx-auto'>The analytics feature is like having a personal fortune teller. It's been instrumental in guiding our business decisions.</p>
                <div className='flex justify-center mt-10 gap-3 text-xl'>
                    <FaStar className='text-blue-500'/>
                    <FaStar className='text-blue-500'/>
                    <FaStar className='text-blue-500'/>
                    <FaStar className='text-blue-500'/>
                    <FaStar className='text-blue-500'/>
                </div>
            <div className=" flex justify-center gap-3 ">
                <img src={pfp2} alt="" className='w-15 h-15 mt-10' />
                <p className='text-blue-500 mt-10 '>Jessica Saunders
                    <p className='opacity-50 font-medium text-gray-500 text-[10px]'>GLOBALOMADS</p>
                </p>
                
               
            </div>
            </div>
                <div className='card max-md:w-70 mb-10 mx-auto w-100 h-100 '>
                    <p className='text-white text-xl max-md:text-[16px] max-md:w-60  mt-25 w-80 text-center mx-auto'>I was skeptical at first, but now I can't imagine our content operations without it. It's that impactful.</p>
                    <div className='flex justify-center mt-10 gap-3 text-xl'>
                        <FaStar className='text-blue-500'/>
                        <FaStar className='text-blue-500'/>
                        <FaStar className='text-blue-500'/>
                        <FaStar className='text-blue-500'/>
                        <FaStar className='text-blue-500'/>
                    </div>
                <div className=" flex justify-center gap-3 ">
                    <img src={pfp3} alt="" className='w-15 h-15 mt-10' />
                    <p className='text-blue-500 mt-10 '>Becky Snider
                        <p className='opacity-50 font-medium text-gray-500 text-[10px]'>GLOBALOMADS</p>
                    </p>
                    
                
                </div>
                </div>
                <div className='card max-md:w-70 mb-10 mx-auto w-100 h-100 '>
                    <p className='text-white text-xl max-md:text-[16px] max-md:w-60  mt-25 w-80 text-center mx-auto'>Switched to Xora last month, and I'm already seeing results. Best decision for our team!.</p>
                    <div className='flex justify-center mt-10 gap-3 text-xl'>
                        <FaStar className='text-blue-500'/>
                        <FaStar className='text-blue-500'/>
                        <FaStar className='text-blue-500'/>
                        <FaStar className='text-blue-500'/>
                        <FaStar className='text-blue-500'/>
                    </div>
                <div className=" flex justify-center gap-3 ">
                    <img src={pfp4} alt="" className='w-15 h-15 mt-10' />
                    <p className='text-blue-500 mt-10 '>Mark Erixon
                        <p className='opacity-50 font-medium text-gray-500 text-[10px]'>GLOBALOMADS</p>
                    </p>
                    
                
                </div>
                </div>
                <div className='card max-md:w-70 mb-10 mx-auto w-100 h-100 '>
                    <p className='text-white text-xl max-md:text-[16px] max-md:w-60  mt-25 w-80 text-center mx-auto'>Adopting this software was a breeze. It's made everyday tasks so much simpler.</p>
                    <div className='flex justify-center mt-10 gap-3 text-xl'>
                        <FaStar className='text-blue-500'/>
                        <FaStar className='text-blue-500'/>
                        <FaStar className='text-blue-500'/>
                        <FaStar className='text-blue-500'/>
                        <FaStar className='text-blue-500'/>
                    </div>
                <div className=" flex justify-center gap-3 ">
                    <img src={pfp5} alt="" className='w-15 h-15 mt-10' />
                    <p className='text-blue-500 mt-10 '>
                    Jim Bradley
                        <p className='opacity-50 font-medium text-gray-500 text-[10px]'>GLOBALOMADS</p>
                    </p>
                    
                
                </div>
                </div>
                    <div className='card max-md:w-70 mb-10 mx-auto w-100 h-100 '>
                        <p className='text-white text-xl max-md:text-[16px] max-md:w-60  mt-25 w-80 text-center mx-auto'>The efficiency boost is undeniable. This platform has transformed our workflow, forever.</p>
                        <div className='flex justify-center mt-10 gap-3 text-xl'>
                            <FaStar className='text-blue-500'/>
                            <FaStar className='text-blue-500'/>
                            <FaStar className='text-blue-500'/>
                            <FaStar className='text-blue-500'/>
                            <FaStar className='text-blue-500'/>
                        </div>
                    <div className=" flex justify-center gap-3 ">
                        <img src={pfp6} alt="" className='w-15 h-15 mt-10' />
                        <p className='text-blue-500 mt-10 '>Melanie Hurst
                            <p className='opacity-50 font-medium text-gray-500 text-[10px]'>GLOBALOMADS</p>
                        </p>
                        
                    
                    </div>
                    </div>
            
        </div>
    </div>
  )
}

export default Testimonials