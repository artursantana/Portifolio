
import HeaderSocials from './HeaderSocials'


import './Home.scss'
import '../../index.scss'

import ScrollDown from './ScrollDown'


const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
         <div className='home_name'>       
          <div className='home_div'>
            Your Next
          </div>
            <div className='home_div1'>Front-End Developer</div>
        </div>
        <span className='home_education'></span>

        <HeaderSocials />

<a href="#contact" className='btn'>Hire Me</a>

<ScrollDown />
      </div>
    </section>
  )
}

export default Home
