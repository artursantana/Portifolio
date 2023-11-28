
import HeaderSocials from './HeaderSocials'


import './Home.scss'
import '../../index.scss'

import ScrollDown from './ScrollDown'


const Home = () => {
  return (
    <section className="home container" id="home">
      
      <div className="intro">
               
          <div className='home_div'>
            Your Next
          </div>
          
            <div className='home_div1'>Front-End dev</div>

        <HeaderSocials />

<a href="#contact" className='btn'>Hire Me</a>

<ScrollDown />
      </div>
    </section>
  )
}

export default Home
