import React from 'react'
import FaqLogo from '../../assets/images/faq-logo.svg'
import { GoPlus } from "react-icons/go";
import { useState } from 'react';

const Faq = () => {

  const [faqVisible, setFaqVisible] = useState(false)
  const [faqVisible2, setFaqVisible2] = useState(false)
  const [faqVisible3, setFaqVisible3] = useState(false)
  const [faqVisible4, setFaqVisible4] = useState(false)
  const [faqVisible5, setFaqVisible5] = useState(false)
  const [faqVisible6, setFaqVisible6] = useState(false)

  function handleFaq() {
    setFaqVisible(!faqVisible)
  }
  function handleFaq2() {
    setFaqVisible2(!faqVisible2)
  }
  function handleFaq3() {
    setFaqVisible3(!faqVisible3)
  }
  function handleFaq4() {
    setFaqVisible4(!faqVisible4)
  }
  function handleFaq5() {
    setFaqVisible5(!faqVisible5)
  }
  function handleFaq6() {
    setFaqVisible6(!faqVisible6)
  }

  return (
    <>
    <div className='mt-50 h-full w-full max-lg:flex max-lg:flex-col' id='Faq'>

      <div className='Parent lg:h- relative w-[100%] h-[1px] '>
        <div className='flex justify-center'>
          <img src={FaqLogo} className='FaqLogo mx-auto absolute top-[-30px]  bg-red-50 p-3 border-1  rounded-full' alt="" />
        </div>
      </div>
      <div className='flex max-lg:flex-col'>
        <div className={`questions max-md:w-90 max-lg:border-[0.5px] border-[#b0b0b079] ${faqVisible ? "max-lg:h-50 max-lg:w-130 h-58 bg-[#243373] transition-all duration-300" : "h-30 bg-transparent transition-all duration-300  max-lg:w-130"} w-150  inline-block p-7 border-0 rounded-2xl  mt-20 mx-auto`}>
          <p className='text-[#C4FF00] max-lg:hidden max-lg:ml-10'>01</p>
          <h2 className='max-md:text-xl max-md:w-70  text-white flex gap-5 text-4xl max-lg:text-2xl max-lg:w-100 mx-auto'>How easy is it to setup xora? <GoPlus onClick={handleFaq} className={`ml-auto text-[30px] rounded-full font-bold text-[#C4FF00] cursor-pointer bg-blue-800 p-1 ${faqVisible ? "rotate-45 transition-all duration-150" : "rotate-360 transition-all duration-150"}`} /></h2>
          <p className={` ${faqVisible ? "flex" : "hidden"} text-[20px]  text-white w-120 max-md:w-70 max-md:text-[14px] opacity-70 mt-5 max-lg:mx-auto max-lg:text-[16px] max-lg:w-100`}>Xora is designed with simplicity in mind. You can get started within minutes without any technical skills — just sign up, follow a few steps, and you’re ready to go!</p>
        </div>
        <div className={`questions max-md:w-90 max-lg:border-1 border-[#b0b0b079] ${faqVisible2 ? "h-58 bg-[#243373] max-lg:h-50 max-lg:w-130 transition-all duration-300" : "h-30 bg-transparent transition-all duration-300 max-lg:w-130"} w-150  inline-block p-7 border-0 rounded-2xl  mt-20 mx-auto`}>
          <p className='text-[#C4FF00] max-lg:hidden max-lg:ml-10'>02</p>
          <h2 className='max-md:text-xl max-md:w-70  text-white flex gap-5 text-4xl max-lg:text-2xl max-lg:w-100 mx-auto w-130'>Can I upgrade my plan? <GoPlus onClick={handleFaq2} className={`ml-auto text-[30px] rounded-full font-bold text-[#C4FF00] cursor-pointer bg-blue-800 p-1 ${faqVisible2 ? "rotate-45 transition-all duration-150" : "rotate-360 transition-all duration-150"}`} /></h2>
          <p className={` ${faqVisible2 ? "flex" : "hidden"} text-[20px]  text-white w-120 max-md:w-70 max-md:text-[14px] opacity-70 mt-5 max-lg:mx-auto max-lg:text-[16px] max-lg:w-100`}>Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.</p>
        </div>
      </div>
      <div className='flex max-lg:flex-col'>
        <div className={`questions max-md:w-90 max-lg:border-1 border-[#b0b0b079] ${faqVisible3 ? "max-lg:h-50 max-lg:w-130 h-58 bg-[#243373] transition-all duration-300" : "h-30 bg-transparent transition-all duration-300  max-lg:w-130"} w-150  inline-block p-7 border-0 rounded-2xl  mt-20 mx-auto`}>
          <p className='text-[#C4FF00] max-lg:hidden max-lg:ml-10'>03</p>
          <h2 className='max-md:text-xl max-md:w-70  text-white flex gap-5 text-4xl max-lg:text-2xl max-lg:w-100 mx-auto'>Do you have corporate plans? <GoPlus onClick={handleFaq3} className={`ml-auto text-[30px] rounded-full font-bold text-[#C4FF00] cursor-pointer bg-blue-800 p-1 ${faqVisible3 ? "rotate-45 transition-all duration-150" : "rotate-360 transition-all duration-150"}`} /></h2>
          <p className={` ${faqVisible3 ? "flex" : "hidden"} text-[20px]  text-white w-120 max-md:w-70 max-md:text-[14px] opacity-70 mt-5 max-lg:mx-auto max-lg:text-[16px] max-lg:w-100`}>Yes, we do! Xora offers flexible corporate plans with added features and dedicated support to fit the unique needs of growing teams and enterprises.</p>
        </div>
        <div className={`questions max-md:w-90 max-lg:border-1 border-[#b0b0b079] ${faqVisible4 ? "h-58 bg-[#243373] max-lg:h-50 max-lg:w-130 transition-all duration-300" : "h-30 bg-transparent transition-all duration-300 max-lg:w-130"} w-150  inline-block p-7 border-0 rounded-2xl  mt-20 mx-auto`}>
          <p className='text-[#C4FF00] max-lg:hidden max-lg:ml-10'>04</p>
          <h2 className='max-md:text-xl max-md:w-70  text-white flex gap-5 text-4xl max-lg:text-2xl max-lg:w-100 mx-auto w-130'>What's the refund policy?<GoPlus onClick={handleFaq4} className={`ml-auto text-[30px] rounded-full font-bold text-[#C4FF00] cursor-pointer bg-blue-800 p-1 ${faqVisible4 ? "rotate-45 transition-all duration-150" : "rotate-360 transition-all duration-150"}`} /></h2>
          <p className={` ${faqVisible4 ? "flex" : "hidden"} text-[20px]  text-white w-120 max-md:w-70 max-md:text-[14px] opacity-70 mt-5 max-lg:mx-auto max-lg:text-[16px] max-lg:w-100`}>We want you to love using Xora. If you’re not satisfied, we offer a full refund within 14 days of your purchase — no questions asked.</p>
        </div>
      </div>
      <div className='flex max-lg:flex-col'>
        <div className={`questions max-md:w-90 max-lg:border-1 border-[#b0b0b079] ${faqVisible5 ? "max-lg:h-50 max-lg:w-130 h-58 bg-[#243373] transition-all duration-300" : "h-30 bg-transparent transition-all duration-300  max-lg:w-130"} w-150  inline-block p-7 border-0 rounded-2xl  mt-20 mx-auto`}>
          <p className='text-[#C4FF00] max-lg:hidden max-lg:ml-10'>05</p>
          <h2 className='max-md:text-xl max-md:w-70  text-white flex gap-5 text-4xl max-lg:text-2xl max-lg:w-100 mx-auto'>How do I invite my team? <GoPlus onClick={handleFaq5} className={`ml-auto text-[30px] rounded-full font-bold text-[#C4FF00] cursor-pointer bg-blue-800 p-1 ${faqVisible5 ? "rotate-45 transition-all duration-150" : "rotate-360 transition-all duration-150"}`} /></h2>
          <p className={` ${faqVisible5 ? "flex" : "hidden"} text-[20px]  text-white w-120 max-md:w-70 max-md:text-[14px] opacity-70 mt-5 max-lg:mx-auto max-lg:text-[16px] max-lg:w-100`}>Inviting your team is simple. Just head to your dashboard, enter their email addresses, and they’ll receive instant invites to join your workspace.</p>
        </div>
        <div className={`questions max-md:w-90 max-lg:border-1 border-[#b0b0b079] ${faqVisible6 ? "h-58 bg-[#243373] max-lg:h-50 max-lg:w-130 transition-all duration-300" : "h-30 bg-transparent transition-all duration-300 max-lg:w-130"} w-150  inline-block p-7 border-0 rounded-2xl  mt-20 mx-auto`}>
          <p className='text-[#C4FF00] max-lg:hidden max-lg:ml-10'>06</p>
          <h2 className='max-md:text-xl max-md:w-70  text-white flex gap-5 text-4xl max-lg:text-2xl max-lg:w-100 mx-auto w-130'> Do you add new content? <GoPlus onClick={handleFaq6} className={`ml-auto text-[30px] rounded-full font-bold text-[#C4FF00] cursor-pointer bg-blue-800 p-1 ${faqVisible6 ? "rotate-45 transition-all duration-150" : "rotate-360 transition-all duration-150"}`} /></h2>
          <p className={` ${faqVisible6 ? "flex" : "hidden"} text-[20px]  text-white w-120 max-md:w-70 max-md:text-[14px] opacity-70 mt-5 max-lg:mx-auto max-lg:text-[16px] max-lg:w-100`}>Definitely! We continuously roll out new features, improvements, and helpful content based on user feedback to make sure Xora always stays ahead.</p>
        </div>
      </div>

      
    </div>
      
      </>
  )
}

export default Faq