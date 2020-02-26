import React from 'react';

import './CustomButton.styles.scss'

const CustomButton = ({ children, isGoogleSigneIn, ...otherProps }) => {
    return (
        <button className={ `${isGoogleSigneIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    );
}
 
export default CustomButton;