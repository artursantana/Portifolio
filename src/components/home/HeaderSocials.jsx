

import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const HeaderSocials = () => {
  return (
    <div className="home_socials">
        <a href="#" className="home_social-link" target="_black">
        <FontAwesomeIcon icon={faGithub} />
        </a>
        
        <a href="#" className="home_social-link" target="_black">
        <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="#" className="home_social-link" target="_black">
        <FontAwesomeIcon icon={faInstagram} />
        </a>

        
    </div>
  )
}

export default HeaderSocials
