import arrow from '../../assets/arrow.png'
const Button = ({text,width,texts,...props}) =>{


    return (
       <>
       <div className='flex items-center justify-between'>
        <img  className ="absolute ml-[19rem]"src={arrow} alt="" />
        <button {...props} className={`bg-[#99BF18] font-Montserrat rounded-xl ${texts} ${width} h-[84px] text-white text-center pr-[3.5rem] font-semibold`}>{text}</button>
        </div>
        </>

    )
}

export default Button