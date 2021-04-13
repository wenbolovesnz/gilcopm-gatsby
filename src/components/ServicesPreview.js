import React from 'react'
import '../styles/ServicesPreview.css'
import CardItem from './CardItem'

//import CardImage1 from '../card-image1.jpg'
//import CardImage2 from 'card-image2.jpg'
//import CardImage3 from 'card-image3.jpg'
//import CardImage4 from 'card-image4.jpg'

import { AnchorLink } from "gatsby-plugin-anchor-links";

function Services() {
    return (
        <>
            <div className="services" id='services-page'>
                <h1>Our Services</h1>
                <div className="services-container">
                    <div className="services-wrapper">
                        <ul className="services-items">
                            <CardItem 
                            src='card-image1.jpg'
                            text='Full Property Management'
                            label='Full Property Management'
                            path='/owners#full-property-management'
                            />
                            <CardItem 
                            src="card-image2.jpg"
                            text='Letting Service - Casual'
                            label='Letting Service'
                            path='/owners#letting-service'
                            />
                            <CardItem 
                            src="card-image3.jpg"
                            text='Inspection Service - Casual'
                            label='Inspection Service'
                            path='/owners#inspection-service'
                            />
                            <CardItem 
                            src="card-image4.jpg"
                            text='Healthy Home Inspection - Casual'
                            label='Healthy Home Inspection'
                            path='/owners#healthy-home-inspection'
                            />
                        </ul>
                    </div> 
                    
                </div>
            </div>
        </>
    )
}

export default Services
