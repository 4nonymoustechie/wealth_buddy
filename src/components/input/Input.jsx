import React from 'react'
import line from '../../assets/Line 3.png'
const Input = ({label,type,placeholder,detail}) => {





  return (
    <div className='flex flex-col gap-3'>

        <label className='text-[24.12px] font-light block' htmlFor="form">{label}</label>
        <p className='text-[17.12px] leading-[20.72px] w-[696px]'>{detail}</p>
        <input  type={type}  placeholder={placeholder} className='w-[696px] h-[76px] bg-[#f2f2f2] pl-5'/>
        <img className='w-[690px]' src={line} alt="" />
    </div>
  )
}

export default Input