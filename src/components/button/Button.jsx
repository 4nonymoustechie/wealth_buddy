import arrow from '../../assets/arrow.png'
const Button = ({text,...props}) =>{


    return (
       <>
        <img  className ="absolute ml-[18rem]"src={arrow} alt="" />
        <button {...props} className="bg-[#99BF18] font-Montserrat rounded-xl text-[34.97px] w-[384px] h-[84px] text-white text-center pr-10 font-semibold">{text}</button>
        </>

    )
}

export default Button