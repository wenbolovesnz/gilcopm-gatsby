import React, { Children } from 'react'
import '../styles/button.css'
const STYLES = ['btn--primary', 'btn--secondary', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large', 'btn--wide'];

export const Button = ({
    children,
    buttonSize,
    buttonStyle,
    onClick, 
    type
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    
    

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}
