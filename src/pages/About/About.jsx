import './About.css'

import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'

import tl from '../../assets/pictures/developers/emmerickTL.png'
import atl from '../../assets/pictures/developers/johnpioloATL.png'
import dev from '../../assets/pictures/developers/bradleyDEV.png'
import dev7 from '../../assets/pictures/developers/SCHOOLID.png'

function About() {
  

    return (
      <>
      <Navigation/>


        <div className="about-section">
        <h1>About Us Page</h1>
        <br />
  <p>The Group 3</p>
  <br />
  <p>Lorem ipsum dolor sit,
     amet consectetur adipisicing elit. 
     Voluptatum et error quos amet, 
     dolores unde adipisci odio est voluptates 
     sequi accusantium, veniam ducimus officia. 
     Inventore at pariatur fuga quod. Odit!</p>
        </div>
 
      <br />
    <h2 className="ourteam" style={{textAlign: "center"}}>Our Team</h2>
      <br />

    <div className="row">
      <div className="column">
        <div className="card">
          <img src={tl} alt="emmerick" style={{width: "100%"}} />
          <div className="box">
            <h2>Emmerick Julian</h2>
            <p className="title">Team Leader</p>
            <p>Lorem ipsum dolor sit,
     amet consectetur adipisicing elit. 
     Voluptatum et error quos amet, 
     dolores unde adipisci odio est voluptates 
     sequi accusantium, veniam ducimus officia. 
     Inventore at pariatur fuga quod. Odit!</p>
     <p>Email: emmerick@gmail.com</p>
     <button className="button">Contact</button>
          </div>
        </div>
      </div>


    <div className="column">
        <div className="card">
          <img src={atl} alt="piolo" style={{width: "100%"}} />
          <div className="box">
            <h2>John Piolo Pascual</h2>
            <p className="title">Assistant Team Leader</p>
            <p>Lorem ipsum dolor sit,
     amet consectetur adipisicing elit. 
     Voluptatum et error quos amet, 
     dolores unde adipisci odio est voluptates 
     sequi accusantium, veniam ducimus officia. 
     Inventore at pariatur fuga quod. Odit!</p>
     <p>Email: johnpiolo@gmail.com</p>
     <button className="button">Contact</button>
          </div>
        </div>
      </div>


    <div className="column">
        <div className="card">
          <img src={dev} alt="bradley" style={{width: "100%"}} />
          <div className="box">
            <h2>Bradley Naval</h2>
            <p className="title">Designer/ Software Developer</p>
            <p>Lorem ipsum dolor sit,
     amet consectetur adipisicing elit. 
     Voluptatum et error quos amet, 
     dolores unde adipisci odio est voluptates 
     sequi accusantium, veniam ducimus officia. 
     Inventore at pariatur fuga quod. Odit!</p>
     <p>Email: bradley@gmail.com</p>
     <button className="button">Contact</button>
          </div>
        </div>
      </div>


    <div className="column">
        <div className="card">
          <img src={dev7} alt="paolo" style={{width: "100%"}} />
          <div className="box">
            <h2>Paolo Sambilay</h2>
            <p className="title">Software Developer</p>
            <p>Lorem ipsum dolor sit,
     amet consectetur adipisicing elit. 
     Voluptatum et error quos amet, 
     dolores unde adipisci odio est voluptates 
     sequi accusantium, veniam ducimus officia. 
     Inventore at pariatur fuga quod. Odit!</p>
     <p>Email: paolo@gmail.com</p>
     <button className="button">Contact</button>
          </div>
        </div>
      </div>

    </div>







    <Footer/>
      </>
    )
  }
  
  export default About