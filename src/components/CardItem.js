import React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import '../styles/ServicesPreview.css'
import Image from "../components/Image"

function CardItem(props) {
    return (
        <>
            <li className="card-item">
                <AnchorLink className='card-item-link' title={props.label} to={props.path}>
                    <figure className="card-item-pic-wrapper">
                        <Image src={props.src} alt="PLACEHOLDER IMAGE" objectFit="cover" className="card-item-image"/>
                    </figure>
                    <div className="card-info">
                        <h5 className='card-item-text'>{props.text}</h5>
                    </div>
                </AnchorLink>
            </li>
        </>
    )
}

export default CardItem
