const Button_2 = ({text,width,texts,height,...props}) =>{


    return (
       <>
        <button {...props} className={`bg-[#99BF18] font-Montserrat rounded-xl ${texts} ${width} ${height} text-white text-center  font-semibold border border-solid border-4 border-[#c6db7e] border-transparent`}>{text}</button>
        </>

    )
}

export default Button_2