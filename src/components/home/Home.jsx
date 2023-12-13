
import HeaderSocials from './HeaderSocials'


import './Home.scss'
import '../../index.scss'

import ScrollDown from './ScrollDown'


const Home = () => {
  return (
    <section name='Home' className="home container" id="home">
      
      <div className="intro">
               
          <div className='home_div'>
            Your Next
          </div>
          
            <div className='home_div1'>Front-End</div>

        <HeaderSocials />

<a href="#contact" className='btn'>Hire Me</a>

<ScrollDown />
      </div>
    </section>
  )
}

export default Home
