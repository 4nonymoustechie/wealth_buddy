import arrow from '../../assets/arrow.png'
const Button = ({text,width,texts,...props}) =>{


    return (
       <>
       <div className='flex items-center'>
        <img  className ="absolute ml-[18rem]"src={arrow} alt="" />
        <button {...props} className={`bg-[#99BF18] font-Montserrat rounded-xl ${texts} ${width} h-[84px] text-white text-center pr-10 font-semibold`}>{text}</button>
        </div>
        </>

    )
}

export default Button