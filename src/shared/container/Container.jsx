
import Header from './header/Header'
import Footer from './footer/Footer'

const Container = ({Children}) => {
  return (
    <div>
        <Header/>
        {Children}
        <Footer top={'top-[260rem]'}/>
    </div>
  )
}

export default Container