

import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AboutBox = () => {
  return (
    <div className="about_boxes grid">
        <div className="about_box">
            
            <div className="about_box">
            <FontAwesomeIcon icon={faGithub} />
                <h3 className="about_title">198</h3>
                <span className="about_subtitle">Project complete</span>
            </div>
        </div>

        <div className="about_box">
            
            <div className="about_box">
            <FontAwesomeIcon icon={faLinkedin} />
                <h3 className="about_title">5670</h3>
                <span className="about_subtitle">Cup of coffe</span>
            </div>
        </div>

        <div className="about_box">
            
            <div className="about_box">
            <FontAwesomeIcon icon={faInstagram} />
                <h3 className="about_title">5670</h3>
                <span className="about_subtitle">Cup of coffe</span>
            </div>
        </div>



    </div>
  )
}

export default AboutBox
