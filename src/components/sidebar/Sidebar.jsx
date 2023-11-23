import { faHouse, faUser,faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../sidebar/Sdebar.scss'


const Sidebar = () => {
  const artur = '<Artur />'
  return (
    <aside>
        <nav className="nav">
        <div className='nav_name'>{artur}</div>
          <div className="nav_menu">
            
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

    </aside>
  )
}

export default Sidebar


