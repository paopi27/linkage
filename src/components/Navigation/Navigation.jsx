import './Navigation.css'

import { NavLink, useLocation } from 'react-router-dom' /* for navigation */

import { AiOutlineHome, AiOutlineRead, AiOutlineMessage, AiOutlineSmile, AiOutlineUser } from "react-icons/ai";

import { useState } from 'react';

/*
import { Navbar, Container } from 'react-bootstrap';
*/

function Navigation() {

  const location = useLocation(); /* for navigation (active) */


  /* for hamburger menu */
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>

      <div className="nav-container">
        
        {/* For the Logo and Logo name */}
        {/* <div className="logo">
          <NavLink to={'/'}>
            <Navbar.Brand href="#home">Linkag∃</Navbar.Brand>
          </NavLink>
        </div> */}


      <div className="hamburger-icon" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </div>


          <div className={`navigation ${isMenuOpen ? 'active' : ''}`}>


          <NavLink to={'/'} className={location.pathname === '/' ? 'active' : ''}>
            <AiOutlineHome /> Home
          </NavLink>
          <NavLink to={'/room'} className={location.pathname === '/room' ? 'active' : ''}>
            <AiOutlineMessage /> Room
          </NavLink>
          <NavLink to={'/lesson'} className={location.pathname === '/lesson' ? 'active' : ''}>
            <AiOutlineRead /> Lesson
          </NavLink>
          <NavLink to={'/forum'} className={location.pathname === '/forum' ? 'active' : ''}>
            <AiOutlineRead /> Forum
          </NavLink>
          <NavLink to={'/about'} className={location.pathname === '/about' ? 'active' : ''}>
            <AiOutlineSmile /> About
          </NavLink>
          <NavLink to={'/account'} className={location.pathname === '/account' ? 'active' : ''}>
            <AiOutlineUser /> Account
          </NavLink>
        </div>
      </div>

    </>
  )
}

export default Navigation