

import { faCode  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutBox = () => {
  return (
    <div className="about_boxes grid">
        <div className="about_box">
            
            <div>
            <FontAwesomeIcon icon={faCode} />
                <h3 className="about_title">198</h3>
                <span className="about_subtitle">Project complete</span>
            </div>
        </div>

        <div className="about_box">
            
            <div>
            <FontAwesomeIcon icon={faCode} />
                <h3 className="about_title">5670</h3>
                <span className="about_subtitle">Cup of coffe</span>
            </div>
        </div>

        <div className="about_box">
        <FontAwesomeIcon icon={faCode} />
            <div>
                <h3 className="about_title">427</h3>
                <span className="about_subtitle">satisfaded custumers</span>
            </div>
        </div>


    </div>
  )
}

export default AboutBox
