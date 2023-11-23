import React from 'react'
import './styles.css'

import { NavLink } from 'react-router-dom'

import { Row, Col, Container, Button, InputGroup, Form, Tab, Tabs } from 'react-bootstrap';

import { AiFillCloseCircle, AiOutlineMenu, AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react"; /* for the javascript of sidebar */

import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';


const Forum = () => {

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

        <Col className="sidebar-categories">
          <NavLink to={'/'}> Home </NavLink>
          <div className="question">
            <NavLink to={'/lesson'}> Question</NavLink>
          </div>
          <Row className="sub-categories">
            <NavLink to={'/public'}> Tags</NavLink>
          </Row>
          <Row className="sub-categories">
            <NavLink to={'/private'}> Users</NavLink>
          </Row>
        </Col>
      </div >
      <button className="openbtn" onClick={openNav}><AiOutlineMenu /></button>

      <Container className="forum-header">

      </Container>


      <div id="main" style={{ marginLeft: mainMargin }} className="main">
        <Container className="forum-box">
          <div className="search-ask">

            <Button variant="link" className="ask-button">Ask a Question</Button>

            <InputGroup className="mb-3 search-bar">
              <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2" className="search-icon">
                S
              </Button>
            </InputGroup>
          </div>
          <div className="tags">
            <NavLink to={'/'} className={location.pathname === '/' ? 'active' : ''}>
              Tag 1
            </NavLink>
            <NavLink to={'/room'} className={location.pathname === '/room' ? 'active' : ''}>
              Tag 2
            </NavLink>
            <NavLink to={'/lesson'} className={location.pathname === '/lesson' ? 'active' : ''}>
              Tag 3
            </NavLink>
            <NavLink to={'/forum'} className={location.pathname === '/forum' ? 'active' : ''}>
              Tag 4
            </NavLink>
            <NavLink to={'/about'} className={location.pathname === '/about' ? 'active' : ''}>
              Tag 5
            </NavLink>
          </div>

          <Container className="question-list">
            <Col>
              <Row className="post-box">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              </Row>
              <Row className="post-box">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              </Row>
              <Row className="post-box">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              </Row>
            </Col>
          </Container>
        </Container>

      </div>
      <Footer />
    </>
  )
}

export default Forum