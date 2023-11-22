import { faHouse, faUser,faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../sidebar/Sdebar.scss'
import Logo from '../../assets/logo.svg'


const Sidebar = () => {
  return (
    <aside>
        <a href="home" className='nav_logo'>
          <img src={Logo} alt="logo" />
        </a>
      
        <nav className="nav">
          <div className="nav_manu">
            <ul className="nav_list">
              <li className="nav_item">
                <a href="#home" className="nav_link">
                  <FontAwesomeIcon className='icon-home' icon={faHouse} />
                </a>
              </li>
              <li className="nav_item">
                <a href="#about" className="nav_link">
                <FontAwesomeIcon className='icon-user' icon={faUser} />
                </a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav_link"> <FontAwesomeIcon icon={faBriefcase} /></a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav_footer">
          <span className='copyright'>&copy; 2023 - 2024.</span>
        </div>

    </aside>
  )
}

export default Sidebar


