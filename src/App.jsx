

/* import Navigation from './components/Navigation/Navigation' */
import Header from './components/Header/Header'


import Home from './pages/Home/Home'
import About from './pages/About/About'
import Account from './pages/Account/Account'

import Room from './pages/Room/Room'
import RoomSection from './pages/Room/RoomSection/RoomSection'

import Lesson from './pages/Lesson/Lesson'


/*import NotFound from './pages/NotFound/NotFound'*/
import { Route, Routes } from 'react-router-dom' /* for navigation */
import Forum from './pages/Forum'

function App() {


  return (

    <>

      <Header />

      {/*} <Navigation /> */}

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/room" element={<Room />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/roomsection" element={<RoomSection />} />






        <Route path="*" element={<Home />} />
      </Routes>



    </>
  )
}

export default App
