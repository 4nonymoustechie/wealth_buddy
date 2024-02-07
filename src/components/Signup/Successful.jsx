import React from 'react'
import icons from '../../assets/icon.png'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

const Successful = () => {
  return (
    <div className='h-[205rem] w-[100%] bg-black bg-opacity-30 absolute top-[0rem] flex justify-center'>
    <div className='h-[691px] w-[891px] bg-white mt-[140rem] flex items-center flex-col rounded-3xl'>
     
     
        <img className='w-[191px] h-[191px] mt-7' src={icons} alt="" />

        <h1 className='text-[108.66px]'>Awesome!</h1>

        <p className='text-[32.54px] text-center'>We will keep you posted via your
                  email address so you can track the
                  progress of your delivery.</p>

                  <div className='mt-4'>
                  
                  <Link to={"/"}><Button width={"w-[392px]"} text={'BACK HOME'} texts={'text-[34.97px]'}/></Link>
        </div>              
    </div>
    </div>
  )
}

export default Successful