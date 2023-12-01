import { faHouse, faUser,faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../sidebar/Sdebar.scss'


const Sidebar = () => {
  const artur = '<Artur />'

    const acitveNavbar = () => {
      const aside = document.getElementById('aside')
      const rotateArrows = document.getElementById('rotate')
      aside.classList.toggle('active_nav_bar')

      rotateArrows.classList.toggle('rotArrow')
    }

  return (
    <aside id='aside'>
      <i className="fa-solid fa-angles-down nav_arrow" id='rotate' onClick={acitveNavbar}></i>
        <nav className="nav">
        <div className='nav_name'>{artur}</div>
          <div className="nav_menu">
            
            <ul className="nav_list">
              <li className="nav_item">
                <a href="#home" className="nav_link">Home
                  <FontAwesomeIcon className='icon-home' icon={faHouse} />
                </a>
              </li>
              <li className="nav_item">
                <a href="#about" className="nav_link">Contact
                <FontAwesomeIcon className='icon-user' icon={faUser} />
                </a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav_link"> Projects <FontAwesomeIcon icon={faBriefcase} /></a>
              </li>
            </ul>
          </div>
        </nav>

    </aside>
  )
}

export default Sidebar


