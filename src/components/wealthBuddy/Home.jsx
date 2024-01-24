import logo from '../../assets/logo.svg'
import Container from '../../shared/container/Container'
import Profile from '../profile_button/Profile'
import Hero from './hero/HERO.JSX'
import Section from './section/Section'
import Section_2 from './section/Section_2'
const Home = () => {

    return(

        <>
       
       <Container/>
        <div>
          <Hero/>
          <Section/>
          <Section_2/>
          <Profile/>
          </div>
        </>


    )
}
export default Home