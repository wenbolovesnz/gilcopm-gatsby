import React from 'react'
import '../styles/contact.css'
import Profile from '../images/Leonard.jpg'
import Image from '../components/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
function Contact() {

    return (
        <>
            <div className="contact-wrapper" id='contacts-page'>
                <div className="tint">

                
                <h1>Get in touch</h1>
                <div className="contact-content">
                <div className="contact-about">

                    <div className="contact-details">
                            <div>
                            <FontAwesomeIcon className='contact-icon' icon={faEnvelope} /><a className='contact-link' href='mailto:leonard@gilcopm.co.nz'>leonard@gilcopm.co.nz</a>
                            </div>
                            <div>
                            <FontAwesomeIcon className='contact-icon' icon={faPhone} /><a className='contact-link' href='tel:+64-021-833-856'>021 833 856</a>
                            </div>
                    </div>

                    <div className="profile-wrapper">
                        <Image src={Profile} className='profile' />
                        <p>Leonard Gildenhuys</p>
                    </div>
                </div>
            </div>

                </div>
            </div>
        </>
    )
}

export default Contact
