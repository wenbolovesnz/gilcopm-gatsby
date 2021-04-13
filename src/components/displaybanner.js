import React from 'react'
import '../styles/displaybanner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCoffee,
  faTimes,
  faCheckCircle,
  faBars,
  faAddressBook,
  faAirFreshener,
  faAmbulance,
  faAtom,
  faBus,
  faCoins,
  faDice,
} from '@fortawesome/free-solid-svg-icons'

function WhyUseUseContent() {
    return (
        <>
        <div className="wuu-wrapper">
            <div className="why-use-us-container">
                <div className="reasons">
                    <div className='reason'>
                    <FontAwesomeIcon icon={faCheckCircle} />
                        <h3>No fixed contracts</h3>
                    </div>
                    <div className='reason'>
                    <FontAwesomeIcon icon={faCheckCircle} />
                        <h3>Competitively priced</h3>
                    </div>
                    <div className='reason'>
                    <FontAwesomeIcon icon={faCheckCircle} />
                        <h3>Dedicated account manager</h3>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default WhyUseUseContent
