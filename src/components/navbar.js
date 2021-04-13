import React, {useState, useEffect} from 'react'
import { Link } from "gatsby"
import '../styles/navbar.css'
import logo from '../images/GILCO-Landscape-transparent-logo wo shadow.png';

import { Link as Link2 } from 'gatsby-react-router-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCoffee,
  faTimes,
  faBars,
  faAddressBook,
  faAirFreshener,
  faAmbulance,
  faAtom,
  faBus,
  faCoins,
  faDice,
} from '@fortawesome/free-solid-svg-icons'
//import "./css/NavBar.css"

function NavBar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar' id='home-page'>
                <div className="navbar-container">

                    <Link to='/' className='navbar-logo'>
                        <img className='logo' src={logo}
                        />
                    </Link>

                    <div className="menu-icon" onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faTimes : faBars} />
                        
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/owners' className='nav-links' onClick={closeMobileMenu}>
                                Owners
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/tenants' className='nav-links' onClick={closeMobileMenu}>
                                Tenants
                            </Link>
                        </li>
                    </ul>

                </div>
                
            </nav>
        </>
    )
}

export default NavBar
