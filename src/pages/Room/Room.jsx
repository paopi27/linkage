import './Room.css'

import { NavLink } from 'react-router-dom'

import { AiFillCloseCircle, AiOutlineMenu, AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react"; /* for the javascript of sidebar */

import Navigation from '../../components/Navigation/Navigation';

function Room() {


  const [sidebarWidth, setSidebarWidth] = useState('0');
  const [mainMargin, setMainMargin] = useState('0');

  const openNav = () => {
    setSidebarWidth('250px');
    setMainMargin('250px');
  };

  const closeNav = () => {
    setSidebarWidth('0');
    setMainMargin('0');
  };


  return (
    <>
      <Navigation />

      <div id='mySidebar' className="sidebar" style={{ width: sidebarWidth }}>

        <a href="#" className="closebtn" onClick={closeNav}> <AiFillCloseCircle /> </a>

        <a>
          <NavLink to={'/'}> Home </NavLink>
        </a>

        <a>
          <NavLink to={'/lesson'}> Lesson</NavLink>
        </a>

        <a href=""></a>

        <a>
          <NavLink to={'/public'}> Public</NavLink>
        </a>

        <a>
          <NavLink to={'/private'}> Private </NavLink>
        </a>

      </div>

      <br />
      <div id="main" style={{ marginLeft: mainMargin }}>
        <button className="openbtn" onClick={openNav}><AiOutlineMenu /></button>
        <br />
        <br />

        <div className='animate-header'>
          <div className='txt-room'>
            <h1>WELCOME TO THE CHAT ROOM</h1>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsa, veniam! Nihil aliquid, deleniti amet consequatur
              architecto autem a mollitia ex non placeat laborum
              facilis omnis, doloribus ipsa molestias eaque quam?
            </p>
          </div>
        </div>

        <br />

        <div className="rooms">
          <NavLink to={'/roomsection'}>Enter Room</NavLink>
          <NavLink to={'/roomsection'}>Enter Room</NavLink>
          <NavLink to={'/roomsection'}>Enter Room</NavLink>
          <NavLink to={'/roomsection'}>Enter Room</NavLink>
          <NavLink to={'/roomsection'} className="make-room-link">
            Make a Room <AiOutlinePlusCircle />
          </NavLink>
        </div>

      </div>

    </>
  )
}

export default Room