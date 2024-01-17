import React from 'react'
import job from '../../../assets/The Job.png'
import star from '../../../assets/Vector .png'
import image from '../../../assets/image 1.png'

const Section = () => {
  return (
    <div>
        <div className='mt-5 flex justify-center'>
    <img src={job} alt="" />
    </div>
    <div>
    <div>
        <img src={star} alt="" />
        <img src={image} alt="" />
    </div>
    </div>
    </div>
  )
}

export default Section