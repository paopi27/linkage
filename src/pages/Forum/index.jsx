import React from 'react'
import './styles.css'

import { NavLink } from 'react-router-dom'

import { Row, Col, Container, Button, InputGroup, Form, Card, Tab, Tabs } from 'react-bootstrap';

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

            <Button type="submit" className="ask-btn" variant="secondary">Ask a Question</Button>{' '}

            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
                className=" search-bar"
              />
              <Button variant="outline-secondary" id="button-addon2" className="search-icon">
                S
              </Button>
            </InputGroup>
          </div>


          <Container className="question-list">
            <Col>
              {Array.from({ length: 4 }).map((_, idx) => (
                <Row key={idx} className="post-box">
                  <Card style={{ width: '50rem' }} className="post-box">
                    <Card.Body>
                      <Card.Title>Author Name</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Row>
              ))}
            </Col>
          </Container>
        </Container>

      </div>
      <Footer />
    </>
  )
}

export default Forum