import './Home.css'

import Navigation from '../../components/Navigation/Navigation'

import Footer from '../../components/Footer/Footer'

import coverPic from '../../assets/pictures/home-cover.jpg'
import randomPic1 from '../../assets/pictures/stack-book.jpg'
import randomPic2 from '../../assets/pictures/room-cover.jpg'
import { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom' /* for navigation */
import { Button, Card } from 'react-bootstrap'
import { AiOutlineFileSearch, AiOutlineRead, AiOutlineMessage } from "react-icons/ai";

function Home() {


  // const [myIndex, setMyIndex] = useState(0);
  // useEffect(() => {
  //   const carousel = () => {
  //     const x = document.getElementsByClassName('mySlides');
  //     for (let i = 0; i < x.length; i++) {
  //       x[i].style.display = 'none';
  //     }
  //     setMyIndex((prevIndex) => (prevIndex >= x.length - 1 ? 0 : prevIndex + 1));
  //     x[myIndex].style.display = 'block';
  //   };
  //   const slideshowInterval = setInterval(carousel, 3000);
  //   return () => {
  //     clearInterval(slideshowInterval);
  //   };
  // }, [myIndex]);

  return (
    <>
      <main>
        <Navigation />
        <div className='image-container' style={{
          backgroundImage: `url(${coverPic})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
          margin: 'auto',
          opacity: 0.8
        }}>
          <Card className="intro-container">
            <Card.Body>
              <Card.Title className="intro-title">
                Linkag∃ Navigating the Real Analysis Frontier
                - A Collaborative Learning Hub
              </Card.Title>
              <Card.Text className="intro-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nihil quidem cupiditate ipsam. Quisquam officiis aut,
                debitis incidunt, deserunt atque quo rerum cumque,
                vitae soluta nihil ducimus!
                Molestias enim dignissimos assumenda!
              </Card.Text>
              <Button className="intro-btn">Read More</Button>
            </Card.Body>
          </Card>

          {/* <div className="intro-container">
            <div className='txt-intro'>
              <div className="intro-title">
                <h1>Linkag∃</h1>
                <h4>Navigating the Real Analysis Frontier
                  - A Collaborative Learning Hub</h4>
              </div>

              <p className='intro-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nihil quidem cupiditate ipsam. Quisquam officiis aut,
                debitis incidunt, deserunt atque quo rerum cumque,
                vitae soluta nihil ducimus!
                Molestias enim dignissimos assumenda!
              </p>

              <div className="intro-btn">
                <Button variant="light" size="lg">
                  <NavLink to={'/readmore'} className='readmore'>Read More <AiOutlineFileSearch /></NavLink>
                </Button>{' '}
              </div>
            </div>
          </div> */}

          {/* <img className='mySlides' src={coverPic} style={{ width: '100%', maxWidth: '100%', margin: 'auto', display: 'block' }} /> */}
        </div >

        <div className="rooms-container">
          <div className="room-objects">
            <img src={randomPic1} alt="Room Image 1" />
            <div className="room-content">
              <a><NavLink to={'/lesson'} ><AiOutlineRead /> Enter Lesson</NavLink></a>
              <p>Explore the Real Analysis Library</p>
            </div>
          </div>

          <div className="room-objects">
            <img src={randomPic2} alt="Room Image 2" />
            <div className="room-content">
              <a><NavLink to={'/room'}> <AiOutlineMessage /> Enter Room</NavLink></a>
              <p>Discourse with your Friends, Strangers, and even AI</p>
            </div>
          </div>
        </div>

      </main >


      <Footer />
    </>
  )
}

export default Home