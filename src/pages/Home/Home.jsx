import './Home.css'

import Navigation from '../../components/Navigation/Navigation'

import Footer from '../../components/Footer/Footer'

import randomPic1 from '../../assets/pictures/ELIB.png'
import randomPic2 from '../../assets/pictures/TREESUNSET.png'
import { useState, useEffect } from 'react';

import { NavLink }  from 'react-router-dom' /* for navigation */

import {AiOutlineFileSearch, AiOutlineRead, AiOutlineMessage } from "react-icons/ai";

function Home() {
  

  const [myIndex, setMyIndex] = useState(0);
    useEffect(() => {
    const carousel = () => {
      const x = document.getElementsByClassName('mySlides');
      for (let i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
      }
      setMyIndex((prevIndex) => (prevIndex >= x.length - 1 ? 0 : prevIndex + 1));
      x[myIndex].style.display = 'block';
    };
    const slideshowInterval = setInterval(carousel, 3000);
    return () => {
      clearInterval(slideshowInterval);
    };
  }, [myIndex]);

    return (
      <>
      <Navigation/>

        <main>
<section>

<div className='image-container'>
  <img className='mySlides' src={randomPic1} style={{ width: '100%', maxWidth: '100%', margin: 'auto', display: 'block' }} />
  <img className='mySlides' src={randomPic2} style={{ width: '100%', maxWidth: '100%', margin: 'auto', display: 'block' }} />
</div>

      <br />
      <br />
        
        <section className='intro'>

            <div className='txt-intro'>

              <h1>Linkag∃</h1>
              <h4>Navigating the Real Analysis Frontier 
                  - A Collaborative Learning Hub</h4>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Nihil quidem cupiditate ipsam. Quisquam officiis aut, 
                    debitis incidunt, deserunt atque quo rerum cumque,
                    vitae soluta nihil ducimus! 
                    Molestias enim dignissimos assumenda!
                  </p>
                  <a> <NavLink to={'/readmore'}> <h1 className='readmore'> Read More <AiOutlineFileSearch/> </h1> </NavLink> </a>
            </div>
       </section>
</section>

      

      <div className="rooms-container">
  <div className="room-objects">
    <img src={randomPic1} alt="Room Image 1" />
    <div className="room-content">
      <a><NavLink to={'/lesson'} ><AiOutlineRead /> Enter Lesson</NavLink></a>
      <p>Your first room description goes here.</p>
    </div>
  </div>

  <div className="room-objects">
    <img src={randomPic2} alt="Room Image 2" />
    <div className="room-content">
      <a><NavLink to={'/room'}> <AiOutlineMessage /> Enter Room</NavLink></a>
      <p>Your second room description goes here.</p>
    </div>
  </div>
  </div>
      
</main>


<Footer/>
      </>
    )
  }
  
  export default Home