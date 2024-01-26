
import React from 'react'
import Button_2 from '../button/Button_2'
import Steps from './apply steps/Steps'
import Employer from './apply steps/Employer'

const Apply = () => {
  return (
    <div>
       
       <Button_2 text={'HOW TO APPLY'} width={'w-[322px]'} height={'h-[88px]'} texts={'text-[31.97px]'}/>
      
      <div>
        <h4 className='text-[50.35px]'>Want Naija’s hottest job? </h4>
        <div className='w-[1166]'>
        <p className='text-[31.97px] leading-[57.2px] font-normal'>
        If you enjoy connecting and engaging with new people on digital platforms 
        and you can spare 3 months to help people grow their money, you already stand 
        a good chance. It’s easy to apply.
        </p>
        </div>
        <div>

        </div>
      </div>
        <Steps/>
        <Employer/>
    </div>
  )
}

export default Apply