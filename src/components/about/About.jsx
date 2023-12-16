import Logo from '../../assets/logo.png'


import '../../index.scss'
import './About.scss'

const About = () => {
  return (
    <section name='About' className="about container section">
       
        <div className="about_container grid">
        <h2 className="section_title">About Me</h2>

            <img src={Logo} alt="" className='about_img' />

            <div className="about_data grid">
                <div className="about_info">
                    <p className="about_description">
                        As a Front End Developer , I have many projects with a lot tools how REACT.JS and TYPESCRIPT
                    </p>
                    <a href="#" className='btn'> Download CV</a>
                </div>

            </div>
        </div>

    </section>
  )
}

export default About
