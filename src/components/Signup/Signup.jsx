import Container from '../../shared/container/Container'
import React from 'react'
import { Link } from 'react-router-dom'
import lady from '../../assets/lady.png'
import shape_1 from '../../assets/Rectangle1.png'
import Signing from './Signing'

const Signup = () => {
    return (
        <div>
            <Link to={"signup"}>

                <Container />
 
                
                <div className='flex flex-row px-40 mt-[10rem]'>
                    <div className='flex flex-col gap-[4rem]'>
                        <h1 className='text-[203.08px] leading-[145.43px] w-[616px] h-[291px] font-bold'>
                            Thank you..
                        </h1>
                        <p className='text-[34.77px] leading-[47.51px] w-[604px] h-[204px]'>
                        for your interest in becoming the Wealthbuddy Lifestyle Ambassador. 
                        We can’t wait to receive your application 
                        and eventually have you on board!
                        </p>
                    </div>

                    <div className='mt-[11rem] flex justify-center items-center'>
                      
                      <div className='relative w-[484px] h-[771px] '><img src={shape_1}alt="" /></div>

                        <div className='w-[565px]  absolute top-[2.5rem] overflow-hidden'><img src={lady}alt="" /></div>

                    </div>


                </div>

                <div className=' flex justify-center items-center w-[1262px] h-[419px] bg-white shadow-lg rounded-3xl px-10 mx-10'>
                    
                    <p className='text-[31.97px] font-light leading-[57.2px]'>To complete this application form, you’ll require the following:
                   
                    1. A link to your 60 seconds video application (posted to your social media page), telling us why you’re the best person for the job and demonstrating your knowledge of the Wealthbuddy app. 
                    2. You’ll need to open a Wealthbuddy account. If you haven’t signed up to Wealthbuddy yet, click here to do so.
                    </p>
                </div>

              <Signing/>




            </Link>


        </div>
    )
}

export default Signup