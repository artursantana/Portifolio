import { faHouse, faUser, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import '../sidebar/Sdebar.scss';

import Home from '../home/Home';
import Projects from '../Projects/Projects';
import About from '../about/About';

const Sidebar = () => {
  const artur = '<Artur />';

  const activeNavbar = () => {
    const aside = document.getElementById('aside');
    const rotateArrows = document.getElementById('rotate');
    aside.classList.toggle('active_nav_bar');
    rotateArrows.classList.toggle('rotArrow');
  };

  return (
    <div>
      <aside id='aside'>
        <i className="fa-solid fa-angles-down nav_arrow" id='rotate' onClick={activeNavbar}></i>
        <nav className="nav">
          <div className='nav_name'>{artur}</div>
          <div className="nav_menu">
            <ul className="nav_list">
              <li className="nav_item">
                <Link to='Home' smooth={true} offset={0} duration={1000} className="nav_link">
                  Home
                  <FontAwesomeIcon className='icon-home' icon={faHouse} />
                </Link>
              </li>

              <li className="nav_item">
                <Link to='About' smooth={true} offset={0} duration={1000} className="nav_link">
                  AboutMe
                  <FontAwesomeIcon className='icon-user' icon={faUser} />
                </Link>
              </li>

              <li className="nav_item">
                <Link to='Project' smooth={true} offset={-50} duration={1000} className="nav_link">
                  Projects
                  <FontAwesomeIcon icon={faBriefcase} />
                </Link>
              </li>

            </ul>
          </div>
        </nav>
      </aside>
      <Home />
      <About />
      <Projects />
    </div>
  );
};

export default Sidebar;
