
import Header from './header/Header'
import Footer from './footer/Footer'

const Container = ({Children}) => {
  return (
    <div>
        <Header/>
        {Children}
        <Footer/>
    </div>
  )
}

export default Container