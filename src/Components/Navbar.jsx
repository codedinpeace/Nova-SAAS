import React, { use } from 'react'
import xoraSvg from '../../assets/images/xora.svg';
import menu from '../../assets/images/magic.svg'
import close from '../../assets/images/close.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useState, useEffect } from 'react';


const Navbar = () => {

    const [visible, setVisible] = useState(false)   


    const tl = gsap.timeline()
    const deskTl = gsap.timeline()

    useGSAP(()=>{
        deskTl.from(".navBar1 a",{
            y:-30,
            opacity:0,
            duration:1,
            stagger:0.3,
        })
    },[])
        
    useGSAP(() => {
        if(visible){

            tl.to(".mobileNav", {
               x: "-100%"   ,
                duration: 0.8,
                delay: 0,
            })

            tl.from(".navLinks a", {
                y: -30,
                opacity: 0,
                stagger: 0.3,
                duration: 1.2,

            })

            tl.from(".closeImg", {
                opacity: 0,
                y: -30,
            })
        }

          else{
                tl.to(".mobileNav", {
                   x: "0",
                    duration: 0.8,
                    delay: 0,
                })
            }
    },[visible])
    

    useEffect(()=>{
        if(visible){
            document.body.style.overflow = "hidden"
        }

        else{
            document.body.style.overflowY = "auto"
        }
    },[visible])

    return (
        <div className='navbar overflow-x-hidden'>
            <div className='navBar1 max-md:hidden flex justify-between xl:px-90 max-lg:px-10 lg:px-30 pt-7 text-[16px] font-medium text-white align-middle'>
                <a href="#Features" className='hover:text-blue-400 mt-2'>Features</a>
                <a href="#Pricing" className='hover:text-blue-400 mt-2'>Pricing</a>
                <a href="#Home"><img src={xoraSvg} alt="" className='w-30' /></a>
                <a href="#Faq" className='hover:text-blue-400 mt-2'>Faq</a> 
                <a href="#Download" className='hover:text-blue-400 mt-2'>Download</a>
            </div>


            {/* Mobile */}
            <div className='md:hidden flex justify-between py-5 px-7 '>
                <a href="#Home"><img src={xoraSvg} className='w-25' alt="" /></a>
                <img src={menu} onClick={()=>setVisible(true)} alt="" className='p-2 cursor-pointer border-1 rounded-full border-blue-700 w-8 h-8' />
            </div>
            <div className='md:hidden flex justify-end '>
                <div className={`mobileNav md:hidden w-[70%] left-[100%] bg-blue-900 h-screen top-0 fixed `}>
                    <div className=''>
                        <div className='navLinks md:hidden flex flex-col xl:px-70 max-lg:px-10 pt-5 lg:px-40 gap-3 text-[20px] font-medium text-white  text-left '>
                            <a href="#Features" onClick={()=>setVisible(false)}  className='hover:text-blue-400 mt-3'>Features</a>
                            <a href="#Pricing" onClick={()=>setVisible(false)}  className='hover:text-blue-400 mt-3'>Pricing</a>
                            <a href="#Faq"  onClick={()=>setVisible(false)} className='hover:text-blue-400 mt-3'>Faq</a>
                            <a href="#Download" onClick={()=>setVisible(false)}  className='hover:text-blue-400 mt-3'>Download</a>

                            <img src={close} onClick={()=>setVisible(false)} alt="" className='closeImg absolute w-7 right-5 top-4 cursor-pointer  border-0 rounded-full p-1' />

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Navbar