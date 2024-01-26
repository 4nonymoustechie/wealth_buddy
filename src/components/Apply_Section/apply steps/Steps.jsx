import React from 'react'
import Button_2 from '../../button/Button_2'

const Steps = () => {
  return (
    <div>
        
        <div className='flex flex-row  text-[58.77px] justify-between gap-5 text-[#99BF18] font-bold'>
            <div>Step1
                <div className='w-[581px] h-[777.94px] shadow-lg font-normal text-[25.97px] leading-[46.46px] mt-[3rem] rounded-3xl'>
                    <p className='w-[485.75px] p-[1.5rem] text-black'>
                    Create a video application (in 60 seconds or less) and post it to your social media page (Instagram, Facebook, Instagram, LinkedIn, TikTok) using the hashtags #Switchupyourlifestyle and #NaijasHottestJob.
                     In an entertaining and engaging way, tell us why you’re the best person for the job and demonstrate your knowledge of the Wealthbuddy app.
                     Don’t forget to tag us in your video. 
                     Our social media handles are at the bottom of this page.
                        
                    </p>
                </div>
            </div>
            <div >
                Step2
                <div className='w-[581px] h-[196.35px] shadow-lg mt-5 rounded-3xl  text-black '>
                   <p className='p-[1.5rem] leading-[46.46px] w-[485.75] h-[140px] text-[25.97px] font-normal'>If you don’t already have one, open a Wealthbuddy account. You can do so here. </p>
                </div>
                
                <div>Step3


                    <div className='w-[581px] h-[100.5px] text-black rounded-3xl shadow-lg mt-5'>
                        <p className='p-[1.5rem] leading-[46.46px] text-[25.97px] font-normal'>Fill out a brief application form. That’s it!</p>
                    </div>
                </div>
                <p className='w-[568.79px] h-[326px] leading-[46.46px] text-[25.97px] text-black font-normal mt-10 '>
                Twenty candidates will be shortlisted.
                The top 5 will be selected via a voting process on our website – 
                so make sure you encourage all your friends and family 
                to vote if you get shortlisted.
                The top 5 will be interviewed and the successful candidate will be announced.
                </p>
                <div>
                  </div>
                </div>
                
        </div>
      <div  className='mt-10'>
        <Button_2      text={"SELECTION CRITERIA"}  texts={"text-[31.97px]"} width={"w-[398px]"}  height={"h-[88px]"}     />
            
            <div className='w-[1166px] h-[401px] text-[31.97px] mt-5'>
            <p>
                   We’re looking for someone with an adventurous attitude, 
                   an interesting personality and good communication skills. 
                   Wealthbuddy by Meristem will be selecting applicants based on:
            </p>

               <div>
                    <p> - Enthusiasm for the role</p> 
                    <p> - Entertainment value (personality and creativity)</p>
                    <p>- Presentation skills (being media-friendly) </p>
               </div>
               </div>
       
       
        </div>
        </div>
  )
}

export default Steps