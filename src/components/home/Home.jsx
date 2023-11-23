
import HeaderSocials from './HeaderSocials'


import './Home.scss'
import '../../index.scss'

import ScrollDown from './ScrollDown'


const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
         <div>       
          <h1 className='home_name'>Your Next Front-End Developer</h1>
        </div>
        <span className='home_education'>Front-End Developer</span>

        <HeaderSocials />

<a href="#contact" className='btn'>Hire Me</a>

<ScrollDown />
      </div>
    </section>
  )
}

export default Home
