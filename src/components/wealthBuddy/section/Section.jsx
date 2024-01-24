import React from 'react'
import job from '../../../assets/The Job.png'
import star from '../../../assets/Vector .png'
import image from '../../../assets/Rectangle.png'
import Button from '../../button/Button'



const Section = () => {
  return (
    <>
    <div>
        <div className='mt-5 flex justify-center'>
    <img src={job} alt="" />
    </div>
    <div>
    
        <img className=' relative top-[25rem]'src={star}  alt="" />
        <div className='absolute top-[83rem] left-[9rem] flex '>
        <img  className="w-[615px] h-[683px] shadow-md bg-[#E9E9E9] rounded-3xl"src={image} alt="" />
        <div className='m-[8rem] ml-[4rem] font-Montserrat '>
          <h2 className='text-[35.07px] font-semibold'>About the job...</h2>
          <p className='text-[22.97px] font-medium'>
          As the Wealthbuddy lifestyle ambassador.
          your main responsibility will be to use your unique skills, abilities, or talents to help 
          people make better decisions with their 
          money and switch up their lifestyles.
          
          Salary: N1m monthly (3 months contract)
          Experience: None required
          Age: Just be above 18.
          </p>
          <div className='flex justify-evenly items-center '>
          <Button text={'LEARN MORE'}/>
          </div>
        </div>
    </div>
    </div>
    </div>
    









</>
    
  )
}

export default Section