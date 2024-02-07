import React from 'react'
import Button_2 from '../../button/Button_2'
import Button from '../../button/Button'
import { Link } from 'react-router-dom'

const Employer = () => {
  return (
    <div>
        <div className='mt-5'>
            <Button_2    text={"EMPLOYER"} texts={"text-[31.97px]"} width={"w-[246px]"} height={"h-[88px]"}/>
        
        <div className='w-[1190px] text-[31.97px] leading[57.2px] mt-5'>
            <p>
            Meristem is a capital market conglomerate, that provides a plethora of distinct
             financial services through a range of products in wealth management, 
             stockbroking, financial advisory, trusteeship, registrars 
             and probate management services, investment banking, lease, and loans. 
             With these offerings we have continued to fulfil our promise of wealth creation,
             preservation and transfer for all clients.

            </p>

            <p className='mt-7'>
            For over 19 years, we have innovated, grown and attained the status 
            of the preferred financial services provider for individuals, 
            and corporations in Nigeria and across the world, through a rich history
            of excellent customer service, demonstrated financial services expertise,
            combined with an enviable workplace culture of thoroughbred professionals. 
            This has kept us true to our founding promise “Let’s grow wealth for you”
            </p>
        </div>
        <div className='flex item-center ml-[50 rem]'>
          <Link to={"signup"}>
        <Button text={'APPLY NOW'}  width={'w-[384px]'} texts={"text-[34.97px]"} />
        </Link>
        </div>
        </div>
    </div>
  )
}

export default Employer