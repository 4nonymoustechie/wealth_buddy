import React from 'react'
import plus from '../../assets/plus.png'

const Questions = ({text}) => {
  return (
    <div>

<div className="w-[1282px]  mx-[3rem] px-6 bg-white shadow-md  mt-5  rounded-md">

<div className="flex flex-end items-center justify-between pt-[2rem]">
    <p className="text-[37.77px] font-medium">{text}</p>
     <img src={plus} alt="" />

</div>



</div>
    </div>
  )
}

export default Questions