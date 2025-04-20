import React from 'react'
import hero from '../../assets/images/hero.png'
import zap from '../../assets/images/zap.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {

    const tl = gsap.timeline()

    useGSAP(()=>{
       tl.from(".purpose p",{
        y:-30,
        duration:0.5,
        delay:1.5,
        opacity:0,
       })

       tl.from(".tagline",{
        opacity:0,
        y:-30,
        duration:1,
        stagger:0.4,
       })

       tl.from(".heroImg img    ",{
        y:-30,
        opacity:0,
        duration:1,
       })
    })

  return (
    <div className='hero'>
        <div className='purpose mt-48 text-left lg:pl-37 xl:pl-97 max-md:pl-17 md:pl-17'>
            <p>VIDEO  EDITING</p>
        </div>
        <div className='tagline  flex justify-around gap-0 max-sm:flex-col max-md:justify-center text-white text-5xl text-left font-bold  md:text-4xl lg:text-8xl '>
            <h1 className=' mt-5 pr-5  w-70 md:w-80 lg:w-100 lg:pl-35 max-md:pl-15 md:pl-15 max-sm:leading-12 md:leading-10 lg:leading-25 max-md:leading-10  xl:pl-65 tracking-normal leading-20'>AMAZINGLY SIMPLE
            <p className='text text-xl font-light max-md:w-70 max-md:text-[16px] xl:text-2xl  w-100 max-md:leading-6 leading-8 mt-8'>We designed XORA AI Video Editor to be an easy to use, quick to learn, and surprisingly powerful.</p>
            <span className=''>
            <button className=' CTA flex mt-10 text-xl  w-45 border-0 rounded-3xl h-15 max-sm:w-35 max-sm:h-10 max-sm:text-[16px] max-sm:rounded-2xl cursor-pointer'><img src={zap} alt=""/><p className='mt-4 max-sm:mt-[8px]'>Try it Now</p></button>
            </span>
            </h1>
            
            <img src={hero} alt="" className="heroImg max-sm:mt-7 max-md:w- xl:w-270 max-lg:mt-[-60px] z-[-1] max-lg:w-100 max-xl:mt-[-90px]  max-xl:w-150 mt-[-230px]" />
        </div>
        
    </div>
  )
}

export default Hero