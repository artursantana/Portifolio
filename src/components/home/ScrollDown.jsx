
import { Link } from 'react-scroll';

const ScrollDown = () => {
  return (
    <div className="scroll_down">
      
      <Link to='About' smooth={true} offset={0} duration={1000}>

        <span className="home_scroll-name"></span>
        <span className="mouse">
        <span className="wheel"></span>
        </span>
        
      </Link>

    
    </div>
  )
}

export default ScrollDown
