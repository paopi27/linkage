import './Navigation.css'

import { NavLink, useLocation } from 'react-router-dom' /* for navigation */
import { AiOutlineHome, AiOutlineRead, AiOutlineMessage, AiOutlineSmile, AiOutlineUser } from "react-icons/ai";

import { Navbar, Container } from 'react-bootstrap';

function Navigation() {

  const location = useLocation();

  return (
    <>
      <Container>
        {/* For the Logo and Logo name */}
        {/* <div className="logo">
          <NavLink to={'/'}>
            <Navbar.Brand href="#home">Linkag∃</Navbar.Brand>
          </NavLink>
        </div> */}
        <div className="navigation">
          <NavLink to={'/'} className={location.pathname === '/' ? 'active' : ''}>
            <AiOutlineHome /> Home
          </NavLink>
          <NavLink to={'/room'} className={location.pathname === '/room' ? 'active' : ''}>
            <AiOutlineMessage /> Room
          </NavLink>
          <NavLink to={'/lesson'} className={location.pathname === '/lesson' ? 'active' : ''}>
            <AiOutlineRead /> Lesson
          </NavLink>
          <NavLink to={'/about'} className={location.pathname === '/about' ? 'active' : ''}>
            <AiOutlineSmile /> About
          </NavLink>
          <NavLink to={'/account'} className={location.pathname === '/account' ? 'active' : ''}>
            <AiOutlineUser /> Account
          </NavLink>
        </div>
      </Container>
    </>
  )
}

export default Navigation