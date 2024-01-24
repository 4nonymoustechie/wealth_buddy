import React from 'react'
import logo from '../../../assets/logo.svg'

const Header = () => {
  return (
        <nav className="flex items-center justify-between font-Montserrat px-[4rem] relative ">

<div className='w-[351px] h-[107px]'>
    <img className='' src={logo} alt="" />

</div>

    <div className='flex flex-row gap-7 text-[16.03px] font-normal'>
    <p>HOME</p>
    <p>VOTE</p>

    <div>
        <button>CONTACT US</button>
    </div>
    </div>

</nav>
  )
}

export default Header