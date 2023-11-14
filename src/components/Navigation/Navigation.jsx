import './Navigation.css'

import { NavLink, useLocation }  from 'react-router-dom' /* for navigation */

import { AiOutlineHome, AiOutlineRead, AiOutlineMessage, AiOutlineSmile, AiOutlineUser} from "react-icons/ai";

function Navigation() {
  
  const location = useLocation();

    return (
      <>
      <div className='container'>
       
      <div className='topnav-top'>
        <a>
          <NavLink to={'/'} className={location.pathname === '/' ? 'active' : ''}>
            <AiOutlineHome /> Home
          </NavLink>
        </a>
        <a>
          <NavLink to={'/room'} className={location.pathname === '/room' ? 'active' : ''}>
            <AiOutlineMessage /> Room
          </NavLink>
        </a>
        <a>
          <NavLink to={'/lesson'} className={location.pathname === '/lesson' ? 'active' : ''}>
            <AiOutlineRead /> Lesson
          </NavLink>
        </a>
        <a>
          <NavLink to={'/about'} className={location.pathname === '/about' ? 'active' : ''}>
            <AiOutlineSmile /> About
          </NavLink>
        </a>
        <a>
          <NavLink to={'/account'} className={location.pathname === '/account' ? 'active' : ''}>
            <AiOutlineUser /> Account
          </NavLink>
        </a>
      </div>
    </div>
      </>
    )
  }
  
  export default Navigation