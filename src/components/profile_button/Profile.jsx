import eclipes_1 from '../../assets/Ellipse 78.png'
import eclipes_2 from '../../assets/Ellipse 79.png'
import eclipes_3 from '../../assets/Ellipse 81.png'
import eclipes_4 from '../../assets/Ellipse 82.png'
import eclipes_5 from '../../assets/Ellipse 84.png'

const Profile = () => {



    return(
       
        <div className="">
            <marquee >
              <div className='grid grid-cols-3 grid-rows-3 gap-[2rem]'>
            <div className='flex flex-row items-center px-[8rem] justify-between bg-white w-[500px] h-[158.12px] shadow-lg rounded-xl'>
              <img className="w-[108.87px] h-[108.87px]" src={eclipes_1} alt="" />
              <button className='bg-[#99BF18]'>view</button>
            </div>
            <div className='flex flex-row items-center px-[8rem] justify-between bg-white w-[500px] h-[158.12px] shadow-lg rounded-xl'>
              <img className="w-[108.87px] h-[108.87px]" src={eclipes_2} alt="" />
              <button className='bg-[#99BF18]'>view</button>
            </div>
            <div className='flex flex-row items-center px-[8rem] justify-between bg-white w-[500px] h-[158.12px] shadow-lg rounded-xl'>
              <img className="w-[108.87px] h-[108.87px]" src={eclipes_3} alt="" />
              <div className='flex flex-col'>
              <p>ibrea@mail.com</p>
              <p>ibra</p>
                </div>
              <button className='bg-[#99BF18]'>view</button>
            </div>
            <div className='flex flex-row items-center px-[8rem] justify-between bg-white w-[500px] h-[158.12px] shadow-lg rounded-xl'>
              <img className="w-[108.87px] h-[108.87px]" src={eclipes_4} alt="" />
              <button className='bg-[#99BF18]'>view</button>
            </div>
            <div className='flex flex-row items-center px-[8rem] justify-between bg-white w-[500px] h-[158.12px] shadow-lg rounded-xl'>
              <img className="w-[108.87px] h-[108.87px]" src={eclipes_5} alt="" />
              <button className='bg-[#99BF18]'>view</button>
            </div>
            <div className='flex flex-row items-center px-[8rem] justify-between bg-white w-[500px] h-[158.12px] shadow-lg rounded-xl'>
              <img className="w-[108.87px] h-[108.87px]" src={eclipes_5} alt="" />
              <button className='bg-[#99BF18]'>view</button>
            </div>
            </div>
            </marquee>
        </div>
        

    )
}
export default Profile