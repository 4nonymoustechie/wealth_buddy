import React from 'react'
import Input from '../input/input'
// import Details from '../../shared/Details'
import shape from '../../assets/Rectangle2.png'
import guy from '../../assets/guy.png'

const Signing = () => {
    
  return (
    <div>
         <div className='flex flex-row mt-10 mx-10'>
        <div className=' '>
            <div>
                <Input label={"First Name"} placeholder={"Enter here"} type={"text"}/>
            </div>
            <div>
                <Input label={"First Name"} placeholder={"Enter here"} type={"text"}/>
            </div>
            <div>
                <Input label={"First Name"} placeholder={"Enter here"} type={"text"}/>
            </div>
            <div>
                <Input label={"First Name"} placeholder={"Enter here"} type={"text"}/>
            </div>
            <div>
            
                <Input label={"First Name"} detail={"(Tooltip: Enter the email address you used to sign up for Wealthbuddy)"} placeholder={"Enter here"} type={"text"}/>
            </div>
            <div>
                <Input label={"First Name"} detail={"(Tooltip: Enter the link to your 60 seconds video application posted on your Instagram, Facebook, Twitter, LinkedIn or TikTok page. It is fine if you have posted on multiple platforms. Just enter the video link on your most active account here.)"} placeholder={"Enter here"} type={"text"}/>
            </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className=' relative w-[484px] h-[771px]'><img src={shape} alt="" /></div>

                <div className='absolute top-[86.3rem]  w-[651px] h-10'><img src={guy} alt="" /></div>
            </div>
       
        </div>

       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        {/* <Details.map((detail,i =>)(<Input key={i}/> ...detail))/> */}

        

        

    </div>
  )
}

export default Signing