import Container from '../../../shared/container/Container'
import React from 'react'
import { Link } from 'react-router-dom'
//import laptop from '../../../assets/image 1.png'
import Button from '../../button/Button'
import star from '../../../assets/Vector .png'
import job from '../../../assets/The Job.png'
import image from '../../../assets/Rectangle.png'
import Button_2 from '../../button/Button_2'
import Apply from '../../Apply_Section/Apply'

const Job = () => {
    return (
        <div>
            <Link to={'/job'}>
                <Container />
                <div>

                    <div  className='px-[9.5rem]'>
                    <div className='absolute top-[35rem] left-[1.5rem]'>
                        <img src={star} alt="" />
                        </div>
                      <div className='relative  flex gap-[3rem]'>
                    
                        <img className='bg-[#E9E9E9] rounded-3xl' src={image} alt="" />

                        <p className='text-[97.88px] font-black w-[341px] leading-[96px] mt-[8rem]'>About the Job</p>
                        
                      </div>
                   <div className='mt-[10rem]'>
                       
                      <Button_2 text={'MAIN RESPONSIBILITIES'} width={'w-[453px]'} texts={"text-[31.97px]"} height={'h-[88px]'}/>
                     
                     <div className='text-[31.97px] w-[1166px] h-[458px] leading-[57.2px]'>
                        <h3>Employment responsibilities will include the following:</h3>
                             <p>1.Providing weekly updates via social media/blog.</p>
                             <p>2.Represent Wealthbuddy by Meristem at various functions.</p>
                             <p>3.Be a true Wealthbuddy ‘Ambassador’ and participate in media interviews as required.</p>
                             <p>4.Act responsibly always and in accordance with the reasonable directions of Wealthbuddy Management.</p>                    
         </div>
</div>
                  <Apply/>
                    </div>


                        

                </div>
            </Link>
        </div>
    )
}

export default Job