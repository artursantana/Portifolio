import Logo from '../../assets/logo.png'

import AboutBox from './AboutBox'

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
                        Web Developer from Portugal, I have many projects with a lot tools how REACT.JS and TYPESCRIPT
                    </p>
                    <a href="#" className='btn'> Download CV</a>
                </div>

                    <div className="about_skills grid">
                        <div className="skills_data">
                            <div className='skills_titles'>
                                <h3 className='skills_name'>Development
                                </h3>
                                <span className='skills_number'>90%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage development"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className='skills_titles'>
                                <h3 className='skills_name'>UI/UX design
                                </h3>
                                <span className='skills_number'>80%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage ui_design"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className='skills_titles'>
                                <h3 className='skills_name'>Photografy
                                </h3>
                                <span className='skills_number'>60%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage photography"></span>
                            </div>
                        </div>

                    </div>

            </div>
        </div>

        <AboutBox />
    </section>
  )
}

export default About
