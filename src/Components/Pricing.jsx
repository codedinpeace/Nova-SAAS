import React from 'react'
import lines from '../../assets/images/bg-outlines.svg'
import { useState } from 'react'
import CountUp from 'react-countup';
import PLan1 from '../../assets/images/plan-1.png'
import PLan2 from '../../assets/images/plan-2.png'
import PLan3 from '../../assets/images/plan-3.png'
import check from '../../assets/images/check.png'
import zap from '../../assets/images/zap.svg'


const Pricing = () => {

    const [plan, setPlan] = useState(true)
    const [price1, setPrice1] = useState(true)

    function handlePlan() {
        setPlan(p => !p)
    }




    return (
        <div className=' mt-50  pricing ' id='Pricing'>
            <div className=' text-5xl text-white flex justify-center leading-14' >
                <h1 className=' bottom-0  mx-auto max-md:text-3xl max-md:w-80 w-120 pl-9 font-bold'>Flexible pricing for teams of all sizes</h1>

            </div>
            <div onClick={handlePlan} className='cursor-pointer relative slider-parent Pricing-slider flex justify-start px-5 mx-auto mt-15 border-0 rounded-full max-md:w-[350px] w-[350px] h-[107px] bg-red-50'>
                <div className='flex justify-end'>
                    <div className={`${plan ? "translate-x-0" : "translate-x-[150px]"} relative z-10 transition-all duration-500 flex slider-switch w-[163px] h-[84px] my-auto rounded-4xl  bg-red-500`}>
                        <h1 className={`${plan ? "translate-x-0" : "translate-x-0"} mr-auto text-center mx-auto my-auto text-xl font-medium text-white transition-all duration-100`}>{`${plan ? "MONTHLY" : "ANNUAL"}`}</h1>
                    </div>

                </div>

            </div>
            <div className='flex justify-center mt-30 relative border-0 flex-wrap max-xl:flex-col max-xl:gap-10 max-xl:mx-auto rounded-4xl'>
                <div className='price-1 w-[443px] h-[682px] max-xl:w-[400px] max-md:w-[350px] max-xl:h-[700px] max-xl:mx-auto mt-15 bg-red-500 border-0 rounded-4xl '>
                    <img src={PLan1} alt="" className='w-20 max-xl:mx-auto ml-33' />
                    <span className='flex'>

                        <p className='PlanPara ml-36 mt-7 border-2  max-xl:mx-auto p-2 rounded-full'>CORE</p>
                    </span>
                    <span className='flex Price1'>
                        <h1 className=' ml-20 mt-6 text-5xl text-white font-bold max-xl:mx-auto'>$<CountUp
                            start={`${plan ? "12" : "19"}`}

                            end={`${plan ? "19" : "12"}`}
                            useEasing={false}
                            duration={0.4}
                        />/mo</h1>
                    </span>
                    <span className='flex'>
                        <p className='text-white ml-23 mt-5 max-xl:mx-auto'>Best for solo creators</p>
                    </span>
                    <span className='flex'>
                        <ul className='flex justify-center gap-5 ml-8 max-xl:ml-20 mt-10'>
                            <img src={check} className='w-10' alt="" />
                            <p className='text-white mt-2'>100MB Cloud storage</p>
                        </ul>
                    </span>
                    <span className='flex'>
                        <ul className='flex justify-center gap-5 ml-8 max-xl:ml-20 mt-7'>
                            <img src={check} className='w-10' alt="" />
                            <p className='text-white mt-2'>100+ prompt templates</p>
                        </ul>
                    </span>
                    <span className='flex'>
                        <ul className='flex justify-center gap-5 ml-8 max-xl:ml-20 mt-7'>
                            <img src={check} className='w-10' alt="" />
                            <p className='text-white mt-2'>5 projects</p>
                        </ul>
                    </span>
                    <span className='flex'>
                        <ul className='flex justify-center gap-5 ml-8  max-xl:ml-20 mt-7'>
                            <img src={check} className='w-10' alt="" />
                            <p className='text-white mt-2'>24/7 support</p>
                        </ul>
                    </span>
                    <button className=' ml-8 text CTA flex mt-10 text-[16px] max-xl:ml-20 max-md:w-50 w-55 border-1 border-white     rounded-3xl h-15 max-sm:text-[16px] max-sm:rounded-2xl cursor-pointer'><img src={zap} alt="" /><p className='mt-4  pl-2 font-medium'>GET STARTED</p></button>

                </div>

                <div className='max-lg:mt-15 price-2 max-xl:mx-auto max-xl:h-[750px] max-md:w-[350px] max-xl:w-[400px] w-[443px] h-[782px]  z-10 bg-red-200 xl:absolute border-0 rounded-4xl'>

                    <div className='w-[443px] h-[334px] max-xl:w-[400px] max-md:w-[350px] bg-blue-500 border-0 rounded-4xl'>
                        <img src={PLan2} alt="" className='w-20 mx-auto ' />
                        <span className='flex'>

                            <p className='PlanPara2 mx-auto mt-7 border-2 p-2 rounded-full'>OVERDRIVE
                            </p>
                        </span>
                        <span className=' flex'>
                            <h1 className='Price mx-auto mt-6 text-5xl text-white font-bold'>$<CountUp
                                start={`${plan ? "59" : "79"}`}

                                end={`${plan ? "79" : "59"}`}
                                useEasing={false}
                                duration={0.4}
                            />/mo</h1>
                        </span>
                        <span className=''>
                            <span className='flex'>
                                <p className='text-white mx-auto mt-10 most-popular'>Most Popular</p>
                            </span>
                            <span className='flex'>
                                <ul className='flex justify-center gap-5 ml-20 mt-20'>
                                    <img src={check} className='w-10' alt="" />
                                    <p className='text-white mt-2'>All Starter features</p>
                                </ul>
                            </span>
                            <span className='flex'>
                                <ul className='flex justify-center gap-5 ml-20 mt-7'>
                                    <img src={check} className='w-10' alt="" />
                                    <p className='text-white mt-2'>1TB additional storage</p>
                                </ul>
                            </span>
                            <span className='flex'>
                                <ul className='flex justify-center gap-5 ml-20 mt-7'>
                                    <img src={check} className='w-10' alt="" />
                                    <p className='text-white mt-2'>Unlimited projects</p>
                                </ul>
                            </span>
                            <span className='flex'>
                                <ul className='flex justify-center gap-5 ml-20 mt-7'>
                                    <img src={check} className='w-10' alt="" />
                                    <p className='text-white mt-2'>Analytics</p>
                                </ul>
                            </span>
                            <button className=' ml-20 text CTA flex mt-10 text-[16px] w-55 max-md:w-45 border-1 border-white     rounded-3xl h-15 max-sm:text-[16px] max-sm:rounded-2xl cursor-pointer'><img src={zap} alt="" /><p className='mt-4  pl-2 font-medium'>GET STARTED</p></button>
                        </span>
                    </div>
                </div>
                <div className=' price-3 max-md:w-[350px] max-xl:mx-auto max-xl:w-[400px] max-lg:h-[700px] w-[643px] h-[682px] mt-15 bg-red-900 border-0 rounded-4xl '>
                    <img src={PLan3} alt="" className='w-20 ml-auto mr-35 max-xl:mx-auto  ' />
                    <span className='flex'>
                        <p className='PlanPara ml-auto mr-36 mt-7 border-2 p-2 rounded-full max-xl:mx-auto'>TEAM</p>
                    </span>
                    <span className='flex'>
                        <h1 className='Price3    mr-20 ml-auto mt-6 text-5xl text-white font-bold max-xl:mx-auto'>$<CountUp
                            start={`${plan ? "29" : "39"}`}

                            end={`${plan ? "39" : "29"}`}
                            useEasing={false}
                            duration={0.4}
                        />/mo</h1>
                    </span>
                    <span className='flex'>
                        <p className='text-white ml-auto mr-30 mt-5 max-xl:mx-auto'>Best for teams</p>
                    </span>
                    <span className='flex'>
                        <ul className='flex justify-center gap-5 ml-90 max-xl:mx-auto mt-10'>
                            <img src={check} className='w-10' alt="" />
                            <p className='text-white mt-2 max-lg:mx-auto max-xl:mr-2'>All Overdrive features</p>
                        </ul>
                    </span>
                    <span className='flex'>
                        <ul className='flex justify-center gap-5 ml-90 max-xl:mx-auto mt-7'>
                            <img src={check} className='w-10' alt="" />
                            <p className='text-white mt-2 max-xl:mr-5'>50% off per member</p>
                        </ul>
                    </span>
                    <span className='flex'>
                        <ul className='flex justify-center gap-5 ml-90 max-xl:mx-auto mt-7'>
                            <img src={check} className='w-10' alt="" />
                            <p className='text-white mt-2'>Real-time collaboration</p>
                        </ul>
                    </span>
                    <span className='flex'>
                        <ul className='flex justify-center gap-5 ml-90 max-xl:mx-auto mt-7'>
                            <img src={check} className='w-10' alt="" />
                            <p className='text-white mt-2 '>10GB additional storage</p>
                        </ul>
                    </span>
                    <button className=' ml-90 text CTA flex mt-10 text-[16px] max-xl:mx-auto max-md:w-45 w-55 border-1 border-white     rounded-3xl h-15 max-sm:text-[16px] max-sm:rounded-2xl cursor-pointer'><img src={zap} alt="" /><p className='mt-4  pl-2 font-medium'>GET STARTED</p></button>
                </div>
            </div>
        </div>
    )
}

export default Pricing