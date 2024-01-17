import logo from '../../assets/logo.svg'
import Hero from './hero/HERO.JSX'
import Section from './section/Section'
const Home = () => {

    return(

        <>
       
        <nav className="flex items-center justify-between font-Montserrat px-[4rem]">

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
        <div>
          <Hero/>
          <Section/>
          </div>
        </>


    )
}
export default Home