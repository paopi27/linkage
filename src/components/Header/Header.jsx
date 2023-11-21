import './Header.css'

import { NavLink } from 'react-router-dom' /* for navigation */

function Header() {


  return (
    <>
      <div className='header'>

        <NavLink to={'/'}><a>Linkag∃</a></NavLink>

      </div>
    </>
  )
}

export default Header