import laptop from '../../../assets/image 1.png'
import Button from '../../button/Button'

const Section_2 = () => {
  return (
    <div>
        <div className='flex flex-row mt-[30rem] justify-evenly '>
      <div className='px-[10rem]'>
        <h3 className='text-[35.07px] font-semibold '>
        About Wealthbuddy
        </h3>
        <p className='text-[22.97px] font-normal w-[615px]'>
        Wealthbuddy by Meristem is a savings and investment app that helps conveniently save money, grow money, and pay bills.   
        Everybody has a desired lifestyle they’d love to live. At Wealthbuddy, our goal is to help you grow your money so you can consistently live the life you’ve always dreamed of. Wealthbuddy is the app that helps you switch up your lifestyle.
        The Wealthbuddy app has many savings and investment plans to choose from.
 
        </p>
        <div className='flex justify-evenly items-center mr-[15rem] mt-[1rem] '>
        <Button text={'READ MORE'}/>
        </div>
      </div>
      <div className='w-[904px] h-[686px]'>
        <img src={laptop} alt="" />
      </div>


    </div>
    <div className='flex flex-row justify-between items-center px-[10rem] gap-20'>
      <h3 className='text-[35.07px] font-semibold'>Featured Applicants</h3>
      <div className='flex justify-evenly items-center  '>
      <Button  text={'VIEW ALL'} width={'w-[384px]'} texts={'text-[34.97px]'}/>
      </div>
    </div>
    </div>
  )
}

export default Section_2