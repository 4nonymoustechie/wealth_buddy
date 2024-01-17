import React from 'react'

import people from '../../../assets/people.png'
import star from '../../../assets/Vector .png'
import ambassador from '../../../assets/Ambassador.png'


const Hero = () => {
  return (
    <>
    <div className='font-Montserrat  px-[6rem]'>

        <div className=' relative'>
          <div className=" flex flex-row font-bold text-[203.08px] leading-[145.43px] w-[591px] h[291px] text-left">
        <p className=''>Be the next</p>
        <img className= "w-[393px] h-[357.72px] mt-[9rem]"src={star} alt="" />
        </div>
        <div className='absolute w-[1085px] h-[868px] top-[8rem] left-[10rem]'>
        <img className=""src={people} alt="people" />
        <div className='absolute bg-white rounded-lg top-[33rem] left-[21.8rem] w-[603px] h-[118.97px] text-[82.75px] shadow-lg flex flex-row justify-between'>
        <p>Wealthbuddy</p>
        </div>
        <div className='w-[1000px] absolute top-[40rem] left-[3rem]'>
            <img src={ambassador} alt="" />
        </div>
        </div>
        <div className='w-[260px]'> 
            <p className='text-[32.42px]  text-left ml-3'>
            Naija's hottest 
            job with N1m 
            monthly salary.
            </p>
        </div>
        </div> 
        </div>
        <div className='mr[5rem]'>
        <img className= "w-[393px] h-[357.72px] "src={star} alt="" />
        </div>
       
   
    </>
  )
}

export default Hero