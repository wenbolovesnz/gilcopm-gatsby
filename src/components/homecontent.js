import React from 'react'
import '../styles/content.css'
import {Button} from '../components/button'
import { Link } from 'gatsby'
import Image from "../components/Image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnchorLink } from "gatsby-plugin-anchor-links";

import {
  faCoffee,
  faTimes,
  faBars,
  faPhone,
  faEnvelope,
  faAddressBook,
  faAirFreshener,
  faAmbulance,
  faAtom,
  faBus,
  faCoins,
  faDice,
} from '@fortawesome/free-solid-svg-icons'
function Content() {
    return (
        <>
        
            <div className='image-container'>
            <Image src="Akl bridge.jpg" objectFit='cover' className='background-photo'/>
                <div className="image-tint">
                    <div className="image-text image-section">
                        <h1>We take the hassle out of property management</h1>
                    </div>
                    <div className="image-buttons image-section">
                        
                        <div className="btns">
                            <Link to='/appraisalform'>
                                <Button
                                    className='btns'
                                    buttonStyle='btn--primary'
                                    buttonSize='btn--large'
                                    >
                                    FREE Rental Appraisal
                                </Button>
                            </Link>
                            <AnchorLink className="stripped" to='/#contact' title="Get in touch!" stripHash>
                                <Button
                                    className='btns'
                                    buttonStyle='btn--secondary'
                                    buttonSize='btn--large'
                                    >
                                    Get in touch
                                </Button>
                            </AnchorLink>
                        </div>
                        <div className="contact-info">
                        <div><FontAwesomeIcon className='contact-icon' icon={faEnvelope} /><a className='contact-link' href='mailto:leonard@gilcopm.co.nz'>leonard@gilcopm.co.nz</a></div>
                        <div><FontAwesomeIcon className='contact-icon' icon={faPhone} /><a className='contact-link' href='tel:+64-021-833-856'>021 833 856</a></div>
                        </div>
                    
                    </div>
                </div>
                                   
            </div>       
        </>
    )
}

export default Content
