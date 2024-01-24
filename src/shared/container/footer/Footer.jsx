import React from 'react'
import linkedin from '../../../assets/linked.png'
import facebook from '../../../assets/facebook.png'
import instagram from '../../../assets/insta.png'
import twitter from '../../../assets/x.png'

const Footer = () => {
  return (
    <div className='absolute top-[220rem] bg-[#99BF18] w-[100%] h-[110px] flex  items-center text-white'>
             <div className='flex flex-row gap-[15rem] items-center'>
        <p className='text-[20.45px] font-Montserrat font-medium text-white items-center pl-4'>Copyright © 2022 Wealthbuddy by Meristem | Privacy Policy</p>
        <div className=' flex flex-row w-[347px] gap-[2rem] items-center '>
            <img className='w-[24.2px] h-[24.2px]' src={facebook} alt="" />
            <img className='w-[24.2px] h-[24.2px]' src={instagram} alt="" />
            <img className='w-[24.2px] h-[24.2px]' src={twitter} alt="" />
            <img className='w-[24.2px] h-[24.2px]' src={linkedin} alt="" />
            <p className='text-[26.97px] font-medium'>Wealthbuddy</p>
        </div>
        </div>
    </div>
  )
}

export default Footer