import React, { useState } from 'react'
import Input from '../input/input'
// import Details from '../../shared/Details'
import shape from '../../assets/Rectangle2.png'
import guy from '../../assets/guy.png'
import Button from '../button/Button'
import Successful from './Successful'

const Signing = () => {

    const [modal,setModal] = useState(false)

    const handleUseModal =  () => {

         setModal(!modal)
    }
    
  return (
    <div>
         <div className='flex flex-row mt-10 mx-10 gap-8'>
        <div className=' '>
            <div>
                <Input label={"First Name"} placeholder={"Enter here"} type={"text"}/>
            </div>
            <div>
                <Input label={"Surname"} placeholder={"Enter here"} type={"text"}/>
            </div>
            <div>
                <Input label={"City / Town"} placeholder={"Enter here"} type={"text"}/>
            </div>
            <div>
                <Input label={"State / Province"} placeholder={"Enter here"} type={"text"}/>
            </div>
            <div>
            
                <Input label={"Email address"} detail={"(Tooltip: Enter the email address you used to sign up for Wealthbuddy)"} placeholder={"Enter here"} type={"text"}/>
            </div>
            <div>
                <Input label={"Link to your Video"} detail={"(Tooltip: Enter the link to your 60 seconds video application posted on your Instagram, Facebook, Twitter, LinkedIn or TikTok page. It is fine if you have posted on multiple platforms. Just enter the video link on your most active account here.)"} placeholder={"Enter here"} type={"text"}/>
            </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className=' relative w-[484px] h-[771px]'><img src={shape} alt="" /></div>

                <div className='absolute top-[92.8rem]  w-[651px] h-10'><img src={guy} alt="" /></div>
            </div>

            
       
        </div>

       
       
       
        <div className='px-10 mt-14'>
                <p className="text-[24.12px] leading-[24.9px] w-[696px]">
                Are you aware of any circumstances which might adversely 
                affect your employment for the period of 3 months in the position?
                </p>
                        <div className='flex flex-row items-center gap-5 mt-5'>
                            <label htmlFor="radio">NO</label>
                            <input id='click' type="radio" value="num" className='bg-[#99BF18] w-[23px] h-[23px]' />
                            <label htmlFor="radio">YES</label>
                            <input id='click' type="radio" value="num" className='bg-[#99BF18] w-[23px] h-[23px]' />
                        
                        </div>
                        <p className='text-[24.12px] leading-[24.9px] w-[696px]'>Do you have a criminal record?</p>
                        <div className='flex flex-row items-center gap-5 mt-5'>
                            <label htmlFor="radio">NO</label>
                            <input id='click' type="radio" value="num" className='bg-[#99BF18] w-[23px] h-[23px]' />
                            <label htmlFor="radio">YES</label>
                            <input id='click' type="radio" value="num" className='bg-[#99BF18] w-[23px] h-[23px]' />      
                        </div>
                        <div className='flex flex-row items-center gap-5 mt-5'>
                            <label className='text-[24.12px]' htmlFor="radio">I agree to the terms & conditions of this application</label>
                            <input id='click' type="radio" value="num" className='bg-[#99BF18] w-[23px] h-[23px]' />                       
                        </div>
                        
                        
            </div>
            <div className='' onSubmit={handleUseModal}>
                        {
                            modal ?
                            (
                                
                                <Button onClick={handleUseModal} text={"SUBMIT"} width={"w-[371px]"} texts={"text-[34.97px]"}/>     &&        <Successful/> 
                            )
                            : (
                                <div className='mx-5'>                                <Button onClick={handleUseModal} text={"SUBMIT"} width={"w-[371px]"} texts={"text-[34.97px]"}/></div>
                            )
                        }
                        </div>
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        {/* <Details.map((detail,i =>)(<Input key={i}/> ...detail))/> */}

        

        

    </div>
  )
}

export default Signing