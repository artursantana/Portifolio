
import HeaderSocials from './HeaderSocials'

import './Home.scss'
import '../../index.scss'

import Logo from '../../assets/logo.svg'
import ScrollDown from './ScrollDown'


const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Logo} alt="" className='home_img' />
        <h1 className='home_name'>Artur Santana</h1>
        <span className='home_education'>Front-End Developer</span>

        <HeaderSocials />

<a href="#contact" className='btn'>Hire Me</a>

<ScrollDown />
      </div>
    </section>
  )
}

export default Home
