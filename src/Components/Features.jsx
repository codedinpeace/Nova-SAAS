import React from 'react'
import Feature1 from '../../assets/images/feature-1.png'
import Feature2 from '../../assets/images/feature-2.png'
import zap from "../../assets/images/zap.svg"
import Detail1 from '../../assets/images/detail-1.png'
import Detail2 from '../../assets/images/detail-2.png'
import Detail3 from '../../assets/images/detail-3.png'
import Detail4 from '../../assets/images/detail-4.png'
import magic from '../../assets/images/magictouch.svg'
import Docs from '../../assets/images/docs.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {

    return (
        <div id='Features'>
            <div className='cards  mt-30 max-lg:gap-10 lg:flex  flex-wrap justify-center relative '>
                <div className="card1 mb-10 max-lg:mx-auto h-[950px] w-[543px] max-lg:h-[700px] max-lg:w-[400px]">
                    <img src={Feature1} alt="" className='w-30 py-10 pl-5' />
                    <p className='pl-10'>EASY INEGRATION</p>
                    <h1 className='max-lg:text-3xl md:text-4xl lg:text-5xl text-white font-bold pl-10 pt-10 lg:w-100'>Work smarter Not harder</h1>
                    <p className='text-[16px] text-white tracking-normal lg:w-100 pl-10 pt-10 max-md:w-90'>With Xora, tedious tasks are history. Automation and smart processes bring your productivity to new heights. It's like having an extra cup of coffee, but without the jitters.</p>
                    <span className=''>
                    <button className=' ml-10 text CTA flex mt-15 text-xl  w-75 border-0 rounded-3xl h-15 max-sm:text-[16px] max-sm:rounded-2xl cursor-pointer'><img src={magic} alt=""/><p className='mt-4  pl-2 font-medium'>WATCH THE DEMO</p></button>
                    </span>
                </div>
                <div className="card2 card1 h-[950px] max-lg:mx-auto  w-[543px] max-lg:h-[700px] max-lg:w-[400px]">
                    <img src={Feature2} alt="" className='w-30 py-10 pl-5' />
                    <p className='pl-10'>SECURE AND TRUSTWORTHY</p>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-bold pl-10 pt-10 lg:w-120'>Sleep easy, we got your back</h1>
                    <p className='text-[16px] text-white tracking-normal lg:w-100 pl-10 pt-10'>Your data security is our priority. With state-of-the-art encryption and robust privacy controls, Xora helps keeps your information secure and locked up tighter than Fort Knox.</p>
                    <span className=''>
                    <button className='ml-10 text CTA flex mt-15 text-xl  w-65 border-0 rounded-3xl h-15  max-sm:text-[16px] max-sm:rounded-2xl cursor-pointer'><img src={Docs} alt=""/><p className='mt-4  pl-2 font-medium'>READ THE DOCS</p></button>
                    </span>
                </div>
                <div className="max-lg:hidden card3 absolute bottom-0 max-md:relative max-lg:mt-10 max-lg:gap-10 h-[200px] lg:w-[1086px] max-lg:h-[400px] max-lg:w-[400px] card3 flex justify-evenly flex-wrap text-gray-300 capitalize font-medium">
                    <div className='my-auto cursor-pointer  '>
                    <img src={Detail1} className='details w-19 h-19  border-0 rounded-full p-2 my-auto mx-auto'  alt="" />
                        <p className='text-center w-30 mt-2'>Ai automated Video Editing</p>
                    </div>
                    <div className='my-auto cursor-pointer  '>
                    <img src={Detail2} className='details w-19 h-19 bg-red-500 border-0 rounded-full p-2 my-auto mx-auto' alt="" />
                    <p className='text-center w-30 mt-2'>Collaborate with your team</p>
                    </div>
                    <div className='my-auto cursor-pointer  '>
                    <img src={Detail3} className='details w-19 h-19 bg-red-500 border-0 rounded-full p-2 my-auto mx-auto' alt="" />
                    <p className='text-center w-30 mt-2'>Ultra Fast Cloud Engine</p>
                    </div>
                    <div className='my-auto cursor-pointer  '>
                    <img src={Detail4} className='details w-19 h-19 bg-red-500 border-0 rounded-full p-2 my-auto mx-auto' alt="" />
                    <p className='text-center w-30 mt-2'>24/7 Customer Support</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features